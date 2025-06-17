/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: { max: "679px" },
        tablet: { min: "680px", max: "1199px" },
        desktop: { min: "1200px" },
      },
      fontFamily: {
        figtree: ["var(--font-figtree)"],
      },
      colors: {
        primary: "#000000",
        softYellow: "#FFF5CC",
        warning: "#8F6400",
        success: {
          bg: "#DCF3E3",
          text: "#256D40",
        },
        grayish: {
          light: "#F7F7F7",
          border: "#E0E0E0",
        },
        darkText: "#0A0A0A",
      },
    },
  },
  plugins: [],
};
