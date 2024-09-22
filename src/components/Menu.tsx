import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import '../style/Menu.css';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
        <div className="logo">
          <a href="./"><img src={logo} alt="EMD" /></a>
        </div>
        <ul className={`menu ${isOpen ? 'active' : ''}`}> {}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/experience">Experiência</Link></li>
          <li><Link to="/skills">Habilidades</Link></li>
          <li><Link to="/teams">Equipe</Link></li>
          <li><Link to="/contact">Contato</Link></li>
        </ul>
        <div className="menu-btn fas fa-bars" onClick={toggleMenu} />
    </nav>
  );
};

export default Menu;
