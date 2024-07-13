import { Fragment } from 'react'

import { LineBreak, Section } from '@/components'

function OurWorkPage() {
  return (
    <Fragment>
      <Section
        subtitle='our work'
        title={
          <Fragment>
            Successful outcomes <LineBreak /> we are proud to be a part of
          </Fragment>
        }
      >
        <div className='mt-16'>asd</div>
      </Section>
    </Fragment>
  )
}

export default OurWorkPage
