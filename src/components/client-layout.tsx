'use client'

import { NextIntlClientProvider } from 'next-intl'
import { ReactNode } from 'react'

interface ClientLayoutProps {
  children: ReactNode
  locale: string
  messages: Record<string, any>
}

export function ClientLayout({
  children,
  locale,
  messages,
}: ClientLayoutProps) {
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone='Asia/Ho_Chi_Minh'
    >
      {children}
    </NextIntlClientProvider>
  )
}
