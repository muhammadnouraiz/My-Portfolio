/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        sans:    ["DM Sans", "sans-serif"],
      },
      colors: {
        bg:      "#0a0a0a",
        accent:  "#7c3aed",
      },
      backgroundOpacity: {
        8: "0.08",
      },
    },
  },
  plugins: [],
};
