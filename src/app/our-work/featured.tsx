import Image, { StaticImageData } from 'next/image'
import BeingsLogo from '@/assets/images/client-logos/beings.webp'
import BrekekeLogo from '@/assets/images/client-logos/brekeke.webp'
import BeingsThumbnail from '@/assets/images/project-thumbnails/Beings.webp'
import BrekekeThumbnail from '@/assets/images/project-thumbnails/Brekeke.webp'

interface ProjectCardProps {
  logo: StaticImageData
  logoAlt: string
  thumbnail: StaticImageData
  thumbnailAlt: string
  title: string
  description: string[]
  backgroundColor: string
  reverse?: boolean
}

const ProjectCard = ({
  logo,
  logoAlt,
  thumbnail,
  thumbnailAlt,
  title,
  description,
  backgroundColor,
  reverse = false,
}: ProjectCardProps) => {
  return (
    <div className={`grid items-center gap-6 lg:grid-cols-[${reverse ? '1fr,31.25rem' : '31.25rem,1fr'}] lg:gap-10`}>
      {!reverse && (
        <div className={`overflow-clip rounded-lg border border-gray-200 ${backgroundColor} pl-10 pt-14 shadow-sm`}>
          <Image src={thumbnail} alt={thumbnailAlt} className='w-full' priority />
        </div>
      )}
      
      <div className={`flex-col justify-center md:text-lg ${reverse ? 'order-last lg:order-none' : ''}`}>
        <Image 
          src={logo} 
          alt={logoAlt} 
          className='mb-4 h-10 w-fit' 
          width={160}
          height={40}
          priority
        />
        {description.map((paragraph, index) => (
          <p key={index} className={index < description.length - 1 ? 'mb-2' : ''}>
            {index === 0 ? (
              <>
                <span className='text-primary-500'>{title} </span>
                {paragraph.replace(title, '').trimStart()}
              </>
            ) : (
              paragraph
            )}
          </p>
        ))}
      </div>

      {reverse && (
        <div className={`overflow-clip rounded-lg border border-gray-200 ${backgroundColor} pl-10 pt-14 shadow-sm`}>
          <Image src={thumbnail} alt={thumbnailAlt} className='w-full' priority />
        </div>
      )}
    </div>
  )
}

export default function FeaturedProjects() {
  const projects: ProjectCardProps[] = [
    {
      logo: BrekekeLogo,
      logoAlt: 'Brekeke Software Logo',
      thumbnail: BrekekeThumbnail,
      thumbnailAlt: 'Brekeke Software Project',
      title: 'Brekeke Software, Inc.',
      description: [
        'is an industry-leading developer of SIP(Session Initiation Protocol) software products for IP (Internet Protocol) network communications.',
        'Our products set such a high standard in quality and reliability that they are deployed as mission-critical communication platforms for healthcare systems, military and emergency communication systems, mass-communication environments (such as call centers and financial institutions) and SIP telephony platforms for a large number of SIP applications and SIP telephony networks.'
      ],
      backgroundColor: 'bg-[#6CCCE1]'
    },
    {
      logo: BeingsLogo,
      logoAlt: 'Beings Logo',
      thumbnail: BeingsThumbnail,
      thumbnailAlt: 'Beings Project',
      title: 'Beings',
      description: [
        'is a leading innovator in the field of digital transformation, specializing in creating cutting-edge solutions that bridge the gap between technology and human needs.',
        'Our team of experts is dedicated to developing intuitive, user-centric applications that solve real-world problems. With a focus on quality and innovation, we deliver products that not only meet but exceed our clients\' expectations.'
      ],
      backgroundColor: 'bg-[#4971D1]',
      reverse: true
    }
  ]

  return (
    <div className='flex flex-col gap-14 xl:gap-12'>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  )
}
