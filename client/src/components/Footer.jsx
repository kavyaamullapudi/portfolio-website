import { motion } from "framer-motion";
import "./Footer.css";


function Footer() {

  return (

    <motion.footer

      className="footer"

      initial={{ opacity: 0 }}

      whileInView={{ opacity: 1 }}

      transition={{ duration: 0.8 }}

    >


      <p>
        © 2026 Kavya. All Rights Reserved.
      </p>


      <div className="footer-links">


        <a
          href="https://github.com/kavyaamullapudi"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>



        <a
          href="https://www.linkedin.com/in/kavya-mullapudi-8588b6380"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>


      </div>


    </motion.footer>

  );

}


export default Footer;