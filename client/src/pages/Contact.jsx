import { useState } from "react";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Contact.css";


function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill all fields");
      return;
    }


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(formData.email)) {
      setStatus("Please enter a valid email");
      return;
    }


    setLoading(true);


    try {

      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });


      const data = await response.json();

      setStatus(data.message);


      setFormData({
        name: "",
        email: "",
        message: ""
      });


    } catch (error) {

      console.log(error);
      setStatus("Something went wrong");

    } finally {

      setLoading(false);

    }

  };


  return (

    <motion.div
      className="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >


      <h1>Contact Me</h1>


      <form onSubmit={handleSubmit}>


        <div className="input-box">

          <FaUser />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />

        </div>



        <div className="input-box">

          <FaEnvelope />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />

        </div>




        <div className="input-box">

          <FaCommentDots />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

        </div>



        <button type="submit" disabled={loading}>

          {loading ? "Sending..." : "Send Message"}

        </button>



        <p className="status">
          {status}
        </p>


      </form>


    </motion.div>

  );
}


export default Contact;