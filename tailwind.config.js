/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./**/*.md"],
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  theme: {
    extend: {
      colors: {
        tlgray: {
          200: "#E5E7EB",
          400: "#9CA3AF",
          700: "#374151",
          800: "#1F2937"
        }
      }
    }
  },
  daisyui: {
    themes: ["light", "dark", "emerald"],
  },
};
