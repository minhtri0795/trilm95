/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: { 950: "#111" },
        green: { 250: "#88fdc5" },
        indigo: { 550: "#513eea" },
        magenta: "#ff0090",
      },
    },
  },
  plugins: [],
};
