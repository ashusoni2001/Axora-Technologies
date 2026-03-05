# Axora Technologies — Portfolio

AI Engineering & Software Consultancy portfolio website.

## Tech Stack

- **React 19** — UI framework
- **Vite 7** — Build tool with HMR
- **Tailwind CSS 4** — Utility-first styling (Navy + Gold theme)
- **Framer Motion 12** — Animations and transitions
- **Lucide React** — Icon library
- **Space Grotesk** — Typography (Google Fonts)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── background/    — GlowOrbs, NeuralNetwork (decorative)
│   ├── layout/        — Navbar, Footer
│   └── ui/            — Button, GlassCard, Badge, SectionHeading, etc.
├── sections/          — Hero, Services, About, Projects, TechStack, Contact
├── data/              — Static content (projects, services, tech stack, nav)
├── hooks/             — useActiveSection, useScrollDirection
├── lib/               — Animation presets (Framer Motion)
├── App.jsx            — Root component
├── index.css          — Tailwind theme configuration
└── main.jsx           — Entry point
```

## Deployment

Optimized for **Vercel**. Push to GitHub and connect the repo — Vite is auto-detected.

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **No environment variables required** (static site)

## Featured Projects

- **Project JAAGI** — Privacy-first voice AI desktop agent
- **SafeRide** — Real-time audio threat detection for ride-sharing safety
- **AI Document Assistant** — RAG-based enterprise chatbot

## Contact

- **Email:** support@axoratechnologies.in
- **Phone:** +91 9654252335
