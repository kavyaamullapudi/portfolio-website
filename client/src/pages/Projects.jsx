import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Projects.css";


function Projects() {

  const [projects, setProjects] = useState([]);


  useEffect(() => {

    fetch("https://portfolio-website-kavya.onrender.com/projects")
      .then((res) => res.json())
      .then((data) => {
        console.log("Projects:", data);
        setProjects(data);
      })
      .catch((error) => console.error("Error:", error));

  }, []);



  return (

    <section className="projects">

      <h1>My Projects</h1>


      <div className="projects-container">

        {projects.map((project) => (

          <motion.div

            className="project-card"

            key={project._id}

            initial={{ opacity: 0, y: 50 }}

            whileInView={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.6 }}

            whileHover={{ scale: 1.05 }}

          >


            <h3>
              {project.title}
            </h3>



            <p>
              <strong>Technology:</strong> {project.technology}
            </p>



            <p>
              {project.description || "Project description coming soon."}
            </p>



            <div className="project-buttons">


              {project.githubLink && (

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

              )}



              {project.liveLink && (

                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>

              )}


            </div>


          </motion.div>

        ))}


      </div>


    </section>

  );
}


export default Projects;