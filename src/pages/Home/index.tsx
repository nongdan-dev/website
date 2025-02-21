import { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { ArrowRight, Star } from '@/components/icons'
import { CallToAction, Section, SectionAboutUs } from '@/components/widget'

import Clients from './Clients'
import Feedback from './Feedback'
import Hero from './Hero'
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
          <Section.SubTitle>
            <Star className='text-base' /> About us
          </Section.SubTitle>
        }
        cellAction={
          <div className='flex flex-col gap-1'>
            <p className='text-lg'>Learn more</p>
            <Link
              to='/about-us'
              className='flex flex-row items-center gap-3 text-2xl font-semibold text-primary-500 hover:underline'
            >
              About us
              <ArrowRight className='text-xl' />
            </Link>
          </div>
        }
      />
      <CallToAction />
    </Fragment>
  )
}

export default HomePage
