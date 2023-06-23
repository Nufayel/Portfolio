/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes:{
        fullspin:{
          '100%':{
            transform:'rotate(-360deg)'
          }
        }
      },
      animation:{
        fullspin:'fullspin 3s linear infinite'
      },
    },
  },
  plugins: [],
}

