module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
],
  theme: {
    colors: {
      primary: '#1E429F',
      secondary: '#172B4D',
      deepDark: '#1b1b1b',
      lightBlue: '#1B99E5'
    }
  },
  plugins: [require('flowbite/plugin')],
}
