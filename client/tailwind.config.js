/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif']
      },
      colors: {
        blue: '#1B5A7D',
        gold: '#EDA415',
        dark: '#292D32',
        deepBlue: '#0F172A',
        deepBlueHighlight: '#1E293B',
        lightWhite: '#F4F4F4',
        lightBlue: '#316887',
        lightBgBlue: '#B3D4E5',
        bgBlue: '#87BCD9',
        grey: '#A5A5A5',
        grey2: '#B6B6B6',
        grey3: '#9F9F9F',
        lightGrey:'#EAEAEA',
        greyBorder: '#DEE2E6'
      }
    },
  },
  plugins: [],
};
