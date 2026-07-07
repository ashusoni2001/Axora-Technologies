# Polish-phase Audit & Backlog

> Date: **2026-06-28** · Branch: **`dev-exp`** · Companion to [`design-progress.md`](./design-progress.md)
> Source: multi-agent audit — **principal-architect** + **senior-fullstack** + **security** +
> **frontend-design** lenses, each finding independently **judge-verified** (false positives dropped,
> inflated severities corrected). Calibrated to a **static portfolio SPA** (no backend, auth, forms, or user data).
>
> Status legend: ✅ **done** this session (quick-wins batch, uncommitted) · ⏳ **deferred** (reassessment).

---

## Verdict

Genuinely senior-grade static SPA — defensively written components, a tokenized runtime-theme
system, and a distinctive liquid-glass-over-reactive-dots language. **No critical issues and no
security exposure** (nothing to authenticate, no data to leak). Severity honestly caps at **one HIGH**
(shareability) plus a cluster of **medium a11y-consistency** gaps; everything else is hygiene/polish.

The single highest-impact real defect is **shareability**: `index.html` ships no Open Graph /
Twitter / JSON-LD and `public/` has no 1200×630 image, so every paste into LinkedIn (the brand's
live channel) / Slack / WhatsApp **unfurls a blank card** — a direct credibility hit for a site whose
purpose is to be a shareable consultancy showcase. The biggest *design* opportunity is to make the
**hero a self-demonstrating signature** (the headline visibly driving the dot field) and to **impose
one material/gradient hierarchy** so the four morphism languages read as one authored system.

*Judge corrections worth remembering:* "missing security headers" was downgraded **high→low/medium**
(nothing to clickjack but a `mailto:`; the real value is the securityheaders.com grade as a craft
signal). "Undefined icon throws" and "modal dereferences missing fields" were **false positives** —
the code guards both. The only genuine crash vector was `NeuralCanvas` calling `getContext` unguarded.

---

## Confirmed issues (deduped, judge-verified)

