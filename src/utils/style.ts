import { ColorData, ColorKey } from '@/config/colors'

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
