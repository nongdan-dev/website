import React from 'react'

import AboutUs from '@/assets/images/png/about-us-1.png'
import { CheckCircle, Medal1st } from '@/components/icons'
import { Section } from '@/components/widget'

const teamMembers = [
  { name: 'Michael McElhaney', role: 'Founder & CEO', image: '' },
  { name: 'Howard Rutherford', role: 'Founder & CEO', image: '' },
  { name: 'Hana Rosum', role: 'Head of Sales', image: '' },
  {
    name: 'Durandana Croquetaigne',
    role: 'Product Manager',
    image: '/durandana.jpg',
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
        <Section.Title>
          Meet our team of <span className='text-blue-600'>creators</span>,
          <span className='text-blue-600'>designers</span> and
          <span className='text-blue-600'> problem solvers</span>
        </Section.Title>
      </div>
      <div className='mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4'>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className='w-78 flex h-auto flex-col items-center rounded-lg bg-white p-4 text-center shadow-md'
          >
            <img
              src={member.image}
              alt={''}
              className='w-78 h-75 mb-4 rounded-lg bg-slate-100 object-cover'
            />

            <div className='w-full'>
              <p className='text-lg font-semibold text-gray-900'>
                {member.name}
              </p>
              <p className='text-sm text-gray-600'>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
