const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      '3xl': "2000px"
    },
    extend: {
      colors: {
        col: {
          transparent: "transparent",
          current: "currentColor",
          black: colors.black,
          white: colors.white,
          danger: "#ed0a34",
          primary: {
            DEFAULT: "#5b8def",
            dark: "#4b84f3",
          },
          "col-text": {
            primary: "#2c2d2e", //darker black
            secondary: "#d9dbe1", //lighter black
          },
          "col-bg": {
            primary: "#fafafb",
            secondary: "#d9dbe1",
          },
        },
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    debugScreens: {
      position: ['bottom', 'left'],
    },
  },
    variants: {
      extend: {},
    },
    plugins: [
      require("tailwind-scrollbar-hide"),
    ],
};
