module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        customBlue: 'rgb(214, 240, 250)',
      },
      fontFamily: {
        'sans': ['Museo Sans', 'sans-serif'],
      }
    },
  },
};
