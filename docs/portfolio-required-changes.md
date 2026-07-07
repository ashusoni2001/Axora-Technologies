# Axora Portfolio — Design Change Log & Implementation Guide

## Instructions for Claude Code (read this first)

You are implementing finalized design changes in the **Axora Technologies portfolio repo**
(React 19 + Vite 7 + Tailwind CSS 4 + Framer Motion 12, JSX not TypeScript).
These decisions were made by the owner in a separate design-review session with a
working prototype. Everything you need (copy, exact CSS values, data structures, file paths)
is embedded below; do not invent content or styling beyond what is specified.

### Repo orientation
- All section content lives in `src/data/*.js` — edit data there, not inside components.
- Sections are in `src/sections/`, layout chrome in `src/components/layout/`, reusable UI in `src/components/ui/`.
- Styling is **runtime CSS custom properties + bespoke classes in `src/index.css`**. Style with the semantic tokens (`--ink-*`, `--surface*`, `--line*`, `--accent*`, `--bg-*`) — **never hardcode colors**. Tailwind utilities are for layout only.
- Scroll reveals use `components/ui/Reveal.jsx` (Framer Motion, honours `prefers-reduced-motion`). Icons come from the custom set in `components/ui/Icon.jsx`, referenced by name string.
- The site ships locked on the Frost · Aurora light theme; the theme picker is a dev build flag — don't touch it.

### How to work through this document
1. Implement changes **in order** (CHANGE-01 → 02 → 03). CHANGE-02 moves the Work section; CHANGE-03 modifies it — order matters.
2. Each entry has: **What we discussed** (the why — read it so your judgement calls match intent), **Final design** (the what, exact), and **Implementation notes** (the how, file by file). Treat "Final design" + "Implementation notes" as the spec; "What we discussed" as rationale.
3. Copy strings **verbatim** — headlines, chips, angle copy and playbook text were all finalized word-for-word. Don't paraphrase or "improve" copy.
4. "Prototype reference" lines point at files from the design session — they are **not in this repo**; ignore them. The specs below are self-contained.
5. After each change: `npm run dev` and visually verify (desktop + ≤700px mobile + `prefers-reduced-motion`), then `npm run lint`. Commit per change with the change ID in the message (e.g. `CHANGE-01: expertise domains`).
6. Open items are marked **NOT yet decided** — do NOT implement those; leave them and flag them back to the owner.

### Why these changes exist (one-line summary each)
- **CHANGE-01 (Expertise):** 9 thin tiles under 3 headings had dead space and no scannable breadth → 5 dense domain cards whose capability chips communicate range at a glance.
- **CHANGE-02 (Section order):** proof before persuasion — About's trust claims land harder after visitors have seen the case studies.
- **CHANGE-03 (Work personalization):** visitors from a target industry should feel "they understand my business" — sector selector + per-sector value framing + honest playbooks for sectors without shipped work.

---

## CHANGE-01 — Expertise section: 9 tiles / 3 subsections → 5 domain cards with capability chips

- **Status:** Finalized 2026-07-06
- **Section / component:** Expertise (`src/sections/Expertise.jsx`, `src/data/expertise.js`, `src/index.css`)

### What we discussed
- Problem: the old section had 3 subsection headings (AI & ML / Data & Insight / Software & Product) with 9 near-identical tiles. Tile size didn't match content density (a `sp-4` tile held one sentence) → dead space, inconsistent rhythm.
- User's initial proposal: merge into one section with 4 mega-cards (2 AI + 2 Data). Challenged on two points: (1) it silently dropped the Software service line, which the About section's "built like real software" positioning depends on; (2) paragraph-style mega-cards trade dead space for text walls.
- Three directions were mocked up (`Expertise Options.dc.html`): **1a** domain cards + capability chips, **1b** editorial numbered rows, **1c** interactive segmented panel. **User picked 1a.**

### Final design (implement exactly)
One section, no subsection headings, **5 domain cards** in a 2×2 grid + 1 full-width anchor card, max-width 980px centered:

