import { Fragment } from 'react'

import Beings from '@/assets/images/project-thumbnails/Beings.webp'
import Brekeke from '@/assets/images/project-thumbnails/Brekeke.webp'
import Cody from '@/assets/images/project-thumbnails/Cody.webp'
import Whuups from '@/assets/images/project-thumbnails/Whuups.webp'
import { Button, Link } from '@/components/ui'
import { SectionCTA, Section, SectionProcess } from '@/components/widget'
import { ListProject } from '@/components/widget/ListProject'

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
      <Section>
        <Section.SubTitle>Mobile development</Section.SubTitle>
        <Section.Title
          children={({ titleId, titleClassName }) => (
            <h1 id={titleId} className={titleClassName}>
              Build and scale your mobile apps
            </h1>
          )}
        />
        <p className='mt-4 w-full text-lg lg:w-1/2'>
          Our expertise includes top mobile development service which is
          well-designed, practical and cross-platform, bringing seamless mobile
          apps experiences for digital users on any device.
        </p>
        <Button asChild className='mt-6'>
          <Link noHover to='/contact-us'>
            Let's build
          </Link>
        </Button>
        <Section.Content>
          <h2 className='text-title !text-2xl sm:!text-3xl'>
            What we have built
          </h2>
          <ListProject projects={PROJECTS} />
        </Section.Content>
      </Section>
      <SectionProcess />
      <SectionCTA />
    </Fragment>
  )
}

export default MobileDevelopment
