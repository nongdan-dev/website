import { Fragment } from 'react'

import { CallToAction } from '@/components/widget'

import Clients from './Clients'
import Hero from './Hero'
import { TeamMember } from './TeamMember'

function AboutUsPage() {
  return (
    <Fragment>
      <Hero />
      <Clients />
      <TeamMember />
      <CallToAction />
    </Fragment>
  )
}

export default AboutUsPage
