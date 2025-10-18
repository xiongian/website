/*
  src/main.tsx

  Purpose:
  - Application entry point. This file mounts the React application into the DOM.

  Teaching notes:
  - The file queries the DOM for the element with id="root" (defined in index.html) and mounts
    the React component tree inside it using createRoot().
  - StrictMode is a development-only tool that activates additional checks and warnings.
  - To add global providers (theme, router, state), wrap <App /> with them here (for example
    BrowserRouter, Redux Provider, or context providers).

  Exercises:
  - Replace StrictMode with a router: import { BrowserRouter } from 'react-router-dom' and wrap <App />
  - Add a global CSS reset or theme provider here.
*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Mount the React app into the #root element from index.html
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
