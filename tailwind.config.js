/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: '"Poppins", sans-serif'
      },
      colors: {
        primary: '#5AB2FF',
        footer: '#393E46'
      }
    },
  },
  plugins: [require("daisyui")],
}

