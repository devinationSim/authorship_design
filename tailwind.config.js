module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_modules/daisyui/dist/**/*.js',
  ],
  daisyui: {
    themes: ['winter', 'night'],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
