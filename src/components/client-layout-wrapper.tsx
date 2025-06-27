'use client'

import dynamic from 'next/dynamic'
import { ReactNode } from 'react'

interface ClientLayoutWrapperProps {
  children: ReactNode
}

export function ClientLayoutWrapper({ children }: ClientLayoutWrapperProps) {
  const ClientRootLayout = dynamic(
    () =>
      import('@/components/client-root-layout').then(
        mod => mod.ClientRootLayout,
      ),
    {
      ssr: false,
      loading: () => (
        <div className='flex min-h-screen items-center justify-center'>
          <div className='h-12 w-12 animate-spin rounded-full border-b-2 border-gray-900'></div>
        </div>
      ),
    },
  )

  return <ClientRootLayout>{children}</ClientRootLayout>
}
