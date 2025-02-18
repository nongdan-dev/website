import { Fragment } from 'react'

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
    </Fragment>
  )
}

export default HomePage
