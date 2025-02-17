import { Fragment } from 'react'

import Clients from './Clients'
import Feedback from './Feedback'
import Hero from './Hero'
import WhatWeOffer from './WhatWeOffer'

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <Clients />
      <WhatWeOffer />
      <Feedback />
    </Fragment>
  )
}

export default HomePage
