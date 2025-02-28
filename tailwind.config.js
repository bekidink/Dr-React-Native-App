/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00BBD3",
        // secondary: "#0270FB",
        secondary: "#33E4DB",
        tertiary: "#E9F6FE",
        button: "#3E6DB5",
        accent: "#004360",
        dark: "#333333",
        light: "#F2F2F2",
        card: "#E3E4E5",
      },
      fontFamily: {
        montserrat: ["Monserrat", "san-serif"],
      },
    },
  },
  plugins: [],
};
