# Axora Portfolio — Design Audit & Roadmap

> Recorded: 2026-06-14 · Branch: `dev-exp` · Method: full design-system source review
> (every section, `index.css` end-to-end, project modal, pipeline, material treatments)
> through the frontend-design discipline. Goal: make the site itself a **proof of
> concept** of Axora's design + engineering taste.

---

## Executive summary

The **engineering** is top-tier: runtime token theming, role-assigned material
treatments (neumorphism / claymorphism / glassmorphism), `prefers-reduced-motion`
honoured throughout, animated architecture diagrams, a custom SVG icon set.

The **visual design** currently sits in "premium SaaS template" territory rather than
"unforgettable POC." Three converging, well-known generic tells pull it there:

1. **Space Grotesk as the only typeface** — the most overused "tech startup" font of
   the era; named explicitly in design guidance as the example to avoid.
2. **Cyan→blue→violet gradient on near-white** — close to the "purple-gradient-on-white"
   cliché, and applied to *everything* (hero words, every stat number, buttons,
   toplines), which flattens hierarchy.
3. **Everything is centered** — hero, every section head, expertise, about, contact.
   The safest, most templated layout there is.

None are *bad* — they are *expected*. For a site that must **prove** elite taste,
expected is the enemy.

---

## Strengths to preserve

- Token-driven architecture + runtime theme engine (12 bases × 14 accents).
- Material treatments already present with clear **role logic**:
  - Neumorphism = static chips/tags
  - Claymorphism = clickable buttons
  - Glassmorphism = surfaces over busy backgrounds
- Accessibility: `prefers-reduced-motion` on every animation; ARIA in modal/pipeline.
- Animated pipeline / agent-architecture diagrams — the standout differentiator,
  perfectly on-brand for an AI-engineering consultancy.
- Consistent spacing scale via `clamp()`, consistent radii.

---

## Audit by lens

### 1. Typography — biggest lever, lowest effort
- **Problem:** one sans (Space Grotesk) does display *and* body; no pairing means no
  contrast of character. Reads uniform and slightly mechanical at body sizes.
- **Fix:** distinctive **display face** for headlines + a **refined body face**; keep
  JetBrains Mono for the technical/kicker voice (that part works).
  - Display candidates: Clash Display, Bricolage Grotesque, Geist, or an editorial
    serif (Instrument Serif / Fraunces) for high-taste contrast.
  - Body candidates: Geist Sans, Hanken Grotesk, Söhne-style neutrals.
- **Impact:** the single fastest move from "templated" to "art-directed." Near-zero-risk
  swap in the `@theme` block + `--sans` token.

### 2. Color & depth
- **Problem:** the blue–violet gradient is the whole identity *and* it is everywhere, so
  nothing pops. Surfaces are pure `#ffffff` on a barely-tinted base → "default white SaaS."
- **Fix:**
  - One **signature gradient moment** (hero word or one hero panel); stat numbers,
    toplines, secondary accents become **solid ink or solid accent**.
  - Shift the base off pure white toward a tinted "paper," or add a **dark hero band**
    so glass/morphism has something to sit over.
  - Consider **one owned, unexpected accent** (lime / amber / coral) as the interaction
    color so the palette isn't 100% blue-violet.

### 3. Spatial composition — the "memorable" lever
- **Problem:** six sections, all center-aligned, all symmetric. No asymmetry, overlap,
  or grid-breaking.
- **Fix (pick 1–2):**
  - Asymmetric hero — copy left, floating glass stat/architecture panel right.
  - Bento grid for Expertise — mixed-size tiles vs uniform `auto-fit` grid.
  - Editorial Work section — alternating left/right rows with big numbers.

### 4. Backgrounds & detail
- `--noise-op: 0` — **grain is switched off**; raise to ~0.3–0.5 for tactile depth (free).
- Aurora radials + neural canvas are great but **nothing samples them**; flat white cards
  sit on top. Glass surfaces are what let the background show through.
- Add `text-wrap: balance` on headings; reduce gradient-number overuse to the hero only.

### 5. Motion
- Solid and accessible but conventional (reveal-on-scroll, hover lift, shimmer, marquee).
- Modern additions: one **orchestrated hero entrance** (staggered headline → sub → CTA →
  panel), **CSS scroll-driven animations** (baseline in Chromium), and the
  **View Transitions API** for the project-modal open (card morphs into panel — a literal
  "morphism" moment).

---

## Morphism as the proof of concept

Currently applied **too timidly to function as a POC** — micro-applications you don't see
until you hover. Research direction (2025–26): Apple's **"liquid glass"** language —
layered, blurred, light-refracting glass over *living* backgrounds — alongside continued
**bento + soft-neumorphic** UI. Maps cleanly onto what already exists.

Escalation plan (keep the existing role logic; **escalate intensity, not surface count**):

| Surface | Move | Type |
|---|---|---|
| **Hero panel (new)** | Floating frosted-glass card (architecture diagram / stats) over neural+aurora bg | Glass |
| **Project modal panel** | Currently solid `--surface`; promote to true frosted glass over the dimmed overlay | Glass |
| **Nav** | Floating glass "island" pill instead of full-width bar | Glass |
| **Expertise bento** | Mixed-size tiles; feature tile = soft neumorphic well, icon chips inset | Neu |
| **StatBand chips** | Soft-extruded metric readouts (reuse `--neu-*` tokens) | Neu |
| **Pipeline agent core** | Puffy clay treatment on the *core only* | Clay |

The rule: one bold glass hero + glass modal + a bento beats sprinkling morphism on twelve
small things.

---

## Prioritized roadmap

**Tier 1 — template → designed (do first)**
1. Type system: display + body pairing (drop Space Grotesk as the everything-font).
2. Turn on grain; tint the base off pure white.
3. Tame the gradient to one signature moment; solid everything else.

**Tier 2 — the morphism POC**
4. Floating glass hero panel + glass nav island.
5. Promote the modal to true frosted glass.
6. Bento Expertise grid mixing neu/glass tiles.

**Tier 3 — the "wow" polish**
7. Orchestrated hero entrance + scroll-driven animations.
8. View Transitions for modal open.
9. Asymmetric / editorial Work layout.

---

## Open decisions (set before building)

1. **Type direction** — bold display + serif body (editorial, high-taste) vs clean modern
   grotesk pairing (safer, techy). Sets the whole personality.
2. **Base mood** — tinted light "Frost" vs a dark hero band for drama (makes glass pop hardest).
3. **Grid-breaking** — centered-but-refined vs committed asymmetric hero + bento (more
   memorable, more work).

---

## Constraints carried from project conventions

- Never hardcode colors — style via semantic tokens (`--ink-*`, `--surface*`, `--line*`,
  `--accent*`, `--bg-*`) and the bespoke classes in `index.css`.
- All section data lives in `src/data/` — edit there, not in components.
- Theme palette ships **locked on Frost · Aurora** (`VITE_THEME_PALETTE` off by default).
  Any new morphism must use `color-mix`/token-based values so it survives the dark bases.
- Tone: professional consultancy — no fabricated stats.
