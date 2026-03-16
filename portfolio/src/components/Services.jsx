// components/Services.jsx
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SERVICES } from "../constants";

function ServiceCard({ service, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      whileHover={{ y: -4 }}
      className="glass rounded-2xl p-6 border border-white/5
                 hover:border-purple-500/25 transition-all duration-300 group relative overflow-hidden"
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-violet-600/0
                      group-hover:from-purple-600/5 group-hover:to-violet-600/5
                      transition-all duration-500 rounded-2xl pointer-events-none" />

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-purple-600/15 border border-purple-500/20
                      flex items-center justify-center text-2xl mb-4
                      group-hover:bg-purple-600/25 transition-colors duration-300">
        {service.icon}
      </div>

      <h3 className="font-display font-semibold text-lg text-white mb-2 group-hover:text-purple-300 transition-colors">
        {service.title}
      </h3>

      <p className="text-[#666] text-sm leading-relaxed mb-4">
        {service.description}
      </p>

      {/* Highlight badge */}
      <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold
                       bg-purple-600/15 text-purple-300 border border-purple-500/20">
        {service.highlight}
      </span>
    </motion.div>
  );
}

export default function Services() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" className="section-padding px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-3">What I Do</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-[#666] mt-4 max-w-xl mx-auto text-sm">
            End-to-end digital solutions, from concept to deployment and beyond.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
