import { Fragment } from 'react'
import Link from 'next/link'

import { ArrowRight, Star } from '@/components/icons'
import { SectionCTA, SectionAboutUs,SubTitle } from '@/components/widget'

import Clients from './clients'
import Feedback from './feedback'
import Hero from './hero'
import OurWork from './OurWork'
import WhatWeOffer from './WhatWeOffer'
import WhyChooseUs from './WhyChooseUs'

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <Clients />
      <WhatWeOffer />
      <Feedback />
      <WhyChooseUs />
      <OurWork />
      <SectionAboutUs
        subtitle={
          <SubTitle>
            <Star className='text-base' /> About us
          </SubTitle>
        }
        cellAction={
          <div className='flex flex-col gap-1'>
            <p className='text-lg'>Learn more</p>
            <Link
              href='/about-us'
              className='flex flex-row items-center gap-3 text-2xl font-semibold text-primary-500 hover:underline'
            >
              About us
              <ArrowRight className='text-xl' />
            </Link>
          </div>
        }
      />
      <SectionCTA />
    </Fragment>
  )
}

export default HomePage
