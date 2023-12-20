/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/templates/**/*.{js,jsx,ts,tsx}`,
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {
      borderColor: {
        'color-1': 'var(--color-1)',
        'color-2': 'var(--color-2)',
        neutral: 'var(--neutral)',
      },
      colors: {
        stackoverflow: '#F48024',
        linkedin: '#0077B5',
        github: '#181717',
        primary: {
          50: '#fdf2f8',
          100: '#fce8f3',
          200: '#fad1e8',
          300: '#f8b4d9',
          400: '#f17eb8',
          500: '#e74694',
          600: '#d61f69',
          700: '#bf125d',
          800: '#99154b',
          900: '#751a3d',
          950: '#3f0e20',
        },
        'color-1': 'var(--color-1)',
        'color-2': 'var(--color-2)',
        neutral: 'var(--neutral)',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
