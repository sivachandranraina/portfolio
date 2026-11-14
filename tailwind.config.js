/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        netflix: {
          red: "#E50914",
          darkRed: "#B81D24",
          black: "#141414",
          deep: "#0B0B0B",
          card: "#181818",
          hover: "#232323",
          gray: "#808080",
          lightGray: "#B3B3B3",
          match: "#46D369",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "'Bebas Neue'", "system-ui", "sans-serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
        bebas: ["'Bebas Neue'"]
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
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        aurora: "aurora 4s ease-in-out infinite",
        auroraSlow: "auroraSlow 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
