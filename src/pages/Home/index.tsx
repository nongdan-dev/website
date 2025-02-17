import { Fragment } from 'react'

import Clients from './Clients'
import Hero from './Hero'
import WhatWeOffer from './WhatWeOffer'

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <Clients />
      <WhatWeOffer />
    </Fragment>
  )
}

export default HomePage
