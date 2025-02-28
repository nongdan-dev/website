import resolveConfig from 'tailwindcss/resolveConfig'

import twConfig from '../../tailwind.config'

const config = resolveConfig(twConfig)

export function useTailwind() {
  return config
}
