import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 690) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="max-width">
        <div className="logo">
          <a href="./"><img src={logo} alt="EMD" /></a>
        </div>
        <ul className={`menu ${isOpen ? 'active' : ''}`}> {}
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#experience">Experiência</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#teams">Equipe</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
        <div className="menu-btn fas fa-bars" onClick={toggleMenu} />
      </div>
    </nav>
  );
};

export default Menu;
