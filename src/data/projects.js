/* `status` drives the badge: "live" lights the accent dot, anything else is muted.
   `video` (optional) renders a "Watch" link. */
export const projects = [
  {
    title: "Project JAAGI — The Awakened One",
    desc: "A privacy-first, voice-controlled AI desktop agent running the entire voice pipeline — speech recognition, synthesis and activity detection — on local GPU hardware, so zero audio leaves the device. Powered by Claude for reasoning, with autonomous browser automation, persistent cross-session memory and a web control panel.",
    tags: ["Python", "PyTorch", "Anthropic SDK", "FastAPI", "Whisper", "Kokoro", "Playwright"],
    status: "live",
    statusLabel: "Live demo",
    video: "https://drive.google.com/file/d/1c5ybObCh2I9zBZLYa_qXiylRecI9S6oy/view?usp=sharing",
  },
  {
    title: "SafeRide — Real-Time Threat Detection",
    desc: "An AI-driven passenger-safety platform for ride-sharing, engineered for women's safety. Performs real-time audio threat detection through a multi-tier pipeline — from keyword spotting to LLM contextual analysis — with novel Real-Time Voice Fingerprint Matching and automatic emergency escalation across Hindi-English.",
    tags: ["Python", "FastAPI", "Flutter", "PyTorch", "Whisper", "Llama"],
    status: "soon",
    statusLabel: "Coming soon",
  },
  {
    title: "AI Document Assistant",
    desc: "A RAG-based enterprise assistant that ingests internal documents and answers questions with precise, cited sources — grounding every response in your own knowledge base.",
    tags: ["Python", "LangChain", "React", "FastAPI"],
    status: "soon",
    statusLabel: "Coming soon",
  },
];
