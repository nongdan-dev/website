import BeingsLogo from '@/assets/images/client-logos/beings.webp'
import BrekekeLogo from '@/assets/images/client-logos/brekeke.webp'
import BeingsThumbnail from '@/assets/images/project-thumbnails/Beings.webp'
import BrekekeThumbnail from '@/assets/images/project-thumbnails/Brekeke.webp'

export default function DreamProduct() {
  return (
    <div className='flex flex-col gap-14 xl:gap-12'>
      <div className='grid items-center gap-6 lg:grid-cols-[31.25rem,1fr] lg:gap-10'>
        <div className='overflow-clip rounded-lg border border-gray-200 bg-[#6CCCE1] pl-10 pt-14 shadow-sm'>
          <img src={BrekekeThumbnail} alt='' className='w-full' />
        </div>
        <div className='flex-col justify-center md:text-lg'>
          <img src={BrekekeLogo} alt='' className='mb-4 h-10 w-fit' />
          <p className='mb-2'>
            <span className='text-primary-500'>Brekeke Software, Inc. </span>
            is an industry-leading developer of SIP(Session Initiation Protocol)
            software products for IP (Internet Protocol) network communications.
          </p>
          <p>
            Our products set such a high standard in quality and reliability
            that they are deployed as mission-critical communication platforms
            for healthcare systems, military and emergency communication
            systems, mass-communication environments(such as call centers and
            financial institutions)and SIP telephony platforms for a large
            number of SIP applications and SIP telephony networks.
          </p>
        </div>
      </div>

      <div className='grid items-center gap-6 lg:grid-cols-[1fr,31.25rem] lg:gap-10'>
        <div className='order-last flex-col justify-center md:text-lg lg:order-none'>
          <img src={BeingsLogo} alt='' className='mb-4 h-10 w-fit' />
          <p className='mb-2'>
            <span className='text-primary-500'>Beings </span>
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
        <div className='overflow-clip rounded-lg border border-gray-200 bg-[#4971D1] pl-10 pt-14 shadow-sm'>
          <img src={BeingsThumbnail} alt='' className='w-full' />
        </div>
      </div>
    </div>
  )
}
