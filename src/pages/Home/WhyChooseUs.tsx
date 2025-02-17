import { Medal1st } from '@/components/icons'
import { Section } from '@/components/widget'

function WhyChooseUs() {
  return (
    <Section className='text-center'>
      <Section.SubTitle>
        <Medal1st className='text-base' /> Why choose us
      </Section.SubTitle>
      <Section.Title className='place-self-center'>
        The right tech partner for your growth
      </Section.Title>
      <Section.Content className='grid grid-cols-12 grid-rows-8 gap-8'>
        <div className='col-start-1 col-end-8 row-start-1 row-end-5 h-[550px] rounded-xl border border-gray-200 shadow-sm'>
          1
        </div>
        <div className='col-start-8 -col-end-1 row-start-1 row-end-3 rounded-xl border border-gray-200 shadow-sm'>
          2
        </div>
        <div className='col-start-8 -col-end-1 row-start-3 row-end-5 rounded-xl border border-gray-200 shadow-sm'>
          3
        </div>
        <div className='col-start-1 col-end-6 row-start-5 row-end-7 rounded-xl border border-gray-200 shadow-sm'>
          4
        </div>
        <div className='col-start-1 col-end-6 row-start-7 row-end-9 rounded-xl border border-gray-200 shadow-sm'>
          5
        </div>
        <div className='col-start-6 -col-end-1 row-start-5 -row-end-1 h-[550px] rounded-xl border border-gray-200 shadow-sm'>
          6
        </div>
      </Section.Content>
    </Section>
  )
}

export default WhyChooseUs
