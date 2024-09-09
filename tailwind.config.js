/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        lightGreen: 'hsl(148, 38%, 91%)',
        green: 'hsl(169, 82%, 27%)',
        red: 'hsl(0, 66%, 56%)',
        white: 'hsl(0, 0%, 100%)',
        mediumGrey: 'hsl(186, 15%, 59%)',
        darkGrey: 'hsl(187, 24%, 22%)'
      },
      screens: {
        xs: "468px",
      },
    },
  },
  plugins: [],
};

