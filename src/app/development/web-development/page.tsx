import { Fragment } from 'react'

import Beings from '@/assets/images/project-thumbnails/Beings.webp'
import Brekeke from '@/assets/images/project-thumbnails/Brekeke.webp'
import Broadflow from '@/assets/images/project-thumbnails/Broadflow.webp'
import Chimera from '@/assets/images/project-thumbnails/Chimera.webp'
import Olivia from '@/assets/images/project-thumbnails/Olivia.webp'
import Readyflow from '@/assets/images/project-thumbnails/Readyflow.webp'
import Relytics from '@/assets/images/project-thumbnails/Relytics.webp'
import { Button } from '@/components/ui'
import { SectionCTA, Section, SectionProcess, Content, SubTitle, Title } from '@/components/widget'
import { ListProject } from '@/components/widget/list-project'
import Link from 'next/link'

const PROJECTS = [
  { image: Brekeke, title: 'Brekeke', description: 'Network Communications' },
  { image: Beings, title: 'Beings', description: 'Collaboration' },
  { image: Relytics, title: 'Relytics', description: 'Survey builder' },
  { image: Broadflow, title: 'Broadflow', description: 'Security CRM' },
  { image: Readyflow, title: 'Readyflow', description: 'Security CRM' },
  { image: Chimera, title: 'Chimera', description: 'Medical Appointment' },
  { image: Olivia, title: 'Olivia', description: 'AI Chat Bot' },
]
function WebDevelopment() {
  return (
    <Fragment>
      <Section className='pt-[calc(theme(spacing.header)*2)]'>
        <SubTitle>Web development</SubTitle>
        <Title asChild>
          <h1>Build a solid web application</h1>
        </Title>
        <p className='mt-4 w-full text-lg lg:w-1/2'>
          We design and build apps for both startups and established businesses.
          You've got the vision. Now you need an expert partner focusing on
          delivering values to your business and users.
        </p>
        <Button asChild className='mt-6'>
          <Link href='/contact-us'>
            Let's build
          </Link>
        </Button>
        <Content>
          <h2 className='text-title !text-2xl sm:!text-3xl'>
            What we have built
          </h2>
          <ListProject projects={PROJECTS} />
        </Content>
      </Section>
      <SectionProcess />
      <SectionCTA />
    </Fragment>
  )
}

export default WebDevelopment
