/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ultramarine-color": "#01447B",
        "ultramarine-gold-color": "#FFD700",
        "backGround-color": "#E0E0E0",
        // RGBA
        modalBackground: "rgba(0, 0, 0, 0.75)"
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}
