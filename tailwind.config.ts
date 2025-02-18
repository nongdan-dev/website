import { fontFamily, spacing } from 'tailwindcss/defaultTheme'

import type { Config } from 'tailwindcss'

import { generateColors, generateFontSizes } from './src/utils/style'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Matter', ...fontFamily.sans],
        serif: ['Garamond', ...fontFamily.serif],
      },
      colors: generateColors(),
      fontSize: generateFontSizes(),
      lineHeight: {
        title: '1.2',
      },
      maxWidth: {
        1440: '90rem',
      },
      spacing: {
        header: spacing[20],
      },
      boxShadow: {
        sm: '0px 2px 4px 0px rgba(0, 0, 0, 0.10)',
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
