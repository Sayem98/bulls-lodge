/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      /* backgroundImage: {
        "roadmap-bg": "url('/assets/roadmap-bg.png')",
      }, */
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
}
