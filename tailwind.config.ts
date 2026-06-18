import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink:   { DEFAULT: '#080B14', 50: '#0D1220', 100: '#111827' },
        gold:  { DEFAULT: '#C9A020', light: '#E8C04A', dim: '#8A6D15', subtle: 'rgba(201,160,32,0.08)' },
        fog:   { DEFAULT: 'rgba(255,255,255,0.06)', strong: 'rgba(255,255,255,0.12)' },
        sand:  '#EDE8DC',
        ocean: '#1A3A5C',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:    ['var(--font-dm)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
      letterSpacing: { widest2: '0.25em', widest3: '0.35em' },
      transitionTimingFunction: { smooth: 'cubic-bezier(0.4,0,0.2,1)', spring: 'cubic-bezier(0.34,1.56,0.64,1)' },
    },
  },
  plugins: [],
}
export default config
