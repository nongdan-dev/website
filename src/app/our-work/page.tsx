import { Fragment } from 'react'

import Cody from '@/assets/images//project-thumbnails/Cody.webp'
import Whuups from '@/assets/images//project-thumbnails/Whuups.webp'
import Broadflow from '@/assets/images/project-thumbnails/Broadflow.webp'
import Chimera from '@/assets/images/project-thumbnails/Chimera.webp'
import Olivia from '@/assets/images/project-thumbnails/Olivia.webp'
import Readyflow from '@/assets/images/project-thumbnails/Readyflow.webp'
import Relytics from '@/assets/images/project-thumbnails/Relytics.webp'
import { Divider } from '@/components/ui'
import { SectionCTA, Section, ListProject, SubTitle, Title, Content } from '@/components/widget'

import Featured from './Featured1'

const PROJECTS = [
  {
    image: Whuups,
    title: 'Whuups',
    description: 'Chat App',
  },
  {
    image: Cody,
    title: 'Cody',
    description: 'Language Learning',
  },
  {
    image: Chimera,
    title: 'Brekeke',
    description: 'Medical Appointment',
  },
  {
    image: Broadflow,
    title: 'Broadflow',
    description: 'Security CRM',
  },
  {
    image: Readyflow,
    title: 'Readyflow',
    description: 'Security CRM',
  },
  {
    image: Relytics,
    title: 'Relytics',
    description: 'Survey builder',
  },
  {
    image: Olivia,
    title: 'Olivia',
    description: 'AI Chat Bot',
  },
]

function OurWorkPage() {
  return (
    <Fragment>
      <Section className='pt-[calc(theme(spacing.header)*2)]'>
        <SubTitle>Our work</SubTitle>
        <Title asChild>
          <h1>We transform your idea into real product</h1>
        </Title>
        <Content>
          <Featured />
          <Divider className='my-16' />
          <ListProject projects={PROJECTS} />
        </Content>
      </Section>
      <SectionCTA />
    </Fragment>
  )
}

export default OurWorkPage
