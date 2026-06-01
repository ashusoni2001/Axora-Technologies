import { createContext, useContext } from "react";

/** localStorage key for whether the theme palette feature is enabled. */
export const PALETTE_KEY = "axora-palette-enabled";

/** Read the opt-in flag (defaults to false / off). */
export function isPaletteEnabled() {
  try {
    return localStorage.getItem(PALETTE_KEY) === "true";
  } catch {
    return false;
  }
}

export const PaletteContext = createContext(null);

/** Access { enabled, setEnabled } for the theme-palette toggle. */
export function usePalette() {
  const ctx = useContext(PaletteContext);
  if (!ctx) throw new Error("usePalette must be used within PaletteProvider");
  return ctx;
}
