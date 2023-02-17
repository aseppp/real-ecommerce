const { fontFamily } = require("tailwindcss/defaultTheme");

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
      maxWidth: {
        xxs: "15rem",
        base: "10rem",
      },
      boxShadow: {
        bottom: "0px 15px 10px -12px rgb(0 0 0 / 0.25)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        darkBg: "#222223",
        darkFg: "#1c1c1c",
        darkCard: "#272727",
      },
    },
  },
  plugins: [],
};
