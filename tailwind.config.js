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
        "primary-100": "#F0F4FF",
        "primary-200": "#D9E2FF",
        "primary-300": "#A6C1FF",
        "primary-400": "#598BFF",
        "primary-500": "#3366FF",
        "primary-600": "#274BDB",
        "primary-700": "#1A34B8",
        "primary-800": "#102694",
        "primary-900": "#091C7A",
      },
    },
  },
  plugins: [],
};
