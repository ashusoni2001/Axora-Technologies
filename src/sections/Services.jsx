import { motion } from "framer-motion";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import GlassCard from "../components/ui/GlassCard";
import Badge from "../components/ui/Badge";
import { services } from "../data/services";
import { staggerContainer, viewportConfig } from "../lib/animations";

export default function Services() {
  return (
    <SectionWrapper id="services">
      <SectionHeading
        title="What We Build"
        accentWord="Build"
        subtitle="From AI-powered intelligence to full-stack software — we deliver end-to-end solutions."
      />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="initial"
        whileInView="animate"
        viewport={viewportConfig}
        className="grid grid-cols-12 gap-4 md:gap-6"
      >
        {services.map((service) => {
          const Icon = service.icon;
          const isAI = service.category === "ai";
          return (
            <GlassCard
              key={service.title}
              className={`${service.span} group`}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`p-3 rounded-xl transition-all duration-300 group-hover:scale-110 ${
                    isAI
                      ? "bg-primary-500/10 text-primary-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                      : "bg-accent-500/10 text-accent-400 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                  }`}
                >
                  <Icon size={22} />
                </div>
                <Badge variant={isAI ? "blue" : "emerald"}>
                  {isAI ? "AI" : "Software"}
                </Badge>
              </div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </GlassCard>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
