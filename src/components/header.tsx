import React from 'react';
import Menu from './menu.tsx';

const Header: React.FC = () => {
  return (
    <header>
        <div className="scroll-up">
            <i className="fas fa-angle-up"></i>
        </div>
        <Menu />
    </header>
  );
};

export default Header;