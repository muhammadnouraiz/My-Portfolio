# 🌟 Portfolio — React + Vite + Tailwind + Framer Motion

A modern dark Noir portfolio built with React, TailwindCSS, and Framer Motion.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build
```

---

## ✏️ Customisation

All personal data lives in **one file**:

```
src/constants/index.js
```

| Export          | What to change                              |
|-----------------|---------------------------------------------|
| `OWNER`         | Your name, role, tagline, bio, avatar, email |
| `SOCIAL_LINKS`  | GitHub / LinkedIn / Instagram / Twitter URLs |
| `NAV_LINKS`     | Navbar items (label + href anchor)           |
| `SKILLS`        | Tech stack pills in the marquee              |
| `PROJECTS`      | Project cards (title, image, tags, URLs)     |
| `SERVICES`      | Bento service cards                          |
| `TAG_COLORS`    | Tailwind colour classes for project tags     |

### Swap your avatar

Replace the `OWNER.avatar` URL with any image URL, or drop a file into `public/` and reference it as `/your-photo.jpg`.

---

## 🗂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      — Glassmorphism sticky header
│   ├── Hero.jsx        — Avatar + orbiting social icons
│   ├── About.jsx       — Bio cards + stat grid
│   ├── Skills.jsx      — Infinite marquee
│   ├── Projects.jsx    — Project card grid
│   ├── Services.jsx    — Bento 3-column grid
│   ├── Contact.jsx     — Dark form with gradient button
│   └── Footer.jsx      — Links + socials
├── constants/
│   └── index.js        — ✅ ALL your personal data goes here
├── App.jsx             — Root layout + AnimatePresence
├── index.css           — Tailwind + custom styles
└── main.jsx            — React entry point
```

---

## 🎨 Design Tokens

| Token        | Value       | Usage                       |
|--------------|-------------|-----------------------------|
| `--bg`       | `#0a0a0a`   | Page background              |
| `--accent`   | `#7c3aed`   | Purple accent (buttons, glow)|
| `--border`   | `rgba(255,255,255,0.07)` | Subtle borders |

---

## 📦 Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** — utility-first styling
- **Framer Motion 11** — scroll reveals, hover effects, AnimatePresence
- **Lucide React** — icons
- **Syne** + **DM Sans** — typography

---

## 📄 License

MIT — free for personal and commercial use.
