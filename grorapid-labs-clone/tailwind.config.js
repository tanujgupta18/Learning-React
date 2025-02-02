/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this if your files are in different folders
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#302cff",
        customBlue2: "#1d1c43",
        customBlue3: "#50507e",
        customBlue4: "#070721",
        customBlue5: "#a0a0c7",
        customBlue6: "#cecddd",
      },
    },
  },
  plugins: [],
};
