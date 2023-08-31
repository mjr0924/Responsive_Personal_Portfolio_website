/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'bg-color':'#fdfdfd',
        'text-color':'#333',
        'main-color':'#754ef9',
        'white-color':'#fdfdfd',
        'shadow-color':'rgba(0,0,0,.2)'
      },
      boxShadow: {
        'xx': '0 .2rem .5rem rgba(0,0,0,.2)',
      },
      rotate: {
        'def': 'calc(360deg / 4 * var(--i)) ',
      }
    },
   
  },
  plugins: [],
}

