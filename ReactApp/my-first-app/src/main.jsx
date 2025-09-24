import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Ghadi from "./Ghadi.jsx";
import Home from './Home.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Ghadi /> */}
    <Home />

  </StrictMode>,
)
