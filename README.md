# Axora Technologies — Portfolio

Marketing and portfolio website for **Axora Technologies** — an AI engineering,
data science and software consultancy. A light, token-driven single-page React
app with a runtime theme system and an accent-reactive dot-network background.

## Tech Stack

- **React 19** — UI framework (JSX, not TypeScript)
- **Vite 7** — build tool with HMR
- **Tailwind CSS 4** — layout utilities (the visual language lives in bespoke classes)
- **Framer Motion 12** — scroll reveals and transitions
- **Custom SVG icon set** — `src/components/ui/Icon.jsx`, used by name string (no icon library)
- **Typography** — Bricolage Grotesque (display) · Hanken Grotesk (body) · JetBrains Mono (mono), via Google Fonts

## Getting Started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (Vite)
npm run build    # production build → dist/
npm run preview  # preview the production build
npm run lint     # ESLint
```

## Project Structure

```
src/
├── components/
│   ├── background/NeuralCanvas.jsx      — full-page accent-reactive dot network
│   ├── layout/{Navbar, Footer, ThemeSwitcher}.jsx
│   └── ui/{Icon, Logo, Button, Reveal, SpotCard, SectionHeading,
│           PipelineFlow, ProjectModal, StatBand, ErrorBoundary}.jsx
├── sections/        — Hero, Marquee, Expertise, About, Work, Contact
├── data/            — section content (navigation, hero, expertise, about, projects, contact)
├── hooks/           — useScrollSpy, useNavChrome, useAccents
├── lib/             — theme.js (runtime theme engine), animations.js (Framer presets)
├── index.css        — design tokens + bespoke component classes
├── config.js        — reads the VITE_THEME_PALETTE build flag
├── App.jsx          — background layers + shell + sections
└── main.jsx         — entry point (applies the theme before first paint)
```

## Theming

Theming is **runtime CSS custom properties** applied to `<html>` by
`src/lib/theme.js` — 12 surface bases × 14 accents, with 14 curated presets.
The site ships locked on the **Frost · Aurora** light theme.

The multi-theme picker (`ThemeSwitcher`) is a **developer build flag, off by
default**. `src/config.js` reads `import.meta.env.VITE_THEME_PALETTE`
(`on` / `true` / `1` enables it). Set it in `.env` locally or in the Vercel
environment and redeploy to expose the floating picker. It is not a
visitor-facing toggle.

Style with the semantic classes in `index.css` using the tokens
(`--ink-*`, `--surface*`, `--line*`, `--accent*`, `--bg-*`) — never hardcode colors.

## Deployment

Optimized for **Vercel** (auto-detects Vite).

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Environment variables:** none required (set `VITE_THEME_PALETTE=on` only if you
  want the theme picker exposed)

## Featured Projects

- **Project JAAGI** — privacy-first voice AI desktop agent (live)
- **SafeRide** — real-time audio threat detection for ride-sharing safety
- **AI Document Assistant** — RAG-based enterprise chatbot

## Contact

- **Email:** support@axoratechnologies.in
- **Phone:** +91 9654252335
- **LinkedIn:** https://www.linkedin.com/company/axora-technologies-exports/
