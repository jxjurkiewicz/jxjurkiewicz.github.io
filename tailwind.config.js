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
        xs: "480px",
        s: "560px",
      },
      fontFamily: {
        orbitron: "Orbitron",
        rubik: "Rubik",
        exo: ["'Exo 2'", "sans-serif"],
        audiowide: "Audiowide",
      },
      colors: {
        green: {
          100: "var(--color-green-100)",
        },
        light: "var(--color-light)",
        semidark: "var(--color-semidark)",
        dark: "var(--color-dark)",
        foreground: "rgb(var(--foreground-rgb) / <alpha-value>)",
        background: "rgb(var(--background-start-rgb))",
        backgroundEnd: "rgb(var(--background-end-rgb) / <alpha-value>)",
        backgroundBright: "rgb(var(--background-bright-rgb))",
        primBlue: {
          1050: "hsl(var(--color-primBlue-1050) / <alpha-value>)",
          1000: "hsl(var(--color-primBlue-1000) / <alpha-value>)",
          100: "hsl(var(--color-primBlue-100) / <alpha-value>)",
          50: "hsl(var(--color-primBlue-50) / <alpha-value>)",
        },
        suppBlue: {
          1000: "hsl(var(--color-suppBlue-1000) / <alpha-value>)",
          100: "hsl(var(--color-suppBlue-100) / <alpha-value>)",
        },
        blue: {
          100: "rgb(var(--color-blue-100) / <alpha-value>)",
          200: "rgb(var(--color-blue-200) / <alpha-value>)",
        }
      },
      spacing: {
        iconSocials: "30px",
        iconMobile: "50px",
        iconSmall: "55px",
        iconMedium: "60px",
        iconLarge: "65px",
        iconButtonMobile: "36px",
        iconButtonSmall: "40px",
        iconButtonMedium: "44px",
        iconButtonLarge: "48px",
      },
      boxShadow: {
        socials: "0px 0px 6px 3px rgba(204, 214, 246, 1)",
      },
    },
  },
  plugins: [],
};
