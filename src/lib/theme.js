/* ============================================================
   AXORA — Theme system
   Light, minimal, technical palettes. A base (surface + ink)
   and an accent (colour) combine freely. Persisted to
   localStorage and applied as CSS variables on <html>.

   Ported from the reference prototype into an ES module: the
   runtime swaps CSS custom properties so the whole site —
   including the accent-reactive canvases — retints live.
   ============================================================ */

// ---- BASES: surface + ink + lines (mostly light) ----
export const BASES = {
  porcelain: { name: "Porcelain", swatch: "#f3f5f8", dark: false,
    v: { "--bg-0": "#f3f5f8", "--bg-1": "#ffffff", "--bg-2": "#e9edf3",
         "--surface": "#ffffff", "--surface-2": "#f6f8fb", "--surface-solid": "#ffffff",
         "--line": "rgba(15,25,45,0.10)", "--line-strong": "rgba(15,25,45,0.18)", "--grid-line": "rgba(15,25,45,0.035)",
         "--ink-0": "#121823", "--ink-1": "#3b4656", "--ink-2": "#6a7686", "--ink-3": "#9aa4b2",
         "--shadow": "0 22px 48px -30px rgba(20,35,70,0.32)", "--noise-op": "0" } },
  snow: { name: "Snow", swatch: "#fbfcff", dark: false,
    v: { "--bg-0": "#f8fafe", "--bg-1": "#ffffff", "--bg-2": "#eef2f9",
         "--surface": "#ffffff", "--surface-2": "#f5f8fd", "--surface-solid": "#ffffff",
         "--line": "rgba(15,30,60,0.09)", "--line-strong": "rgba(15,30,60,0.17)", "--grid-line": "rgba(15,30,60,0.03)",
         "--ink-0": "#0f1722", "--ink-1": "#39475a", "--ink-2": "#69778c", "--ink-3": "#9aa7b8",
         "--shadow": "0 22px 48px -30px rgba(20,40,80,0.30)", "--noise-op": "0" } },
  paper: { name: "Paper", swatch: "#faf8f3", dark: false,
    v: { "--bg-0": "#faf8f2", "--bg-1": "#fffefb", "--bg-2": "#f1ede3",
         "--surface": "#fffefb", "--surface-2": "#f7f3ea", "--surface-solid": "#fffefb",
         "--line": "rgba(40,30,15,0.12)", "--line-strong": "rgba(40,30,15,0.20)", "--grid-line": "rgba(40,30,15,0.04)",
         "--ink-0": "#1c1812", "--ink-1": "#4a4234", "--ink-2": "#7a7060", "--ink-3": "#a89e8c",
         "--shadow": "0 22px 48px -30px rgba(60,45,20,0.28)", "--noise-op": "0" } },
  mist: { name: "Mist", swatch: "#eef2f8", dark: false,
    v: { "--bg-0": "#eaf0f7", "--bg-1": "#fbfcfe", "--bg-2": "#e0e8f2",
         "--surface": "#fbfcfe", "--surface-2": "#f1f5fa", "--surface-solid": "#ffffff",
         "--line": "rgba(20,40,75,0.11)", "--line-strong": "rgba(20,40,75,0.19)", "--grid-line": "rgba(20,40,75,0.035)",
         "--ink-0": "#0e1622", "--ink-1": "#34465c", "--ink-2": "#637388", "--ink-3": "#94a3b6",
         "--shadow": "0 22px 48px -30px rgba(20,45,90,0.30)", "--noise-op": "0" } },
  sand: { name: "Sand", swatch: "#f2ede3", dark: false,
    v: { "--bg-0": "#f1ebe0", "--bg-1": "#faf6ef", "--bg-2": "#e8e0d2",
         "--surface": "#faf6ef", "--surface-2": "#f2ece1", "--surface-solid": "#fbf8f2",
         "--line": "rgba(50,38,18,0.13)", "--line-strong": "rgba(50,38,18,0.21)", "--grid-line": "rgba(50,38,18,0.04)",
         "--ink-0": "#221b10", "--ink-1": "#4f4634", "--ink-2": "#7d7360", "--ink-3": "#aaa08c",
         "--shadow": "0 22px 48px -30px rgba(70,50,20,0.26)", "--noise-op": "0" } },
  cloud: { name: "Cloud", swatch: "#f4f3fa", dark: false,
    v: { "--bg-0": "#f3f2fa", "--bg-1": "#ffffff", "--bg-2": "#eae8f5",
         "--surface": "#ffffff", "--surface-2": "#f6f5fc", "--surface-solid": "#ffffff",
         "--line": "rgba(35,25,60,0.10)", "--line-strong": "rgba(35,25,60,0.18)", "--grid-line": "rgba(35,25,60,0.035)",
         "--ink-0": "#16131f", "--ink-1": "#403a52", "--ink-2": "#6f6885", "--ink-3": "#9e98b2",
         "--shadow": "0 22px 48px -30px rgba(45,30,80,0.28)", "--noise-op": "0" } },
  ice: { name: "Ice", swatch: "#eef5f7", dark: false,
    v: { "--bg-0": "#ecf4f6", "--bg-1": "#fbfdfe", "--bg-2": "#e0edf0",
         "--surface": "#fbfdfe", "--surface-2": "#eff6f8", "--surface-solid": "#ffffff",
         "--line": "rgba(15,45,55,0.11)", "--line-strong": "rgba(15,45,55,0.19)", "--grid-line": "rgba(15,45,55,0.035)",
         "--ink-0": "#0d1a1d", "--ink-1": "#324a50", "--ink-2": "#5f7880", "--ink-3": "#91a6ad",
         "--shadow": "0 22px 48px -30px rgba(15,55,70,0.28)", "--noise-op": "0" } },
  fog: { name: "Fog", swatch: "#eceef2", dark: false,
    v: { "--bg-0": "#eaecf1", "--bg-1": "#fafbfc", "--bg-2": "#e0e3ea",
         "--surface": "#fafbfc", "--surface-2": "#eff1f5", "--surface-solid": "#ffffff",
         "--line": "rgba(20,25,35,0.11)", "--line-strong": "rgba(20,25,35,0.19)", "--grid-line": "rgba(20,25,35,0.035)",
         "--ink-0": "#14171c", "--ink-1": "#3a4150", "--ink-2": "#69707e", "--ink-3": "#99a0ad",
         "--shadow": "0 22px 48px -30px rgba(25,30,45,0.26)", "--noise-op": "0" } },
  linen: { name: "Linen", swatch: "#f5f1ea", dark: false,
    v: { "--bg-0": "#f4f0e8", "--bg-1": "#fdfbf6", "--bg-2": "#ebe5d9",
         "--surface": "#fdfbf6", "--surface-2": "#f4efe6", "--surface-solid": "#fffdf9",
         "--line": "rgba(45,35,20,0.12)", "--line-strong": "rgba(45,35,20,0.20)", "--grid-line": "rgba(45,35,20,0.04)",
         "--ink-0": "#1a1710", "--ink-1": "#473f30", "--ink-2": "#79705e", "--ink-3": "#a89f8b",
         "--shadow": "0 22px 48px -30px rgba(60,45,20,0.24)", "--noise-op": "0" } },
  frost: { name: "Frost", swatch: "#eff4fb", dark: false,
    v: { "--bg-0": "#edf3fb", "--bg-1": "#ffffff", "--bg-2": "#e2ebf7",
         "--surface": "#ffffff", "--surface-2": "#f2f6fc", "--surface-solid": "#ffffff",
         "--line": "rgba(15,35,75,0.10)", "--line-strong": "rgba(15,35,75,0.18)", "--grid-line": "rgba(15,35,75,0.03)",
         "--ink-0": "#0c1626", "--ink-1": "#32445f", "--ink-2": "#61728c", "--ink-3": "#93a3bb",
         "--shadow": "0 22px 48px -30px rgba(20,45,100,0.28)", "--noise-op": "0.4" } },
  graphite: { name: "Graphite", swatch: "#e6e9ee", dark: false,
    v: { "--bg-0": "#e4e7ed", "--bg-1": "#f4f6f9", "--bg-2": "#d9dde4",
         "--surface": "#f7f8fb", "--surface-2": "#eef1f5", "--surface-solid": "#ffffff",
         "--line": "rgba(20,28,42,0.13)", "--line-strong": "rgba(20,28,42,0.22)", "--grid-line": "rgba(20,28,42,0.045)",
         "--ink-0": "#11151d", "--ink-1": "#363f4f", "--ink-2": "#646e7e", "--ink-3": "#959eac",
         "--shadow": "0 22px 48px -30px rgba(25,35,55,0.30)", "--noise-op": "0" } },
  midnight: { name: "Midnight", swatch: "#0a0f1c", dark: true,
    v: { "--bg-0": "#04060e", "--bg-1": "#070b16", "--bg-2": "#0b1124",
         "--surface": "rgba(255,255,255,0.04)", "--surface-2": "rgba(255,255,255,0.06)", "--surface-solid": "rgba(255,255,255,0.05)",
         "--line": "rgba(255,255,255,0.08)", "--line-strong": "rgba(255,255,255,0.16)", "--grid-line": "rgba(255,255,255,0.022)",
         "--ink-0": "#eef3fb", "--ink-1": "#b3bdce", "--ink-2": "#7a8599", "--ink-3": "#515c6f",
         "--shadow": "0 26px 60px -34px rgba(0,0,0,0.7)", "--noise-op": "0.5" } },
};

