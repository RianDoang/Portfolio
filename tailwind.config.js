/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./public/js/*.js"],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
      animation: {
        scaleIn: "scale .3s ease-in-out",
      },
      keyframes: {
        scale: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
