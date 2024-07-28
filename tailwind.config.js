/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsMobile': '0',
        'mobile': '576px', /* sm*/
        'tablets': '768px', /* md*/
        'laptop': '992px',  /* lg*/
        'desktop': '1300px',  /* 2xl*/
      },
    },
  },
  plugins: [],
}

