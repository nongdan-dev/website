import { twMerge } from 'tailwind-merge'

import { Section } from '@/components'

function ContactPage() {
  return (
    <div className='col-content'>
      <Section
        subtitle='our approach'
        title={({ titleId, className }) => (
          <h1 id={titleId} className={twMerge(className, 'mb-6')}>
            Engagement Model
          </h1>
        )}
      >
        <p className='w-full lg:w-6/12'>
          Our methodology drives a strategic process that helps organizations
          identify and design a proper roadmap.
        </p>
        <div className='mt-24'>asd</div>
      </Section>
    </div>
  )
}

export default ContactPage
