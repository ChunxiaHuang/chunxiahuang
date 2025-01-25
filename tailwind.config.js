/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        html: "#E44D26",          // HTML 品牌色
        css: "#1572B6",           // CSS 品牌色
        javascript: "#F7DF1E",    // JavaScript 品牌色
        react: "#61DAFB",         // React 品牌色
        java: "#007396",          // Java 品牌色
        csharp: "#239120",        // C# 品牌色
        mysql: "#4479A1",         // MySQL 品牌色
        linkedin: "#0077B5",      // LinkedIn 品牌色
        github: "#181717",
        tailwind: "#06B6D4",
        python: "#3776AB",
        nextjs: "#000000",
        postgre: "#4169E1",
      },
    },
  },
  plugins: [],
}

