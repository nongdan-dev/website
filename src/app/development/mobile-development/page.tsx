import { Fragment } from 'react'

import Beings from '@/assets/images/project-thumbnails/Beings.webp'
import Brekeke from '@/assets/images/project-thumbnails/Brekeke.webp'
import Cody from '@/assets/images/project-thumbnails/Cody.webp'
import Whuups from '@/assets/images/project-thumbnails/Whuups.webp'
import { Button } from '@/components/ui'
import { SectionCTA, Section, SectionProcess, SubTitle, Title, Content } from '@/components/widget'
import { ListProject } from '@/components/widget/list-project'
import Link from 'next/link'

const PROJECTS = [
  {
    image: Brekeke,
    title: 'Brekeke',
    description: 'Network Communications',
  },
  {
    image: Beings,
    title: 'Beings',
    description: 'Collaboration',
  },
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
]

function MobileDevelopment() {
  return (
    <Fragment>
      <Section className='pt-[calc(theme(spacing.header)*2)]'>
        <SubTitle>Mobile development</SubTitle>
        <Title asChild>
          <h1>Build and scale your mobile apps</h1>
        </Title>
        <p className='mt-4 w-full text-lg lg:w-1/2'>
          Our expertise includes top mobile development service which is
          well-designed, practical and cross-platform, bringing seamless mobile
          apps experiences for digital users on any device.
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

export default MobileDevelopment
