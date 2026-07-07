# Design Overhaul — Progress Log & Resume Handoff

> Last worked: **2026-06-28** (polish phase) · Branch: **`dev-exp`**
> Companions: [`design-audit.md`](./design-audit.md) (overhaul analysis) ·
> [`polish-audit.md`](./polish-audit.md) (multi-agent polish audit + prioritized backlog).
> This file is the living build log — read it first when resuming.

---

## ⚠️ Ground rules (don't forget)
- **`dev` = production / auto-deploy.** Never push experimental work to `dev`. All design
  work lives on **`dev-exp`**.
- **The user does ALL git operations** — never run `git add` / `commit` / `push`. Leave the
  working tree dirty; the user commits when ready. (Read-only git is fine.)
- **Two hard constraints (locked):** the Frost · Aurora **palette stays unchanged**, and the
  **reactive-dot background (NeuralCanvas) stays**. The whole design works *with* the dots
  (glass refracts them).
- **Brand tone:** professional consultancy — **no fabricated stats**.

## How to resume
1. `npm run dev` (server runs on **port 5176**; restart it if not running).
2. You're on `dev-exp`. The Phase 1–5 + liquid-glass overhaul is now **committed** at
   `2cc02f3 "re-design"`. The polish-phase **quick-wins** batch is **uncommitted** on top.
3. Polish backlog + priorities live in [`polish-audit.md`](./polish-audit.md). Next recommended
   step: the **shareability / OG package** (the one HIGH item).
4. Verify in a real browser (Chrome) — the user works this way.

---

## Polish phase (2026-06-28)

The overhaul is committed (`2cc02f3`). This phase = **audit → fix → polish**, design moves
prototyped as mockups first. Full findings + prioritized backlog: [`polish-audit.md`](./polish-audit.md).

**Audit:** multi-agent (principal-architect + senior-fullstack + security + frontend-design lenses,
judge-verified). Verdict — genuinely senior-grade, **no critical / no security issues** (static SPA,
no backend/forms/data). Judge downgraded inflated finds (e.g. security headers high→low); the one
real **HIGH** is shareability (blank LinkedIn/Slack unfurls).

**Quick-wins batch — DONE (uncommitted; lint + build clean; browser-verified on :5176):**
- `NeuralCanvas.jsx` — `prefers-reduced-motion` (paints one static frame), `getContext` null-guard,
  hidden-tab pause, live preference listener. Closes the only real crash vector + the biggest a11y gap.
- `Hero.jsx` — rotating-word `useReducedMotion` guard (freezes on the first word).
- `index.css` — global `:focus-visible` ring (accent outline + offset + halo, visible over glass).
- `--ink-3` contrast `#93a3bb` → `#66768e` (2.56:1 → **4.62:1** on white) in `index.css :root` **and**
  `theme.js` frost (the applied value). Caveat: 4.14:1 on the tinted footer bg — nudge darker if AA-everywhere is required.
- `useScrollSpy.js` — seed `null` (nav no longer lit at page top).
- `ErrorBoundary.jsx` (new) wrapping the whole app in `App.jsx` — branded fallback, no white screen.
- Removed dead `lucide-react`; rewrote the stale `README.md`.

**Deferred (user reassessing — priority order):**
1. **Shareability (HIGH):** OG/Twitter/canonical/JSON-LD + 1200×630 share image + favicon set /
   manifest / theme-color / robots / sitemap. (One `index.html` + `public/` pass.)
2. `vercel.json` security headers + immutable caching; `npm audit fix` (3 high *build-dep* advisories).
3. Self-host fonts (woff2) — kills hero-swap CLS + Google IP egress.
4. Oversized `axora-mark.png` (~320 KB); purge dead `src/assets/` media (mp4 + ~197 frames + AI-named PNGs).
5. Minor React/a11y nits: modal focus-trap + `aria-labelledby`, mobile-menu dialog semantics +
   desktop-resize close, scroll-lock-on-exit, Marquee keys, `SectionHeading` split, `SpotCard` tilt, Drive demo.

