/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "480px",
      },
      fontFamily: {
        orbitron: "Orbitron",
        rubik: "Rubik",
      },
      colors: {
        green: {
          100: "var(--color-green-100)",
        },
        light: "var(--color-light)",
        dark: "var(--color-dark)",
        background: "rgb(var(--background-start-rgb))",
      },
      spacing: {
        iconMobile: "50px",
        iconSmall: "55px",
        iconMedium: "60px",
        iconLarge: "65px",
        iconButtonMobile: "36px",
        iconButtonSmall: "40px",
        iconButtonMedium: "44px",
        iconButtonLarge: "48px",
      },
    },
  },
  plugins: [],
};
