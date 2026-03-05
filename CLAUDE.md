# Axora Technologies Portfolio

## Quick Reference
- **Stack:** React 19 + Vite 7 + Tailwind CSS 4 + Framer Motion 12
- **Package:** `axora-portfolio@1.0.0`
- **Dev:** `npm run dev` | **Build:** `npm run build` | **Lint:** `npm run lint`
- **Deploy target:** Vercel (auto-detects Vite)

## Project Structure
```
src/
├── components/{background,layout,ui}/   — Reusable components
├── sections/                            — Page sections (Hero → Contact)
├── data/                                — Static data (projects, services, tech, nav)
├── hooks/                               — useActiveSection, useScrollDirection
├── lib/animations.js                    — Framer Motion presets
├── index.css                            — Tailwind theme (Navy + Gold palette)
└── App.jsx                              — Root layout (single-page, anchor nav)
```

## Conventions
- JSX (not TypeScript) — @types packages installed but unused
- All section data lives in `src/data/` — edit there, not in components
- Colors via CSS variables in index.css @theme block — components use Tailwind classes
- Hardcoded colors exist in: GlowOrbs.jsx (rgba), NeuralNetwork.jsx (#hex)
- ESLint: `motion` is whitelisted in varsIgnorePattern
- Button `icon` prop is lowercase (destructured as `Icon` internally)

## Brand
- **Company:** Axora Technologies
- **Email:** support@axoratechnologies.in
- **Phone:** +91 9654252335
- **Tone:** Professional consultancy (not freelancer) — no fabricated stats
