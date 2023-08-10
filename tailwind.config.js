/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // from https://github.com/joshdick/onedark.vim/blob/main/colors/onedark.vim
        onedark: {
          black: "#282c34",
          white: "#abb2bf",
          "light-red": "#e06c75",
          "dark-red": "#be5046",
          green: "#98c379",
          "light-yellow": "#e5c07b",
          "dark-yellow": "#d19a66",
          blue: "#61afef",
          magenta: "#c678dd",
          cyan: "#56b6c2",
          "gutter-grey": "#4b5263",
          "comment-grey": "#5c6370",
        },
      },
    },
  },
  plugins: [],
};
