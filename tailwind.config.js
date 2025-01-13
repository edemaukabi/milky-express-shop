/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#EDEDED',
        customGrayBold: '#A3A3A3',
        customGrayFaint: '#838383',
        bloodRed: '#FF1A71',
        faintPink: '#FFEAF2',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
