/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'navColor':'#4392F1',
        'searchBg':'#F2F1FA',
        'searchColor':'#767494',
        'cardColor':'#5D5A88',
        'newsColor':'#9795B5',
        'statisticBg':'#EA526F',
        'footerBg':'#4392F1'

      },
      width: {
        '1000': '1000px',
        '1220': '1220px',
        '388':'388px',
        '1140': '1140px',
        '600':'600px',
        '555':'555px',
        '500':'500px',
        
      },
      height:{
        '600': '600px',
        '670':'670px',
        '500':'500px',
        '450':'457px'
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
