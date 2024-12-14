/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      scrollBehavior: ["responsive"], //
      colors: {
        primary: "#806f3d", // Custom color for primary
        secondary: "#C1BAA1", // Custom color for secondary
        accent: "#D7D3BF",
        bg: "#ECEBDE",
      },
    },
  },
  plugins: [],
};
