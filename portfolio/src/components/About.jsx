// components/About.jsx
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Mail, Calendar, Code2 } from "lucide-react";
import { OWNER } from "../constants";
import avatarImg from "../assets/profile/Avatar.jpeg";

const STATS = [
  { value: "2+",  label: "Years Experience" },
  { value: "5", label: "Projects Done"    },
  { value: "15+",  label: "Technologies"     },
];

function StatCard({ value, label, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 * index, duration: 0.6 }}
      className="flex-1 flex flex-col items-center justify-center
                 glass rounded-2xl p-5 border border-white/5
                 hover:border-purple-500/20 transition-colors"
    >
      <p className="font-display font-bold text-3xl gradient-text">{value}</p>
      <p className="text-[#666] text-xs mt-1 font-medium">{label}</p>
    </motion.div>
  );
}

export default function About() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-3">About Me</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </motion.div>

        {/* items-stretch: both columns grow to match the taller one */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">

          {/* Left – bio card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="h-full"
          >
            <div className="h-full glass rounded-3xl p-8 border border-white/5 relative overflow-hidden">
              {/* Decorative blobs */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-purple-700/10 blur-[60px] pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-violet-700/8 blur-[60px] pointer-events-none" />

              {/* Avatar mini */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={avatarImg}
                  alt={OWNER.name}
                  className="w-14 h-14 rounded-2xl object-cover ring-1 ring-purple-500/30 bg-[#181428]"
                />
                <div>
                  <p className="font-display font-bold text-lg text-white">{OWNER.name}</p>
                  <p className="text-purple-400 text-sm">{OWNER.role}</p>
                </div>
              </div>

              <p className="text-[#888] leading-relaxed mb-6">{OWNER.bio}</p>

              {/* Meta info */}
              <ul className="space-y-3">
                {[
                  { icon: MapPin,   text: OWNER.location                               },
                  { icon: Mail,     text: OWNER.email                                  },
                  { icon: Calendar, text: OWNER.university ?? "Available for freelance" },
                  { icon: Code2,    text: "Open Source Contributor"                    },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-sm text-[#777]">
                    <span className="w-8 h-8 rounded-lg bg-purple-600/15 flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-purple-400" />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right – stats + blurb + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-full flex flex-col gap-6"
          >
            {/* Stat cards: flex-1 wrapper + flex-1 per card = even vertical fill */}
            <div className="flex-1 flex flex-col gap-4">
              {STATS.map((s, i) => (
                <StatCard key={s.label} {...s} index={i} />
              ))}
            </div>

            <p className="text-[#666] leading-relaxed">
              I'm dedicated to writing clean, scalable code and collaborating closely
              with clients to bring their vision to life. Whether it's a startup MVP or
              a complex enterprise system, I bring the same level of care and precision.
            </p>

            <motion.a
              href="/Muhammad_Nouraiz_Resume.pdf"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold
                         bg-gradient-to-r from-violet-600 to-purple-500 text-white
                         shadow-lg shadow-purple-900/40 hover:shadow-purple-700/60 transition-shadow"
            >
              Download Resume
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}