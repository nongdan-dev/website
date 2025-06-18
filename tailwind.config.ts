import type { Config } from 'tailwindcss'

import { colors } from './src/config/colors'

export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './posts/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-roboto-slab)'],
      },
      colors: {
        ...colors,
      },
      lineHeight: {
        title: '1.2',
      },
      maxWidth: {
        '1440': '90rem',
      },
      spacing: {
        header: '5rem',
      },
      boxShadow: {
        sm: '0px 2px 4px 0px rgba(0, 0, 0, 0.05)',
        md: '4px 4px 12px 0px rgba(0, 0, 0, 0.10)',
      },
      animation: {
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        slideUpAndFade: {
          from: { opacity: '0', transform: 'translateY(2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
