/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0D2B3E",      // primary text / dark sections
        primary: {
          DEFAULT: "#0B6E6E", // teal, from logo mark
          light: "#0E8C8C",
          dark: "#084F4F",
        },
        accent: {
          DEFAULT: "#E58A2E", // warm amber, from logo
          light: "#F2A854",
          dark: "#C06E1B",
        },
        surface: "#FFFFFF",
        "surface-alt": "#F6F7F5",
        line: "#E4E7E5",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
