/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          pinkcity: "#FE5E85",          
        },
        fontFamily: {
          cormorant: ["var(--font-cormorant)", "serif"],
          sans: ["--var(--font-poppins)"],
        },
      },
    },
    plugins: [],
  };
  