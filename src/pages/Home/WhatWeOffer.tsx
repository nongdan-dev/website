import WhatWeOffer1 from '@/assets/images/webp/what-we-offer-1.webp'
import WhatWeOffer2 from '@/assets/images/webp/what-we-offer-2.webp'
import WhatWeOffer3 from '@/assets/images/webp/what-we-offer-3.webp'
import { Flame } from '@/components/icons'
import { Section } from '@/components/widget'

function WhatWeOffer() {
  return (
    <Section>
      <Section.SubTitle>
        <Flame className='text-base' /> What we offer
      </Section.SubTitle>
      <Section.Title>Technology solutions for every need</Section.Title>
      <Section.Content className='grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3'>
        <div className='rounded-xl border border-gray-200 shadow-sm'>
          <img src={WhatWeOffer1} alt='' />
          <div className='px-6 py-8'>
            <h3 className='mb-3 text-2xl font-medium'>Software Development</h3>
            <p className='sm:text-lg'>
              Custom software development optimized for performance and
              scalability as your business grows.
            </p>
          </div>
        </div>
        <div className='rounded-xl border border-gray-200 shadow-sm'>
          <img src={WhatWeOffer2} alt='' />
          <div className='px-6 py-8'>
            <h3 className='mb-3 text-2xl font-medium'>API Integration</h3>
            <p className='sm:text-lg'>
              Seamlessly connect your app with third-party systems to automate
              and streamline workflows.
            </p>
          </div>
        </div>
        <div className='rounded-xl border border-gray-200 shadow-sm'>
          <img src={WhatWeOffer3} alt='' />
          <div className='px-6 py-8'>
            <h3 className='mb-3 text-2xl font-medium'>UI/UX Design</h3>
            <p className='sm:text-lg'>
              Modern interface design with intuitive layouts, smooth
              interactions, and an optimized user experience.
            </p>
          </div>
        </div>
      </Section.Content>
    </Section>
  )
}

export default WhatWeOffer
