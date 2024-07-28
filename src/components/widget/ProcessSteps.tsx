import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const STEPS = [
  {
    id: 1,
    title: 'Discovery Stage',
    content: [
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate impedit illo nemo sit similique qui temporibus itaque',
      'Lorem ipsum dolor sit amet consectetur',
    ],
  },
  {
    id: 2,
    title: 'Analysis & Planning',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, quis.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dicta.',
    ],
  },
  {
    id: 3,
    title: 'UI / UX Design',
    content: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatem molestiae maxime quod dicta iste. Reprehenderit quia placeat obcaecati repellat id!',
    ],
  },
  {
    id: 4,
    title: 'App Development',
    content: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestiae maxime quod dicta iste. Reprehenderit quia',
      'Lorem ipsum dolor sit adipisicing elit.',
    ],
  },
  {
    id: 5,
    title: 'QA Testing',
    content: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestiae maxime quod dicta iste. Reprehenderit quia',
      'Lorem ipsum dolor sit adipisicing elit.',
    ],
  },
  {
    id: 6,
    title: 'Deployment & Support',
    content: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestiae maxime quod dicta iste. Reprehenderit quia',
      'Lorem ipsum dolor sit amet elit.',
    ],
  },
]

export function ProcessSteps(props: ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={twMerge(
        'mt-24 grid grid-cols-1 gap-10 lg:grid-cols-3',
        props.className,
      )}
    >
      {STEPS.map(({ id, title, content }) => (
        <div
          key={id}
          className='rounded-md border border-gray-300 bg-white p-6 shadow-sm'
        >
          <span
            aria-hidden='true'
            className='mb-2 block text-sm font-bold uppercase text-indigo-500'
          >
            STEP {id}
          </span>
          <h2
            aria-label={`Step ${id}. ${title}`}
            className='mb-4 text-2xl font-medium'
          >
            {title}
          </h2>
          <div className='flex flex-col gap-1'>
            {content.map((c, idx) => (
              <p key={idx}>{c}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
