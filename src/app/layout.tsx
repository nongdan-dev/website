import type { Metadata } from 'next'
import { Providers } from './providers'
import '@/styles/index.css'
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'

import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-sans',
})
export const metadata: Metadata = {
  title: 'Nongdandev',
  description: 'Giải pháp công nghệ cho nông nghiệp hiện đại',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://nongdandev.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
    <body className={`${inter.className} antialiased`}>
      <Providers>
        <Header />
        <main className='content-grid'>
          {children}
        </main>
        <Footer />
      </Providers>
    </body>
  </html>

  )
}