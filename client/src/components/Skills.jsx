import { useEffect, useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <h2>My Skills</h2>

      <div className="skills-container">
        {skills.map((skill) => (
          <div key={skill._id} className="skill-card">
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;