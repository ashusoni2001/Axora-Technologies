/* Custom stroke icon set — ported from the reference so the brand's
   bespoke glyphs (AI System Design, Power BI, Deep Learning…) carry over
   exactly. Each entry is a list of SVG primitives:
     "circle:cx,cy,r" · "rect:x,y,w,h,rx" · any value else = a <path d>. */
const ICONS = {
  // expertise
  systemDesign: ["M4 5h7v6H4zM13 13h7v6h-7z", "M11 8h4M15 8v5", "M7.5 11v2"],
  aiEngineering: ["M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1", "circle:12,12,3.4"],
  dataScience: ["M4 19V5M4 19h16", "M8 15l3-4 3 2 4-6", "circle:8,15,1.1", "circle:11,11,1.1", "circle:14,13,1.1", "circle:18,7,1.1"],
  dataAnalytics: ["M5 20V10M10 20V4M15 20v-7M20 20V8", "M3 20h18"],
  machineLearning: ["circle:6,6,2.4", "circle:6,18,2.4", "circle:18,12,2.4", "M8.2 7.2L15.6 10.9M8.2 16.8L15.6 13.1"],
  deepLearning: ["circle:5,7,1.7", "circle:5,17,1.7", "circle:12,5,1.7", "circle:12,12,1.7", "circle:12,19,1.7", "circle:19,9,1.7", "circle:19,15,1.7", "M6.6 7.6l3.8-2M6.6 16.4l3.8 2M13.5 5.8l4 2.4M13.5 18.2l4-2.4M12 7v3.3M12 13.7V17"],
  powerbi: ["M5 21V11h4v10M11 21V4h4v17M17 21v-7h2v7", "M3 21h18"],
  softwareEngineering: ["M8 8l-4 4 4 4M16 8l4 4-4 4M13 6l-2 12"],
  appDevelopment: ["rect:6,2,12,20,3", "M10 5.5h4", "M11 18.5h2"],
  // differentiators
  shield: ["M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z", "M9.2 12l2 2 3.6-4"],
  zap: ["M13 2L4 14h6l-1 8 9-12h-6z"],
  users: ["circle:9,8,3", "M3 20a6 6 0 0 1 12 0", "M16 5.2a3 3 0 0 1 0 5.6M21 20a6 6 0 0 0-4-5.6"],
  refresh: ["M3 12a9 9 0 0 1 15-6.7L21 8M21 4v4h-4", "M21 12a9 9 0 0 1-15 6.7L3 16M3 20v-4h4"],
  // ui
  arrowRight: ["M5 12h14M13 6l6 6-6 6"],
  arrowDown: ["M12 5v14M6 13l6 6 6-6"],
  arrowUpRight: ["M7 17L17 7M8 7h9v9"],
  play: ["M7 5l12 7-12 7z"],
  github: ["M9 19c-4 1.4-4-2-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.3 2.9 5.3 3.2 5.3 3.2a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.6c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"],
  linkedin: ["rect:2,2,20,20,3", "M7 10v7M7 7v0.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7"],
  mail: ["rect:3,5,18,14,2", "M4 7l8 6 8-6"],
  phone: ["M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"],
  menu: ["M4 7h16M4 12h16M4 17h16"],
  x: ["M6 6l12 12M18 6L6 18"],
  spark: ["M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"],
  layers: ["M12 3l9 5-9 5-9-5z", "M3 13l9 5 9-5"],
  check: ["M4 12l5 5L20 6"],
};

export default function Icon({ name, size = 22, stroke = 1.8, fill = false, style, className }) {
  const parts = ICONS[name] || [];
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      className={className}
      aria-hidden="true"
    >
      {parts.map((p, i) => {
        if (p.startsWith("circle:")) {
          const [cx, cy, r] = p.slice(7).split(",").map(Number);
          return <circle key={i} cx={cx} cy={cy} r={r} fill={fill ? "currentColor" : "none"} />;
        }
        if (p.startsWith("rect:")) {
          const [x, y, w, h, rx] = p.slice(5).split(",").map(Number);
          return <rect key={i} x={x} y={y} width={w} height={h} rx={rx || 0} />;
        }
        return <path key={i} d={p} fill={fill ? "currentColor" : "none"} />;
      })}
    </svg>
  );
}
