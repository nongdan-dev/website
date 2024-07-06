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
        <div className='mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2'>
          <div className='rounded-md border border-gray-300 p-6'>
            <h2 className='mb-4 text-2xl font-medium'>Our Mission</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
              pariatur aperiam quo tempora vel odio iste! Cumque optio beatae
              nam. Quos reprehenderit voluptate voluptatem blanditiis numquam
              nisi ut quas repudiandae.
            </p>
          </div>
          <div className='rounded-md border border-gray-300 p-6'>
            <h2 className='mb-4 text-2xl font-medium'>Our Vision</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
              pariatur aperiam quo tempora vel odio iste! Cumque optio beatae
              nam. Quos reprehenderit voluptate voluptatem blanditiis numquam
              nisi ut quas repudiandae.
            </p>
          </div>
        </div>
      </Section>
    </Fragment>
  )
}

export default AboutUsPage
