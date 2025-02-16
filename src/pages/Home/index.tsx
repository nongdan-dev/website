import { Fragment } from 'react'

import Clients from './Clients'
import Hero from './Hero'

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <Clients />
    </Fragment>
  )
}

export default HomePage
