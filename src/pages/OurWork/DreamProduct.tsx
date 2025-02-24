import React from 'react'

import Beings from '@/assets/images/client-logos/beings.png'
import Brekeke from '@/assets/images/client-logos/brekeke.png'
import DreamProduct1 from '@/assets/images/webp/dream-product-1.webp'
import DreamProduct2 from '@/assets/images/webp/dream-product-2.webp'
import { Section } from '@/components/widget'

export default function DreamProduc() {
  return (
    <Section id='dream-product'>
      <Section.SubTitle>Our work</Section.SubTitle>
      <Section.Title
        children={({ titleId, titleClassName }) => (
          <h1 id={titleId} className={titleClassName}>
            We transform your dream product into reality
          </h1>
        )}
      />
      <p className='mt-4 w-1/2 text-lg'>
        Let's discuss your ideas. The more specific you are, the faster we can
        help. Our team will get back to you within 24hrs.
      </p>
      <Section.Content id='grid-layout'>
        <div className='flex justify-end rounded-lg border border-gray-200 bg-[#6CCCE1] pl-10 pt-[3.75rem] shadow-sm'>
          <img src={DreamProduct1} alt='' className='flex-1' />
        </div>
        <div className='flex flex-col justify-center'>
          <div>
            <img src={Brekeke} alt='' className='h-10' />
          </div>
          <p className='mb-2 mt-6'>
            <span className='text-primary-500'> Brekeke Software, Inc.</span> is
            an industry-leading developer of SIP(Session Initiation
            Protocol) software products for IP (Internet Protocol) network
            communications.
          </p>
          <p>
            Our products set such a high standard in quality and reliability
            that they are deployed as mission-critical communication platforms
            for healthcare systems, military and emergency communication
            systems, mass-communication environments (such as call centers and
            financial institutions) and SIP telephony platforms for a large
            number of SIP applications and SIP telephony networks.
          </p>
        </div>
        <div className='flex flex-col justify-center'>
          <div>
            <img src={Beings} alt='' className='h-10' />
          </div>
          <p className='mb-2 mt-6'>
            <span className='text-primary-500'> Beings </span>
            is a Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Obcaecati repellendus, vitae, ea numquam animi saepe ducimus Lorem
            ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            deserunt! Iure dolore, beatae asperiores illum nulla iusto autem,
            voluptatum facere voluptate a, ex vel eius consequatur quasi.
            Numquam hic accusantium sunt! Vero impedit qui at quibusdam illum
            dolore. Labore quia quas ratione animi ab exercitationem molestiae
            non totam consequuntur beatae eius quibusdam amet rem quis nisi sit
            debitis minima obcaecati alias tempore, recusandae doloribus ipsam
            magnam? Similique
          </p>
        </div>
        <div className='relative flex justify-end overflow-hidden rounded-lg border border-gray-200 bg-[#4971D1] pl-10 pt-[3.75rem] shadow-sm'>
          <img src={DreamProduct2} alt='' className='-mb-1 -mr-1 flex-1' />
        </div>
      </Section.Content>
    </Section>
  )
}
