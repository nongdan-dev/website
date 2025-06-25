'use client'

import { run } from '@mdx-js/mdx'
import { MDXProvider } from '@mdx-js/react'
import React, { useEffect, useState } from 'react'
import * as runtime from 'react/jsx-runtime'

import { Callout } from './callout'
import { TextMdx } from './mdx/text-mdx'

const components = {
  TextMdx,
  Callout,
}

function useMDXComponent(code: string) {
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(
    null,
  )

  useEffect(() => {
    let cancelled = false

    const runCode = async () => {
      try {
        const result = await run(code, {
          baseUrl: import.meta.url,
          ...runtime,
        })

        const MDXComponent = result.default

        if (!cancelled) {
          setComponent(() => MDXComponent)
        }
      } catch (err) {
        console.error('Error running MDX code:', err)
      }
    }

    runCode()
    return () => {
      cancelled = true
    }
  }, [code])

  return Component
}

export function MDXContent({ code }: { code: string }) {
  const Component = useMDXComponent(code)

  if (!Component) return null

  const MDXComponent = () => (
    <MDXProvider components={components}>
      <Component components={components} />
    </MDXProvider>
  )

  return <MDXComponent />
}

export function MDXComponents({ children }: { children: string }) {
  const content = typeof children === 'string' ? children : ''
  return <MDXContent code={content} />
}
