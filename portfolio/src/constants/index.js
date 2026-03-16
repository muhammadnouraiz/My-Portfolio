// ============================================================
//  PORTFOLIO CONSTANTS — Muhammad Nouraiz
//  Edit this single file to update all personal data
// ============================================================

// ── Project image imports (local assets) ──────────────────────
import orenBlogImg       from "../assets/projects/oren-blog.png";
import gearhiveStoreImg  from "../assets/projects/gearhive-store.png";
import gearhiveAdminImg  from "../assets/projects/gearhive-admin.png";
import currencyImg       from "../assets/projects/currency-converter.png";
import passwordImg       from "../assets/projects/password-generator.png";


export const OWNER = {
  name: "Nouraiz",
  fullName: "Muhammad Nouraiz",
  role: "Front-End Developer",
  tagline: "I craft fast, scalable & user-centric web experiences.",
  bio: "Detail-oriented Software Engineering student and Front-End Developer with a strong foundation in building scalable, user-centric web applications. Proven experience in developing interactive dashboards and modern UIs using React.js and Tailwind CSS. Passionate about writing clean, maintainable code and solving complex UI challenges.",
  email: "muhammadnouraiz842@gmail.com",
  location: "Hafizabad, Punjab, Pakistan",
  phone: "+92 308-0636522",
  university: "UET Taxila — BS Software Engineering (2022–2026)",
};

export const SOCIAL_LINKS = [
  { label: "GitHub",    href: "https://github.com/muhammadnouraiz",          icon: "github"    },
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/muhammadnouraiz", icon: "linkedin"  },
  { label: "Instagram", href: "https://www.instagram.com/withonly_nouraiz",  icon: "instagram" },
  { label: "X",   href: "https://x.com/m_nouraiz_786",                 icon: "twitter"   },
];

export const NAV_LINKS = [
  { label: "Home",     href: "#home"     },
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact",  href: "#contact"  },
];

