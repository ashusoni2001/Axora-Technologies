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
  { end: 5, suffix: "+", label: "Years of Experience" },
  { end: 50, suffix: "+", label: "Projects Delivered" },
  { end: 20, suffix: "+", label: "AI Solutions Built" },
  { end: 99, suffix: "%", label: "Client Satisfaction" },
];

const differentiators = [
  { icon: Shield, text: "Production-Grade Quality" },
  { icon: Zap, text: "Rapid Delivery" },
  { icon: Users, text: "Dedicated Support" },
  { icon: RefreshCcw, text: "Iterative Approach" },
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
            With over 5 years of hands-on experience in AI and software
            engineering, Axora Technologies has been at the forefront of
            building intelligent solutions that drive real business outcomes.
          </motion.p>
          <motion.p variants={staggerChild} className="text-lg text-slate-400 leading-relaxed">
            We don't just build software — we architect systems that think,
            learn, and evolve. Our approach combines deep technical expertise
            with strategic thinking to deliver solutions that scale.
          </motion.p>
          <motion.p variants={staggerChild} className="text-lg text-slate-400 leading-relaxed">
            From startups to established enterprises, we partner with ambitious
            teams to turn complex challenges into competitive advantages.
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
