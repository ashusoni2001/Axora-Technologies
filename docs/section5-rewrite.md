# Section 5 — Non-Technical + Neuromarketing Rewrite

> **Status:** draft for owner review (2026-07-14). Finalise per-industry, then wire into
> `src/data/sectors.js` / `src/data/projects.js`. See [`design-progress.md`](./design-progress.md) §Content phase.
> **Artifacts (private):** rewrite → https://claude.ai/code/artifact/4e556fb5-80cc-42d8-af29-25832c509bf5 ·
> code-grounded audit (diagnosis) → https://claude.ai/code/artifact/45cbe49b-8661-4207-ab67-496b454c5945
>
> **Ground rules baked in:** non-technical reader; plain-English product labels (code-names demoted to tags);
> every claim verified against the actual code (`AirRag-v2` / `JAAGI` / `SafeRide-V2`); **never marketed as a
> prototype**; SafeRide = "connects to your alert system" (never "sends alerts"); AirRAG air-gap/enterprise
> claims dropped; curated **lead / support / set-aside** per industry.

## Approach
Problem-first felt-pain HEADLINES fused with plain, jargon-free BODY lines, one warm non-technical voice,
three consistent plain-English product labels. Each sector leads its single genuine fit, keeps other
plausible products brief, and openly sets aside misfits with a one-line honest reason. Every claim sits
inside the code-verified bounds; the real M3M pilot is used only where it's real (Real Estate).

Product labels: **Ask-Your-Documents Assistant** = AirRAG · **In-Cab Safety Guardian** = SafeRide ·
**Your Private AI Copilot** = JAAGI.

---

### Real Estate
**Headline:** The lease clause you missed is the deal you lose.
**Sub:** Every answer your team needs is already written down — just buried across a hundred agreements, price sheets and project files.

- **★ LEAD — Ask-Your-Documents Assistant (AirRAG):** Stop scrolling PDFs at 11pm. Ask about any lease, price list or project file in plain words — right inside WhatsApp — and get the answer with the exact page it came from, in English or Hinglish. Already live in a pilot with NCR developer M3M.
- **· Support — Your Private AI Copilot (JAAGI):** On your own PC, point it at your listing files and agreements. It reads them, answers with the source, and can run property research for you online — and it drafts nothing until you've approved it first.
- **✕ Set aside — In-Cab Safety Guardian (SafeRide):** One narrow fit here: watching over an agent's cab ride to a far, first-time viewing. It doesn't cover the property tour itself.

### Healthcare & Pharma
**Headline:** Your team knows the protocol exists. Finding it costs them the afternoon.
**Sub:** Manuals, policies and guidelines, scattered across folders no one has time to dig through.

- **★ LEAD — Ask-Your-Documents Assistant (AirRAG):** Let staff ask any question about your manuals, policies and guidelines in plain words and get the answer with the exact page — running on your own servers, so your documents stay in-house. Built for internal know-how, not patient records.
- **· Support — Your Private AI Copilot (JAAGI):** A private research aide on your own PC. Dictate notes out loud — your voice never leaves the machine — and get answers, with the source, across your own journals, protocols and guidelines. Best kept to non-patient work.
- **✕ Set aside — In-Cab Safety Guardian (SafeRide):** Not a clinical tool. Its one honest use here is watching over people during an ambulance or patient-transport ride — not home visits.

### LegalTech & Professional Services
**Headline:** A week billed to reading. The answer was on page 300.
**Sub:** Contracts, case files, compliance binders — the client waits while you dig.

- **★ LEAD — Ask-Your-Documents Assistant (AirRAG):** Ask a plain question across your contracts and case files, and every answer opens the source at the exact page — with each person seeing only the files they're allowed to. A fast first pass to check against, never a shortcut past your judgment.
- **· Support — Your Private AI Copilot (JAAGI):** Draft and edit documents with a copilot that moves only after you approve each step. For privileged matter, switch it to run entirely offline on office machines, so the work never leaves the room.
- **✕ Set aside — In-Cab Safety Guardian (SafeRide):** No role inside the practice. Its only honest use is a quiet safety check for someone in a cab to a late-night or unfamiliar assignment.

