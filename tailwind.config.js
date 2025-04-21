/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        pumpaOrange: '#f97316',
        pumpaCyan: '#22d3ee',
        pumpaPink: '#ec4899',
        pumpaDark: '#0f0f0f',
      },
      boxShadow: {
        glow: '0 0 10px #f97316, 0 0 20px #22d3ee',
      },
      animation: {
        fade: 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
