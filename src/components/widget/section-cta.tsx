'use client'

import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import { Button } from '@/components/ui'
import { useMediaQuery } from '@/hooks/use-media-query'
import { useTailwind } from '@/hooks/use-tailwind'

import { Orbits } from '../icons'
import { Section, Title, Content } from './Section1'

export function SectionCTA() {
  const { theme } = useTailwind()
  const matches = useMediaQuery(
    theme ? `(max-width: ${theme.screens.lg})` : '(max-width: 1024px)',
  )

  return (
    <Section
      className={twMerge(
        matches && 'col-full-width',
        'mb-20 overflow-clip bg-gradient-to-b from-primary-500 from-40% to-primary-600 lg:mt-12 lg:rounded-xl',
      )}
    >
      <div
        className={twMerge(
          matches && 'col-content',
          'relative place-items-center text-center text-primary-50',
        )}
      >
        <Orbits className='pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[35deg] text-[56.25rem] text-primary-100/20' />
        <Title className='relative z-10 w-full sm:text-4xl lg:text-5xl'>
          We'd love to work with you
        </Title>
        <Content className='relative z-10 !mt-4'>
          <p className='mb-6 px-6 md:text-lg lg:text-xl'>
            Drop us a message if you need any help
          </p>
          <Button asChild tone='light'>
            <Link href='/contact-us'>Let's build with us</Link>
          </Button>
        </Content>
      </div>
    </Section>
  )
}
