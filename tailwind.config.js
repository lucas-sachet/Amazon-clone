module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      google: '0 3px 4px 0 rgba(0,0,0,.25)',
      google_hover: ' 0 0 6px #4285f4'
    },
    extend: {
      colors: {
        google: {
          blue: "#4285f4",
          active_blue: "#1669F2",
        },
        amazon_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
