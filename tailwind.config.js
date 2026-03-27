/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        foreground: "#0B0B0C",
        primary: {
          DEFAULT: "#FF5C00",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#F4F4F5",
          foreground: "#0B0B0C",
        },
        accent: {
          DEFAULT: "#FF5C00",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#F4F4F5",
          foreground: "#71717A",
        },
      },
      fontFamily: {
        sans: ['"Inter"', '"Outfit"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
