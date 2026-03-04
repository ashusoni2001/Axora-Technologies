import { motion } from "framer-motion";
import { Shield, Zap, Users, RefreshCcw } from "lucide-react";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import AnimatedCounter from "../components/ui/AnimatedCounter";
import GlassCard from "../components/ui/GlassCard";
import {
  staggerContainer,
  staggerChild,
  slideLeft,
  viewportConfig,
} from "../lib/animations";

const stats = [
  { end: 22, suffix: "+", label: "Technologies in Stack" },
  { end: 8, suffix: "+", label: "Service Domains" },
  { end: 10, suffix: "+", label: "AI/ML Models Integrated" },
  { end: 600, suffix: "+", label: "Automated Tests" },
];

const differentiators = [
  { icon: Shield, text: "Production-Grade Engineering" },
  { icon: Zap, text: "Rapid Prototyping to Deployment" },
  { icon: Users, text: "Dedicated Technical Partnership" },
  { icon: RefreshCcw, text: "Agile & Iterative Delivery" },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-dark-900">
      <SectionHeading
        title="Why Choose Axora"
        accentWord="Axora"
        centered={false}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          className="space-y-6"
        >
          <motion.p variants={staggerChild} className="text-lg text-slate-300 leading-relaxed">
            Axora Technologies specializes in designing and delivering
            production-grade AI systems and full-stack software solutions. We
            operate at the intersection of applied AI research and enterprise
            software engineering — turning complex technical challenges into
            scalable, deployable products.
          </motion.p>
          <motion.p variants={staggerChild} className="text-lg text-slate-400 leading-relaxed">
            Our methodology is rooted in rigorous engineering: from architecture
            design and model selection to deployment pipelines and monitoring.
            Every solution we deliver is built for reliability, performance, and
            long-term maintainability.
          </motion.p>
          <motion.p variants={staggerChild} className="text-lg text-slate-400 leading-relaxed">
            We partner with organizations to build intelligent systems that
            create measurable business impact — whether it's automating
            workflows, enabling real-time decision-making, or deploying
            cutting-edge AI capabilities at scale.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((stat) => (
            <GlassCard key={stat.label} hover={false} className="p-6">
              <AnimatedCounter
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
              />
            </GlassCard>
          ))}
        </motion.div>
      </div>

      <motion.div
        variants={staggerContainer(0.08)}
        initial="initial"
        whileInView="animate"
        viewport={viewportConfig}
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {differentiators.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.text}
              variants={slideLeft}
              className="flex items-center gap-3 text-slate-300"
            >
              <div className="p-2 rounded-lg bg-primary-500/10 text-primary-400">
                <Icon size={18} />
              </div>
              <span className="text-sm font-medium">{item.text}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
