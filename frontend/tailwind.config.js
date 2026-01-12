/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#014E92",
        white: "#ffffff",
        black: "#000000",
        lightGrey: "#EFEEF0",
        baseGrey: "#C8C5CB",
        darkGrey: "#827D89",
        dark: "#142C54",
        noteLight: "#FDEBAB",
        noteDark: "#725A03",
        error: "#D65745",
        lightError: "#F7DEE3",
        success: "#55B938",
        lighSuccess: "#DAF6E4",
        warning: "#EAC645",
        lighWarning: "#FDEBAB",
        info: "#5296D5",
        lighInfo: "#ffffff",
      },
      fontFamily: {
        regular: ['Inter-Regular'],
        medium: ['Inter-Medium'],
        bold: ['Inter-Bold'],
      },
    },
  },
  plugins: [],
}