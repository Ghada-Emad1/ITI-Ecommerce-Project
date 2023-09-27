/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'black':'#000000',
        'darkGray':'#14213D',
        'orange':'#FCA311',
        'platinum':'#E5E5E5',
        'white':'#FFFFFF'
      },
    },
  },
  plugins: [],
}

