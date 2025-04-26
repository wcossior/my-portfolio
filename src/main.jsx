import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Landing from './views/Landing'
import 'animate.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='scroll-smooth' data-theme="sunset">
      <Landing></Landing>
    </div>
  </StrictMode>,
)
