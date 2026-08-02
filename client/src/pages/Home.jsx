import "./Home.css";

function Home() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h3>Hello, I'm</h3>

        <h1>Kavya Mullapudi</h1>

        <h2>Full Stack Developer</h2>

        <p>
          Passionate Computer Science student with knowledge of
          React, Node.js, Express.js, MongoDB, Java, and Python.
          I enjoy building modern and user-friendly web applications.
        </p>

        <div className="hero-buttons">
      
          <a href="/contact" className="btn btn-outline">Contact Me</a>
        </div>

      </div>

      <div className="hero-image">
        <img
          src="/profile.jpg"
          alt="Kavya"
        />
      </div>

    </section>
  );
}

export default Home;