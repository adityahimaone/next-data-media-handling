module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bluewhite: "#F1F3FF",
        primaryDarkBlue: {
          400: "#0D28A6",
        },
        secondaryLimeGreen: {
          400: "#5CB85F",
        },
      },
    },
  },
  plugins: [],
};
