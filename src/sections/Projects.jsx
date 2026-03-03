import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import GlassCard from "../components/ui/GlassCard";
import Badge from "../components/ui/Badge";
import { projects } from "../data/projects";
import { staggerContainer, viewportConfig } from "../lib/animations";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        title="Featured Projects"
        accentWord="Projects"
        subtitle="A selection of our open-source work and client solutions."
      />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="initial"
        whileInView="animate"
        viewport={viewportConfig}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((project) => (
          <GlassCard key={project.title} className="group flex flex-col">
            <div className="h-0.5 w-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-5 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
            <h3 className="text-xl font-semibold text-slate-100 mb-3">
              {project.title}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
              {project.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary-400 transition-colors group/link"
              >
                <ExternalLink
                  size={18}
                  className="transition-transform duration-200 group-hover/link:rotate-12"
                />
              </a>
            </div>
          </GlassCard>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
