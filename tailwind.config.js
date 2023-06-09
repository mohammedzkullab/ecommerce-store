/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          dark: "#202325",
        },
        red: {
          light: "#ff324d",
        },
        black: {
          DEFAULT: "#000",
          primary: "#292b2c",
        },
      },
      backgroundImage: {
        "hero-image1": "url('/assets/img/1.png')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
