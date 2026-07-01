/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7C5CFF',
          dark: '#5A3FE0',
        },
        accent: {
          DEFAULT: '#B4FF39',
        },
        navy: {
          DEFAULT: '#15101F',
          soft: '#1E1830',
        },
        ink: {
          DEFAULT: '#160F20',
          muted: '#6E6680',
        },
        line: '#E7E0F2',
        bg: '#F7F5FC',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      borderRadius: {
        'lg': '20px',
        'md': '14px',
        'sm': '10px',
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(15,40,90,0.08)',
        'soft-lg': '0 20px 50px rgba(15,40,90,0.14)',
      }
    },
  },
  plugins: [],
}
