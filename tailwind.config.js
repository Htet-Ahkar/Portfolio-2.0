module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        blogDetailsWidth: "41.25rem",
        imageContainer: "50rem",
      },
      height: {
        blogMobileCard: "31.25rem",
        blogDetails: "41.25rem",
        imageContainer: "28.125rem",
      },
      fontFamily: {
        sans: ["Roboto Slab", "Roboto", "sans-serif"],
      },
      colors: {
        bg: "#FFFFFF",
        primary: "#000000",
        secondary: "#FFFFFF",
        primaryText: "#FFFFFF",
        secondaryText: "#000000",
        dark: {
          bg: "#000000",
          primary: "#FACC17",
          secondary: "#FFFFFF",
          primaryText: "#000000",
          secondaryText: "#FFFFFF",
        },
        success: "#156534",
        error: "#BE123C",
        reading: "#121212",
      },
    },
  },
  plugins: [],
};
