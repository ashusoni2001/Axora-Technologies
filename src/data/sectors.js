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
