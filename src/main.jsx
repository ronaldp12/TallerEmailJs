import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ContactUs } from './ContactUs/ContactUs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContactUs />
  </StrictMode>,
)