| Status | Severity | Area | Issue | Fix | Effort |
|---|---|---|---|---|---|
| ⏳ | **high** | SEO / Social | No OG / Twitter / canonical / theme-color / JSON-LD; no 1200×630 og:image → blank LinkedIn/Slack unfurls | OG + `summary_large_image` + canonical + apple-touch + `ProfessionalService` JSON-LD in `index.html`; on-brand share image in `public/` | M |
| ✅ | medium | A11y / Perf | `NeuralCanvas` ignored `prefers-reduced-motion`; `getContext('2d')` unguarded (the one real crash vector); no hidden-tab pause | matchMedia guard → static frame; `if(!ctx)return`; pause on `visibilitychange`; live `change` listener | M |
| ✅ | medium | A11y | `Hero` rotating-word cycle ignored `prefers-reduced-motion` | `useReducedMotion()` → first word static, drop blur/translate | S |
| ✅ | medium | A11y | No `:focus-visible` styling anywhere — UA default ring unreliable over glass/dots | one tokenized `:focus-visible` rule (accent outline + offset + halo) | S |
| ✅ | medium | A11y | `--ink-3` (#93a3bb) body text = 2.56:1, fails WCAG AA | darkened to `#66768e` (~4.62:1 on white) in `index.css :root` + `theme.js` frost | S |
| ⏳ | medium | A11y | `ProjectModal` — no focus trap, no focus move on open, no return to trigger; aria-label ≠ visible heading | store `activeElement`, focus `.pm-close`, trap Tab, restore on close; `aria-labelledby` → `.pm-hook` h2 | M |
| ⏳ | medium | A11y | Mobile menu — no dialog semantics / Esc / focus-trap / scroll-lock; stays open covering page when resized to desktop | mirror ProjectModal pattern; `aria-expanded`; close on desktop-width media-query change | M |
| ⏳ | medium | Perf | Render-blocking 3-family Google Fonts; webfont swap reflows the hero H1 (CLS) | `size-adjust`/`ascent-override` fallback for Bricolage; self-host woff2; preload hero weight | M |
| ⏳ | low | Perf / SEO | Brand mark is a heavy gradient PNG (~320 KB) rendered at 34px; single oversized favicon, no apple-touch/SVG/theme-color/manifest | re-export mark ~<10 KB WebP @2x; favicon set (16/32/SVG/180); `site.webmanifest` | M |
| ⏳ | low | Security / Perf | No `vercel.json` → no security headers, no explicit immutable caching | `headers` block (CSP w/ `'unsafe-inline'` style-src + fonts hosts, X-Content-Type-Options, Referrer-Policy, X-Frame-Options, Permissions-Policy, HSTS) + `Cache-Control: immutable` on `/assets/*` | S |
| ⏳ | low | Repo hygiene | Tens of MB dead git-tracked assets in `src/assets/` (mp4 + ~197 `frame_*.webp` + AI-prompt-named PNGs); only `axora-mark.png` is imported | delete from tree + purge history (BFG/`git filter-repo`); rename any kept AI-named files | M |
| ✅ | low | Dependency | `lucide-react` unused prod dep (custom `Icon.jsx` used); README stale throughout | `npm uninstall lucide-react`; rewrote README to current reality | S |
| ✅ | low | React | No ErrorBoundary — any uncaught throw white-screens the flagship | dependency-free class boundary wrapping the app in `App.jsx` with branded fallback | S |
| ⏳ | low | SEO | Fully client-rendered: empty `#root`, no `<noscript>`, no prerender | `<noscript>` brand + contact for no-JS/unfurl bots; optional SSG prerender | S |
| ⏳ | low | Perf | Full `framer-motion` proxy imported; `ProjectModal` eagerly bundled though only used on click | `LazyMotion` + `m` w/ `domAnimation`; `React.lazy` the ProjectModal subtree | M |
| ✅ | low | React / UX | `useScrollSpy` seeded active to first section → nav lit "Expertise" at page top | seed `null` | S |
| ⏳ | low | Maintainability | `SectionHeading.split(accent)` silently drops text on repeated accent / loses highlight on a miss | split on first `indexOf` + slice; dev-warn when accent not found | S |
| ⏳ | low | Dead code | `SpotCard` tilt branch unused (sole consumer passes no `tilt`) | remove the tilt prop/branch, keep spotlight writes | S |
| ⏳ | low | React | Modal body scroll-lock releases during the ~0.4s exit animation | drive lock off `AnimatePresence` `onExitComplete` (or separate `isOpen`) | S |
| ⏳ | low | React | `Marquee` uses array index as key on an intentionally duplicated list | composite key `` `${t}-${i}` `` or render two mapped halves | S |
| ⏳ | low | Reliability | Flagship "Watch demo" points to a consumer Google Drive "anyone-with-link" share | host on controlled infra / proper video host; keep `rel="noopener noreferrer"` | M |
| ⏳ | low | Dependency | Build/dev deps (vite/esbuild/postcss/picomatch) in known-advisory ranges (build-time only, not in shipped bundle) | `npm audit fix`; commit regenerated lockfile | S |

---

## Design opportunities (suggestions — MOCK-UP-FIRST before touching live components)

Respect the hard constraints: **Frost · Aurora palette unchanged · reactive dots stay · no fabricated stats · professional tone.**

1. **Hero as a self-demonstrating signature** *(impact: high · effort: L)* — staggered one-shot entrance (line → word → sub → CTAs, ~14px rise + blur 6→0 at 80ms steps); swap the word crossfade for a clipped vertical slot-roll with a 1px accent rule wiping under it; dispatch `axora-hero-pulse` on each change so NeuralCanvas emits a ring of excitation *from the headline* — the H1 literally driving the field. Reconsider the three thin stat counts for one confident mono capability line.
2. **One material + gradient hierarchy** *(high · M)* — one rule per language (glass = floating/overlay; neu = inset chips/tiles; clay = primary affordances only; flat card = the "specimen tray" holding chips); demote the *animated* gradient to the hero word only (headings/contact/stat numbers → static accent gradient or solid `--accent`). Align About differentiator tiles with the Expertise bento; make the project card one deliberate rule.
3. **Break the dead-center axis** *(high · M)* — two-column editorial About (sticky left-aligned Bricolage heading; body + 2×2 grid scroll left-aligned on the right), or hang the Work header in the left margin against full-width cards. One asymmetric moment signals authorship.
4. **Dots causally connected to the UI** *(medium · M)* — rare click ripple (one expanding ring) + local repulsion under the nav pill / open modal rects, so the glass appears to physically displace the field it refracts.
5. **Exploit Bricolage's weight + optical-size range** *(medium · S)* — hero H1 → 800, `-0.04em`, `font-optical-sizing:auto`; section heads 700; cluster sub-heads 500–600. Make one weight jump an intentional beat (currently a flat 700).
6. **Compose the Expertise bento by span, not just width** *(medium · M)* — feature tiles get an oversized low-opacity ghost icon bleeding off a corner or a one-line mono signal; small tiles compress to well + title; cycle the icon-well tint across the three accent tokens.
7. **Project cards: live mini-architecture preview** *(medium · M)* — render a compact 3–5 node version of each project's real `caseStudy.pipeline` on the card (reuse PipelineFlow), flowing on hover, expanding into the full diagram in the modal. Card→modal visual thread from real data.
8. **Contact as a culminating engineered moment** *(medium · M)* — email as a mono "terminal prompt" with a blinking accent caret + click-to-copy; real channels (email/LinkedIn/phone) as honest mono chips; convergence pulse densifies the dot field behind the card, bookending the hero.
9. **Author the case-study modal's internal scroll** *(medium · M)* — slim accent scroll-progress rail inside the glass; stagger each `.pm-sec` in on `whileInView` (~24px, 60ms steps), reduced-motion aware.
10. **Scroll-velocity-reactive Marquee** *(medium · S)* — drive the discipline ribbon from scroll velocity (`useScroll` + `useVelocity`), slight skewX on fast scroll, momentary reverse on scroll-up; keep the reduced-motion gate.

---

## Recommended sequence (full polish phase)

1. ✅ Repo hygiene — remove `lucide-react`, rewrite README *(audit-fix on deps pending: `npm audit fix`; delete dead `src/assets/` media + purge history)*.
2. ✅ Canvas + correctness insurance — NeuralCanvas guards *(ErrorBoundary done)*.
3. ✅ A11y quick batch — `:focus-visible`, `--ink-3` contrast, Hero reduced-motion, `useScrollSpy` seed.
4. ⏳ **Shareability (HIGH)** — OG/Twitter/canonical/JSON-LD + 1200×630 image; `<noscript>`; favicon set + apple-touch + theme-color + manifest + robots.txt + sitemap.xml; right-size brand mark.
5. ⏳ `vercel.json` — security headers + immutable caching.
6. ⏳ Fonts — self-host woff2 + `size-adjust` fallback to kill the hero-swap CLS; preload hero weight.
7. ⏳ Focus/dialog parity — ProjectModal focus-trap/restore/`aria-labelledby` + scroll-lock-on-exit; mobile menu dialog pattern + desktop-resize close.
8. ⏳ Design — system rules first: typography weight/opsz pass (#5), then material + gradient hierarchy (#2).
9. ⏳ Design — signature moment: hero entrance + slot-roll word + `axora-hero-pulse`, with dots-causal behaviors (#1, #4).
10. ⏳ Design — rhythm & richness: asymmetric editorial About (#3), Expertise bento composition (#6).
11. ⏳ Design — content depth: project-card mini-architecture preview + modal scroll choreography (#7, #9); Contact engineered moment (#8); velocity-reactive Marquee (#10).
12. ⏳ Optional perf/cleanup tail: LazyMotion + lazy-load ProjectModal; minor React nits; move the demo off Google Drive; optional SSG prerender.
