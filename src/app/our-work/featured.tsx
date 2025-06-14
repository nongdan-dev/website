import Image, { type StaticImageData } from 'next/image'

import BeingsLogo from '@/assets/images/client-logos/beings.webp'
import BrekekeLogo from '@/assets/images/client-logos/brekeke.webp'
import BeingsThumbnail from '@/assets/images/project-thumbnails/Beings.webp'
import BrekekeThumbnail from '@/assets/images/project-thumbnails/Brekeke.webp'

type Project = {
  id: string
  logo: StaticImageData
  thumbnail: StaticImageData
  companyName: string
  highlightColor: string
  description: string[]
  reverseLayout?: boolean
}

const projects: Project[] = [
  {
    id: 'brekeke',
    logo: BrekekeLogo,
    thumbnail: BrekekeThumbnail,
    companyName: 'Brekeke Software, Inc.',
    highlightColor: '#6CCCE1',
    description: [
      'is an industry-leading developer of SIP (Session Initiation Protocol) software products for IP (Internet Protocol) network communications.',
      'Our products set such a high standard in quality and reliability that they are deployed as mission-critical communication platforms for healthcare systems, military and emergency communication systems, mass-communication environments (such as call centers and financial institutions) and SIP telephony platforms for a large number of SIP applications and SIP telephony networks.',
    ],
  },
  {
    id: 'beings',
    logo: BeingsLogo,
    thumbnail: BeingsThumbnail,
    companyName: 'Beings',
    highlightColor: '#4971D1',
    reverseLayout: true,
    description: [
      'is a Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repellendus, vitae, ea numquam animi saepe ducimus Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, deserunt! Iure dolore, beatae asperiores illum nulla iusto autem, voluptatum facere voluptate a, ex vel eius consequatur quasi. Numquam hic accusantium sunt! Vero impedit qui at quibusdam illum dolore. Labore quia quas ratione animi ab exercitationem molestiae non totam consequuntur beatae eius quibusdam amet rem quis nisi sit debitis minima obcaecati alias tempore, recusandae doloribus ipsam magnam? Similique',
    ],
  },
]

function ProjectCard({ project }: { project: Project }) {
  const imageContainer = (
    <div
      className='overflow-clip rounded-lg border border-gray-200 pl-10 pt-14 shadow-sm'
      style={{ backgroundColor: project.highlightColor }}
    >
      <Image
        src={project.thumbnail}
        alt={`${project.companyName} project thumbnail`}
        className='w-full'
        priority
        sizes='(max-width: 1024px) 100vw, 31.25rem'
      />
    </div>
  )

  const content = (
    <div className='flex-col justify-center md:text-lg'>
      <Image
        src={project.logo}
        alt={`${project.companyName} logo`}
        className='mb-4 h-10 w-fit'
        priority
      />
      {project.description.map((paragraph, index) => (
        <p key={index} className={index === 0 ? 'mb-2' : ''}>
          {index === 0 && (
            <span className='text-primary-500'>{project.companyName} </span>
          )}
          {paragraph}
        </p>
      ))}
    </div>
  )

  return (
    <div
      className={`grid items-center gap-6 lg:grid-cols-[${project.reverseLayout ? '1fr,31.25rem' : '31.25rem,1fr'}] lg:gap-10`}
    >
      {project.reverseLayout ? (
        <>
          {content}
          {imageContainer}
        </>
      ) : (
        <>
          {imageContainer}
          {content}
        </>
      )}
    </div>
  )
}

export default function FeaturedProjects() {
  return (
    <div className='flex flex-col gap-14 xl:gap-12'>
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
