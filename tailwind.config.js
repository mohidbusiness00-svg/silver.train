/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#fdf8f3',
          100: '#f5e9dc',
          200: '#e8d0b8',
          300: '#d9b58e',
          400: '#c89963',
          500: '#b87d3e',
          600: '#9e6329',
          700: '#7d4e22',
          800: '#5e3b1c',
          900: '#4a2f17',
          950: '#2a1a0e'
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f2',
          200: '#faf0dd',
          300: '#f5e0bd',
          400: '#eecb93',
          500: '#e6b26e'
        },
        gold: {
          50: '#fbf8ef',
          100: '#f6efd3',
          200: '#ecdca6',
          300: '#e0c46e',
          400: '#d4ad42',
          500: '#c4952e',
          600: '#a97627',
          700: '#875a23',
          800: '#714822',
          900: '#613e21'
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite'
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideInLeft: { '0%': { opacity: '0', transform: 'translateX(-50px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        slideInRight: { '0%': { opacity: '0', transform: 'translateX(50px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        scaleIn: { '0%': { opacity: '0', transform: 'scale(0.9)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } }
      },
      backdropBlur: {
        xs: '2px'
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(74, 47, 23, 0.15)',
        'glass-lg': '0 16px 48px rgba(74, 47, 23, 0.2)',
        'gold': '0 4px 20px rgba(196, 149, 46, 0.3)'
      }
    }
  },
  plugins: []
}
