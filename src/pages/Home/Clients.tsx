import Beings from '@/assets/images/client-logos/beings.png'
import Brekeke from '@/assets/images/client-logos/brekeke.png'
import Broadflow from '@/assets/images/client-logos/broadflow.png'
import Chimera from '@/assets/images/client-logos/chimera.png'
import { LineBreak } from '@/components/ui'

function Clients() {
  return (
    <div className='col-full-width border-b border-t border-gray-200'>
      <div className='col-content grid grid-cols-5'>
        <div className='border-r border-gray-200 py-4'>
          <p className='text-sm text-gray-400'>
            Trusted by fast growing startups <LineBreak /> and companies
          </p>
        </div>
        <div className='place-content-center place-items-center border-r border-gray-200 py-4'>
          <img src={Broadflow} alt='Broadflow' className='h-7' />
        </div>
        <div className='place-content-center place-items-center border-r border-gray-200 py-4'>
          <img src={Beings} alt='Beings' className='h-9' />
        </div>
        <div className='place-content-center place-items-center border-r border-gray-200 py-4'>
          <img src={Chimera} alt='Chimera' className='h-9' />
        </div>
        <div className='place-content-center place-items-center border-gray-200 py-4'>
          <img src={Brekeke} alt='Brekeke' className='h-9' />
        </div>
      </div>
    </div>
  )
}

export default Clients
