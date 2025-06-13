import type { Metadata } from 'next'
import { Providers } from './providers'
import '@/styles/index.css'
import Header from '@/layout/Header1'
import Footer from '@/layout/dooter'

import {  Inter } from 'next/font/google'

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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
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