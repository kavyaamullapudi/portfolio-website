import { motion } from "framer-motion";
import "./About.css";


function About() {

  return (

    <section className="about">


      <motion.div

        className="about-content"

        initial={{ opacity: 0, y: 50 }}

        animate={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.8 }}

      >


        <h1>
          About Me
        </h1>



        <p>
          I am a Computer Science and Engineering student interested in
          software development and web technologies. I enjoy learning new
          technologies and building practical projects.
        </p>



        <h3>
          Education
        </h3>


        <p>
          Bachelor of Technology in Computer Science and Engineering
        </p>



        <h3>
          My Goal
        </h3>


        <p>
          My goal is to build a strong career in software development and
          continuously improve my programming and problem-solving skills.
        </p>



        <h3>
          Technologies
        </h3>


        <p>
          Java • Python • JavaScript • React.js • Node.js • Express.js • MongoDB
        </p>



      </motion.div>


    </section>

  );

}


export default About;