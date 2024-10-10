/** @type {import('tailwindcss').Config} */
module.exports = {
  npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require('daisyui'),],
};
