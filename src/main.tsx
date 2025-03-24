import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import './style/index.css';
import './style/AnimatedButton.css';

import App from './App';

import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />   
        </Route>
        <Route errorElement element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

