/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#14181C', // deep charcoal-blue background
          panel: '#1B2126',   // raised surface
          panel2: '#20272D',  // secondary surface (cards on cards)
          line: '#2A3138',    // borders / dividers
        },
        ink: {
          DEFAULT: '#EDEAE3', // warm off-white body text
          soft: '#A9B0B4',    // muted secondary text
          faint: '#6B7378',   // tertiary / disabled text
        },
        hardware: {
          DEFAULT: '#E8A33D', // amber — diagnostic LED / solder warmth
          soft: '#3A2E1C',    // amber-tinted surface for hardware contexts
        },
        software: {
          DEFAULT: '#5FA8A0', // muted teal — terminal / Linux
          soft: '#17282A',    // teal-tinted surface for software contexts
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
}
