/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInOut: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        fadeInOutExtended: {
          '0%, 25%, 75%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        scroll: {
          '0% ': { transform: 'translateX(- 100 %) ' }, // Empieza fuera de la pantalla a la izquierda
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        fade: 'fadeInOut 4s ease-in-out infinite',
        fadeExtended: 'fadeInOutExtended 6s ease-in-out infinite',
        scroll: 'scroll 10s linear infinite',
      },
      colors: {
        customGray: '#58595b',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
