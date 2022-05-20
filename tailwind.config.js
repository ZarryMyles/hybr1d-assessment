module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {  
    extend: {
      colors: {
      bgDark: '#121212',
      bgLight: '#ededed',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}