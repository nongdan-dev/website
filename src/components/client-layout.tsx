'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

interface ClientLayoutProps {
  children: ReactNode
  messages: Record<string, any>
}

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
