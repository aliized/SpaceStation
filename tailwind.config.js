/* @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        IranSans: ["IranSans", "sans-serif"],
      },
      backgroundImage: {
        headerBg: "url('/src/assets/images/earthBg.webp')",
        bgPlanets: "url('/src/assets/images/bgPlanets.webp')",
        issBg: "url('/src/assets/images/issBg.webp')",
        bgGalaxy: "url('/src/assets/images/bgGalaxy.webp')",
        bgSpaceHotel: "url('/src/assets/images/bgSpaceHotel.webp')",
        bgHeader1: "url('/src/assets/images/bgHeader1.webp')",
        bgHeader2: "url('/src/assets/images/bgHeader2.webp')",
        bgHeader3: "url('/src/assets/images/bgHeader3.webp')",

      },
      backgroundSize: { "60%": "65%" },
      borderRadius: { large: "4.5rem" },
    },

  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
