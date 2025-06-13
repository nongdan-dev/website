import { Fragment } from 'react'

import { SectionAboutUs, SectionCTA } from '@/components/widget'

import Hero from './hero'
import { TeamMember } from './team-member'

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
