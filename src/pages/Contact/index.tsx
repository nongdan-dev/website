import { Fragment } from 'react/jsx-runtime'
import { twMerge } from 'tailwind-merge'

import { Section, Select } from '@/components'

function ContactPage() {
  return (
    <Fragment>
      <Section
        subtitle='our approach'
        title={({ titleId, titleClassName }) => (
          <h1 id={titleId} className={twMerge(titleClassName, 'mb-6')}>
            Engagement Model
          </h1>
        )}
      >
        <p className='w-full lg:w-6/12'>
          Our methodology drives a strategic process that helps organizations
          identify and design a proper roadmap.
        </p>
        <div className='mt-24 grid grid-cols-1 gap-10 lg:grid-cols-3'>
          <div className='rounded-md border border-gray-300 p-6'>
            <span
              aria-hidden='true'
              className='mb-2 block text-sm font-bold uppercase text-indigo-500'
            >
              STEP 1
            </span>
            <h2
              aria-label='Step 1. Discovery Stage'
              className='mb-4 text-2xl font-medium'
            >
              Discovery Stage
            </h2>
            <div className='flex flex-col gap-1'>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate impedit illo nemo sit similique qui temporibus itaque
              </p>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>
          <div className='rounded-md border border-gray-300 p-6'>
            <span
              aria-hidden='true'
              className='mb-2 block text-sm font-bold uppercase text-indigo-500'
            >
              STEP 2
            </span>
            <h2
              aria-label='Step 2. Analysis & Planning'
              className='mb-4 text-2xl font-medium'
            >
              Analysis & Planning
            </h2>
            <div className='flex flex-col gap-1'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates, quis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                dicta.
              </p>
            </div>
          </div>
          <div className='rounded-md border border-gray-300 p-6'>
            <span
              aria-hidden='true'
              className='mb-2 block text-sm font-bold uppercase text-indigo-500'
            >
              STEP 3
            </span>
            <h2
              aria-label='Step 3. UI / UX Design'
              className='mb-4 text-2xl font-medium'
            >
              UI / UX Design
            </h2>
            <div className='flex flex-col gap-1'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem molestiae maxime quod dicta iste. Reprehenderit quia
                placeat obcaecati repellat id!
              </p>
            </div>
          </div>
          <div className='rounded-md border border-gray-300 p-6'>
            <span
              aria-hidden='true'
              className='mb-2 block text-sm font-bold uppercase text-indigo-500'
            >
              STEP 4
            </span>
            <h2
              aria-label='Step 4. App Development'
              className='mb-4 text-2xl font-medium'
            >
              App Development
            </h2>
            <div className='flex flex-col gap-1'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem molestiae maxime quod dicta iste. Reprehenderit quia
              </p>
              <p>Lorem ipsum dolor sit adipisicing elit.</p>
            </div>
          </div>
          <div className='rounded-md border border-gray-300 p-6'>
            <span
              aria-hidden='true'
              className='mb-2 block text-sm font-bold uppercase text-indigo-500'
            >
              STEP 5
            </span>
            <h2
              aria-label='Step 5. QA Testing'
              className='mb-4 text-2xl font-medium'
            >
              QA Testing
            </h2>
            <div className='flex flex-col gap-1'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem molestiae maxime quod dicta iste. Reprehenderit quia
              </p>
              <p>Lorem ipsum dolor sit adipisicing elit.</p>
            </div>
          </div>
          <div className='rounded-md border border-gray-300 p-6'>
            <span
              aria-hidden='true'
              className='mb-2 block text-sm font-bold uppercase text-indigo-500'
            >
              STEP 6
            </span>
            <h2
              aria-label='Step 6. Deployment & Support'
              className='mb-4 text-2xl font-medium'
            >
              Deployment & Support
            </h2>
            <div className='flex flex-col gap-1'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem molestiae maxime quod dicta iste. Reprehenderit quia
              </p>
              <p>Lorem ipsum dolor sit amet elit.</p>
            </div>
          </div>
        </div>
      </Section>
      <Section className='col-full-width bg-gray-100'>
        {({ titleId }) => (
          <div className='col-content'>
            <h2
              id={titleId}
              className='mb-4 text-balance text-4xl font-semibold leading-snug'
            >
              Let's <span className='text-indigo-500'>build</span> an awesome
              project <span className='text-indigo-500'>together</span>
            </h2>
            <p className='mb-px'>
              Let's discuss your ideas. The more specific you are, the faster we
              can help.
            </p>
            <p>Our team will get back to you within 24hrs.</p>
            <Select mode='multiple'>
              <Select.Option value='asd'>Lorem ipsum dolor sit.</Select.Option>
              <Select.Option value='asd2'>Lorem, ipsum.</Select.Option>
              <Select.Option value='asd3'>
                Lorem ipsum dolor sit amet.
              </Select.Option>
              <Select.Option value='asd4'>
                Lorem ipsum dolor sit amet consectetur.
              </Select.Option>
            </Select>
          </div>
        )}
      </Section>
    </Fragment>
  )
}

export default ContactPage
