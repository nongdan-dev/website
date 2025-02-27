import { Fragment } from 'react/jsx-runtime'

import { CallToAction } from '@/components/widget'

import DreamProduct from './DreamProduct'
import { ListProject } from './ListProject'

function OurWorkPage() {
  return (
    <Fragment>
      <DreamProduct />
      <ListProject />
      <CallToAction />
    </Fragment>
  )
}

export default OurWorkPage
