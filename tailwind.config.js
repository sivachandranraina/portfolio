/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "system-ui", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
      },
      keyframes: {
        aurora: {
          "25%": { transform: "translateX(12%) translateY(-8px) scaleX(1.5)" },
          "75%": { transform: "translateX(-12%) translateY(0) scaleX(1)" },
        },
        auroraSlow: {
          "25%": { transform: "translateX(-8%) translateY(6px) scaleX(0.5)" },
          "75%": { transform: "translateX(8%) translateY(0) scaleX(1)" },
        },
      },
      animation: {
        aurora: "aurora 4s ease-in-out infinite",
        auroraSlow: "auroraSlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
