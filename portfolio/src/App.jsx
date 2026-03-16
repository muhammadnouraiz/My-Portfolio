// App.jsx
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import About    from "./components/About";
import Skills   from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact  from "./components/Contact";
import Footer   from "./components/Footer";

/**
 * CursorGlow – follows the mouse with a soft radial gradient.
 * Purely decorative; hidden on touch devices.
 */
function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const move = (e) => {
      el.style.left = `${e.clientX}px`;
      el.style.top  = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <div ref={ref} className="cursor-glow hidden md:block" />;
}

/** Page-level fade wrapper */
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } },
  exit:    { opacity: 0, transition: { duration: 0.3 } },
};

export default function App() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="portfolio"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative min-h-screen"
      >
        {/* Ambient cursor glow */}
        <CursorGlow />

        {/* Site background gradient */}
        <div className="fixed inset-0 -z-10 bg-[#0f0f0f]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]
                          rounded-full bg-violet-900/10 blur-[160px] pointer-events-none" />
        </div>

        {/* ── Sections ───────────────────────────────────── */}
        <Navbar />

        <main className="relative z-10">
          <Hero />

          {/* Subtle section divider line */}
          <div className="max-w-6xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          <About />

          <div className="max-w-6xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          <Skills />

          <div className="max-w-6xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          <Projects />

          <div className="max-w-6xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          <Services />

          <div className="max-w-6xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          <Contact />
        </main>

        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
