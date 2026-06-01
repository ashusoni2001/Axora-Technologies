/* Three clusters (nine disciplines) rendered as tilt/spotlight cards.
   `grid` tunes the column layout: "" = auto-fit, "three" = 3 cols, "two" = 2 cols.
   `icon` keys map to the custom SVG set in components/ui/Icon.jsx. */
export const clusters = [
  {
    title: "Artificial Intelligence & ML",
    tagline: "Models that reason, predict and adapt",
    grid: "",
    items: [
      { icon: "systemDesign", title: "AI System Design", desc: "Architecting end-to-end intelligent systems — data pipelines, model orchestration, inference, evaluation and monitoring." },
      { icon: "aiEngineering", title: "AI Engineering", desc: "Productionising AI — RAG, autonomous agents, LLM pipelines and GenAI workflows engineered for reliability at scale." },
      { icon: "machineLearning", title: "Machine Learning", desc: "Predictive, recommendation, classification and forecasting models — trained, tuned and shipped to production." },
      { icon: "deepLearning", title: "Deep Learning", desc: "Neural networks for vision, speech and language — custom architectures built with PyTorch and TensorFlow." },
    ],
  },
  {
    title: "Data & Insight",
    tagline: "Turning raw data into decisions",
    grid: "three",
    items: [
      { icon: "dataScience", title: "Data Science", desc: "Turning raw data into decisions through statistical modelling, experimentation and rigorous analysis." },
      { icon: "dataAnalytics", title: "Data Analytics", desc: "ETL pipelines, metrics and exploratory analysis that surface the signal hiding in your operational data." },
      { icon: "powerbi", title: "Power BI", desc: "Interactive dashboards and executive reporting that make complex data instantly understandable." },
    ],
  },
  {
    title: "Software & Product",
    tagline: "Built like real software — tested and shipped",
    grid: "two",
    items: [
      { icon: "softwareEngineering", title: "Software Engineering", desc: "Robust, maintainable backends and APIs — clean architecture, fully tested and built to last." },
      { icon: "appDevelopment", title: "App Development", desc: "Native and cross-platform mobile and web apps engineered for performance and an exceptional UX." },
    ],
  },
];
