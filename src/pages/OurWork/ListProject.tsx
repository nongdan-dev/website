import DreamProduct1 from '@/assets/images/webp/dream-product-1.webp'
import DreamProduct2 from '@/assets/images/webp/dream-product-2.webp'
import Broadflow from '@/assets/images/webp/product-broadflow.webp'
import mag from '@/assets/images/webp/product-mag.webp'
import Olivia from '@/assets/images/webp/product-olivia.webp'
import Readyflow from '@/assets/images/webp/product-readyflow.webp'
import Relytics from '@/assets/images/webp/product-relytics.webp'
import thumbnail1 from '@/assets/images/webp/product-thumbnail-cody.webp'
import thumbnail2 from '@/assets/images/webp/product-thumbnail-whuups.webp'
import { Section } from '@/components/widget'

const projects = [
  { name: 'Whuups', desc: 'Chat App', img: thumbnail1, isFull: false },
  { name: 'Cody', desc: 'Language Learning', img: thumbnail2, isFull: false },
  { name: 'Chimera', desc: 'Medical Appointment', img: mag, isFull: true },
  { name: 'Broadflow', desc: 'Security CRM', img: Broadflow, isFull: true },
  { name: 'Readyflow', desc: 'Security CRM', img: Readyflow, isFull: true },
  { name: 'Relytics', desc: 'Survey Builder', img: Relytics, isFull: true },
  { name: 'Olivia', desc: 'AI Chat Bot', img: Olivia, isFull: true },
]

export const ListProject = () => {
  return (
    <Section className='border-t-2 border-gray-100 pb-20 pt-5'>
      <Section.Content className='grid grid-flow-row grid-cols-3 gap-8'>
        {projects.map((project, idx) => (
          <div
            key={idx}
            className='relative flex w-full flex-col rounded-xl border border-gray-200 pl-10 pt-10'
          >
            <div className='mb-[3rem]'>
              <p className='mb-[2px] text-[1.75rem] font-semibold text-gray-900'>
                {project.name}
              </p>
              <p className='text-lg font-normal text-gray-900'>
                {project.desc}
              </p>
            </div>

            <div className='flex h-[235px] w-full rounded-lg'>
              <img
                src={project.img}
                className={`h-full w-full rounded-br-xl object-none ${project.isFull ? 'object-right-bottom' : 'object-left-bottom'} :`}
              />
            </div>
          </div>
        ))}
      </Section.Content>
    </Section>
  )
}
