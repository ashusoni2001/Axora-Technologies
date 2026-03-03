const variants = {
  blue: "bg-primary-500/10 text-primary-400 border-primary-500/20",
  emerald: "bg-accent-500/10 text-accent-400 border-accent-500/20",
  neutral: "bg-white/5 text-slate-400 border-white/10",
};

export default function Badge({ children, variant = "neutral" }) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
