/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        primary:'blue-700'
      }
    },
  fontFamily :{
      'hero':'Sriracha'
    },
  },
  plugins: [],
}

