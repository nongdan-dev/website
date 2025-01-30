import { Fragment } from 'react'
import { twMerge } from 'tailwind-merge'

import { LineBreak } from '@/components/ui'
import { Section } from '@/components/widget'

const MEMBERS = [
  { id: 1, name: 'Michael McElhaney', role: 'Founder & CEO' },
  { id: 2, name: 'Howard Rutherford', role: 'Founder & COO' },
  { id: 3, name: 'Hana Rosum', role: 'Head of Sales' },
  { id: 4, name: 'Durandana Croquetaigne', role: 'Product Manager' },
  { id: 5, name: 'Emily Havanna', role: 'Product Designer' },
  { id: 6, name: 'Alice Carey', role: 'UX Researcher' },
  { id: 7, name: 'Gabriel Vankirk', role: 'Frontend Developer' },
  { id: 8, name: 'James Redding', role: 'Backend Developer' },
  { id: 9, name: 'Walter Debose', role: 'Devops' },
  { id: 10, name: 'Charles Delacruz', role: 'Product Designer' },
]

function TeamMembers() {
  return (
    <Section>
      {({ titleId, titleClassName }) => (
        <Fragment>
          <h2 id={titleId} className={twMerge(titleClassName, 'text-center')}>
            Meet our diverse team of{' '}
            <span className='text-indigo-500'>creators</span>, <LineBreak />
            <span className='text-indigo-500'>designers</span> and{' '}
            <span className='text-indigo-500'>problem solvers</span>
          </h2>
          <ul className='grid-col-1 mt-16 grid gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
            {MEMBERS.map(member => (
              <li key={member.id}>
                <img
                  className='aspect-square w-full rounded-lg'
                  alt={`Avatar of ${member.name}`}
                  src='https://placehold.co/300x300'
                />
                <h3 className='mt-3 text-lg font-semibold'>{member.name}</h3>
                <span className=''>{member.role}</span>
              </li>
            ))}
          </ul>
        </Fragment>
      )}
    </Section>
  )
}

export default TeamMembers
