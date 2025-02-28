import { useLayoutEffect, useState } from 'react'

const getMatches = (query: string) => {
  return window.matchMedia(query).matches
}

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => getMatches(query))

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useLayoutEffect(() => {
    const media = window.matchMedia(query)
    media.addEventListener('change', handleChange)
    return () => media.removeEventListener('change', handleChange)
  }, [query])

  return matches
}
