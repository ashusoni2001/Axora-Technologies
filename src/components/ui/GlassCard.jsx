import { motion } from "framer-motion";
import { staggerChild } from "../../lib/animations";

export default function GlassCard({
  children,
  className = "",
  hover = true,
  ...props
}) {
  return (
    <motion.div
      variants={staggerChild}
      className={`glass rounded-2xl p-6 transition-all duration-300 ${
        hover
          ? "hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/5 glass-hover"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