1. **Generative AI & Agents** (icon: `aiEngineering`) — "Systems that reason, plan and act — from RAG to autonomous multi-agent products, shipped at scale." Chips: AI system design · RAG pipelines · Multi-agent architectures · Orchestration engines · LLM evaluation · Scalable AI applications
2. **Core ML & Deep Learning** (icon: `deepLearning`) — "From training deep neural networks to deploying models behind production-grade applications." Chips: Predictive modelling · Computer vision · Speech & language · Forecasting · PyTorch · TensorFlow · Model deployment
3. **Data Science & Engineering** (icon: `dataScience`) — "Large, messy datasets turned into decisions — rigorous modelling on pipelines built to last." Chips: Statistical modelling · Predictive analysis · ETL pipelines · Big Data analytics · Cleaning & transformation · Experimentation
4. **Analytics & BI** (icon: `powerbi`) — "Dashboards and reporting that make complex operational data instantly understandable." Chips: Power BI dashboards · Business intelligence · Executive reporting · Interactive data apps · KPI design
5. **Software Engineering** (icon: `softwareEngineering`) — full-width anchor card, horizontal layout: left block (icon + title + "The discipline underneath everything we ship.", fixed ~320px), right block = chip cloud. Chips: Backend & APIs · Clean architecture · Full-stack web apps · Cross-platform mobile · Testing & CI/CD

### Implementation notes for the real repo
- `src/data/expertise.js`: replace `clusters` (3 groups × 9 items) with a flat `domains` array of 5 entries: `{ icon, title, desc, chips: [...], anchor?: true }`. The 5th entry gets `anchor: true` (full-width horizontal variant).
- `src/sections/Expertise.jsx`: drop the cluster loop + `cluster-head`. Render one grid; keep `SectionHeading` with sub copy changed **"Nine disciplines…" → "Five domains across AI, data and software — delivered as one integrated engineering practice."** Keep `Reveal` staggering (delay `i * 70`).
- Card styling: reuse `.xtile` (neumorphic tile) with overrides `border-radius: 20px; padding: 28px`. Card header is a flex row `gap: 14px` (existing `.ic` icon square + `h4` at `font-size: 19px`). Desc `p` at `font-size: 14px`, `max-width: none`. Chips are the existing `.tag` class in a flex-wrap row, `gap: 8px; margin-top: 4px`.
- Grid: `display: grid; grid-template-columns: 1fr 1fr; gap: 16px; max-width: 980px; margin-inline: auto;`. Anchor card: `grid-column: 1 / -1`, `flex-direction: row; align-items: center; gap: 28px`; collapse to column below ~700px. Grid collapses to 1 col below ~700px (chips wrap fine).
- Note: `.tag` on the site inherits the neumorphic shadow treatment from the `.pcard .tag` override only inside project cards; inside `.xtile` the base bordered `.tag` style applies — this is intended.
- CSS cleanup once shipped: `.cluster`, `.cluster-head`, `.bento`, `.sp-*` become unused (verify no other usage before deleting).

### Consistency ripple (flagged, NOT yet decided)
- Hero meta still says **"9 Expertise areas"** → should become "5 Domains" or similar (`src/data/hero.js`).
- Marquee still scrolls the 9 old discipline names (`Marquee.jsx` derives from `expertise.js` — will break/change with the new data shape; simplest: scroll the 5 domain titles or a curated chips list).
- Decide both with the user before shipping.

### Prototype reference
- Working copy: `Axora Site.dc.html` → Expertise section.
- Option exploration: `Expertise Options.dc.html` (1a chosen; 1b/1c preserved for reference).

---

## CHANGE-02 — Section order: About moves after Work

- **Status:** Finalized 2026-07-06
- **Section / component:** `src/App.jsx`, `src/data/navigation.js`, `src/components/layout/Navbar.jsx`, `src/components/layout/Footer.jsx`

### What we discussed
- Proposal (user): move About below Work. Agreed and strengthened the rationale: old flow asked for trust before showing evidence ("what we do → why trust us → proof"); new flow is "what we do → **proof** → why trust us → ask". About's claims land harder right after the case studies, and differentiators → contact CTA is a smoother handoff.
- Trade-off acknowledged: no "who we are" block between hero and the deep technical case studies — accepted (hero + expertise carry identity).
- Optional "copy seam" (About lead opening with a nod to the work above) was offered; user reviewed the mockup with About moved **untouched** — keep it untouched.

### Final design (implement exactly)
New page order: **Hero → Marquee → Expertise → Work → About → Contact.**

### Implementation notes for the real repo
1. `src/App.jsx`: swap `<About />` and `<Work />` so the JSX reads `<Hero /> <Marquee /> <Expertise /> <Work /> <About /> <Contact />`.
2. `src/data/navigation.js`: reorder `navLinks` to Expertise · Work · About · Contact (drives both navbar and footer "Navigate" list — no other edits needed there).
3. `src/components/layout/Navbar.jsx`: update the `useScrollSpy([...])` id array to `["expertise", "work", "about", "contact"]` so active-link highlighting follows the new order.
4. No copy, style, or component changes — sections move verbatim.

