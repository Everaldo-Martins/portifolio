import React from 'react';
import Menu from './Menu.tsx';
import BouncingBlobs from './BouncingBlob.tsx';

const Header: React.FC = () => {
  return (
    <>
      <BouncingBlobs />     
      <header>             
          <Menu />
      </header>
    </>    
  );
};

export default Header;