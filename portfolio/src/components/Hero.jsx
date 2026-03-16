// components/Hero.jsx
import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, ArrowDown } from "lucide-react";
import { OWNER, SOCIAL_LINKS } from "../constants";
import avatarImg from "../assets/profile/Avatar.jpeg";
import animeImg from "../assets/profile/Anime.png";

const RADIUS = 90;

function XIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const ICON_MAP = {
  github:    Github,
  linkedin:  Linkedin,
  instagram: Instagram,
  twitter:   XIcon,
};

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 32 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Hero() {
  const imageRef    = useRef(null);
  const lastMaskRef = useRef("none");
  const [spotlight, setSpotlight] = useState(null);

  const handleMouseMove = useCallback((e) => {
    const rect = imageRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    lastMaskRef.current = `radial-gradient(circle ${RADIUS}px at ${x}px ${y}px, black 50%, transparent 100%)`;
    setSpotlight({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setSpotlight(null);
  }, []);

  const animeMask = lastMaskRef.current;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 lg:pt-24"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet-700/12 blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-600/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-900/8 blur-[150px]" />
      </div>

      {/* Avatar + orbit */}
      <div className="relative w-[270px] h-[270px] mb-8 mt-16 md:mt-5">

        {/* Decorative rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="absolute inset-0 rounded-full border border-dashed border-white/10"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute -inset-6 rounded-full border border-white/5"
        />

        {/* Orbit ring — spins via CSS in index.css, pauses on icon hover */}
        <motion.div
          className="orbit-ring"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {SOCIAL_LINKS.map((link, i) => {
            const Icon = ICON_MAP[link.icon];
            const angleDeg = (i / SOCIAL_LINKS.length) * 360 - 90;
            const angleRad = (angleDeg * Math.PI) / 180;
            const orbitRadius = 165;
            const cx = Math.cos(angleRad) * orbitRadius;
            const cy = Math.sin(angleRad) * orbitRadius;

            return (
              <div
                key={link.label}
                className="orbit-icon-wrapper"
                style={{ transform: `translate(${cx}px, ${cy}px)` }}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  title={link.label}
                  className="orbit-icon-inner"
                >
                  <Icon size={16} />
                </a>
              </div>
            );
          })}
        </motion.div>

        {/* Image stack */}
        <motion.div
          ref={imageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 180, damping: 18 }}
          className="absolute inset-0 rounded-full overflow-hidden ring-2 ring-purple-500/40 ring-offset-4 ring-offset-[#0a0a0a] shadow-2xl shadow-purple-900/60"
          style={{ cursor: "crosshair" }}
        >
          <img
            src={avatarImg}
            alt={OWNER.name}
            className="absolute inset-0 w-full h-full object-cover bg-[#181428]"
            draggable={false}
          />
          <img
            src={animeImg}
            alt={`${OWNER.name} — anime`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              maskImage: animeMask,
              WebkitMaskImage: animeMask,
              opacity: spotlight ? 1 : 0,
              transition: "opacity 0.3s ease",
              pointerEvents: "none",
            }}
            draggable={false}
          />
        </motion.div>

        {/* Available badge */}
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-1 right-1 flex items-center gap-1.5 bg-[#111] border border-green-500/30 text-green-400 text-[10px] font-semibold px-2 py-0.5 rounded-full z-30"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Available
        </motion.span>
      </div>

      {/* Text */}
      <div className="relative z-10 text-center w-full max-w-3xl mx-auto pb-20">
        <motion.p
          {...fadeUp(0.2)}
          className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-3"
        >
          {"Hello, I'm"}
        </motion.p>

        <motion.h1
          {...fadeUp(0.3)}
          className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[0.95] mb-4 flex flex-col items-center"
        >
          <span className="gradient-text text-center w-full">
            {OWNER.fullName ?? OWNER.name}
          </span>
        </motion.h1>

        <motion.h2
          {...fadeUp(0.4)}
          className="font-display font-semibold text-xl md:text-2xl text-[#888] mb-5"
        >
          {OWNER.role}
        </motion.h2>

        <motion.p
          {...fadeUp(0.5)}
          className="text-[#666] text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10"
        >
          {OWNER.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.6)}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-7 py-3 font-semibold rounded-xl text-white bg-gradient-to-r from-violet-600 to-purple-500 shadow-lg shadow-purple-900/50 hover:shadow-purple-700/70 transition-shadow duration-300"
          >
            View Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-7 py-3 font-semibold rounded-xl text-[#ccc] glass border border-white/10 hover:border-purple-500/40 hover:text-white transition-all duration-300"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#555]"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}