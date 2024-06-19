import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

export type PortalProps = {
  children: ReactNode
  container?: Element
}

export function Portal({ children, container }: PortalProps) {
  const getContainer = () => {
    const c = document.querySelector('#portal')
    if (c) return c

    const div = document.createElement('div')
    div.id = 'portal'
    document.body.appendChild(div)
    return div
  }

  return createPortal(children, container || getContainer())
}
