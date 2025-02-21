import React from 'react'

import Beings from '@/assets/images/png/Beings.png'
import Brekeke from '@/assets/images/png/Brekeke.png'
import Broadflow from '@/assets/images/png/broadflow (1).png'
import Conversation from '@/assets/images/png/Conversation1.png'
import Chimera from '@/assets/images/png/mag.png'
import Olivia from '@/assets/images/png/Olivia1.png'
import Readyflow from '@/assets/images/png/Relytics1.png'
import Relytics from '@/assets/images/png/Relytics1.png'
import Whuups from '@/assets/images/png/Whuups2.png'
import { Flame } from '@/components/icons'
import { Button, Link } from '@/components/ui'
import { Section } from '@/components/widget'

const Projects: React.FC = () => {
  return (
    <section>
      <div className='mt-20'>
        <h3 className='mb-5 text-2xl font-semibold'>What we have built</h3>
        <div className='grid grid-cols-3 gap-6'>
          <div className='flex flex-col gap-20 rounded-lg border border-gray-200 bg-gray-50 pl-10 pt-16 shadow-md'>
            <div className='grid gap-1'>
              <h4 className='text-xl font-semibold'>Brekeke</h4>
              <p>Network Communications</p>
            </div>
            <div className='col-content z-10'>
              <img src={Brekeke} alt='Brekeke' className='' />
            </div>
          </div>

          <div className='flex flex-col gap-20 rounded-lg border border-gray-200 bg-gray-50 pl-10 pt-16 shadow-md'>
            <div className='grid gap-1'>
              <h4 className='text-xl font-semibold'>Beings</h4>
              <p>Collaboration</p>
            </div>
            <div className='col-content z-10'>
              <img src={Beings} alt='Beings' className='' />
            </div>
          </div>

          <div className='flex flex-col gap-20 rounded-lg border border-gray-200 bg-gray-50 pl-10 pt-16 shadow-md'>
            <div className='grid gap-1'>
              <h4 className='text-xl font-semibold'>Whuups</h4>
              <p>Chat App</p>
            </div>
            <div className='relative z-10'>
              <img src={Conversation} alt='Conversation' className='absolute' />
              <img src={Whuups} alt='Whuups' className='absolute' />
            </div>
          </div>

          <div className='flex flex-col gap-20 rounded-lg border border-gray-200 bg-gray-50 pl-10 pt-16 shadow-md'>
            <div className='grid gap-1'>
              <h4 className='text-xl font-semibold'>Broadflow</h4>
              <p>Security CRM</p>
            </div>
            <div className='col-content z-10'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
