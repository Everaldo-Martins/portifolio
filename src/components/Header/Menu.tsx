import { useState } from 'react';
import { Link } from 'react-router';
import './Menu.css';
import Logo from './Logo';

function Menu(){
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
          <a href="/"><Logo /></a>
        </div>
        <ul className={`menu ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/about" onClick={handleLinkClick}>Sobre</Link></li>
          <li><Link to="/skills" onClick={handleLinkClick}>Habilidades</Link></li>
          <li><Link to="/contact" onClick={handleLinkClick}>Contato</Link></li>
        </ul>
        <div className="menu-btn fa-solid fa-bars" onClick={toggleMenu} />
    </nav>
  );
};

export default Menu;