import { FaGithub, FaLinkedin } from "react-icons/fa"
function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Kavya. All Rights Reserved.</p>

      <div className="footer-links">
        <a
          href="https://github.com/kavyaamullapudi"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/kavya-mullapudi-8588b6380/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;