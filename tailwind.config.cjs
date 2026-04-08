/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: {
      colors: {
        primary: "#1A1A1A", 
        secondary: "#1A1A1A",
      },
      fontFamily: {
        heading: ["Roboto Mono", "monospace"],
        body: ["Monospace", "sans-serif"],
      },
      fontSize:{
        'xxs':'0.67rem',
        'mxs':'0.8rem',
        'sb':'0.93rem',
        'mbase':'1.1rem',
        's2xl':'1.4rem'
      },
      maxWidth:{
        '4.7xl':'120rem',
        '5.3xl':'56.25rem.'  
      }
    },
  },
  plugins: [
    
  ],
}