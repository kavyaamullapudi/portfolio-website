import "./About.css";

function About() {
  return (
    <section className="about">
      <h1>About Me</h1>

      <p>
        Hello! I'm <strong>Kavya Mullapudi</strong>, a Computer Science
        Engineering student passionate about Full Stack Web Development.
      </p>

      <p>
        I have knowledge of HTML, CSS, JavaScript, React.js, Node.js,
        Express.js, MongoDB, Java, and Python. I enjoy solving problems
        and building modern web applications.
      </p>

      <div className="about-details">
        <div className="card">
          <h3>🎓 Education</h3>
          <p>B.Tech - Computer Science Engineering</p>
        </div>

        <div className="card">
          <h3>💻 Experience</h3>
          <p>Fresher | MERN Stack Developer</p>
        </div>

        <div className="card">
          <h3>🎯 Goal</h3>
          <p>To become a skilled Full Stack Developer.</p>
        </div>
      </div>
    </section>
  );
}

export default About;