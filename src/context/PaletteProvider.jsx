import { useState, useCallback } from "react";
import { PaletteContext, PALETTE_KEY, isPaletteEnabled } from "../hooks/usePalette";
import { applyTheme, DEFAULT } from "../lib/theme";

/**
 * Owns the "theme palette" opt-in. Off by default → the site stays locked on
 * the brand default (Frost · Aurora) and the palette picker is hidden.
 * Turning it off also re-applies the default, so the brand palette is restored.
 */
export default function PaletteProvider({ children }) {
  const [enabled, setEnabledState] = useState(isPaletteEnabled);

  const setEnabled = useCallback((next) => {
    setEnabledState(next);
    try {
      localStorage.setItem(PALETTE_KEY, next ? "true" : "false");
    } catch {
      /* storage unavailable — non-fatal */
    }
    if (!next) applyTheme(DEFAULT.base, DEFAULT.accent);
  }, []);

  return (
    <PaletteContext.Provider value={{ enabled, setEnabled }}>
      {children}
    </PaletteContext.Provider>
  );
}
