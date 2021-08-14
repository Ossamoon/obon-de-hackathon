module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
      }
    },
    screens: {
      'print': {'raw': 'print'},
    },
  },
  variants: {
    extend: {
      borderOpacity: ['focus'],
      borderWidth: ['focus'],
    }
  },
  plugins: [],
}
