import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Skill from "./models/Skill.js";
import Contact from "./models/Contact.js";
// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

/* ===========================
   Project Schema & Model
=========================== */

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    technology: { type: String, required: true },
    description: String,
    liveLink: String,
    githubLink: String,
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

/* ===========================
   Home Route
=========================== */

app.get("/", (req, res) => {
  res.send("🚀 Portfolio Backend is Running");
});

/* ===========================
   Projects Routes
=========================== */

// Get all projects
app.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching projects",
      error: err.message,
    });
  }
});

// Seed projects
app.get("/projects/seed", async (req, res) => {
  try {
    await Project.deleteMany({});

    const seedProjects = [
      {
        title: "Portfolio Website",
        technology: "React.js",
      },
      {
        title: "Fake News Detection",
        technology: "Python",
      },
    ];

    const createdProjects = await Project.insertMany(seedProjects);

    res.status(201).json({
      message: "Projects seeded successfully!",
      createdProjects,
    });
  } catch (err) {
    res.status(500).json({
      message: "Seeding failed",
      error: err.message,
    });
  }
});

/* ===========================
   Skills Routes
=========================== */

// Get all skills
app.get("/skills", async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching skills",
      error: err.message,
    });
  }
});

// Seed skills
app.get("/skills/seed", async (req, res) => {
  try {
    await Skill.deleteMany({});

    const skills = [
      { name: "HTML", level: "Advanced" },
      { name: "CSS", level: "Advanced" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "React.js", level: "Intermediate" },
      { name: "Node.js", level: "Beginner" },
      { name: "Express.js", level: "Beginner" },
      { name: "MongoDB", level: "Beginner" },
      { name: "Java", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
    ];

    const createdSkills = await Skill.insertMany(skills);

    res.status(201).json({
      message: "Skills seeded successfully!",
      createdSkills,
    });
  } catch (err) {
    res.status(500).json({
      message: "Seeding failed",
      error: err.message,
    });
  }
});
// ===========================
// Contact Route
// ===========================

app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    res.status(201).json({
      message: "Message sent successfully!",
      contact: newContact,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to send message",
      error: err.message,
    });
  }
});

/* ===========================
   MongoDB Connection
=========================== */

async function startServer() {
  try {
    console.log("Connecting to MongoDB...");

    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected Successfully");

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ MongoDB Connection Failed");
    console.error(err.message);
    process.exit(1);
  }
}

startServer();