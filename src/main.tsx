
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import './styles/header.css'
import './styles/home.css'
import './styles/projects.css'
import './styles/sections.css'
import './styles/footer.css'
import './styles/scrollbar.css'
import App from './App.tsx'
import { APP_CONFIG } from './config/appConfig'
import { getRootElement } from './utils/domUtils'

// Mount the React app into the #root element from index.html
createRoot(getRootElement()).render(
  APP_CONFIG.strictMode ? (
    <StrictMode>
      <App />
    </StrictMode>
  ) : (
    <App />
  ),
)