/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        'title': ['1.75rem', {lineHeight: '1.2'}],
        'large': ['1.25rem', {lineHeight: '1.5'}]
      }
    },
  },
  plugins: [],
}

