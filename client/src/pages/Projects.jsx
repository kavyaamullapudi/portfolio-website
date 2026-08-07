import { useEffect, useState } from "react";

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
    <section className="projects-section">
      <h2>My Projects</h2>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project._id}>
            <h3>{project.title}</h3>

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
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;