### Prototype reference
- Working copy: `Axora Site.dc.html` (order applied).

---

## CHANGE-03 — Work section: industry personalization (sector chips + playbook)

- **Status:** Finalized 2026-07-06
- **Section / component:** Work (`src/sections/Work.jsx`, new `src/data/sectors.js`, `src/index.css`)

### What we discussed
- Goal: visitors pick their industry and immediately feel "these people understand my business" — relevant work, industry-specific value framing, and honest expertise display for sectors without showcased projects.
- Challenges raised and accepted: (1) don't gate proof behind a click — default state must still show all 3 flagship projects; (2) don't rewrite project identities per sector (reads as spin when toggled) — instead keep the card identity and add a sector-specific "Why it matters here" angle strip; (3) proof vs pitch tension acknowledged.
- Three directions mocked (`Work Options.dc.html`): **3a** sector chips on Work, **3b** two-pane industry console, **3c** separate "Solutions by industry" section. **User picked 3a**, then we iterated formatting: playbook panel restructured (headline + CTA header row, 2-col pain list, numbered use-case cards, outcomes footer) and the angle strip label stacked above its text (was side-by-side and looked misaligned).

### Final design (implement exactly)
**Behavior**
- Chip bar (centered, wrapping) above the project grid: `Featured` (default) + 6 sectors: Real Estate · Healthcare & Pharma · LegalTech & Professional Services · Logistics & E-commerce · SaaS & Enterprise IT (GCCs) · Mobility & Consumer Safety.
- `Featured`: all 3 project cards exactly as today, no angle strips, no playbook.
- Sector selected: only projects mapped to that sector remain (cards unchanged otherwise); each visible card gains an "angle strip" between tags and foot; a **playbook panel** appears below the grid; section sub-copy is the personalization invite.
- Section sub-copy: "Pick your industry — we'll show you the work and the problems we'd attack for you."

**Project ↔ sector mapping (with per-sector angle copy — see data block)**
- AirRAG → Real Estate (live pilot), Healthcare & Pharma, LegalTech, SaaS & GCCs
- JAAGI → Healthcare & Pharma, SaaS & GCCs
- SafeRide → Logistics & E-commerce, Mobility & Consumer Safety

**Angle strip** (`.angle`): column layout, `gap: 6px`, mono uppercase label "WHY IT MATTERS HERE" (9.5px, letter-spacing .1em, `var(--accent)`, nowrap) above 13px/1.55 text in `var(--ink-0)`; background `var(--accent-soft)`, border `1px solid var(--accent-line)`, radius 12px, padding 12px 14px; margin `-4px 0 20px` (sits between `.tags` and `.foot`).

**Chip** (`.schip`): mono 12.5px, padding 9px 16px, pill (999px), border `var(--line)`, bg `var(--surface-2)`, color `var(--ink-1)`; hover → border `var(--accent-line)`, color `var(--ink-0)`; active `.on` → the primary-button gradient `linear-gradient(100deg, var(--accent-3), var(--accent), var(--accent-2))`, color `var(--accent-ink)`, weight 700, border transparent.

**Playbook panel** (reuses `.card`, padding `36px 38px 32px`, margin-top 22px):
1. Header row (flex, space-between, wrap): left = kicker "⟨Sector⟩ playbook" (with pulsing dot) + display-font headline 26px/700 (per-sector `headline` field); right = primary btn-sm CTA "Discuss a ⟨short sector⟩ build" → `#contact`.
2. "Industry pain today" (`.pm-h` mono label): 2-col grid (`gap: 12px 28px`), each item = 6px accent dot + 14px/1.6 `var(--ink-1)` text.
3. "What we'd build": 2-col grid of use-case cards (`gap: 14px`): border `var(--line)`, bg `var(--surface-2)`, radius 16px, padding 20px 22px; 40px accent-soft square with mono number 01–04; title 15.5px/600; desc 13.5px/1.58 `var(--ink-2)`.
4. Footer (flex space-between, top border): left = "Outcomes we target" label + `.tag` chips; right = italic 12.5px `var(--ink-3)` transparency note: "Proposed builds, not past work — we're transparent about that. The engineering behind them is proven above."
- Mobile: both 2-col grids collapse to 1 col ≤700px; chip bar wraps naturally.

### Sector content data (verbatim — create `src/data/sectors.js`)
Create this file with exactly this content (finalized copy — do not edit strings). CTA label rule: `"Discuss a " + name.split(" &")[0].split(" (")[0] + " build"`.

