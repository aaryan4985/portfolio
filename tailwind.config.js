/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // Customize your colors
        secondary: "#374151",
      },
      gradientColorStops: {
        "gradient-1": "#E9DAC4",
        "gradient-2": "#F7ECDE",
      },
    },
  },
  plugins: [],
};
