/* Project showcase data.
   - Grid card reads: title, desc, tags, status/statusLabel, metrics (first 3), video.
   - `status` drives the badge: "live" lights the accent dot; anything else is muted.
   - `caseStudy` (optional) powers the full-screen deep-dive modal (ProjectModal).
     Sections render conditionally — omit a key to skip that block.
   All numbers are sourced from the projects' own technical docs (no fabricated stats). */

export const projects = [
  {
    id: "jaagi",
    title: "Project JAAGI — The Awakened One",
    desc: "A privacy-first, voice-controlled AI desktop agent running the entire voice pipeline — speech recognition, synthesis and activity detection — on local GPU hardware, so zero audio leaves the device. Powered by Claude for reasoning, with autonomous browser automation, persistent cross-session memory and a web control panel.",
    tags: ["Python", "PyTorch", "Anthropic SDK", "FastAPI", "Whisper", "Kokoro", "Playwright"],
    status: "live",
    statusLabel: "Live demo",
    video: "https://drive.google.com/file/d/1c5ybObCh2I9zBZLYa_qXiylRecI9S6oy/view?usp=sharing",
    metrics: [
      { value: "100%", label: "On-device voice" },
      { value: "Zero", label: "Audio off-device" },
      { value: "Claude", label: "Reasoning core" },
    ],
    caseStudy: {
      kicker: "Local AI agent · Live demo",
      hook: "A desktop agent you talk to — that never sends your voice anywhere.",
      summary:
        "JAAGI runs its full voice loop — wake-word, speech recognition and natural speech synthesis — locally on GPU, so no audio ever leaves the machine. Claude handles reasoning and tool use, driving real browser automation, while persistent memory lets it carry context across sessions. A web control panel exposes the whole pipeline.",
      problem:
        "Voice assistants are convenient but invasive: every utterance is streamed to a vendor's cloud. For anyone handling sensitive work, that's a non-starter — and most assistants still can't actually *do* anything beyond answer trivia. JAAGI was built to prove a different shape: a private, local voice pipeline wired to a genuinely capable reasoning agent that can act on the desktop.",
      highlights: [
        { icon: "shield", title: "Private by design", text: "Speech-to-text, text-to-speech and voice activity detection all run on local GPU. Zero audio leaves the device." },
        { icon: "aiEngineering", title: "Claude-powered reasoning", text: "Anthropic models drive intent understanding, planning and tool selection behind the voice layer." },
        { icon: "softwareEngineering", title: "Autonomous browser control", text: "Playwright-driven automation lets the agent navigate, fill, and act on real web pages on command." },
        { icon: "layers", title: "Cross-session memory", text: "Persistent memory means JAAGI remembers context, preferences and prior tasks between conversations." },
      ],
      stack: [
        { group: "Voice", items: ["Whisper (ASR)", "Kokoro (TTS)", "Local VAD"] },
        { group: "Reasoning", items: ["Anthropic SDK", "Tool calling"] },
        { group: "Automation", items: ["Playwright", "Browser agent"] },
        { group: "Platform", items: ["Python", "PyTorch", "FastAPI", "Web panel"] },
      ],
    },
  },

  {
    id: "saferide",
    title: "SafeRide — Real-Time Threat Detection",
    desc: "An AI-powered safety platform that monitors rides in real time using voice intelligence. It detects potential threats, identifies emergencies, and enables faster responses to help keep passengers safe.",
    tags: ["Python", "FastAPI", "Flutter", "Whisper", "Llama 3.2", "ECAPA-TDNN"],
    status: "build",
    statusLabel: "In production hardening",
    metrics: [
      { value: "7", label: "Stage pipeline" },
      { value: "299", label: "Automated tests" },
      { value: "30s", label: "Auto-escalation" },
    ],
    caseStudy: {
      kicker: "Real-time audio AI · Women's safety",
      hook: "Safety that doesn't wait for a button.",
      summary:
        "SafeRide listens to in-vehicle audio in real time and detects threats — verbal harassment, kidnapping language, physical aggression — then runs a 30-second countdown and connects to your alert system with the last known location. It works online via a 7-stage server pipeline and fully offline on-device, switching between them.",
      problem:
        "Existing ride-share safety features are reactive: an SOS button only helps if the passenger can consciously reach for it. In the moments that matter most — threatened, restrained, or in shock — that assumption breaks. SafeRide flips the model: it monitors continuously and escalates on its own, purpose-built for the realities of women's safety in India.",
      pipeline: {
        variant: "linear",
        note: "Switch modes to see how the path adapts to connectivity.",
        modes: {
          Online: [
            { name: "Audio", sub: "PCM16 · 16kHz", kind: "source" },
            { name: "Noise Reduction", sub: "spectral gating" },
            { name: "VAD", sub: "Silero" },
            { name: "Music Filter", sub: "4 spectral features" },
            { name: "ASR", sub: "Whisper v3-turbo" },
            { name: "Voice Fingerprint", sub: "ECAPA-TDNN" },
            { name: "Aggregator", sub: "merge + identity" },
            { name: "Classifier", sub: "Llama 3.2 3B" },
            { name: "Alert", sub: "30s escalation", kind: "sink" },
          ],
          Offline: [
            { name: "Audio", sub: "PCM16 · 16kHz", kind: "source" },
            { name: "On-device VAD", sub: "Silero (ONNX)" },
            { name: "On-device ASR", sub: "Whisper tiny int8" },
            { name: "Keyword Classifier", sub: "local keyword match" },
            { name: "Local Alert", sub: "notify + queue", kind: "sink" },
          ],
          Hybrid: [
            { name: "Audio", sub: "PCM16 · 16kHz", kind: "source" },
            { name: "On-device ASR", sub: "Whisper tiny (~200ms)" },
            { name: "Transcript → Server", sub: "skips server Whisper" },
            { name: "Voice Fingerprint", sub: "ECAPA-TDNN" },
            { name: "Classifier", sub: "Llama 3.2 3B" },
            { name: "Alert", sub: "30s escalation", kind: "sink" },
          ],
        },
      },
      highlights: [
        { icon: "zap", title: "Proactive, not reactive", text: "Detects threats automatically from speech — no panic-button press required in the moment it matters." },
        { icon: "users", title: "Voice fingerprinting (RVFM)", text: "ECAPA-TDNN embeddings tell passenger from driver, so every threat carries who said it." },
        { icon: "refresh", title: "Online · Offline · Hybrid", text: "Full on-device fallback with sherpa-onnx + keyword classifier when the network drops. No dead zones." },
        { icon: "shield", title: "Auto-escalation with location", text: "30-second countdown, then connects to your alert system (SMS or push) with the last known location." },
      ],
      matrix: {
        columns: ["SafeRide", "SOS button"],
        rows: [
          { feature: "Trigger", values: ["Automatic, always-on", "Manual press"] },
          { feature: "Works when restrained", values: ["yes", "no"] },
          { feature: "Speaker identity", values: ["Driver vs passenger", "none"] },
          { feature: "Offline operation", values: ["On-device detection", "none"] },
          { feature: "Language", values: ["Multilingual", "n/a"] },
        ],
      },
      stack: [
        { group: "Backend", items: ["FastAPI", "PostgreSQL", "SQLAlchemy async", "WebSocket"] },
        { group: "ML pipeline", items: ["Whisper v3-turbo", "Silero VAD", "ECAPA-TDNN", "Llama 3.2 3B", "HingRoBERTa"] },
        { group: "On-device", items: ["sherpa-onnx", "Whisper tiny int8", "Keyword classifier"] },
        { group: "Mobile", items: ["Flutter", "Riverpod", "Google Sign-In + JWT"] },
      ],
      proof: [
        { value: "299", label: "Automated tests" },
        { value: "7", label: "Stage pipeline" },
        { value: "3", label: "Languages" },
        { value: "5", label: "ML models" },
      ],
    },
  },

  {
    id: "airrag",
    title: "AirRAG — Private Document Intelligence",
    desc: "An agent-first enterprise assistant that turns a document library into a conversational knowledge base — inside WhatsApp, Telegram, the web and a REST API. The full AI stack can run on the customer's own hardware, with page-level citations on every answer.",
    tags: ["Python", "FastAPI", "Ollama", "LanceDB", "BGE-M3", "ReAct Agent"],
    status: "live",
    statusLabel: "Live pilot",
    metrics: [
      { value: "~20K", label: "Lines of code" },
      { value: "39", label: "File formats" },
      { value: "4", label: "Swappable LLMs" },
    ],
    caseStudy: {
      kicker: "Enterprise RAG · Live pilot",
      hook: "Your data never leaves your walls.",
      summary:
        "AirRAG is a conversational AI agent for an organization's documents. It reasons about each question with a ReAct loop and multiple tools — searching, delivering files, analysing data, recalling memory — and grounds every claim with a page-level citation. The whole stack can run locally on your own hardware, or switch to OpenAI / Anthropic per channel when policy allows.",
      problem:
        "Most AI document tools require shipping your data to a third party — a non-starter for regulated industries, IP-sensitive teams, and anyone handling client confidentiality. And the work happens on WhatsApp, not enterprise web portals. AirRAG was built around both constraints: a local-first AI stack that lives inside the messaging apps teams already use, with role-based download permissions and citations that hold up to scrutiny.",
      pipeline: {
        variant: "agent",
        channels: ["WhatsApp", "Telegram", "Web UI", "REST API"],
        core: { name: "ReAct Agent", sub: "reason · act · reflect" },
        tools: [
          "rag_search",
          "document_lookup",
          "analyze_data",
          "graph_search",
          "memory_recall",
          "conversation_history",
          "ask_clarification",
        ],
        backends: ["OpenAI", "Anthropic", "Ollama", "Local GGUF"],
      },
      highlights: [
        { icon: "shield", title: "Runs on your own hardware", text: "Parsing, embeddings, retrieval and the LLM can all run on your own servers — a local-first setup with no dependency on an external AI cloud." },
        { icon: "machineLearning", title: "Hybrid retrieval + reranking", text: "BM25 + dense retrieval fused, then a cross-encoder reranker — every answer cited to the exact page." },
        { icon: "users", title: "Role-based permissions", text: "Admin / Employee roles with per-document download grants tied to verified channel identity." },
        { icon: "layers", title: "Memory across sessions", text: "Per-user cross-session memory, so it remembers context, preferences and prior questions between conversations." },
      ],
      matrix: {
        columns: ["AirRAG", "Public chatbots", "Enterprise search"],
        rows: [
          { feature: "Where data goes", values: ["On-prem (or cloud, by choice)", "Cloud provider", "On-prem"] },
          { feature: "WhatsApp / Telegram", values: ["Native", "no", "no"] },
          { feature: "Voice, regional languages", values: ["Multilingual", "Limited", "no"] },
          { feature: "File delivery + permissions", values: ["In-chat, role-aware", "no", "Doc list only"] },
          { feature: "Memory across sessions", values: ["Per-user, durable", "Limited", "no"] },
          { feature: "Citations", values: ["Inline, page-level", "Sometimes", "Doc links"] },
        ],
      },
      sectors: ["Real Estate", "Legal", "Healthcare", "Financial Services", "Manufacturing", "Government", "Education"],
      stack: [
        { group: "Agent", items: ["ReAct loop", "7 tools", "Self-reflection", "Per-channel LLM"] },
        { group: "Retrieval", items: ["BGE-M3", "BM25 + dense + ColBERT", "Cross-encoder reranker", "LanceDB"] },
        { group: "Models", items: ["OpenAI", "Anthropic", "Ollama", "Local GGUF"] },
        { group: "Platform", items: ["FastAPI", "SQLite (WAL)", "NetworkX graph", "faster-whisper + Edge TTS"] },
      ],
      proof: [
        { value: "~20K", label: "Lines of code" },
        { value: "39", label: "File formats" },
        { value: "7", label: "Agent tools" },
        { value: "4", label: "Channels" },
      ],
    },
  },
];
