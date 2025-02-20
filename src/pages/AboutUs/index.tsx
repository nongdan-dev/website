import { Fragment } from 'react'

import Clients from './Clients'
import Hero from './Hero'
import { TeamMember } from './TeamMember'

function AboutUsPage() {
  return (
    <Fragment>
      <Hero />
      <Clients />
      <TeamMember />
    </Fragment>
  )
}

export default AboutUsPage
