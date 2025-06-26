'use client'

import { useEffect, useState } from 'react'

import MessageDefault from '@/i18n/messages/en.json'
import { routing } from '@/i18n/routing'
import Footer from '@/layout/Footer'
import Header from '@/layout/Header'

import { ClientLayout } from './client-layout'

const { locales, defaultLocale } = routing

export function ClientRootLayout({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<string>(defaultLocale)
  const [messages, setMessages] = useState<Record<string, any> | null>(
    MessageDefault,
  )

  const getCookie = (name: string): string | undefined => {
    if (typeof document === 'undefined') return undefined
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop()?.split(';').shift()
    return undefined
  }

  useEffect(() => {
    const cookieLocale = getCookie('NEXT_LOCALE')
    if (cookieLocale && locales.includes(cookieLocale as any)) {
      setLocale(cookieLocale)
    } else {
      document.cookie = `NEXT_LOCALE=${defaultLocale}; path=/; max-age=31536000; samesite=lax`
      setLocale(defaultLocale)
    }
  }, [])

  async function loadMessages(locale: string) {
    try {
      const messages = await import(`@/i18n/messages/${locale}.json`)
      return messages.default || messages
    } catch (error) {
      console.error(`Failed to load messages for ${locale}:`, error)
      return null
    }
  }

  useEffect(() => {
    if (!locale) return

    let isMounted = true

    const load = async () => {
      try {
        const loadedMessages = await loadMessages(locale)
        if (isMounted && loadedMessages) {
          setMessages(loadedMessages)
        }
      } catch (error) {
        console.error('Failed to load messages:', error)
      }
    }

    load()

    return () => {
      isMounted = false
    }
  }, [locale])

  return (
    <ClientLayout locale={locale} messages={messages || {}}>
      <Header />
      <main className='content-grid'>{children}</main>
      <Footer />
    </ClientLayout>
  )
}
