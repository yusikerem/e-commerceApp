/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primaryGray: "#767676",
        secondaryGray: "#4F4F4F",
      },
      textColor: {
        primaryGray: "#767676",
      },
      padding: {
        128: "512px",
      },
      borderColor: {
        secondGray: "#4F4F4F",
      },
    },
  },
  plugins: [],
};