// ---- ACCENTS: primary, secondary, tertiary, ink-on-accent ----
export const ACCENTS = {
  indigo:  { name: "Indigo",  v: { "--accent": "#4f46e5", "--accent-2": "#7c6cf0", "--accent-3": "#6366f1", "--accent-ink": "#ffffff" } },
  blue:    { name: "Blue",    v: { "--accent": "#2563eb", "--accent-2": "#3b82f6", "--accent-3": "#0ea5e9", "--accent-ink": "#ffffff" } },
  cobalt:  { name: "Cobalt",  v: { "--accent": "#1d4ed8", "--accent-2": "#4f46e5", "--accent-3": "#2563eb", "--accent-ink": "#ffffff" } },
  sky:     { name: "Sky",     v: { "--accent": "#0284c7", "--accent-2": "#0ea5e9", "--accent-3": "#38bdf8", "--accent-ink": "#ffffff" } },
  cyan:    { name: "Cyan",    v: { "--accent": "#0e7490", "--accent-2": "#0891b2", "--accent-3": "#06b6d4", "--accent-ink": "#ffffff" } },
  teal:    { name: "Teal",    v: { "--accent": "#0d9488", "--accent-2": "#14b8a6", "--accent-3": "#2dd4bf", "--accent-ink": "#ffffff" } },
  emerald: { name: "Emerald", v: { "--accent": "#059669", "--accent-2": "#10b981", "--accent-3": "#34d399", "--accent-ink": "#ffffff" } },
  violet:  { name: "Violet",  v: { "--accent": "#7c3aed", "--accent-2": "#8b5cf6", "--accent-3": "#a855f7", "--accent-ink": "#ffffff" } },
  fuchsia: { name: "Fuchsia", v: { "--accent": "#c026d3", "--accent-2": "#d946ef", "--accent-3": "#a21caf", "--accent-ink": "#ffffff" } },
  rose:    { name: "Rose",    v: { "--accent": "#e11d48", "--accent-2": "#f43f5e", "--accent-3": "#be123c", "--accent-ink": "#ffffff" } },
  amber:   { name: "Amber",   v: { "--accent": "#d97706", "--accent-2": "#f59e0b", "--accent-3": "#b45309", "--accent-ink": "#1c1305" } },
  orange:  { name: "Orange",  v: { "--accent": "#ea580c", "--accent-2": "#f97316", "--accent-3": "#c2410c", "--accent-ink": "#ffffff" } },
  slate:   { name: "Slate",   v: { "--accent": "#334155", "--accent-2": "#475569", "--accent-3": "#1e293b", "--accent-ink": "#ffffff" } },
  aurora:  { name: "Aurora",  v: { "--accent": "#3f8cff", "--accent-2": "#9b5cf6", "--accent-3": "#28d6ec", "--accent-ink": "#06121f" } },
};

