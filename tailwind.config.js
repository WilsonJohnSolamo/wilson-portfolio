/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-red-orange": "#de3b30",
        "main-orange": "#e4722b",
        "main-gold": "#EEAF22",
        "main-cream": "#F6DBAD",
      },
    },
  },
  plugins: [],
};
