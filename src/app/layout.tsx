import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Footer from '@/layout/footer'
import Header from '@/layout/header'
import '@/styles/index.css'

import { Providers } from './providers'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
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
    <html lang='en' className={inter.variable} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <Header />
          <main className='content-grid'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
