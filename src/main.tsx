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
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/experience",
        element: <Experience />
      },
      {
        path: "/skills",
        element: <Skills />
      },
      {
        path: "/teams",
        element: <Teams />
      },
      {
        path: "/contact",
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

