/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // membuat custom spacing
      spacing: {
        13: '3.25rem'
      },
    height: {
      100: '100%'
    },
    width: {
      50: '10rem'
    }
    },
    fontFamily:{
      'Poppins' : ['Poppins']
    }
  },
  plugins: [],
}

