// components/Footer.jsx
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Heart } from "lucide-react";
import { OWNER, SOCIAL_LINKS, NAV_LINKS } from "../constants";

function XIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const ICON_MAP = { github: Github, linkedin: Linkedin, instagram: Instagram, twitter: XIcon };

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 mt-0">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p className="font-display font-bold text-2xl gradient-text mb-3">
              {OWNER.name}<span className="text-purple-400">.</span>dev
            </p>
            <p className="text-[#555] text-sm leading-relaxed max-w-xs">
              {OWNER.tagline} Let's build something great together.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[#777] text-xs font-semibold uppercase tracking-widest mb-4">Navigation</p>
            <ul className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" }); }}
                    className="text-[#666] text-sm hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-[#777] text-xs font-semibold uppercase tracking-widest mb-4">Connect</p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = ICON_MAP[link.icon];
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.93 }}
                    className="w-9 h-9 rounded-xl glass border border-white/8
                               flex items-center justify-center text-[#777]
                               hover:text-white hover:border-purple-500/40 transition-all duration-300"
                  >
                    <Icon size={15} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#444] text-xs">
            © {year} {OWNER.name}. All rights reserved.
          </p>
          <p className="text-[#444] text-xs flex items-center gap-1">
            Made with <Heart size={11} className="text-purple-500 mx-0.5" fill="currentColor" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
