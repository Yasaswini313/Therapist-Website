/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e3e8e3',
          200: '#c7d2c7',
          300: '#a3b5a3',
          400: '#7a947a',
          500: '#5c7a5c',
          600: '#486248',
          700: '#3b4f3b',
          800: '#324032',
          900: '#2a352a',
        }
      },
    },
  },
  plugins: [],
}
