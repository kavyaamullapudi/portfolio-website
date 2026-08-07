import { useEffect, useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("https://portfolio-website-kavya.onrender.com/skills")
      .then((res) => res.json())
      .then((data) => {
        console.log("Skills:", data);
        setSkills(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <section className="skills-section">
      <h2>My Skills</h2>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-card" key={skill._id}>
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;