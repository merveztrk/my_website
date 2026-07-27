/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FDF7F9',
          100: '#FAD0DD',
          200: '#F7ADC3',
          300: '#E8A5B8',
          400: '#D47595',
          500: '#B35272',
          600: '#8C3854',
          700: '#69263D',
          800: '#4A202C',
          900: '#2E101A',
        },
        roseGold: {
          light: '#FCE3EC',
          DEFAULT: '#E8A5B8',
          dark: '#B35272',
        }
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
