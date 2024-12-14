import { Link } from "react-scroll";
import "../Styles/Header.css";

const Header = () => {
  return (
    <header className="sidebar-navbar">
      <nav className="sidebar-navbar-container">
        <ul className="sidebar-nav-list">
          <li className="sidebar-nav-item">
            <Link
              to="hero"
              className="sidebar-nav-link"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active-link"
            >
              Home
            </Link>
          </li>
          <li className="sidebar-nav-item">
            <Link
              to="about"
              className="sidebar-nav-link"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active-link"
            >
              About
            </Link>
          </li>
          <li className="sidebar-nav-item">
            <Link
              to="background"
              className="sidebar-nav-link"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active-link"
            >
              Background
            </Link>
          </li>
          <li className="sidebar-nav-item">
            <Link
              to="projects"
              className="sidebar-nav-link"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active-link"
            >
              Projects
            </Link>
          </li>
          <li className="sidebar-nav-item">
            <Link
              to="contact"
              className="sidebar-nav-link"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active-link"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Contact Info */}
        <div className="contact-info">
          <a href="mailto:narrateja9699@gmail.com" className="contact-icon">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="tel:+13125937394" className="contact-icon">
            <i className="fas fa-phone-alt"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/tejanarra/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/tejanarra"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
