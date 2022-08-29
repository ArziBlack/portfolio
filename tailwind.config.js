/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'body':'#17171f',
      'selected-text': '#a3a3ff',
      'theme':'#3f3fff',
      'nav':'#404053',
      'secondary':'#9191a4',
      'badge':'#3f3f51',
      'input-border':'#565666',
      'input':'#2a2a35'
    },
    extend: {},
  },
  plugins: [],
}
