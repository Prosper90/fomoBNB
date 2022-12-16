/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./*.html",
    "./src/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fomofont: "Roboto,Ubuntu,  ,sans"
      },
      color: {
        fomopink: "#f000f0",
        fomogreen: "#32cd32",
        fomobrown: "#ffc107"
      },
      backgroundColor: {
        fomopink: "#f000f0",
        fomogreen: "#32cd32",
        fomobrown: "#ffc107"
      },
      shadow: {
        fomoshadow: "0 0 2px #690069, 0 0 25px #c0c, 0 0 5px #f0f",
        fomotextshadow: "0 0 10px #38f000, 0 0 10px #008020"
      }
    },
  },
  plugins: [],
}