### Logistics & E-commerce
**Headline:** It's 1am, and your delivery rider is on a road you'd never take alone.
**Sub:** One bad night out there is a cost no dashboard warns you about — until it's too late.

- **★ LEAD — In-Cab Safety Guardian (SafeRide):** It listens for trouble during the ride, and if it hears a threat it starts a 30-second countdown and captures live location — then links to your own alert system so the right people can be reached. No panic button to reach for. It works in Hindi, English and Hinglish, and keeps going even with no signal. Now in early access with safety-first operators.
- **· Support — Ask-Your-Documents Assistant (AirRAG):** Turn your shipping policies, supplier terms and operating manuals into something staff can just ask — over WhatsApp, no app, no login — with every answer pinned to the exact procedure. It reads the documents you give it, not your live order data.
- **✕ Set aside — Your Private AI Copilot (JAAGI):** On a desktop it can read your order and inventory spreadsheets and write plain-English summaries — a personal analysis aide, not a live order-tracking system.

### SaaS & Enterprise IT (GCCs)
**Headline:** Every new hire relearns what the last one already wrote down.
**Sub:** Hard-won know-how, locked in documents nobody can search fast enough.

- **★ LEAD — Ask-Your-Documents Assistant (AirRAG):** Let your teams ask your runbooks, technical docs and HR policies in plain words and get answers with the exact source — then drop that same search straight into your internal staff portal. It searches the documents you upload, not a live wiki.
- **· Support — In-Cab Safety Guardian (SafeRide):** For the night-shift team riding home by cab, a quiet guardian that listens for trouble and runs a 30-second, GPS-tagged countdown, then links to your own alert system — real duty of care, one employee at a time.
- **✕ Set aside — Your Private AI Copilot (JAAGI):** For an individual engineer it's a genuine private copilot — file edits, commands and browser chores, each behind an approval it never crosses on its own. But it's a per-person tool, not a company-wide rollout, and it won't plug into Slack or Jira.

_(Note: LEAD swapped to AirRAG here — differs from the shipped `proof`-map, which leads JAAGI. Owner to confirm.)_

### Mobility & Consumer Safety
**Headline:** Every passenger protected by something that never looks away.
**Sub:** No panic button to find — it's already listening.

- **★ LEAD — In-Cab Safety Guardian (SafeRide):** It listens quietly through the whole ride in Hindi, English or Hinglish, tells the driver's voice from the passenger's, and if it hears a real threat it starts a 30-second countdown the rider cancels just by saying 'I'm Safe' — no button, no fumbling. It captures live location, keeps working in dead zones, and links to your own alert system. Live now on Android, in early access with safety-first operators.
- **· Support — Ask-Your-Documents Assistant (AirRAG):** Behind the scenes, your safety team can ask your protocols and past incident reports in plain words and get the answer with the exact page — turning fat binders into instant lookups. It reads the documents you upload, not live feeds.
- **✕ Set aside — Your Private AI Copilot (JAAGI):** This is a desktop voice assistant, not an in-car system — no maps, no navigation. It belongs at the desk, not on the road.

---

## Why it's written this way (neuromarketing, for the owner)
- **Open on the reader's pain, not our product.** Each headline names a cost the owner already feels, so they think "that's us" before a single feature appears.
- **Climb from feature to plain outcome.** Every capability is stated as what it saves — time, money, risk, peace of mind. No tech word left to decode.
- **Specific beats grand.** The real M3M pilot, the exact page, the 30-second countdown, "cancel by saying I'm Safe" — concrete details read as proof; adjectives read as marketing.
- **One idea per line, short sentences.** Easy reading feels like honesty; low effort = more trust.
- **Curate to protect the strong.** Leading only the genuine fit and openly setting misfits aside makes the section MORE credible — a buyer trusts a seller who says "not this one for you."
- **Turn honesty into reassurance.** "not patient records", "not a live order tracker", "not a company-wide rollout" quietly answer the doubt the buyer already had. Never claim maturity we lack; never volunteer immaturity; lead with what works today.
