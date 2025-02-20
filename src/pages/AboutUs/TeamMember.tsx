import { Section } from '@/components/widget'

const teamMembers = [
  { name: 'Michael McElhaney', role: 'Founder & CEO', image: '' },
  { name: 'Howard Rutherford', role: 'Founder & CEO', image: '' },
  { name: 'Hana Rosum', role: 'Head of Sales', image: '' },
  {
    name: 'Durandana Croquetaigne',
    role: 'Product Manager',
    image: '',
  },
  { name: 'Emily Havanna', role: 'Product Designer', image: '' },
  { name: 'Alice Carey', role: 'UX Researcher', image: '' },
  {
    name: 'Gabriel Vankirk',
    role: 'Software Engineer',
    image: '',
  },
  { name: 'James Redding', role: 'Software Engineer', image: '' },
  { name: 'Walter Debose', role: 'DevOps', image: '' },
  { name: 'Charles Delacruz', role: 'Product Designer', image: '' },
]

export const TeamMember = () => {
  return (
    <Section>
      <div className='w-full place-items-center text-center'>
        <Section.Title className='w-full max-w-[56rem]'>
          Meet our team of <span className='text-blue-600'>creators</span>,
          <span className='text-blue-600'> designers</span> and
          <span className='text-blue-600'> problem solvers</span>
        </Section.Title>
      </div>
      <div className='mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4'>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className='flex w-full flex-col items-center rounded-lg bg-white text-center'
          >
            <div className='h-80 w-full bg-gray-400'>
              <img src={member.image} alt='' />
            </div>

            <div className='mt-6 flex w-full flex-col items-start'>
              <p className='mb-1.5 text-xl font-medium leading-none text-gray-900'>
                {member.name}
              </p>
              <p className='text-base font-normal leading-none text-gray-500'>
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
