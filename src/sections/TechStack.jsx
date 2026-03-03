import { motion } from "framer-motion";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import { technologies } from "../data/techStack";
import { staggerContainer, scaleUp, viewportConfig } from "../lib/animations";

export default function TechStack() {
  return (
    <SectionWrapper id="tech-stack" className="bg-dark-900">
      <SectionHeading
        title="Our Tech Stack"
        accentWord="Tech Stack"
        subtitle="The technologies we use to build exceptional solutions."
      />

      <motion.div
        variants={staggerContainer(0.03)}
        initial="initial"
        whileInView="animate"
        viewport={viewportConfig}
        className="flex flex-wrap justify-center gap-3"
      >
        {technologies.map((tech) => (
          <motion.div
            key={tech.name}
            variants={scaleUp}
            whileHover={{ scale: 1.05 }}
            className="glass glass-hover rounded-xl px-5 py-3 text-sm font-medium text-slate-300 cursor-default transition-all duration-200"
          >
            {tech.name}
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
