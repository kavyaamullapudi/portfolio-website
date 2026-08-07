import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newContact = new Contact(req.body);

    await newContact.save();

    res.status(201).json({
      message: "Message sent successfully!"
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
});

export default router;