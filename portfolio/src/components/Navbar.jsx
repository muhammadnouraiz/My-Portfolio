// components/Navbar.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, OWNER } from "../constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState("#home");
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass border-b border-white/5 shadow-2xl shadow-black/40"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.span
            whileHover={{ scale: 1.04 }}
            onClick={() => handleNav("#home")}
            className="font-display font-bold text-xl cursor-pointer gradient-text select-none"
          >
            {OWNER.name}<span className="text-purple-400">.</span>dev
          </motion.span>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    active === link.href
                      ? "text-white"
                      : "text-[#888] hover:text-white"
                  }`}
                >
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/8 rounded-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-xl
                       bg-gradient-to-r from-violet-600 to-purple-500 text-white
                       shadow-lg shadow-purple-900/40 hover:shadow-purple-700/60 transition-shadow duration-300"
          >
            Hire Me
          </motion.a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-[#888] hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 glass border-b border-white/5 px-6 py-4 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      active === link.href
                        ? "bg-white/8 text-white"
                        : "text-[#888] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => handleNav("#contact")}
                  className="w-full px-4 py-3 text-sm font-semibold rounded-xl
                             bg-gradient-to-r from-violet-600 to-purple-500 text-white"
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
