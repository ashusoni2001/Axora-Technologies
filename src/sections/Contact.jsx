import { motion } from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react";
import SectionWrapper from "../components/ui/SectionWrapper";
import Button from "../components/ui/Button";
import { fadeUp, viewportConfig } from "../lib/animations";

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(59,130,246,0.06) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative text-center max-w-2xl mx-auto">
        <motion.h2
          initial={fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={viewportConfig}
          transition={fadeUp.transition}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 mb-4"
        >
          Let's Build Something{" "}
          <span className="gradient-text">Extraordinary</span>
        </motion.h2>

        <motion.p
          initial={fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={viewportConfig}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="text-lg text-slate-400 mb-10"
        >
          Ready to transform your business with AI? Let's start a conversation.
        </motion.p>

        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={viewportConfig}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button
            href="mailto:support@axoratechnologies.in?subject=New%20Project%20Inquiry&body=Hi%20Axora%20Team%2C%0A%0AI%20would%20like%20to%20discuss%20a%20new%20project.%0A%0AProject%20Details%3A%0A%0A"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start a Project
          </Button>
          <Button
            href="https://linkedin.com/"
            variant="outline"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            icon={Linkedin}
          >
            Connect on LinkedIn
          </Button>
        </motion.div>

        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={viewportConfig}
          transition={{ ...fadeUp.transition, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-400"
        >
          <a
            href="mailto:support@axoratechnologies.in"
            className="flex items-center gap-2 hover:text-slate-200 transition-colors"
          >
            <Mail size={18} />
            <span className="text-sm">support@axoratechnologies.in</span>
          </a>
          <a
            href="tel:+919654252335"
            className="flex items-center gap-2 hover:text-slate-200 transition-colors"
          >
            <Phone size={18} />
            <span className="text-sm">+91 9654252335</span>
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
