import { LineBreak } from '@/components/ui'
import { Section } from '@/components/widget'

export const TeamMember = () => {
  return (
    <Section>
      <div className='w-full place-items-center text-center'>
        <Section.Title className='w-4/5'>
          Meet our team of <span className='text-primary-500'>creators</span>,
          <LineBreak />
          <span className='text-primary-500'> designers</span> and
          <span className='text-primary-500'> problem solvers</span>
        </Section.Title>
      </div>
      <Section.Content className='grid grid-cols-4 gap-8'>
        {Array.from({ length: 12 }).map((_, idx) => (
          <div key={idx} className='flex w-full flex-col items-center gap-6'>
            <div className='h-[300px] w-full rounded-xl border border-gray-200 bg-gray-200 shadow-sm'></div>
            <div className='flex w-full flex-col gap-0.5'>
              <p className='text-xl font-medium'>Alan Runner</p>
              <p className='text-gray-500'>Software Engineer</p>
            </div>
          </div>
        ))}
      </Section.Content>
    </Section>
  )
}
