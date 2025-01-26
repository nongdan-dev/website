import { Fragment } from 'react'

import { BuildWithUs } from '@/components/widget'

import AboutUs from './AboutUs'
import Engineering from './Engineering'
import Hero from './Hero'
import OurWork from './OurWork'

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <Engineering />
      <OurWork />
      {/* <AboutUs /> */}
      {/* <BuildWithUs /> */}
    </Fragment>
  )
}

export default HomePage
