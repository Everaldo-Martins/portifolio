import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Social from './components/Social';

const App: React.FC = () => {
  return (
    <>           
      <Header />
      <main>
        <Outlet />
      </main>      
      <Footer />
      <Social />   
    </>
  )
};

export default App;