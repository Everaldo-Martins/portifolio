import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './style/main.css';

import App from './App.tsx';
import ErrorPage from './routes/ErrorPage.tsx';
import Home from './routes/Home.tsx';
import About from './routes/About.tsx';
import Experience from './routes/Experience.tsx';
import Skills from './routes/Skills.tsx';
import Teams from './routes/Teams.tsx';
import Contact from './routes/Contact.tsx';

const router = createBrowserRouter([
  {
    path: "/portifolio",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/portifolio",
        element: <Home />
      },
      {
        path: "/portifolio/about",
        element: <About />
      },
      {
        path: "/portifolio/experience",
        element: <Experience />
      },
      {
        path: "/portifolio/skills",
        element: <Skills />
      },
      {
        path: "/portifolio/teams",
        element: <Teams />
      },
      {
        path: "/portifolio/contact",
        element: <Contact />
      },
    ],
  },  
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={ router } />
  </StrictMode>
)

