import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { loadTheme, applyTheme, DEFAULT } from './lib/theme'
import { isPaletteEnabled } from './hooks/usePalette'
import PaletteProvider from './context/PaletteProvider'
import App from './App.jsx'

// The theme palette is opt-in (off by default). When disabled, lock to the brand
// default (Frost · Aurora); when a visitor has enabled it before, restore their pick.
// Applied before first paint to avoid a flash.
if (isPaletteEnabled()) loadTheme()
else applyTheme(DEFAULT.base, DEFAULT.accent)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PaletteProvider>
      <App />
    </PaletteProvider>
  </StrictMode>,
)
