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
        issBg: "url('/src/pics/issBg.png')",
      },
      backgroundSize: { "60%": "65%" },
      borderRadius: { large: "4.5rem" },
    },
    plugins: [],
  },
};
