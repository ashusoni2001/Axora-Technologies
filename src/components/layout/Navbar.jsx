import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "../../data/navigation";
import useScrollDirection from "../../hooks/useScrollDirection";
import useActiveSection from "../../hooks/useActiveSection";
import Button from "../ui/Button";

const sectionIds = ["services", "about", "projects", "tech-stack", "contact"];

export default function Navbar() {
  const { direction, isAtTop } = useScrollDirection();
  const active = useActiveSection(sectionIds);
  const [mobileOpen, setMobileOpen] = useState(false);

  const visible = direction === "up" || isAtTop;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isAtTop
            ? "bg-transparent"
            : "bg-dark-950/80 backdrop-blur-lg border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold gradient-text">
            Axora Technologies
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  active === link.href.slice(1)
                    ? "text-primary-400"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button href="#contact" size="sm">
              Get in Touch
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-slate-300 hover:text-white p-2"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-dark-950/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-6 text-slate-300 hover:text-white p-2"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            <motion.div
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.05 } },
                closed: {},
              }}
              className="flex flex-col items-center gap-8"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  variants={{
                    closed: { opacity: 0, y: 20 },
                    open: { opacity: 1, y: 0 },
                  }}
                  className="text-2xl font-medium text-slate-200 hover:text-primary-400 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                variants={{
                  closed: { opacity: 0, y: 20 },
                  open: { opacity: 1, y: 0 },
                }}
              >
                <Button
                  href="#contact"
                  size="lg"
                  onClick={() => setMobileOpen(false)}
                >
                  Get in Touch
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
