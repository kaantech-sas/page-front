/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores principales - Mejorados para mayor visibilidad
        primary: {
          cyan: '#00F0FF',
          gold: '#D4AF37',
          black: '#000000',
          dark: '#0A0A0A',
        },
        // Colores de texto con mejor contraste
        text: {
          primary: '#FFFFFF',
          secondary: 'rgba(255, 255, 255, 0.85)',
          tertiary: 'rgba(255, 255, 255, 0.70)',
          muted: 'rgba(255, 255, 255, 0.60)',
        },
        // Colores de fondo
        bg: {
          primary: '#000000',
          secondary: '#0A0A0A',
          overlay: 'rgba(0, 0, 0, 0.6)',
          glass: 'rgba(0, 0, 0, 0.4)',
        },
        // Bordes más visibles
        border: {
          primary: 'rgba(255, 255, 255, 0.2)',
          secondary: 'rgba(255, 255, 255, 0.1)',
          cyan: 'rgba(0, 240, 255, 0.4)',
          gold: 'rgba(212, 175, 55, 0.4)',
        },
      },
      fontFamily: {
        primary: ['Kode Mono', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'heading': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'subheading': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 240, 255, 0.3)',
        'glow-gold': '0 0 20px rgba(212, 175, 55, 0.3)',
        'glow-cyan-lg': '0 0 40px rgba(0, 240, 255, 0.5)',
        'glow-gold-lg': '0 0 40px rgba(212, 175, 55, 0.5)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}

