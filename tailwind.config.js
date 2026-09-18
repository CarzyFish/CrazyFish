/** Config extraida del CDN Play para compilar el mismo CSS */
module.exports = {
  content: ['./index.html'],

      theme: {
        extend: {
          opacity: { 8: '0.08', 15: '0.15', 35: '0.35', 55: '0.55', 88: '0.88', 92: '0.92' },
          colors: {
            navy: {
              950: '#070e17',
              900: '#0b1624',
              850: '#0e1b2b',
              800: '#122236',
              700: '#1b3149',
            },
            aqua:    '#38bdf8', // cyan accent
            esmeralda:'#34d399', // convenio B2B green
            plata:   '#cbd5e1',
          },
          fontFamily: {
            sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            display: ['Sora', 'Inter', 'ui-sans-serif', 'sans-serif'],
          },
          boxShadow: {
            'glow-aqua': '0 0 0 1px rgba(56,189,248,0.35), 0 20px 45px -20px rgba(56,189,248,0.55)',
            'glow-esm':  '0 0 0 1px rgba(52,211,153,0.35), 0 20px 45px -20px rgba(52,211,153,0.45)',
          },
          keyframes: {
            floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
            shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
          },
          animation: {
            floaty: 'floaty 6s ease-in-out infinite',
            shimmer: 'shimmer 3s linear infinite',
          },
        },
      },
    
};
