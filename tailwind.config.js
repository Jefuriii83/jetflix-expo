/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./packages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily:{
      'netflix-bold' : './packages/assets/fonts/NetflixSans-Bold.otf',
      'netflix-light' : '/packages/assets/fonts/NetflixSans-Light.otf',
      'netflix-medium' : '/packages/assets/fonts/NetflixSans-Medium.otf',
      'netflix-regular' : '/packages/assets/fonts/NetflixSans-Regular.otf'
    },
    screens: {
      'ms': {'min' : '320px', 'max' : '374px'},
      'mm': {'min' : '375px', 'max' : '424px'},
      'ml': {'min' : '425px', 'max' : '767px'},
      'tablet': {'min' : '768px', 'max' : '1023px'},
      'ls': {'min' : '1024px', 'max' : '1439px'},
      'll': {'min' : '1440px', 'max' : '2559px'},
      'xl': {'min' : '2560px'}
    },
    extend: {
    },
  },
  plugins: [],
}

