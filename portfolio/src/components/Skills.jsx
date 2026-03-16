// components/Skills.jsx
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SKILLS } from "../constants";

// ── Static imports for every skill icon PNG ──────────────────
import reactIcon       from "../assets/skills/react.png";
import javascriptIcon  from "../assets/skills/javascript.png";
import html5Icon       from "../assets/skills/html5.png";
import css3Icon        from "../assets/skills/css3.png";
import tailwindcssIcon from "../assets/skills/tailwindcss.png";
import bootstrapIcon   from "../assets/skills/bootstrap.png";
import appwriteIcon    from "../assets/skills/appwrite.png";
import sqlIcon         from "../assets/skills/sql.png";
import pythonIcon      from "../assets/skills/python.png";
import javaIcon        from "../assets/skills/java.png";
import gitIcon         from "../assets/skills/git.png";
import githubIcon      from "../assets/skills/github.png";
import viteIcon        from "../assets/skills/vite.png";
import vercelIcon      from "../assets/skills/vercel.png";
import reduxIcon       from "../assets/skills/redux.png";
import restapiIcon     from "../assets/skills/restapi.png";
import vscodeIcon      from "../assets/skills/vscode.png";
import npmIcon         from "../assets/skills/npm.png";

// Map the `icon` key from constants to its imported PNG
const ICON_MAP = {
  react:       reactIcon,
  javascript:  javascriptIcon,
  html5:       html5Icon,
  css3:        css3Icon,
  tailwindcss: tailwindcssIcon,
  bootstrap:   bootstrapIcon,
  appwrite:    appwriteIcon,
  sql:         sqlIcon,
  python:      pythonIcon,
  java:        javaIcon,
  git:         gitIcon,
  github:      githubIcon,
  vite:        viteIcon,
  vercel:      vercelIcon,
  redux:       reduxIcon,
  restapi:     restapiIcon,
  vscode:      vscodeIcon,
  npm:         npmIcon,
};

function SkillPill({ name, icon }) {
  const iconSrc = ICON_MAP[icon];

  return (
    <div
      className="flex items-center gap-2.5 px-5 py-3 rounded-full glass border border-white/8
                 hover:border-purple-500/30 transition-all duration-300 select-none cursor-default mx-3"
    >
      {iconSrc && (
        <img
          src={iconSrc}
          alt={name}
          width={24}
          height={24}
          style={{ width: "24px", height: "24px", objectFit: "contain" }}
        />
      )}
      <span className="font-medium text-sm text-[#ccc] whitespace-nowrap">{name}</span>
    </div>
  );
}

export default function Skills() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // Duplicate for seamless loop
  const doubled = [...SKILLS, ...SKILLS];

  return (
    <section id="skills" className="section-padding overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-3">Tech Stack</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-[#666] mt-4 max-w-xl mx-auto text-sm">
            Technologies I use to craft modern, scalable products.
          </p>
        </motion.div>
      </div>

      {/* Row 1 – forward */}
      <div className="relative overflow-hidden py-3">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="marquee-track">
          {doubled.map((skill, i) => (
            <SkillPill key={i} {...skill} />
          ))}
        </div>
      </div>

      {/* Row 2 – reversed */}
      <div className="relative overflow-hidden py-3 mt-2">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="marquee-track" style={{ animationDirection: "reverse", animationDuration: "34s" }}>
          {[...doubled].reverse().map((skill, i) => (
            <SkillPill key={i} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}