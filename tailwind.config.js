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
    },
   
  },
  plugins: [],
}

