# Axora Technologies Portfolio

## Quick Reference
- **Stack:** React 19 + Vite 7 + Tailwind CSS 4 + Framer Motion 12
- **Package:** `axora-portfolio@1.0.0`
- **Dev:** `npm run dev` | **Build:** `npm run build` | **Lint:** `npm run lint`
- **Deploy target:** Vercel (auto-detects Vite)
- **Design:** Light, token-driven with a runtime theme switcher. Rebuilt on the
  `dev` branch from the `A:\ML_WORK\ML_WORK\Axora-Technologies` reference prototype.

## Project Structure
```
src/
├── components/
│   ├── background/NeuralCanvas.jsx      — full-page accent-reactive dot network
│   ├── layout/{Navbar, Footer, ThemeSwitcher}.jsx
│   └── ui/{Icon, Logo, Button, Reveal, SpotCard, SectionHeading}.jsx
├── sections/                           — Hero, Marquee, Expertise, About, Work, Contact
├── data/                               — navigation, hero, expertise, about, projects, contact
├── hooks/                              — useScrollSpy, useNavChrome, useAccents
├── lib/theme.js                        — runtime theme engine (bases × accents)
├── lib/animations.js                   — Framer Motion reveal presets
├── index.css                           — design tokens + bespoke component classes
└── App.jsx                             — bg layers + shell + sections + ThemeSwitcher
```

## Conventions
- JSX (not TypeScript) — @types packages installed but unused
- All section data lives in `src/data/` — edit there, not in components
- **Theming is runtime CSS variables** (`src/lib/theme.js`): 12 surface bases ×
  14 accents, 14 curated presets, persisted to `localStorage`, applied to `<html>`.
  Default = **Frost · Aurora** (light).
- **Theme palette is opt-in, OFF by default** (`hooks/usePalette.js` + `context/PaletteProvider.jsx`):
  the site ships locked on Frost · Aurora; a footer "Theme palette" switch reveals the
  floating picker. `main.jsx` locks the default pre-render unless the visitor enabled it;
  turning the switch off re-applies Frost · Aurora.
- Style via the semantic classes in `index.css` using the tokens
  (`--ink-*`, `--surface*`, `--line*`, `--accent*`, `--bg-*`) — **never hardcode colors**.
  Tailwind utilities are available for layout but the visual language lives in classes.
- Canvas backgrounds read live accent colors via `useAccents()` and re-tint on the
  `axora-theme-change` window event the theme engine dispatches.
- Icons: custom SVG set in `components/ui/Icon.jsx`, used by name string
  (`<Icon name="systemDesign" />`) — not lucide.
- Scroll reveals: `components/ui/Reveal.jsx` (Framer Motion, `variant` + `delay` ms);
  honours `prefers-reduced-motion`.
- `Button` renders `<a>` when given `href`, else `<button>`; `icon` is an Icon name string.
- ESLint: `motion` is whitelisted in varsIgnorePattern.

## Brand
- **Company:** Axora Technologies
- **Email:** support@axoratechnologies.in
- **Phone:** +91 9654252335
- **LinkedIn:** https://www.linkedin.com/company/axora-technologies-exports/ (live in footer)
- **GitHub:** intentionally disabled ("coming soon")
- **Tone:** Professional consultancy (not freelancer) — no fabricated stats
