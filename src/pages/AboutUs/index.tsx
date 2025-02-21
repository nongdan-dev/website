import { Fragment } from 'react'

import { CallToAction, SectionAboutUs } from '@/components/widget'

import Hero from './Hero'
import { TeamMember } from './TeamMember'

function AboutUsPage() {
  return (
    <Fragment>
      <Hero />
      <SectionAboutUs />
      <TeamMember />
      <CallToAction />
    </Fragment>
  )
}

export default AboutUsPage
