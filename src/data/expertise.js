/* Five expertise domains (CHANGE-01): four cards in a 2×2 grid plus one
   full-width horizontal "anchor" card (`anchor: true`). `chips` are the
   scannable capabilities; `icon` keys map to components/ui/Icon.jsx. */
export const domains = [
  {
    icon: "aiEngineering",
    title: "Generative AI & Agents",
    desc: "Systems that reason, plan and act — from RAG to autonomous multi-agent products, shipped at scale.",
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
    desc: "From training deep neural networks to deploying models behind production-grade applications.",
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
    desc: "Large, messy datasets turned into decisions — rigorous modelling on pipelines built to last.",
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
    title: "Analytics & BI",
    desc: "Dashboards and reporting that make complex operational data instantly understandable.",
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
    desc: "The discipline underneath everything we ship.",
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
