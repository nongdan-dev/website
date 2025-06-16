import type { Metadata } from 'next'
import { Inter, Roboto_Slab } from 'next/font/google'

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
        className={`${inter.variable} ${robotoSlab.variable} font-sans antialiased`}
      >
        <Header />
        <main className='content-grid'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
