import { Fragment } from 'react/jsx-runtime'
import { twMerge } from 'tailwind-merge'

import { Section } from '@/components'

function ContactPage() {
  return (
    <Fragment>
      <div className='col-content'>
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
          <div className='mt-24 grid grid-cols-1 gap-16 lg:grid-cols-3'>
            <div>
              <span
                aria-hidden='true'
                className='mb-2 block text-sm font-bold uppercase text-indigo-500'
              >
                STEP 1
              </span>
              <h2
                aria-label='Step 1. Problem Understanding'
                className='mb-4 text-2xl font-medium'
              >
                Problem Understanding
              </h2>
              <p className='mb-1'>
                A common understanding via video call with our Experts or have
                the Client come into our office.
              </p>
              <p className=''>
                The goal is to ensure we are a good fit for the Client.
              </p>
            </div>
            <div>
              <span
                aria-hidden='true'
                className='mb-2 block text-sm font-bold uppercase text-indigo-500'
              >
                STEP 2
              </span>
              <h2
                aria-label='Step 2. Business Proposal'
                className='mb-4 text-2xl font-medium'
              >
                Business Proposal
              </h2>
              <p className='mb-1'>
                We shift ourselves to the Client's point of view and understand
                their vision.
              </p>
              <p className=''>
                The Client agrees to the outcomes and estimated iterations we're
                trying to achieve.
              </p>
            </div>
            <div>
              <span
                aria-hidden='true'
                className='mb-2 block text-sm font-bold uppercase text-indigo-500'
              >
                STEP 3
              </span>
              <h2
                aria-label='Step 3. Agreement'
                className='mb-4 text-2xl font-medium'
              >
                Agreement
              </h2>
              <p className='mb-1'>
                The NDA and Agreement will be signed by both parties. We roll up
                our sleeves and start building towards your desired outcomes.
              </p>
            </div>
          </div>
        </Section>
      </div>
      <Section className='col-full-width bg-gray-100'>
        {({ titleId }) => (
          <div className='col-content'>
            <h2
              id={titleId}
              className='mb-4 text-balance text-4xl font-semibold leading-snug'
            >
              Build with us
            </h2>
            <p className='mb-px'>
              Let's discuss your ideas. The more specific you are, the faster we
              can help.
            </p>
            <p>Our team will get back to you within 24hrs.</p>
          </div>
        )}
      </Section>
    </Fragment>
  )
}

export default ContactPage
