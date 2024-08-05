/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        arrowGray: "#D5D6D7", // Use camelCase for custom colors
      },
    },
  },
  plugins: [],
}
