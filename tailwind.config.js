/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      animation: {
        "spin-custom": "spin 0.5s linear infinite",
        "bounce-custom": "bounce-custom 0.5s infinite",
      },
      keyframes: {
        "bounce-custom": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-75px)" },
        },
      },
    },
  },
  plugins: [],
};
