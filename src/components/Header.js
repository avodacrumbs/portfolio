import React from "react";
import "../styles/GlobalStyle.css";
import logo from "../logo/logo4.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="Header">
      <div>
        <a href="#home">
          <img src={logo} alt="Logo" />
        </a>
      </div>

      <div className="burger" onClick={toggleMenu}>
        <span className={menuOpen ? "open" : ""}></span>
        <span className={menuOpen ? "open" : ""}></span>
        <span className={menuOpen ? "open" : ""}></span>
      </div>

      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={closeMenu}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
