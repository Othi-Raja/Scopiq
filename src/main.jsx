import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AboutUs from './components/AboutUs.jsx'
import Navbar from './components/Navbar.jsx'
import FrontPage2 from './components/FrontPage2.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <FrontPage2 />
    {/* <AboutUs /> */}
  </StrictMode>,
)
