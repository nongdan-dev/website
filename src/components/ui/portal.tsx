"use client"

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type PortalProps = {
  children: React.ReactNode
  container?: Element
}

export function Portal({ children, container }: PortalProps) {
  const [mounted, setMounted] = useState(false)
  const [defaultContainer, setDefaultContainer] = useState<Element | null>(null)

  useEffect(() => {
    // Only runs on client
    let el = document.querySelector('#portal')
    if (!el) {
      el = document.createElement('div')
      el.id = 'portal'
      document.body.appendChild(el)
    }

    setDefaultContainer(el)
    setMounted(true)
  }, [])

  if (!mounted) return null
  
  const targetContainer = container || defaultContainer
  if (!targetContainer) return null

  return createPortal(children, targetContainer)
}
