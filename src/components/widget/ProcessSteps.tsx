import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const STEPS = [
  {
    id: 1,
    title: 'Discovery Stage',
    content: [
      "Involves gathering and understanding the client's requirements and objectives. It sets the foundation by aligning everyone on the project's vision.",
    ],
  },
  {
    id: 2,
    title: 'Analysis & Planning',
    content: [
      'Focuses on analyzing requirements, breaking them down into tasks, and creating a detailed project plan, ensuring the project stays on track and within budget.',
    ],
  },
  {
    id: 3,
    title: 'UI / UX Design',
    content: [
      'Centers on creating intuitive and engaging interfaces that enhance user experience, turning ideas into wireframes and prototypes.',
    ],
  },
  {
    id: 4,
    title: 'App Development',
    content: [
      'The step where developers translate designs into functional software, writing code and building features while ensuring the software works as intended.',
    ],
  },
  {
    id: 5,
    title: 'QA Testing',
    content: [
      'Covers quality assurance, involving rigorous testing to identify and fix any issues, ensuring stability and reliability before release.',
    ],
  },
  {
    id: 6,
    title: 'Deployment & Support',
    content: [
      'Concludes with deploying the software to users, followed by ongoing support and maintenance to address issues and implement updates.',
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
