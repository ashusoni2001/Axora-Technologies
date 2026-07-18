/* Industry personalization for the Work section.
   Each sector shows ONLY the products that genuinely fit it (curated from the
   code-grounded fit audit — misfits dropped), ordered strongest-fit-first, with
   sector-specific copy so every card serves a real purpose for that industry.
   - `cards`  = [{ id, desc }] in display order; `id` maps to a project in projects.js.
   Copy is code-grounded and honesty-checked: SafeRide "connects to your alert
   system" (never "sends SMS"), no "air-gapped", no "12 languages", no "0 false
   positives", and JAAGI is a desktop copilot (never an in-vehicle/navigation tool). */
export const sectors = [
  {
    name: "Real Estate",
    cards: [
      {
        id: "airrag",
        desc: "Ask about any lease, price list or project file in plain words — right inside WhatsApp — and get the answer with the exact page it came from.",
      },
      {
        id: "jaagi",
        desc: "A voice copilot on the agent's own PC: dictate a note, pull up a listing, or send it to research a property online. It checks with you before it acts, and your voice stays on the machine.",
      },
    ],
  },
  {
    name: "Healthcare & Pharma",
    cards: [
      {
        id: "airrag",
        desc: "Let staff ask your manuals, policies and SOPs in plain words and get the answer with the exact page — running on your own servers, so the documents stay in-house.",
      },
      {
        id: "saferide",
        desc: "Watches over staff during ambulance runs and patient-transport rides: listening for trouble, running a 30-second countdown, and connecting to your alert system when seconds matter.",
      },
    ],
  },
  {
    name: "LegalTech & Professional Services",
    cards: [
      {
        id: "airrag",
        desc: "Ask a plain question across your contracts and case files, and every answer opens the source at the exact page. A fast first pass to check against, with the final call always yours.",
      },
      {
        id: "jaagi",
        desc: "Draft and edit documents with a copilot that checks with you before it changes a file or sends anything. For privileged matter, run it entirely offline on office machines, so the work stays in the room.",
      },
    ],
  },
  {
    name: "Logistics & E-commerce",
    cards: [
      {
        id: "saferide",
        desc: "Listens for trouble during the ride, and if it hears a threat it starts a 30-second countdown, captures the location, and connects to your alert system — hands-free, the moment it matters. It keeps working even in dead zones.",
      },
      {
        id: "airrag",
        desc: "Turn your shipping policies, supplier terms and operating manuals into something staff can just ask — over WhatsApp, in the app they already use — with every answer pinned to the exact procedure. It works from the documents you hand it.",
      },
    ],
  },
  {
    name: "SaaS & Enterprise IT (GCCs)",
    cards: [
      {
        id: "airrag",
        desc: "Let teams ask your runbooks, technical docs and HR policies in plain words and get answers with the exact source — right in the chat tools they already use. It searches the documents you upload.",
      },
      {
        id: "saferide",
        desc: "For the night-shift team riding home by cab, a quiet guardian that listens for trouble, runs a 30-second location-tagged countdown, and connects to your alert system — real duty of care, one employee at a time.",
      },
      {
        id: "jaagi",
        desc: "A private, voice-driven copilot for one engineer's own machine: file edits, terminal commands and browser chores, each pausing for your okay first.",
      },
    ],
  },
  {
    name: "Mobility & Consumer Safety",
    cards: [
      {
        id: "saferide",
        desc: "Listens quietly through the whole ride, recognises your voice from the others in the car, and at the first real threat starts a 30-second countdown — one tap on 'I'm Safe' stops it. It captures your location, keeps working in dead zones, and connects to your alert system.",
      },
      {
        id: "airrag",
        desc: "Behind the scenes, your safety team can ask your protocols and past incident reports in plain words and get the answer with the exact page — turning fat binders into instant lookups. It reads the documents you upload.",
      },
    ],
  },
];
