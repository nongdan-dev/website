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

export type ColorData = Record<ColorKey, string>

export default {
  primary: {
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
  },
}
