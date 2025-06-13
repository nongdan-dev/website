import { Fragment } from 'react'

import { SectionAboutUs, SectionCTA } from '@/components/widget'

import Hero from './hero'
import { TeamMember } from './Team1Member'

function AboutUsPage() {
  return (
    <Fragment>
      <Hero />
      <SectionAboutUs />
      <TeamMember />
      <SectionCTA />
    </Fragment>
  )
}

export default AboutUsPage
