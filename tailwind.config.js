/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        electric: {
          DEFAULT: '#00d4ff',
          light: '#66e0ff',
          dark: '#0099cc',
          glow: 'rgba(0, 212, 255, 0.3)',
        },
        cyan: {
          DEFAULT: '#00f0ff',
          light: '#80f5ff',
        },
        background: {
          deep: '#0a0e1a',
          primary: '#0f1629',
          card: '#141b2d',
          elevated: '#1a2340',
        },
        text: {
          primary: '#ffffff',
          secondary: '#a0aec0',
          muted: '#6b7280',
        },
        accent: {
          green: '#00ff88',
          orange: '#ff8c00',
          red: '#ff4757',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-electric': 'linear-gradient(135deg, #00d4ff 0%, #00f0ff 50%, #0066ff 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0a0e1a 0%, #0f1629 100%)',
        'gradient-card': 'linear-gradient(145deg, rgba(20, 27, 45, 0.8) 0%, rgba(26, 35, 64, 0.6) 100%)',
      },
      boxShadow: {
        'electric': '0 0 20px rgba(0, 212, 255, 0.3)',
        'electric-lg': '0 0 40px rgba(0, 212, 255, 0.4)',
        'glow': '0 0 15px rgba(0, 240, 255, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
