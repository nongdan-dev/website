import { Fragment } from 'react/jsx-runtime'

import Cody from '@/assets/images//project-thumbnails/Cody.webp'
import Whuups from '@/assets/images//project-thumbnails/Whuups.webp'
import Beings from '@/assets/images/project-thumbnails/Beings.webp'
import Brekeke from '@/assets/images/project-thumbnails/Brekeke.webp'
import Broadflow from '@/assets/images/project-thumbnails/Broadflow.webp'
import Chimera from '@/assets/images/project-thumbnails/Chimera.webp'
import Olivia from '@/assets/images/project-thumbnails/Olivia.webp'
import Readyflow from '@/assets/images/project-thumbnails/Readyflow.webp'
import Relytics from '@/assets/images/project-thumbnails/Relytics.webp'
import { ProjectCard, Section } from '@/components/widget'

const PROJECTS = [
  {
    image: Whuups,
    title: 'Whuups',
    description: 'Chat App',
  },
  {
    image: Whuups,
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

export const ListProject = () => {
  return (
    <Section className='border-t-2 border-gray-100 pb-20 pt-6'>
      <Section.Content>
        <div className='grid-col-1 mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {PROJECTS.map(project => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Section.Content>
    </Section>
  )
}
