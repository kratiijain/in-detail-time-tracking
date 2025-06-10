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
    },
  },
  plugins: [],
};
