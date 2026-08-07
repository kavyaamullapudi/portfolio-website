import { NavLink } from "react-router-dom";
import "./Navbar.css";


function Navbar() {

  return (

    <nav className="navbar">

      <div className="logo">
        Kavya
      </div>


      <ul className="nav-links">

        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>


        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>


        <li>
          <NavLink to="/skills">
            Skills
          </NavLink>
        </li>


        <li>
          <NavLink to="/projects">
            Projects
          </NavLink>
        </li>


        <li>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </li>


      </ul>


    </nav>

  );
}


export default Navbar;