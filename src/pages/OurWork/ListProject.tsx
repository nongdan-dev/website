import Cody from '@/assets/images//project-thumbnails/Cody.webp'
import Whuups from '@/assets/images//project-thumbnails/Whuups.webp'
import Broadflow from '@/assets/images/project-thumbnails/Broadflow.webp'
import Chimera from '@/assets/images/project-thumbnails/Chimera.webp'
import Olivia from '@/assets/images/project-thumbnails/Olivia.webp'
import Readyflow from '@/assets/images/project-thumbnails/Readyflow.webp'
import Relytics from '@/assets/images/project-thumbnails/Relytics.webp'
import { ProjectCard } from '@/components/widget'

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

export const ListProject = () => {
  return (
    <div className='mt-6 grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3'>
      {PROJECTS.map(project => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  )
}
