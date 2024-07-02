import { Fragment } from 'react/jsx-runtime'
import { twMerge } from 'tailwind-merge'

import { Section } from '@/components'

import ContactForm from './ContactForm'
import ProcessSteps from './ProcessSteps'

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
        <ProcessSteps />
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
            <div className='mt-12 grid grid-cols-2 gap-32'>
              <ContactForm />
              <iframe
                title='maps'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501725.4184284701!2d106.36555456720427!3d10.755292872920842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2zVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1719846597084!5m2!1svi!2s'
                loading='lazy'
                className='h-full w-full overflow-clip rounded-md'
                referrerPolicy='no-referrer-when-downgrade'
              />
            </div>
          </div>
        )}
      </Section>
    </Fragment>
  )
}

export default ContactPage
