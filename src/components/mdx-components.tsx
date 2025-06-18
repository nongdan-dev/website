'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import * as runtime from 'react/jsx-runtime'

import cn from '@/lib/cn'

import { Callout } from './callout'

const useMDXComponent = (code: string) => {
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(
    null,
  )

  useEffect(() => {
    try {
      const fn = new Function(code)
      const component = fn({ ...runtime }).default
      setComponent(() => component)
    } catch (error) {
      console.error('Error creating MDX component:', error)
    }
  }, [code])

  return Component
}

const components = {
  Image,
  Callout,
}

interface MdxProps {
  code: string
  className?: string
}

export function MDXContent({ code, className }: MdxProps) {
  const Component = useMDXComponent(code)

  if (!Component) {
    return (
      <div className={cn('prose dark:prose-invert', className)}>
        Loading content...
      </div>
    )
  }

  return (
    <div className={cn('prose dark:prose-invert max-w-none', className)}>
      <Component components={components} />
    </div>
  )
}
