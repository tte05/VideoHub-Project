/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      textColor:{
        textOne: "#1c1c1c",
        textTwo: "#4d4d4d",
      },
      backgroundColor: {
        bgOne: "#f0f0f0",
        bgTwo: "#e0e0e0",
        bgThree: "#b3b3b3",
        bgFour: "#333333",
        bgFive: "#000000",
      },
      animation:{
        "scale-pulse": "scalePulse 2s infinite ease-in-out",
      },
      keyframes: {
        scalePulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
