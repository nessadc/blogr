/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    fontFamily: {
      overpass: ['Overpass', 'sans-serif'],
      ubuntu: ['Ubuntu', 'sans-serif'],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        lightRed: 'hsl(356, 100%, 66%)',
        veryLightRed: 'hsl(355, 100%, 74%)',
        veryDarkBlue: 'hsl(208, 49%, 24%)',
        grayBlue: 'hsl(240, 2%, 79%)',
        veryDarkGrayBlue: 'hsl(207, 13%, 34%)',
        veryDarkBlackBlue: 'hsl(240, 10%, 16%)',
        veryLightRedGradient: 'hsl(13, 100%, 72%)',
        lightRedGradient: 'hsl(353, 100%, 62%)',
        darkGrayBlueGradient: 'hsl(237, 17%, 21%)',
        darkDesaturatedBlueGradient: 'hsl(237, 23%, 32%)',
      },
      backgroundImage: {
        'mobile-header-texture': "url('../images/bg-pattern-intro-mobile.svg')",
        'desktop-header-texture':
          "url('../images/bg-pattern-intro-desktop.svg')",
      },
    },
  },
  plugins: [],
};
