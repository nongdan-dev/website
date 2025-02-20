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
    <section className=''>
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
            <div
              key={index}
              className='flex flex-col gap-20 rounded-lg border border-gray-200 bg-gray-50 pl-10 pt-16 shadow-md'
            >
              <div className='grid gap-1'>
                <h4 className='text-xl font-semibold'>{project.title}</h4>
                <p className=''>{project.description}</p>
              </div>
              <div className='col-content z-10'>
                <img src={project.image} alt={project.title} className='' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
