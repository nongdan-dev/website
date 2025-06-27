'use client'

import { useEffect, useState } from 'react'

import MessageDefault from '@/i18n/messages/en.json'
import { routing } from '@/i18n/routing'
import Footer from '@/layout/footer'
import Header from '@/layout/header'
import { getCookie, setCookie } from '@/utils/cookie'

import { ClientLayout } from './client-layout'

const { defaultLocale } = routing

export function ClientRootLayout({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<string>(defaultLocale)
  const [messages, setMessages] = useState<Record<string, any> | null>(
    MessageDefault,
  )

  const load = async () => {
    let cookieLocale = getCookie('NEXT_LOCALE')
    if (!cookieLocale) {
      cookieLocale = defaultLocale
      setCookie('NEXT_LOCALE', cookieLocale, {
        path: '/',
        maxAge: 31536000,
        sameSite: 'lax',
      })
    }

    const messages = await import(`@/i18n/messages/${cookieLocale}.json`)
    return { messages, cookieLocale }
  }

  useEffect(() => {
    load().then(data => {
      setLocale(data.cookieLocale)
      setMessages(data.messages)
    })
  }, [])

  return (
    <ClientLayout locale={locale} messages={messages || {}}>
      <Header />
      <main className='content-grid'>{children}</main>
      <Footer />
    </ClientLayout>
  )
}
