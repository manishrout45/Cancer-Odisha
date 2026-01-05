module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "swiper-slide",
    "swiper-slide-active",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        zoomSlide: "zoomSlide 0.5s ease-in-out",
        fadeIn: "fadeIn 1s ease-in-out",

        // 🔥 Added for rotating circular text
        spinSlow: "spinSlow 12s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        zoomSlide: {
          "0%": { transform: "scale(0.9)", opacity: 0.7 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },

        // 🔥 Keyframes for slow rotation
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
