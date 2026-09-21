/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'near-black': '#111111',
        'charcoal': '#1A1A1A',
        'off-white': '#F7F6F2',
        'accent': '#2A5C45',
        'accent-light': '#3D7A60',
        'muted': '#6B6B6B',
        'border': '#E5E4E0',
        'border-dark': '#2A2A2A',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(3.5rem, 7vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'hero': ['clamp(2.8rem, 5.5vw, 5.5rem)', { lineHeight: '1.07', letterSpacing: '-0.03em' }],
        'section': ['clamp(2.2rem, 4vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'large': ['clamp(1.5rem, 2.5vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'body-lg': ['clamp(1rem, 1.2vw, 1.25rem)', { lineHeight: '1.6' }],
        'label': ['0.7rem', { lineHeight: '1.4', letterSpacing: '0.12em' }],
      },
      spacing: {
        'section': 'clamp(5rem, 10vw, 10rem)',
        'section-sm': 'clamp(3rem, 6vw, 6rem)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
        'line-draw': 'lineDraw 1.2s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
        'count': 'count 2s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        lineDraw: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
}
