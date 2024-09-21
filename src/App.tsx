import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BouncingBlobs from './components/BouncingBlob';
import Social from './components/Social';

const App: React.FC = () => {
  return (
    <>
      <BouncingBlobs />
      <Social />
      <Header />
      <main>
        <Outlet />
      </main>      
      <Footer />
    </>
  )
};

export default App;