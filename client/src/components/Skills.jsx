import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Skills.css";


function Skills() {

  const [skills, setSkills] = useState([]);


  useEffect(() => {

    fetch("https://portfolio-website-kavya.onrender.com/skills")

      .then((res) => res.json())

      .then((data) => {

        console.log("Skills data:", data);

        setSkills(data);

      })

      .catch((error) => console.error("Error:", error));

  }, []);



  return (

    <section className="skills">


      <h1>
        My Skills
      </h1>



      <div className="skills-container">


        {skills.map((skill) => (


          <motion.div

            className="skill-card"

            key={skill._id}

            initial={{ opacity: 0, y: 40 }}

            whileInView={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.5 }}

            whileHover={{ scale: 1.08 }}

          >


            <h3>
              {skill.name}
            </h3>


            <p>
              {skill.level}
            </p>


          </motion.div>


        ))}


      </div>


    </section>

  );

}


export default Skills;