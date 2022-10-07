/* @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        IranSans: ["IranSans", "sans-serif"],
      },
      backgroundImage: { headerBg: "url('/src/pics/earth.png')" },
      backgroundSize: { "60%": "65%" },
    },
    plugins: [],
  },
};