```js
/* Industry personalization data for the Work section (CHANGE-03).
   proof maps projectId -> the sector-specific "Why it matters here" angle line. */
export const sectors = [
  {
    name: "Real Estate",
    headline: "Stop the leakage hiding in your documents and leads.",
    challenges: [
      "100-page leases hide clauses (HVAC caps, rent escalations) that leak money when missed in the ERP.",
      "Raw ad leads flood sales teams; most are unqualified and hot ones go cold in the queue.",
      "Land due diligence runs on messy, multilingual municipal records — slow and legally risky.",
      "Construction vendors over-bill against POs and site logs nobody has time to reconcile.",
    ],
    useCases: [
      { t: "Commercial lease abstracting", d: "GraphRAG pipelines that map complex clauses and sync terms straight into your ERP." },
      { t: "WhatsApp pre-sales qualification", d: "Multi-agent systems that engage ad leads instantly, answer from brochure data, filter and hand off hot leads." },
      { t: "Automated land due diligence", d: "Multimodal portals over multilingual records — flagging ownership mismatches and zoning risks." },
      { t: "Construction invoice auditing", d: "Agents that reconcile invoices against POs and delivery logs, flagging over-billing on Power BI." },
    ],
    outcomes: ["Financial leakage prevented", "Faster lead conversion", "Lower legal risk", "Vendor cost control"],
    proof: {
      airrag: "Already answering document queries over WhatsApp for a major NCR developer — the same agent stack behind lease abstracting and lead qualification.",
    },
  },
  {
    name: "Healthcare & Pharma",
    headline: "AI on patient data — without patient data leaving the building.",
    challenges: [
      "Clinical notes and patient records are messy, multimodal and locked out of cloud AI by compliance.",
      "Prior-authorization burns clinician hours on repetitive document work.",
      "Vendors demand data leave your infrastructure — a regulatory non-starter.",
    ],
    useCases: [
      { t: "Multimodal clinical RAG", d: "Digest messy patient data and clinical notes with page-level citations — fully on-prem." },
      { t: "Prior-authorization agents", d: "Autonomous agents that assemble, check and file insurance prior-auth packets." },
      { t: "Air-gapped deployment", d: "The full AI stack on your hardware — zero outbound calls once models are cached." },
    ],
    outcomes: ["Compliance-safe AI", "Clinician hours reclaimed", "Faster approvals"],
    proof: {
      airrag: "Air-gapped by default with page-level citations — built for exactly this class of sensitive-document work.",
      jaagi: "Proof we ship fully local AI: the entire voice pipeline runs on-device, zero audio leaves the machine.",
    },
  },
  {
    name: "LegalTech & Professional Services",
    headline: "Unlock the billable hours trapped in document review.",
    challenges: [
      "High-value hours are consumed by contract review and document discovery.",
      "Cross-document questions (precedents, clause variants) defeat keyword search.",
      "Client confidentiality rules out consumer AI tools.",
    ],
    useCases: [
      { t: "Contract intelligence (GraphRAG)", d: "A knowledge graph across your contract base — clause comparison, risk flags, precedent search." },
      { t: "Domain-tuned copilots", d: "Fine-tuned models on your practice's language, deployed inside your walls." },
    ],
    outcomes: ["Billable hours reclaimed", "Full review coverage", "Confidentiality preserved"],
    proof: {
      airrag: "Citations that hold up to scrutiny — every answer pinned to the exact page, with an entity graph for multi-document questions.",
    },
  },
  {
    name: "Logistics & E-commerce",
    headline: "Pipelines that don't break when your vendors do.",
    challenges: [
      "Vendor schema changes silently break ingestion pipelines — and margins are too thin for outages.",
      "Data quality issues surface downstream, after bad decisions are already made.",
      "Fleet and delivery operations generate streams nobody monitors in real time.",
    ],
    useCases: [
      { t: "Self-healing data pipelines", d: "Ingestion that detects vendor schema drift and adapts instead of breaking." },
      { t: "Autonomous data-quality monitoring", d: "Agents that watch your warehouse for anomalies and flag them before dashboards lie." },
      { t: "Real-time fleet audio safety", d: "In-vehicle threat detection for delivery and driver networks — online, offline and hybrid." },
    ],
    outcomes: ["Fewer pipeline outages", "Margin protection", "Trustworthy dashboards"],
    proof: {
      saferide: "Real-time streaming AI engineered for vehicles at fleet scale — 7-stage pipeline, 299 automated tests, full offline fallback.",
    },
  },
  {
    name: "SaaS & Enterprise IT (GCCs)",
    headline: "Ship AI features without the token bill scaling faster than revenue.",
    challenges: [
      "LLM API spend grows unpredictably as features scale.",
      "No monitoring for drift, regressions or silent model failures in production.",
      "Agent features are hard to make reliable enough to ship.",
    ],
    useCases: [
      { t: "LLMOps cost control", d: "Routing, caching and swappable backends that slash API token spend." },
      { t: "Continuous model monitoring", d: "Evaluation harnesses and drift detection wired into your CI/CD." },
      { t: "Production agent infrastructure", d: "Orchestration, memory and tool-use patterns hardened for real users." },
    ],
    outcomes: ["API spend slashed", "Reliable AI features", "Faster AI roadmap"],
    proof: {
      jaagi: "A full production agent stack — orchestration, persistent memory, tool calling — running as real software.",
      airrag: "Four swappable LLM backends per channel — the cost-routing pattern we'd bring to your stack.",
    },
  },
  {
    name: "Mobility & Consumer Safety",
    headline: "Safety that doesn't wait for a button press.",
    challenges: [
      "Safety features are reactive — useless when a passenger can't reach the SOS button.",
      "Connectivity dead zones kill cloud-dependent safety systems.",
      "India-scale products need Hindi, English and code-mixed Hinglish.",
    ],
    useCases: [
      { t: "In-vehicle threat detection", d: "Continuous audio monitoring with speaker identification and automatic GPS escalation." },
      { t: "Offline-first on-device AI", d: "Full on-device fallback — VAD, ASR and classification with zero network." },
    ],
    outcomes: ["Safety as differentiator", "No dead zones", "Multilingual by design"],
    proof: {
      saferide: "Purpose-built for this: 7-stage pipeline, voice fingerprinting, 30-second auto-escalation, 299 automated tests.",
    },
  },
];
```

