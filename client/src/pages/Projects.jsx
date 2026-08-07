import { useEffect, useState } from "react";
import "./Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://portfolio-website-kavya.onrender.com/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="project-list">
        {projects.map((project) => (
          <div key={project._id} className="project-card">
            <h3>{project.title}</h3>
            <p>
              <strong>Technology:</strong> {project.technology}
            </p>

            {project.description && <p>{project.description}</p>}

            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            )}

            {project.githubLink && (
              <>
                <br />
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;