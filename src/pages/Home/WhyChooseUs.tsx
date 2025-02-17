import { Medal1st } from '@/components/icons'
import { Section } from '@/components/widget'

function WhyChooseUs() {
  return (
    <Section id='why-choose-us' className='text-center'>
      <Section.SubTitle>
        <Medal1st className='text-base' /> Why choose us
      </Section.SubTitle>
      <Section.Title className='place-self-center'>
        The right tech partner for your growth
      </Section.Title>
      <Section.Content id='grid-layout'>
        <div className='h-[550px] rounded-xl border border-gray-200 shadow-sm'>
          1
        </div>
        <div className='rounded-xl border border-gray-200 shadow-sm'>2</div>
        <div className='rounded-xl border border-gray-200 shadow-sm'>3</div>
        <div className='rounded-xl border border-gray-200 shadow-sm'>4</div>
        <div className='rounded-xl border border-gray-200 shadow-sm'>5</div>
        <div className='h-[550px] rounded-xl border border-gray-200 shadow-sm'>
          6
        </div>
      </Section.Content>
    </Section>
  )
}

export default WhyChooseUs
