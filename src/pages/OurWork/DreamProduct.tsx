import BeingsLogo from '@/assets/images/client-logos/beings.webp'
import BrekekeLogo from '@/assets/images/client-logos/brekeke.webp'
import BeingsThumbnail from '@/assets/images/project-thumbnails/Beings.webp'
import BrekekeThumbnail from '@/assets/images/project-thumbnails/Brekeke.webp'
import { Section } from '@/components/widget'

export default function DreamProduct() {
  return (
    <Section className='border-b-2 border-gray-100' id='dream-product'>
      <Section.SubTitle>Our work</Section.SubTitle>
      <Section.Title
        children={({ titleId, titleClassName }) => (
          <h2 id={titleId} className={titleClassName}>
            We transform your dream product into reality
          </h2>
        )}
      />
      <Section.Content className='flex flex-col'>
        <div className='flex flex-col items-center gap-x-8 gap-y-5 lg:flex-row'>
          <div className='flex h-[300px] w-full flex-1 items-center justify-center rounded-lg bg-[#6CCCE1] lg:max-w-[500px] lg:bg-white'>
            <div className='flex h-[300px] max-w-[500px] justify-end rounded-lg bg-[#6CCCE1] pt-[3.75rem] lg:w-[1/3] lg:border lg:border-gray-200 lg:pl-10 lg:shadow-sm'>
              <img src={BrekekeThumbnail} alt='' className='flex-1' />
            </div>
          </div>
          <div className='flex w-[2/3] flex-1 flex-col justify-center'>
            <div>
              <img src={BrekekeLogo} alt='' className='h-10' />
            </div>
            <p className='mb-2 mt-6'>
              <span className='text-primary-500'> Brekeke Software, Inc.</span>
              is an industry-leading developer of SIP(Session Initiation
              Protocol) software products for IP (Internet Protocol) network
              communications.
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

        <div className='mt-[3rem] flex flex-col-reverse items-center gap-x-8 gap-y-5 lg:flex-row'>
          <div className='flex w-[2/3] flex-1 flex-col justify-center'>
            <div>
              <img src={BeingsLogo} alt='' className='h-10' />
            </div>
            <p className='mb-2 mt-6'>
              <span className='text-primary-500'> Beings</span>
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
              non totam consequuntur beatae eius quibusdam amet rem quis nisi
              sit debitis minima obcaecati alias tempore, recusandae doloribus
              ipsam magnam? Similique
            </p>
          </div>
          <div className='flex h-[300px] w-full flex-1 items-center justify-center rounded-lg bg-[#4971D1] lg:max-w-[500px] lg:bg-white'>
            <div className='flex h-[300px] max-w-[500px] justify-end overflow-hidden bg-[#4971D1] pt-[3.75rem] lg:w-[1/3] lg:rounded-lg lg:border lg:border-gray-200 lg:pl-10 lg:shadow-sm'>
              <img
                src={BeingsThumbnail}
                alt=''
                className='-mb-1 -mr-1 flex-1'
              />
            </div>
          </div>
        </div>
      </Section.Content>
    </Section>
  )
}
