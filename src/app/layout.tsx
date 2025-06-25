import { Inter, Roboto_Slab } from 'next/font/google'

import { getLocaleFromCookie } from '@/app/actions/locale'
import { ClientLayout } from '@/components/client-layout'
import { routing } from '@/i18n/routing'
import Footer from '@/layout/footer'
import Header from '@/layout/header'
import '@/styles/index.css'

export const dynamic = 'force-dynamic' // no catching
const { defaultLocale } = routing

async function getMessages(locale: string) {
  try {
    const messages = (await import(`@/../messages/${locale}.json`)).default
    return messages
  } catch (error) {
    console.error(`Failed to load messages for locale: ${error}`)
    return {}
  }
}

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

export const metadata = {
  title: 'Nongdandev',
  description: 'Technology solutions for modern agriculture',
  icons: {
    icon: '/favicon-new.ico',
  },
  metadataBase: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://nongdan.dev'
      : 'http://localhost:3000',
  ),
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocaleFromCookie()
  const messages = await getMessages(locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${robotoSlab.variable} font-sans antialiased`}
      >
        <ClientLayout locale={locale || defaultLocale} messages={messages}>
          <Header />
          <main className='content-grid'>{children}</main>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  )
}
