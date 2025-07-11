'use client'

import Image from 'next/image'

import WhatWeOffer1 from '@/assets/images/webp/what-we-offer-1.webp'
import WhatWeOffer2 from '@/assets/images/webp/what-we-offer-2.webp'
import WhatWeOffer3 from '@/assets/images/webp/what-we-offer-3.webp'
import { Flame } from '@/components/icons'
import { Section, SubTitle, Title, Content } from '@/components/widget/section'

const offers = [
  {
    image: WhatWeOffer1,
    title: 'Software Development',
    description:
      'Custom software development optimized for performance and scalability as your business grows.',
  },
  {
    image: WhatWeOffer2,
    title: 'API Integration',
    description:
      'Seamlessly connect your app with third-party systems to automate and streamline workflows.',
  },
  {
    image: WhatWeOffer3,
    title: 'UI/UX Design',
    description:
      'Modern interface design with intuitive layouts, smooth interactions, and an optimized user experience.',
  },
]

function WhatWeOffer() {
  return (
    <Section>
      <SubTitle>
        <Flame className='text-base' /> What we offer
      </SubTitle>
      <Title>Technology solutions for every need</Title>
      <Content className='grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3'>
        {offers.map((offer, index) => (
          <div
            key={index}
            className='group rounded-xl border border-gray-200 shadow-sm transition-shadow hover:shadow-md'
          >
            <Image src={offer.image} alt='' />
            <div className='px-6 py-8'>
              <h3 className='mb-3 text-2xl font-medium'>{offer.title}</h3>
              <p className='sm:text-lg'>{offer.description}</p>
            </div>
          </div>
        ))}
      </Content>
    </Section>
  )
}

export default WhatWeOffer
