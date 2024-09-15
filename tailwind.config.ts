import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
    },
  },
  plugins: [],
}

export default config