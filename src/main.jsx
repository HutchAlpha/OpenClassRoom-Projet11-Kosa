import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../public/Scss/Index.scss'
import App from './Index.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
  </StrictMode>,
)
