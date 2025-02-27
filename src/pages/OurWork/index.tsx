import { Fragment } from 'react/jsx-runtime'

import { Divider } from '@/components/ui'
import { CallToAction, Section } from '@/components/widget'

import Featured from './Featured'
import { ListProject } from './ListProject'

function OurWorkPage() {
  return (
    <Fragment>
      <Section>
        <Section.SubTitle>Our work</Section.SubTitle>
        <Section.Title
          children={({ titleId, titleClassName }) => (
            <h1 id={titleId} className={titleClassName}>
              We transform your idea into real product
            </h1>
          )}
        />
        <Section.Content>
          <Featured />
          <Divider className='my-16' />
          <ListProject />
        </Section.Content>
      </Section>
      <CallToAction />
    </Fragment>
  )
}

export default OurWorkPage
