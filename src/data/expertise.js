/* Five expertise domains (CHANGE-01): four cards in a 2×2 grid plus one
   full-width horizontal "anchor" card (`anchor: true`). `chips` are the
   scannable capabilities; `icon` keys map to components/ui/Icon.jsx. */
export const domains = [
  {
    icon: "aiEngineering",
    title: "Generative AI & Agents",
    desc: "Stop wasting hours on repetitive work. We build AI systems that automate business processes, customer support, document handling, reporting, and internal workflows so your team can focus on higher-value work.",
    chips: [
      "AI system design",
      "RAG pipelines",
      "Multi-agent architectures",
      "Orchestration engines",
      "LLM evaluation",
      "Scalable AI applications",
    ],
  },
  {
    icon: "deepLearning",
    title: "Core ML & Deep Learning",
    desc: "From training deep neural networks to deploying models, transform historical data into accurate predictions. Our ML solutions help businesses forecast demand, detect fraud, classify data, and make smarter decisions using predictive models.",
    chips: [
      "Predictive modelling",
      "Computer vision",
      "Speech & language",
      "Forecasting",
      "PyTorch",
      "TensorFlow",
      "Model deployment",
    ],
  },
  {
    icon: "dataScience",
    title: "Data Science & Engineering",
    desc: "Messy data costs money. We build scalable pipelines that clean, organize, and prepare your data for reporting, AI, and analytics.",
    chips: [
      "Statistical modelling",
      "Predictive analysis",
      "ETL pipelines",
      "Big Data analytics",
      "Cleaning & transformation",
      "Experimentation",
    ],
  },
  {
    icon: "powerbi",
    title: "Business Intelligence",
    desc: "Make faster decisions using real-time dashboards. We design Power BI dashboards that turn complex data into simple visual insights.",
    chips: [
      "Power BI dashboards",
      "Business intelligence",
      "Executive reporting",
      "Interactive data apps",
      "KPI design",
    ],
  },
  {
    icon: "softwareEngineering",
    title: "Software Engineering",
    desc: "From MVPs to enterprise platforms, we build secure, scalable software that grows with your business.",
    chips: [
      "Backend & APIs",
      "Clean architecture",
      "Full-stack web apps",
      "Cross-platform mobile",
      "Testing & CI/CD",
    ],
    anchor: true,
  },
];

/* Curated capability ribbon for the Marquee — a dozen picks spanning all five
   domains, sized so the loop pace matches the old nine-discipline track. */
export const marqueeItems = [
  "RAG pipelines",
  "Multi-agent architectures",
  "LLM evaluation",
  "Computer vision",
  "Speech & language",
  "Forecasting",
  "Statistical modelling",
  "ETL pipelines",
  "Big Data analytics",
  "Power BI dashboards",
  "Backend & APIs",
  "Full-stack web apps",
];
