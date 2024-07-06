import { Fragment } from 'react/jsx-runtime'
import { twMerge } from 'tailwind-merge'

import { Section } from '@/components'

function AboutUsPage() {
  return (
    <Fragment>
      <Section
        subtitle='Definition'
        title={({ titleId, titleClassName }) => (
          <h1 id={titleId} className={twMerge(titleClassName, 'mb-6')}>
            Nongdan Team
          </h1>
        )}
      >
        <p className='w-full lg:w-6/12'>
          The name <span className='mr-1 italic'>"nongdan"</span> meaning
          farmers, are also a characteristic part of Vietnam, with a simple and
          hard-working personality
        </p>
        <img
          aria-hidden='true'
          src='https://placehold.co/1000x320'
          alt=''
          className='mt-10 h-80 w-full object-cover'
        />
      </Section>
    </Fragment>
  )
}

export default AboutUsPage
