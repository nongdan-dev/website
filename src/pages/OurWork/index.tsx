import { Fragment } from 'react/jsx-runtime'

import { Divider } from '@/components/ui'
import { SectionCTA, Section } from '@/components/widget'

import { ListProject } from '../../components/widget/ListProject'
import { PROJECTS } from './DataListProject'
import Featured from './Featured'

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
          <ListProject projects={PROJECTS} />
        </Section.Content>
      </Section>
      <SectionCTA />
    </Fragment>
  )
}

export default OurWorkPage
