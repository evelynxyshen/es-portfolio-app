/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React components
    "./public/index.html",        // Include the HTML file
  ],
  theme: {
    extend: {
      colors: {
        'designer-pink': '#ff758c',
        'coder-blue': '#758cff',
        'features-gray': '#f4f4f4',
        background: "#0e0e0e", // Merged background color
      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'], // Merged mono font family
      },
    },
  },
  plugins: [],
};
