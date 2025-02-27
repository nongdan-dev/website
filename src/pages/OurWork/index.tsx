import { Fragment } from 'react/jsx-runtime'

import { CallToAction } from '@/components/widget'

import Featured from './Featured'
import { ListProject } from './ListProject'

function OurWorkPage() {
  return (
    <Fragment>
      <Featured />
      <ListProject />
      <CallToAction />
    </Fragment>
  )
}

export default OurWorkPage