export const SKILLS = [
  { name: "React.js",     color: "#61DAFB", icon: "react"       },
  { name: "JavaScript",   color: "#F7DF1E", icon: "javascript"  },
  { name: "HTML5",        color: "#E34F26", icon: "html5"       },
  { name: "CSS3",         color: "#1572B6", icon: "css3"        },
  { name: "Tailwind CSS", color: "#38BDF8", icon: "tailwindcss" },
  { name: "Appwrite",     color: "#FD366E", icon: "appwrite"    },
  { name: "SQL",          color: "#336791", icon: "sql"         },
  { name: "Python",       color: "#FFD43B", icon: "python"      },
  { name: "Java",         color: "#ED8B00", icon: "java"        },
  { name: "Git",          color: "#F05032", icon: "git"         },
  { name: "GitHub",       color: "#FFFFFF", icon: "github"      },
  { name: "Vite",         color: "#646CFF", icon: "vite"        },
  { name: "Vercel",       color: "#FFFFFF", icon: "vercel"      },
  { name: "Redux",        color: "#764ABC", icon: "redux"       },
  { name: "REST APIs",    color: "#00D9FF", icon: "restapi"     },
  { name: "VS Code",      color: "#007ACC", icon: "vscode"      },
  { name: "npm",          color: "#CB3837", icon: "npm"         },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Oren Blog",
    description:
      "Full-stack blogging platform with secure auth (Signup/Login), Role-Based Access Control (RBAC), and full CRUD. Users can create, edit, and delete only their own posts.",
    image: orenBlogImg,
    tags: ["React.js", "Redux Toolkit", "Appwrite", "Tailwind CSS", "Vite", "Vercel"],
    liveUrl: "https://oren-blog-chi.vercel.app/",
    githubUrl: "https://github.com/muhammadnouraiz/Oren-Blog",
    featured: true,
    adminNote: null,
  },
  {
    id: 2,
    title: "GearHive — Store",
    description:
      "Customer-facing e-commerce storefront for browsing tech gear. Features a Redux Toolkit-powered cart with real-time subtotal calculations and a seamless simulated checkout.",
    image: gearhiveStoreImg,
    tags: ["React.js", "Redux Toolkit", "Appwrite", "Tailwind CSS", "Vite"],
    liveUrl: "https://gearhive-store.vercel.app/",
    githubUrl: "https://github.com/muhammadnouraiz/GearHive-Store",
    featured: true,
    adminNote: null,
  },
  {
    id: 3,
    title: "GearHive — Admin",
    description:
      "Protected admin dashboard for GearHive. Full CRUD product management, image storage, dynamic order tracking, and automated stock decrementing on purchase via Appwrite.",
    image: gearhiveAdminImg,
    tags: ["React.js", "Redux Toolkit", "Appwrite", "Tailwind CSS", "Vercel"],
    liveUrl: "https://gearhive-admin.vercel.app/",
    githubUrl: "https://github.com/muhammadnouraiz/GearHive-Admin",
    featured: true,
    adminNote: "Email: gearhiveofficial@gmail.com  |  Password: gearhive12345",
  },
  {
    id: 4,
    title: "Currency Converter",
    description:
      "Real-time exchange rate application integrating external REST APIs to fetch live currency rates using async/await JavaScript. Clean, minimal UI with instant results.",
    image: currencyImg,
    tags: ["React.js", "REST APIs", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/muhammadnouraiz/React_Projects/tree/main/Currency%20Project/currency_converter",
    featured: false,
    adminNote: null,
  },
  {
    id: 5,
    title: "Secure Password Generator",
    description:
      "Configurable security tool for generating strong, randomized passwords with variable complexity — choose length, symbols, numbers, and uppercase/lowercase mix.",
    image: passwordImg,
    tags: ["React.js", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/muhammadnouraiz/React_Projects/tree/main/Password_Generator/password_generator",
    featured: false,
    adminNote: null,
  },
];

export const SERVICES = [
  {
    icon: "⚛️",
    title: "React Development",
    description: "Scalable single-page applications and component libraries with React.js, Vite, and modern hooks. Clean, reusable, and maintainable code architecture.",
    highlight: "React.js · Vite · ES6+",
  },
  {
    icon: "🎨",
    title: "UI Implementation",
    description: "Pixel-perfect, responsive UIs translated from design files. Utility-first styling with Tailwind CSS — mobile-first by default.",
    highlight: "Tailwind CSS · CSS Grid",
  },
  {
    icon: "🔮",
    title: "State Management",
    description: "Predictable state architecture using Redux Toolkit and React Context API for complex multi-component data flows and persistent cart/session logic.",
    highlight: "Redux Toolkit · Context API",
  },
  {
    icon: "🔥",
    title: "BaaS Integration",
    description: "Full backend-as-a-service setup with Appwrite — authentication, database, file storage, RBAC, and real-time listeners wired into React frontends.",
    highlight: "Appwrite · Auth · CRUD",
  },
  {
    icon: "🔗",
    title: "API Integration",
    description: "RESTful API consumption with async JavaScript, real-time data fetching, error handling, and seamless integration into interactive UI components.",
    highlight: "REST APIs · Async JS · fetch",
  },
  {
    icon: "▲",
    title: "Deployment & CI/CD",
    description: "Production deployments on Vercel with CI/CD pipelines, Vite-optimised builds, and environment configuration for high-performance delivery.",
    highlight: "Vercel · Git · Vite",
  },
];

export const TAG_COLORS = {
  "React.js":       "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  "JavaScript":     "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  "HTML5":          "bg-orange-600/20 text-orange-300 border-orange-600/30",
  "CSS3":           "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "Tailwind CSS":   "bg-sky-500/20 text-sky-300 border-sky-500/30",
  "Appwrite":       "bg-pink-500/20 text-pink-300 border-pink-500/30",
  "SQL":            "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
  "Python":         "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  "Redux Toolkit":  "bg-violet-500/20 text-violet-300 border-violet-500/30",
  "REST APIs":      "bg-teal-500/20 text-teal-300 border-teal-500/30",
  "Vite":           "bg-purple-600/20 text-purple-300 border-purple-600/30",
  "Vercel":         "bg-white/10 text-white/80 border-white/20",
  "Git":            "bg-red-500/20 text-red-300 border-red-500/30",
};