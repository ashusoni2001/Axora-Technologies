import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { loadTheme, applyTheme, DEFAULT } from './lib/theme'
import { THEME_PALETTE_ENABLED } from './config'
import App from './App.jsx'

// The theme palette is a developer-controlled build flag (off by default). When
// enabled, restore the visitor's saved theme; otherwise lock to the brand default
// (Frost · Aurora). Applied before first paint to avoid a flash.
if (THEME_PALETTE_ENABLED) loadTheme()
else applyTheme(DEFAULT.base, DEFAULT.accent)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
