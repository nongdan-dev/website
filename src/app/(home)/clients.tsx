'use client'

import Image from 'next/image'

import Beings from '@/assets/images/client-logos/beings.webp'
import Brekeke from '@/assets/images/client-logos/brekeke.webp'
import Broadflow from '@/assets/images/client-logos/broadflow.webp'
import Chimera from '@/assets/images/client-logos/chimera.webp'
import { LineBreak } from '@/components/ui'
import { Section, Title } from '@/components/widget'

const clients = [
  { logo: Broadflow, alt: 'Broadflow', className: 'h-6 sm:h-8' },
  { logo: Beings, alt: 'Beings', className: 'h-6 sm:h-9' },
  { logo: Chimera, alt: 'Chimera', className: 'h-6 sm:h-9' },
  { logo: Brekeke, alt: 'Brekeke', className: 'h-6 sm:h-9' },
]

function Clients() {
  return (
    <Section className='col-full-width border-b border-t border-gray-200 py-0'>
      <div className='col-content flex flex-wrap justify-center gap-x-5 sm:justify-between lg:grid lg:grid-cols-5'>
        <div className='w-full py-4 text-center lg:w-auto lg:border-r lg:border-gray-200 lg:text-left'>
          <Title
            children={({ titleId }) => (
              <h2 id={titleId} className='text-sm leading-snug text-gray-400'>
                Trusted by fast growing startups <LineBreak /> and companies
              </h2>
            )}
          />
        </div>

        {clients.map((client, index) => (
          <div
            key={client.alt}
            className={`place-content-center place-items-center pb-4 sm:flex-1 lg:py-4 ${index < clients.length - 1 ? 'lg:border-r lg:border-gray-200' : ''} `}
          >
            <div className={`relative ${client.className}`}>
              <Image
                src={client.logo}
                alt={client.alt}
                className='h-6 w-full sm:h-8'
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Clients
