import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-section">
      <div className="home-content">
        <h1>Hello, I'm Kavya</h1>

        <h2>Computer Science & Engineering Student</h2>

        <p>
          I am passionate about software development, web technologies,
          and building practical projects.
        </p>

        <div className="home-buttons">
          <Link to="/projects">View Projects</Link>
          <Link to="/contact">Contact Me</Link>
        </div>
      </div>
    </section>
  );
}

export default Home;