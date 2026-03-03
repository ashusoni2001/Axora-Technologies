import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import SectionWrapper from "../components/ui/SectionWrapper";
import Button from "../components/ui/Button";
import { fadeUp, viewportConfig } from "../lib/animations";

const socials = [
  { icon: Github, href: "https://github.com/", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:contact@axoratechnologies.in", label: "Email" },
];

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
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <Button href="mailto:contact@axoratechnologies.in" size="lg">
            Start a Project
          </Button>
          <Button
            href="https://github.com/"
            variant="outline"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
          </Button>
        </motion.div>

        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={viewportConfig}
          transition={{ ...fadeUp.transition, delay: 0.3 }}
          className="flex justify-center gap-6"
        >
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  social.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="text-slate-500 hover:text-slate-200 transition-colors"
                aria-label={social.label}
              >
                <Icon size={22} />
              </a>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
