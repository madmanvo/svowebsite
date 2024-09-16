/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          100: '#FFF5F7',
          200: '#FED7E2',
          600: '#D53F8C',
        },
        purple: {
          200: '#E9D8FD',
        },
        blue: {
          200: '#BEE3F8',
        },
        green: {
          200: '#C6F6D5',
        },
      },
      clipPath: {
        'custom-geometric': 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    function({ addUtilities }) {
      addUtilities({
        '.clip-geometric': {
          'clip-path': 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        },
      });
    },
  ],
};