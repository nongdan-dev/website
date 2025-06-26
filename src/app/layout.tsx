import type { Metadata } from 'next'
import { Inter, Roboto_Slab } from 'next/font/google'

import { ClientRootLayout } from '@/components/client-root-layout'
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
  icons: {
    icon: '/favicon-new.ico',
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='vi' suppressHydrationWarning>
      <body
        className={`${inter.variable} ${robotoSlab.variable} font-sans antialiased`}
      >
        <ClientRootLayout>{children}</ClientRootLayout>
      </body>
    </html>
  )
}
