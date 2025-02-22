import Beings from '@/assets/images/client-logos/beings.png'
import Brekeke from '@/assets/images/client-logos/brekeke.png'
import Broadflow from '@/assets/images/client-logos/broadflow.png'
import Chimera from '@/assets/images/client-logos/chimera.png'
import { LineBreak } from '@/components/ui'
import { Section } from '@/components/widget'

function Clients() {
  return (
    <Section className='col-full-width border-b border-t border-gray-200 py-0'>
      <div className='col-content flex flex-wrap justify-center gap-x-5 sm:justify-between lg:grid lg:grid-cols-5'>
        <div className='w-full py-4 text-center lg:w-auto lg:border-r lg:border-gray-200 lg:text-left'>
          <Section.Title
            children={({ titleId }) => (
              <h2 id={titleId} className='text-sm leading-snug text-gray-400'>
                Trusted by fast growing startups <LineBreak /> and companies
              </h2>
            )}
          />
        </div>
        <div className='place-content-center place-items-center pb-4 sm:flex-1 lg:border-r lg:border-gray-200 lg:py-4'>
          <img src={Broadflow} alt='Broadflow' className='h-6 sm:h-8' />
        </div>
        <div className='place-content-center place-items-center pb-4 sm:flex-1 lg:border-r lg:border-gray-200 lg:py-4'>
          <img src={Beings} alt='Beings' className='h-6 sm:h-9' />
        </div>
        <div className='place-content-center place-items-center pb-4 sm:flex-1 lg:border-r lg:border-gray-200 lg:py-4'>
          <img src={Chimera} alt='Chimera' className='h-6 sm:h-9' />
        </div>
        <div className='place-content-center place-items-center pb-4 sm:flex-1 lg:py-4'>
          <img src={Brekeke} alt='Brekeke' className='h-6 sm:h-9' />
        </div>
      </div>
    </Section>
  )
}

export default Clients
