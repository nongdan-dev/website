import { Fragment } from 'react'

import { SectionCTA, SectionAboutUs } from '@/components/widget'

import Hero from './Hero'
import { TeamMember } from './TeamMember'

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
