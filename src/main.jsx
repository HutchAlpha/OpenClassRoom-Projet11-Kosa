import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../public/Scss/index.scss'
import App from './App.jsx'
import Header from './Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
  </StrictMode>,
)
