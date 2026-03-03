import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "../../lib/animations";

export default function SectionHeading({
  title,
  accentWord,
  subtitle,
  centered = true,
}) {
  const parts = accentWord ? title.split(accentWord) : [title];

  return (
    <motion.div
      initial={fadeUp.initial}
      whileInView={fadeUp.animate}
      viewport={viewportConfig}
      transition={fadeUp.transition}
      className={`mb-16 ${centered ? "text-center" : ""}`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 mb-4">
        {accentWord ? (
          <>
            {parts[0]}
            <span className="gradient-text">{accentWord}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
