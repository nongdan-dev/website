import resolveConfig from 'tailwindcss/resolveConfig'

import twConfig from '../../tailwind.config'

const config = resolveConfig(twConfig)

function useTailwind() {
  return config
}

export default useTailwind
