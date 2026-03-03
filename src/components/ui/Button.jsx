import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-primary-500 hover:bg-primary-600 text-white shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40",
  secondary:
    "bg-accent-500 hover:bg-accent-600 text-white shadow-lg shadow-accent-500/20 hover:shadow-accent-500/40",
  outline:
    "border border-dark-700 hover:border-primary-500 text-slate-300 hover:text-white",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  icon: Icon,
  className = "",
  ...props
}) {
  const classes = `inline-flex items-center gap-2 rounded-xl font-medium transition-all duration-300 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`;

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {Icon && <Icon size={18} />}
      {children}
    </Component>
  );
}
