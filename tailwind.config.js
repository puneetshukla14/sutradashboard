/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: "#22d3ee",     // Cyan (for accent highlights)
        secondary: "#1f1f1f",   // For card/section backgrounds
        accent: "#ffb400",      // Gold/orange accent
        background: "#0d0d0d",  // Page background (dark mode)
        surface: "#181818",     // Elevated surfaces (cards/modals)
        muted: "#999999",       // Optional subtle text
        border: "#333333",      // Optional borders in dark mode
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        gradientX: "gradientX 5s ease infinite",
      },
      keyframes: {
        gradientX: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
      },
    },
  },
  plugins: [],
}
