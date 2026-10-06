/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F96031",
        "primary-dark": "#D94A1F",
        "primary-light": "#FF8A5C",
        navy: "#17191B",
        "navy-light": "#383C3D",
        charcoal: "#383C3D",
        offwhite: "#FFFFFF",
        gold: "#F96031",
        "gold-dark": "#D94A1F",
        tan: "#FF9A73",
      },
      fontFamily: {
        outfit: ["Outfit", "Arial", "Helvetica", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      keyframes: {
        floating: {
          "0%": { transform: "translate(0, 0px)" },
          "50%": { transform: "translate(0, 10px)" },
          "100%": { transform: "translate(0, -0px)" },
        },
        dash: {
          to: { strokeDashoffset: "0" },
        },
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(232, 93, 38, 0.55)" },
          "70%": { boxShadow: "0 0 0 10px rgba(232, 93, 38, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(232, 93, 38, 0)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        floating: "floating 3s ease-in-out infinite",
        dash: "dash 12s linear infinite",
        "pulse-ring": "pulseRing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        glow: "glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
