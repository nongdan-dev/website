'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { routing } from '@/i18n/routing'
import Footer from '@/layout/footer'
import Header from '@/layout/header'

import { ClientLayout } from './client-layout'

const { locales, defaultLocale } = routing

export function ClientRootLayout({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<string>(defaultLocale)
  const [messages, setMessages] = useState<Record<string, any> | null>(null)
  const router = useRouter()

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
      return
    }

    const browserLang = navigator.language.split('-')[0]
    const detectedLocale =
      browserLang && locales.includes(browserLang as any)
        ? browserLang
        : defaultLocale

    document.cookie = `NEXT_LOCALE=${detectedLocale}; path=/; max-age=31536000; samesite=lax`
    setLocale(detectedLocale)
  }, [])

  useEffect(() => {
    if (!locale) return

    let isMounted = true

    const loadMessages = async () => {
      try {
        const module = await import(`@/../messages/${locale}.json`)
        if (isMounted) {
          setMessages(module.default)
        }
      } catch (error) {
        console.error(`Failed to load messages for locale: ${locale}`, error)
        if (locale !== defaultLocale) {
          document.cookie = `NEXT_LOCALE=${defaultLocale}; path=/; max-age=31536000; samesite=lax`
          router.refresh()
        }
      }
    }

    loadMessages()

    return () => {
      isMounted = false
    }
  }, [locale, router])

  if (!messages) {
    return (
      <div className='flex h-screen items-center justify-center'>
        <div className='h-8 w-8 animate-spin rounded-full border-b-2 border-gray-900'></div>
      </div>
    )
  }

  return (
    <ClientLayout locale={locale} messages={messages}>
      <Header />
      <main className='content-grid'>{children}</main>
      <Footer />
    </ClientLayout>
  )
}