Note: project ids (`jaagi`, `saferide`, `airrag`) match the existing `id` fields in `src/data/projects.js`. The playbook is always rendered for the active sector — every sector above has ≥1 mapped project, but the design also works if a future sector has an empty `proof` map (grid empty, playbook + CTA carry the section).

### Implementation notes for the real repo
- `src/sections/Work.jsx`: add `const [sector, setSector] = useState(null)` (null = Featured). Render chip bar from `sectors.js`; filter `projects` by `sector === null || sectors[sector].proof[p.id]`; pass `angle={sectors[sector]?.proof[p.id]}` into the card; render `<SectorPlaybook sector={sectors[sector]} />` below the grid when a sector is active. Keep the existing modal/StatBand/Reveal wiring untouched.
- Angle strip renders inside the card between `.tags` and `.foot` only when `angle` is set.
- `src/index.css`: add `.schip` (+ `:hover`, `.on`) and `.angle` (+ `.lbl`) exactly as specced above. Playbook styles can be a small `.pbk-*` class group or inline — match the values above; reuse existing `.pm-h`, `.tag`, `.kicker`, `.btn` classes.
- Animate card filtering with Framer Motion (`AnimatePresence` + layout) for smooth reflow; playbook enters with the existing `Reveal` rise variant.
- **Adaptive grid (refinement, locked after review):** the grid's column count follows the number of visible projects — 3 → `repeat(3, 1fr)` (today's `.pgrid`); 2 → `grid-template-columns: repeat(2, 1fr); max-width: 920px; margin-inline: auto;`; 1 → `grid-template-columns: minmax(0, 720px); justify-content: center;` (single centered spotlight card). This kills the dead right-hand columns when a sector maps to fewer than 3 projects. In React: apply as an inline `style` on the grid computed from the filtered count.
- Honesty rule (content, enforced): playbook items are always framed as proposed builds ("What we'd build"), never as past work; live engagements keep their real status badges on the project cards.

### Prototype reference
- Working copy: `Axora Site.dc.html` → Work section (fully interactive, all 6 sectors populated).
- Option exploration: `Work Options.dc.html` (3a chosen after formatting iteration; 3b/3c preserved).

---

_Next entries will be appended below as we lock them in._

---

## Template for entries

### CHANGE-NN — Title
- **Status:** Finalized YYYY-MM-DD
- **Section / component:** e.g. Hero (`src/sections/Hero.jsx`)
- **What changes:** …
- **Why:** …
- **Files to edit:** …
- **Implementation detail:** exact CSS/tokens/markup, before → after values
- **Prototype reference:** where to see it in the working copy
