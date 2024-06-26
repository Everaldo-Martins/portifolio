import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import Header from './components/header.tsx'
import Home from './components/home.tsx'
import About from './components/about.tsx'
import Experience from './components/experience.tsx'
import Skills from './components/skills.tsx'
import Teams from './components/teams.tsx'
import Contact from './components/contact.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <main>
      <Home />
      <About />
      <Experience />
      <Skills />
      <Teams />
      <Contact />
    </main>
  </React.StrictMode>,
)
