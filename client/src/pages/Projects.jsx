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
    <section>
      <h2>My Projects</h2>

      <div>
        {projects.map((project) => (
          <div key={project._id}>
            <h3>{project.title}</h3>
            <p>{project.technology}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;