/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
      Kaushan: ["Kaushan Script, cursive"],
    },
    colors:{
      "white": "#FFFFFF",
      "black": "#000000",
      "white-ish": "gray",
      "main-color": "#0A2647",
      "secondary-color": "#11B89A",
      "darker-main-color": "#081f38"
    
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      }
    }
  
  },
  plugins: [],
}
