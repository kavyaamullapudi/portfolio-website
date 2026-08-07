import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";


function Home() {

  return (

    <section className="home">

      <motion.div

        className="home-content"

        initial={{ opacity: 0, y: 50 }}

        animate={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.8 }}

      >

        <h1>
          Hello, I'm Kavya
        </h1>


        <h2>
          Computer Science & Engineering Student
        </h2>


        <p>
          I am passionate about software development,
          web technologies, and building practical projects.
        </p>



        <div className="home-buttons">


          <Link to="/projects">
            View Projects
          </Link>


          <Link to="/contact">
            Contact Me
          </Link>


        </div>


      </motion.div>


    </section>

  );
}


export default Home;