// ---- Curated named themes for the picker (base + accent) ----
export const THEMES = [
  { id: "frost-aurora",      name: "Frost · Aurora",      base: "frost",     accent: "aurora" },
  { id: "porcelain-indigo",  name: "Porcelain · Indigo",  base: "porcelain", accent: "indigo" },
  { id: "snow-blue",         name: "Snow · Blue",         base: "snow",      accent: "blue" },
  { id: "frost-cobalt",      name: "Frost · Cobalt",      base: "frost",     accent: "cobalt" },
  { id: "ice-cyan",          name: "Ice · Cyan",          base: "ice",       accent: "cyan" },
  { id: "mist-teal",         name: "Mist · Teal",         base: "mist",      accent: "teal" },
  { id: "fog-emerald",       name: "Fog · Emerald",       base: "fog",       accent: "emerald" },
  { id: "cloud-violet",      name: "Cloud · Violet",      base: "cloud",     accent: "violet" },
  { id: "porcelain-fuchsia", name: "Porcelain · Fuchsia", base: "porcelain", accent: "fuchsia" },
  { id: "paper-rose",        name: "Paper · Rose",        base: "paper",     accent: "rose" },
  { id: "sand-amber",        name: "Sand · Amber",        base: "sand",      accent: "amber" },
  { id: "linen-orange",      name: "Linen · Orange",      base: "linen",     accent: "orange" },
  { id: "graphite-slate",    name: "Graphite · Slate",    base: "graphite",  accent: "slate" },
  { id: "midnight-aurora",   name: "Midnight · Aurora",   base: "midnight",  accent: "aurora" },
];

