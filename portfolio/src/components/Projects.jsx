// components/Projects.jsx
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Lock, Eye } from "lucide-react";
import { PROJECTS, TAG_COLORS } from "../constants";

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const isExternalLive = project.liveUrl && project.liveUrl !== "#";

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative glass rounded-2xl overflow-hidden border border-white/5
                 hover:border-purple-500/30 transition-all duration-400
                 hover:shadow-2xl hover:shadow-purple-950/40 flex flex-col"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden h-48 flex-shrink-0">
        <motion.img
          src={project.image}
          alt={project.title}
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full object-cover brightness-60"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Hover overlay slides up */}
        <motion.div
          initial={false}
          animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/55 backdrop-blur-sm"
        >
          <p className="text-white/60 text-[10px] font-semibold tracking-widest uppercase mb-1">View Project</p>
          <div className="flex items-center gap-3">
            {isExternalLive && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.93 }}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold
                           bg-gradient-to-r from-violet-600 to-purple-500 text-white
                           shadow-lg shadow-purple-900/50"
              >
                <Eye size={12} /> Live Demo
              </motion.a>
            )}
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.93 }}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold
                         bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20 transition-colors"
            >
              <Github size={12} /> Source
            </motion.a>
          </div>
        </motion.div>

        {project.featured && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold
                           bg-gradient-to-r from-violet-600/90 to-purple-500/90 text-white uppercase tracking-wider z-10">
            Featured
          </span>
        )}
        {isExternalLive && (
          <span className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-0.5
                           rounded-full bg-black/50 backdrop-blur border border-green-500/30
                           text-green-400 text-[10px] font-semibold z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Live
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-lg text-white mb-1.5 group-hover:text-purple-300 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-[#666] text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        {/* Admin credentials */}
        {project.adminNote && (
          <div className="mb-4 p-3 rounded-xl bg-amber-500/8 border border-amber-500/25 flex items-start gap-2">
            <Lock size={13} className="text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-amber-400 text-[10px] font-bold uppercase tracking-wider mb-1">Demo Credentials</p>
              <p className="text-amber-300/80 text-[11px] font-mono leading-relaxed break-all">{project.adminNote}</p>
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border
                         ${TAG_COLORS[tag] ?? "bg-white/5 text-[#aaa] border-white/10"}`}>
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          {isExternalLive ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300 font-medium transition-colors group/link">
              Live Demo <ArrowRight size={11} className="group-hover/link:translate-x-0.5 transition-transform" />
            </a>
          ) : (
            <span className="text-xs text-[#444] font-medium">Coming Soon</span>
          )}
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-1.5 text-xs text-[#666] hover:text-white font-medium transition-colors">
            <Github size={12} /> View Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" className="section-padding px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[#666] mt-4 max-w-xl mx-auto text-sm">
            Real-world applications built with modern tooling — from full-stack platforms to polished frontend experiences.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/muhammadnouraiz?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                       glass border border-white/10 text-[#ccc] hover:text-white
                       hover:border-purple-500/40 transition-all duration-300"
          >
            <Github size={16} /> All Repositories on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
