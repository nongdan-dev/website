import React from 'react'

import Beings from '@/assets/images/png/Beings.png'
import Brekeke from '@/assets/images/png/Brekeke.png'
import Broadflow from '@/assets/images/png/broadflow (1).png'
import Chimera from '@/assets/images/png/mag.png'
import Olivia from '@/assets/images/png/Olivia1.png'
import Readyflow from '@/assets/images/png/Relytics1.png'
import Relytics from '@/assets/images/png/Relytics1.png'
import { Flame } from '@/components/icons'
import { Button, Link } from '@/components/ui'
import { Section } from '@/components/widget'
import ProjectCard from '@/components/widget/Project'

const projects = [
  { image: Brekeke, title: 'Brekeke', description: 'Network Communications' },
  { image: Beings, title: 'Beings', description: 'Collaboration' },
  { image: Relytics, title: 'Relytics', description: 'Survey builder' },
  { image: Broadflow, title: 'Broadflow', description: 'Security CRM' },
  { image: Readyflow, title: 'Readyflow', description: 'Security CRM' },
  { image: Chimera, title: 'Chimera', description: 'Medical Appointment' },
  { image: Olivia, title: 'Olivia', description: 'AI Chat Bot' },
]

const Projects: React.FC = () => {
  return (
    <section>
      <div className='col-content grid gap-6'>
        <div className=''>
          <Section.SubTitle>
            <Flame className='text-base' /> Web development
          </Section.SubTitle>

          <div className='grid gap-[18px]'>
            <Section.Title>Build a solid web application</Section.Title>
            <p className='w-1/2 text-lg text-gray-900'>
              We design and build apps for both startups and established
              businesses. You've got the vision. Now you need an expert partner
              focusing on delivering values to your business and users.
            </p>
          </div>
        </div>
        <div>
          <Button asChild>
            <Link noHover to='/contact-us'>
              Let's build
            </Link>
          </Button>
        </div>
      </div>
      <div className='mt-20'>
        <h3 className='mb-5 text-2xl font-semibold'>What we have built</h3>
        <div className='grid grid-cols-3 gap-6'>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
