import defaultTheme from 'tailwindcss/defaultTheme'

import type { Config } from 'tailwindcss'

import colors from './src/config/colors'
import { hexToTwColorFormat } from './src/utils/color'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: Object.fromEntries(
        Object.entries(colors).map(([key, values]) => [
          key,
          hexToTwColorFormat(values),
        ]),
      ),
      fontSize: Object.keys(defaultTheme.fontSize).reduce((acc, cur) => {
        acc[cur] = defaultTheme.fontSize[cur][0]
        return acc
      }, {}),
      fontFamily: {
        title: ['Montserrat'],
        body: ['Mulish', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        1440: 'var(--max_width_1440)',
      },
      height: {
        header: 'var(--header_height)',
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
