'use client'

import { NextIntlClientProvider } from 'next-intl'
import { useLocale } from 'next-intl'
import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'
import { useEffect } from 'react'

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
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}
