/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        borderColour: {
          '0%': {  textShadow: '-2px 0 red, 0 2px red, 2px 0 red, 0 -2px red'},
          '25%': { textShadow: '-2px 0 yellow, 0 2px yellow, 2px 0 yellow, 0 -2px yellow'},
          '50%': { textShadow: '-2px 0 green, 0 2px green, 2px 0 green, 0 -2px green'},
          '75%': { textShadow: '-2px 0 blue, 0 2px blue, 2px 0 blue, 0 -2px blue'},
         '100%': { textShadow: '-2px 0 red, 0 2px red, 2px 0 red, 0 -2px red'},
        }
      },
      animation: {
        borderColour: 'borderColour 4s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('@catppuccin/tailwindcss'),
  ],
}

