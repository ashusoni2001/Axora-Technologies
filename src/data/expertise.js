/* Three clusters (nine disciplines) rendered as a neumorphic bento grid.
   `span` sets each tile's width in a 6-column bento (collapses to 2 / 1 cols on
   smaller screens). `icon` keys map to the custom SVG set in components/ui/Icon.jsx. */
export const clusters = [
  {
    title: "Artificial Intelligence & ML",
    tagline: "Models that reason, predict and adapt",
    items: [
      { icon: "systemDesign", span: 4, title: "AI System Design", desc: "Architecting end-to-end intelligent systems — data pipelines, model orchestration, inference, evaluation and monitoring." },
      { icon: "aiEngineering", span: 2, title: "AI Engineering", desc: "Productionising AI — RAG, autonomous agents, LLM pipelines and GenAI workflows engineered for reliability at scale." },
      { icon: "machineLearning", span: 2, title: "Machine Learning", desc: "Predictive, recommendation, classification and forecasting models — trained, tuned and shipped to production." },
      { icon: "deepLearning", span: 4, title: "Deep Learning", desc: "Neural networks for vision, speech and language — custom architectures built with PyTorch and TensorFlow." },
    ],
  },
  {
    title: "Data & Insight",
    tagline: "Turning raw data into decisions",
    items: [
      { icon: "dataScience", span: 4, title: "Data Science", desc: "Turning raw data into decisions through statistical modelling, experimentation and rigorous analysis." },
      { icon: "dataAnalytics", span: 2, title: "Data Analytics", desc: "ETL pipelines, metrics and exploratory analysis that surface the signal hiding in your operational data." },
      { icon: "powerbi", span: 6, title: "Power BI", desc: "Interactive dashboards and executive reporting that make complex data instantly understandable." },
    ],
  },
  {
    title: "Software & Product",
    tagline: "Built like real software — tested and shipped",
    items: [
      { icon: "softwareEngineering", span: 4, title: "Software Engineering", desc: "Robust, maintainable backends and APIs — clean architecture, fully tested and built to last." },
      { icon: "appDevelopment", span: 2, title: "App Development", desc: "Native and cross-platform mobile and web apps engineered for performance and an exceptional UX." },
    ],
  },
];