export const DEFAULT = { base: "frost", accent: "aurora" };

const STORAGE_KEY = "axora-theme";

/** Apply a base + accent by writing CSS variables to <html>, persist, and broadcast. */
export function applyTheme(baseId, accentId) {
  const base = BASES[baseId] || BASES[DEFAULT.base];
  const accent = ACCENTS[accentId] || ACCENTS[DEFAULT.accent];
  const root = document.documentElement;
  Object.entries(base.v).forEach(([k, val]) => root.style.setProperty(k, val));
  Object.entries(accent.v).forEach(([k, val]) => root.style.setProperty(k, val));
  root.setAttribute("data-theme-dark", base.dark ? "true" : "false");
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ base: baseId, accent: accentId }));
  } catch { /* storage unavailable — non-fatal */ }
  window.dispatchEvent(
    new CustomEvent("axora-theme-change", { detail: { base: baseId, accent: accentId, dark: base.dark } })
  );
}

/** Read the saved selection (falling back to default), apply it, and return it. */
export function loadTheme() {
  let saved = null;
  try {
    saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch { /* malformed or unavailable — use default */ }
  const base = saved && BASES[saved.base] ? saved.base : DEFAULT.base;
  const accent = saved && ACCENTS[saved.accent] ? saved.accent : DEFAULT.accent;
  applyTheme(base, accent);
  return { base, accent };
}

/** The saved selection without applying it (used to seed React state). */
export function getSavedTheme() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && BASES[saved.base] && ACCENTS[saved.accent]) return saved;
  } catch { /* fall through */ }
  return { ...DEFAULT };
}
