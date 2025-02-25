import React from 'react'

import Beings from '@/assets/images/png/Beings.png'
import Brekeke from '@/assets/images/png/Brekeke.png'
import Cody from '@/assets/images/webp/product-thumbnail-cody.webp'
import Whuups from '@/assets/images/webp/product-thumbnail-whuups.webp'
import ProjectCard from '@/components/widget/Project'

const projects = [
  { image: Brekeke, title: 'Brekeke', description: 'Network Communications' },
  { image: Beings, title: 'Beings', description: 'Collaboration' },
  { image: Whuups, title: 'Whuups', description: 'Chat App' },
  { image: Cody, title: 'Cody', description: 'Language Learning' },
]
const Projects: React.FC = () => {
  return (
    <section>
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
