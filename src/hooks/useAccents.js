import { useEffect, useRef } from "react";

function hexToRgb(hex) {
  const m = (hex || "").trim().replace("#", "");
  if (m.length === 3) return [parseInt(m[0] + m[0], 16), parseInt(m[1] + m[1], 16), parseInt(m[2] + m[2], 16)];
  if (m.length >= 6) return [parseInt(m.slice(0, 2), 16), parseInt(m.slice(2, 4), 16), parseInt(m.slice(4, 6), 16)];
  return [79, 157, 255];
}

function readAccents() {
  const cs = getComputedStyle(document.documentElement);
  return {
    a: hexToRgb(cs.getPropertyValue("--accent")),
    b: hexToRgb(cs.getPropertyValue("--accent-2")),
    c: hexToRgb(cs.getPropertyValue("--accent-3")),
    dark: document.documentElement.getAttribute("data-theme-dark") === "true",
  };
}

/**
 * Live accent colours (as RGB triplets) for the canvas backgrounds.
 * Returns a ref so the animation loop can read the latest value without
 * re-subscribing. Updates whenever the theme changes.
 */
export function useAccents() {
  const ref = useRef(readAccents());
  useEffect(() => {
    const update = () => { ref.current = readAccents(); };
    update();
    window.addEventListener("axora-theme-change", update);
    return () => window.removeEventListener("axora-theme-change", update);
  }, []);
  return ref;
}

export const rgba = (c, a) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;
