/**
 * Metric strip. Renders mono number + uppercase label pairs.
 *   variant: "card" (compact, inline on a project card) | "band" (large, in the modal)
 */
export default function StatBand({ items = [], variant = "band", className = "" }) {
  if (!items.length) return null;
  return (
    <div className={`statband sb-${variant} ${className}`}>
      {items.map((s) => (
        <div className="statband-item" key={s.label}>
          <span className="sb-v">{s.value}</span>
          <span className="sb-l">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
