import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SidebarProvider } from './context/SidebarContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SidebarProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </SidebarProvider>
  </StrictMode>,
)
