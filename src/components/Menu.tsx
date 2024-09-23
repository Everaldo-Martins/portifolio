import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import '../style/Menu.css';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  };

  return (
    <nav className="navbar">
        <div className="logo">
          <a href="./"><img src={logo} alt="EMD" /></a>
        </div>
        <ul className={`menu ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/about" onClick={handleLinkClick}>Sobre</Link></li>
          <li><Link to="/experience" onClick={handleLinkClick}>Experiência</Link></li>
          <li><Link to="/skills" onClick={handleLinkClick}>Habilidades</Link></li>
          <li><Link to="/teams" onClick={handleLinkClick}>Equipe</Link></li>
          <li><Link to="/contact" onClick={handleLinkClick}>Contato</Link></li>
        </ul>
        <div className="menu-btn fa-solid fa-bars" onClick={toggleMenu} />
    </nav>
  );
};

export default Menu;