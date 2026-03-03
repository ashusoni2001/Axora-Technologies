import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Button from "../components/ui/Button";
import NeuralNetwork from "../components/background/NeuralNetwork";
import GlowOrbs from "../components/background/GlowOrbs";

const rotatingWords = ["Intelligent", "Scalable", "AI-Driven", "Powerful"];

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NeuralNetwork />
      <GlowOrbs />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-300 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
          </span>
          AI Engineering & Software Consultancy
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6, ease }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-100 leading-tight mb-6"
        >
          We Build{" "}
          <span className="inline-block relative">
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingWords[wordIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease }}
                className="gradient-text inline-block"
              >
                {rotatingWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
          <br />
          Solutions for Modern Businesses
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6, ease }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10"
        >
          With 5+ years of expertise in AI and software engineering, we help
          businesses harness the power of artificial intelligence and
          cutting-edge technology to transform their operations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="#services" size="lg">
            Explore Our Services
          </Button>
          <Button href="#contact" variant="outline" size="lg">
            Get in Touch
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={20} className="text-slate-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
