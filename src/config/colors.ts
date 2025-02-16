export type ColorKey =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '950'

export type ColorData = Record<ColorKey, `#${string}`>

const primary: ColorData = {
  50: '#eef5ff',
  100: '#dae8ff',
  200: '#bdd7ff',
  300: '#90bfff',
  400: '#5b9aff',
  500: '#3575fc',
  600: '#1f55f1',
  700: '#173fde',
  800: '#1935b4',
  900: '#1b318d',
  950: '#152056',
}

const gray: ColorData = {
  50: '#f9fafb',
  100: '#f3f4f6',
  200: '#e5e7eb',
  300: '#d1d5db',
  400: '#9ca3af',
  500: '#6b7280',
  600: '#4b5563',
  700: '#374151',
  800: '#1f2937',
  900: '#111827',
  950: '#030712',
}

export default { primary, gray }
