import { fontSize } from 'tailwindcss/defaultTheme'

import { ColorData, ColorKey, colors } from '../config/colors'

export function hexToRgb(hex: string) {
  return hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (_, r, g, b) => '#' + r + r + g + g + b + b,
    )
    .substring(1)
    .match(/.{2}/g)!
    .map(x => parseInt(x, 16))
    .join(' ')
}

export function hexToTwColorFormat(values: ColorData) {
  return (Object.keys(values) as ColorKey[]).reduce((acc, key) => {
    acc[key] = `rgb(${hexToRgb(values[key])} / <alpha-value>)`
    return acc
  }, {} as ColorData)
}

export function remToPx(rem: string, baseFontSize?: number) {
  const remValue = parseFloat(rem)

  if (isNaN(remValue)) {
    throw new Error('Invalid rem value')
  }

  if (!baseFontSize) {
    baseFontSize = parseFloat(
      getComputedStyle(document.documentElement).fontSize,
    )
  }

  return remValue * baseFontSize
}

export function generateColors() {
  return Object.fromEntries(
    Object.entries(colors).map(([key, values]) => [
      key,
      hexToTwColorFormat(values),
    ]),
  )
}

export function generateFontSizes() {
  const keys = Object.keys(fontSize) as (keyof typeof fontSize)[]
  return keys.reduce(
    (acc, cur) => {
      acc[cur] = fontSize[cur][0]
      return acc
    },
    {} as Record<keyof typeof fontSize, string>,
  )
}
