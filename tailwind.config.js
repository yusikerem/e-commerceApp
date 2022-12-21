/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primaryGray: "#767676",
      },
      textColor: {
        primaryGray: "#767676",
      },
      padding: {
        128: "512px",
      },
    },
  },
  plugins: [],
};
