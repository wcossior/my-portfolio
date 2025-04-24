import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <h1>Wilder <span>;</span></h1>
    </div>
  </StrictMode>,
)
