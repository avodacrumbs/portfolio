import React from 'react';
import '../styles/GlobalStyle.css'; 
import logo from '../logo/logo4.png';
const Header = () => {
  return (
    <header className="Header">
      <div>
        <a href="#home"><img src={logo} alt="Logo"/></a>
      </div>
      <nav>
        <ul >
          <li><a href="#home" >Home</a></li>
          <li><a href="#portfolio" >Portfolio</a></li>
          <li><a href="#about" >About</a></li>
          <li><a href="#skills" >Skills</a></li>
          <li><a href="#contact" >Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
