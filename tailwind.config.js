/* @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        IranSans: ["IranSans", "sans-serif"],
      },
      backgroundImage: {
        headerBg: "url('/src/pics/earthBg.png')",
        bgPlanets: "url('/src/pics/bgPlanets.png')",
        issBg: "url('/src/pics/issBg.png')",
        bgGalaxy: "url('/src/pics/bgGalaxy.png')",
        bgSpaceHotel: "url('/src/pics/bgSpaceHotel.jpg')",
        bgHeader1: "url('/src/pics/bgHeader1.jpg')",
        bgHeader2: "url('/src/pics/bgHeader2.jpg')",
        bgHeader3: "url('/src/pics/bgHeader3.jpg')",

      },
      backgroundSize: { "60%": "65%" },
      borderRadius: { large: "4.5rem" },
    },

    plugins: [require("@tailwindcss/line-clamp"),],
  },
};
