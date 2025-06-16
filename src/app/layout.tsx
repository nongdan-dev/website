import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'

import Footer from '@/layout/footer'
import Header from '@/layout/header'
import '@/styles/index.css'
import cn from '@/utils/cn'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nongdandev',
  description: 'Technology solutions for modern agriculture',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${inter.variable} ${robotoMono.variable} font-sans antialiased`}
      >
        <Header />
        <main className='content-grid'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
