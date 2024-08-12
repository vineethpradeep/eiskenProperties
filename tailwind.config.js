/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#c69963",
        "primary-dark": "#b28451",
        "secondary-color": "#101d2c",
        "grey-light-1": "#f9f7f6",
        "grey-light-2": "#aaa",
        "grey-dark-1": "#54483a",
        "grey-dark-2": "#6d5d4b",
        "primary-color-light": "#f8f6f3",
        "share-light": "#ff8982",
        "share-dark": "#c25451",
        "light-seperation": "#eee8df",
        "alert-color": "#d96441",
        "switch-color": "#fff7e7",
        "switch-2-color": "#e9ede8",
        "friend-1-color": "#ffb393",
        "friend-2-color": "#eea678",
        "friend-3-color": "#c69963",
        "friend-4-color": "#b8a99a",
        "friend-5-color": "#c38323",
        "friend-6-color": "#514538",
        "primary-dark-2": "#8e6633",
      },
      fontFamily: {
        "primary-font": ["Nunito", "sans-serif"],
        "display-font": ["Josefin Sans", "sans-serif"],
      },
      gridTemplateColumns: {
        "70/30": "70% 30%",
      },
    },
  },
  variants: {},
  plugins: [],
};
