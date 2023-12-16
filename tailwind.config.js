/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'border-gradient-to-r': 'linear-gradient(to right, transparent, #D1D5DB, transparent)',
      }),
      boxShadow: {
        'custom': '0px 0px 52px 1px rgba(0,0,0,0.5);',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        },
        fadeOut: {
          '0%': { opacity: '100%' },
          '100%': { opacity: '0%' },
        },
      },
      animation: {
        fadeIn: 'fadeIn .8s forwards',
        fadeOut: 'fadeOut .8s forwards',
      },
    },
  },
  plugins: [],
}