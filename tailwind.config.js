/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      container: {
        center: true,
        padding: '22rem',
      },
      extend: {
        colors: {
          primary: "#0055FF",
          secondary: "#0B0A1F"
        }
      },
    },
    plugins: [
      require('@tailwindcss/typography')
    ]
  }