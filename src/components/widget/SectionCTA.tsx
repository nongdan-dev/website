import { twMerge } from 'tailwind-merge'

import { Button, Link } from '@/components/ui'
import { useTailwind, useMediaQuery } from '@/hooks'

import { Orbits } from '../icons'
import { Section } from './Section'

export function SectionCTA() {
  const { theme } = useTailwind()
  const matches = useMediaQuery(`(width < ${theme.screens.lg})`)

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
        <Section.Title className='relative z-10 w-full sm:text-4xl lg:text-5xl'>
          We'd love to work with you
        </Section.Title>
        <Section.Content className='relative z-10 !mt-4'>
          <p className='mb-6 px-6 md:text-lg lg:text-xl'>
            Drop us a message if you need any help
          </p>
          <Button asChild tone='light'>
            <Link to='/contact-us'>Let's build with us</Link>
          </Button>
        </Section.Content>
      </div>
    </Section>
  )
}
