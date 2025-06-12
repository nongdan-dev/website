"use client"

import { useCallback, useRef } from 'react'

export function useLockScroll() {
  const scrollPosition = useRef({ top: 0, left: 0 })

  const handleWheel = useCallback((e: WheelEvent | TouchEvent) => {
    e.preventDefault()
  }, [])

  const handleScroll = useCallback(() => {
    window.scrollTo(scrollPosition.current)
  }, [])

  const on = () => {
    scrollPosition.current = {
      top: window.scrollY ?? 0,
      left: window.screenX ?? 0,
    }
    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchmove', handleWheel, { passive: false })
    window.addEventListener('scroll', handleScroll, { passive: false })
  }

  const off = () => {
    window.removeEventListener('wheel', handleWheel)
    window.removeEventListener('touchmove', handleWheel)
    window.removeEventListener('scroll', handleScroll)
  }

  return { on, off }
}

export default useLockScroll
