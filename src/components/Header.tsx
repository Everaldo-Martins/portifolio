import React from 'react';
import Menu from './Menu.tsx';
import '../style/Header.css';

const Header: React.FC = () => {
  return (
    <header>        
        <Menu />
    </header>
  );
};

export default Header;