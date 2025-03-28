/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',  // Ensures Tailwind scans files in /pages
    './components/**/*.{js,ts,jsx,tsx}' // Ensures Tailwind scans files in /components
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Example custom color (dark blue)
        secondary: '#FBBF24' // Example custom color (yellow)
      }
    }
  },
  plugins: [],
};

