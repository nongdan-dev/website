import { Content, Section, Title } from '@/components/widget'

export const TeamMember = () => {
  return (
    <Section>
      <div className='w-full place-items-center text-center'>
        <Title className=''>
          Meet our beautiful team members
        </Title>
      </div>
      <Content className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {Array.from({ length: 12 }).map((_, idx) => (
          <div key={idx} className='flex w-full flex-col items-center gap-6'>
            <div className='h-[300px] w-full rounded-xl border border-gray-200 bg-gray-200 shadow-sm'></div>
            <div className='flex w-full flex-col gap-0.5'>
              <p className='text-xl font-medium'>Alan Runner</p>
              <p className='text-gray-500'>Software Engineer</p>
            </div>
          </div>
        ))}
      </Content>
    </Section>
  )
}
