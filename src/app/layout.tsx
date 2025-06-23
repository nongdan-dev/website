'use client'

import { Inter, Roboto_Slab } from 'next/font/google'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { ClientLayout } from '@/components/client-layout'
import { siteConfig } from '@/config/site'
import { defaultLocale, locales } from '@/i18n/routing'
import Footer from '@/layout/footer'
import Header from '@/layout/header'
import '@/styles/index.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [locale, setLocale] = useState<string>(defaultLocale)
  const router = useRouter()

  useEffect(() => {
    const cookieLocale = document.cookie
      .split('; ')
      .find(row => row.startsWith('NEXT_LOCALE='))
      ?.split('=')[1]

    const validLocale =
      cookieLocale && locales.includes(cookieLocale as any)
        ? cookieLocale
        : defaultLocale

    setLocale(validLocale as string)

    const pathname = window.location.pathname
    const pathLocale = pathname.split('/')[1]
    if (pathLocale && locales.includes(pathLocale as any)) {
      const newPath = pathname.split('/').slice(2).join('/') || '/'
      window.history.replaceState(null, '', newPath)
    }
  }, [])

  const [messages, setMessages] = useState<Record<string, any> | null>(null)

  useEffect(() => {
    if (!locale) return

    import(`@/../messages/${locale}.json`)
      .then(module => setMessages(module.default))
      .catch(error => {
        console.error(`Failed to load messages for locale: ${locale}`, error)
        if (locale !== defaultLocale) {
          document.cookie = `NEXT_LOCALE=${defaultLocale}; path=/; max-age=31536000; samesite=lax`
          router.refresh()
        }
      })
  }, [locale, router])

  if (!messages) {
    return (
      <html lang={locale} suppressHydrationWarning>
        <body
          className={`${inter.variable} ${robotoSlab.variable} font-sans antialiased`}
        >
          <div className='flex h-screen items-center justify-center'>
            <div className='h-8 w-8 animate-spin rounded-full border-b-2 border-gray-900'></div>
          </div>
        </body>
      </html>
    )
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${robotoSlab.variable} font-sans antialiased`}
      >
        <ClientLayout locale={locale} messages={messages}>
          <Header />
          <main className='content-grid'>{children}</main>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  )
}