**Design = MOCK-UP-FIRST (user's call):** bold standout moves — hero self-demonstrating entrance
(headline drives the dot field), one material/gradient hierarchy, asymmetric editorial About,
dots-causal-to-UI, card→modal architecture thread — prototype in `mockups/` for browser review
BEFORE touching live components. Not started. (See `polish-audit.md` for all 10.)

---

## Locked design decisions
| # | Decision | Choice |
|---|---|---|
| 1 | **Type** | **A** — Bricolage Grotesque (display/headings) + Hanken Grotesk (body), JetBrains Mono kept (mono/kickers/stats). Space Grotesk fully replaced. |
| 2 | **Hero layout** | Originally picked **2B** (centered + glass panel below) and built it — **then the user removed the panel**. Hero now = clean centered copy + CTAs + a plain stat row (9 / 24+ / 3). **No glass panel in the hero.** |
| 3 | **Modal glass** | **3B** — live-dots glass (dots show through the popup). Later **pushed more transparent** at user request: 56% surface + 20px blur. 3A (frosted/dim) remains a one-line fallback if readability ever suffers. |
| — | **Glass style** | Upgraded flat-frosted → **liquid glass** (luminous specular rim on all edges, brighter "lensed" backdrop, top sheen). Tokenized in `:root` as `--glass-*`. |
| — | **Nav** | Floating glass **island pill** + **real SVG displacement refraction** (Chromium) that warps the dots behind it. |

---

## Phases completed (all lint-clean, browser-verified)

**Phase 1 — Foundation**
- Fonts swapped in `index.html`; added `--display`/`--font-display` tokens, pointed
  `--sans`/`--font-sans` at Hanken; attached `var(--display)` to all heading classes
  (`.h-display`, `.h-section`, `.hero h1`, `.contact-card h2`, `.pm-hook`, `.cluster-head h3`).
- **Tokenized glass** added to `:root`: `--glass-bg`, `--glass-border`, `--glass-blur`,
  `--glass-shadow` (+ later `--glass-rim`, `--glass-filter`). Built with `color-mix` so they
  retint across all themes.
- **Grain turned on**: `frost` base `--noise-op` 0 → **0.4** (in `src/lib/theme.js` — it's
  applied inline by `applyTheme`, so `:root` alone wouldn't work).
- **Gradient tamed**: hero stat numbers now solid ink (removed `grad`); the rotating hero
  word keeps the gradient as the one signature moment.

**Phase 2 — Hero glass panel (BUILT, THEN REMOVED)**
- Built a "Production Pipeline" glass readout panel below the hero copy. **User asked to
  remove it** → reverted to the plain `.hero-meta` stat row. `heroPipeline` data removed from
  `src/data/hero.js`. (Kept here for history; the panel CSS/JSX is gone.)

**Phase 3 — Glass nav island**
- `.nav` → floating pill: `.nav-inner` is always-glass, `width: min(1120px, …)`, `top:14px`,
  `border-radius:999px`. Reused `useNavChrome` (`solid` tightens shadow on scroll; `hidden`
  hides on scroll-down). `pointer-events:none` on `.nav`, `auto` on `.nav-inner`.

**Phase 4 — Modal glass (3B)**
- `.pm-overlay`: dropped its own `backdrop-filter`, lightened scrim to `ink-0 20%` so the
  panel's glass reaches the live dots. `.pm-panel`: frosted glass (now 56% surface + 20px blur).
- Note: viewport screenshots of the open modal blank out in headless Playwright (fixed
  element + scroll-lock); use **full-page** screenshots or DOM hit-testing to verify.

**Phase 5 — Bento + neumorphism + claymorphism**
- **Bento Expertise**: `src/sections/Expertise.jsx` + `src/data/expertise.js` (added `span`
  per item). 6-col bento (`.bento`, `.sp-2/3/4/6`), collapses to 2→1 cols. Tiles are
  **neumorphic** (`.xtile`, soft-extruded, inset icon wells) using `--neu-hi`/`--neu-lo`.
  Spans: cluster1 `[4,2,2,4]`, cluster2 `[4,2,6]`, cluster3 `[4,2]`. (Dropped SpotCard/tilt
  here; hover is box-shadow-only to avoid fighting Framer Motion's transform.)
- **Neumorphic StatBand**: `.statband.sb-band .statband-item` now soft-extruded chips.
- **Claymorphic agent core**: `.fa-core` (the "ReAct Agent" hub in the agent-pipeline diagram)
  is puffy clay (24px radius, accent glow + inner highlights). Core only — channels/tools stay flat.

**Post-phase tweaks**
- **Hero panel removed** (see Phase 2).
- **Modal pushed more transparent** (72% → 56% surface, 20px blur).
- **Liquid glass** upgrade across nav / modal / case-study button (rim light, sheen, brightness).
- **Nav real refraction**: `src/components/layout/Navbar.jsx` renders a hidden `<svg>` filter
  `#liquid-glass` (`feTurbulence` + `feGaussianBlur` + `feDisplacementMap`, scale **42**,
  slow 20s `baseFrequency` animation, **omitted under `prefers-reduced-motion`**). Wired via
  `@supports (backdrop-filter: url(...))` so Chromium gets refraction; Safari/Firefox fall
  back to frosted glass. Confirmed working in Chrome.

---

## Files changed (uncommitted on `dev-exp`)
- `index.html` — font links (Bricolage + Hanken + JetBrains Mono)
- `src/index.css` — tokens, type wiring, liquid glass, nav island, modal 3B, bento, neu, clay
- `src/lib/theme.js` — `frost --noise-op` 0 → 0.4
- `src/sections/Hero.jsx` — panel removed, stat row restored, `m-num` no `grad`
- `src/sections/Expertise.jsx` — bento markup (SpotCard removed)
- `src/data/expertise.js` — `span` per item
- `src/components/layout/Navbar.jsx` — SVG liquid-glass filter
- `mockups/design-options.html` — untracked; the A/B/C decision mockups (type / hero / modal)

Already committed earlier on `dev-exp` (commit `93f5824`, the "preserve" commit):
ProjectModal, PipelineFlow, StatBand components, Work.jsx, projects.js, the first index.css
pass, and `docs/design-audit.md`.

## Design-system quick reference (new bits)
- **Fonts:** `--display` = Bricolage Grotesque, `--sans` = Hanken Grotesk, `--mono` = JetBrains Mono.
- **Glass tokens (`:root`):** `--glass-bg` (surface 44%), `--glass-border` (luminous),
  `--glass-blur` (16px), `--glass-rim` (4-edge specular insets), `--glass-shadow`,
  `--glass-filter` (blur+saturate+brightness). Nav adds `url(#liquid-glass)` refraction on top.
- **Neu tokens:** `--neu-hi` / `--neu-lo` (light-tuned; need a `[data-theme-dark]` override if
  the palette flag is ever enabled — not required while shipping Frost-locked).

---

## Outstanding dials & open decisions (for tomorrow)
- **Phase 6 (optional) — motion polish:** orchestrated hero entrance + light scroll-driven
  reveals. **Recommend SKIP the View-Transitions modal morph** (fights Framer's `AnimatePresence`;
  low payoff — flagged in the architecture review).
- **Tunable now:** modal glass transparency (56%), nav refraction `scale` (42). One-number tweaks.
- **Offered, not done:** apply the same real SVG refraction to the **modal / case-study** glass.
- **Browser caveat:** the nav refraction is Chromium-only; Safari/Firefox get frosted-glass fallback.
- **Not yet decided:** when to merge `dev-exp` → `dev` (production) — the user's call, and a
  push to `dev` triggers deploy.
