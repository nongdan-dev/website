import { twMerge } from 'tailwind-merge'

import Development from '@/assets/images/webp/development.webp'
import {
  Neurology,
  Computer,
  ScreenSearch,
  PersonSearch,
  Rocket,
  Dashboard,
} from '@/components/icons'

import { Section } from './Section'

const STEPS = [
  {
    title: 'Discovery',
    description:
      'Involves gathering and understanding the client"s requirements and objectives. It sets the foundation by aligning everyone on the project"s vision.',
    Icon: PersonSearch,
  },
  {
    title: 'Analysis & Planning',
    description:
      'Focuses on analyzing requirements, breaking them down into tasks, and creating a detailed project plan, ensuring the project stays on track and within budget.',
    Icon: Neurology,
  },
  {
    title: 'UI/UX Design',
    description:
      'Centers on creating intuitive and engaging interfaces that enhance user experience, turning ideas into wireframes and prototypes.',
    Icon: Dashboard,
  },
  {
    title: 'App Development',
    description:
      'The step where developers translate designs into functional software, writing code and building features while ensuring the software works as intended.',
    Icon: Computer,
  },
  {
    title: 'QA Testing',
    description:
      'Covers quality assurance, involving rigorous testing to identify and fix any issues, ensuring stability and reliability before release.',
    Icon: ScreenSearch,
  },
  {
    title: 'Deployment & Support',
    description:
      'Concludes with deploying the software to users, followed by ongoing support and maintenance to address issues and implement updates.',
    Icon: Rocket,
  },
]

function Step({
  title,
  description,
  Icon,
  isActive,
}: (typeof STEPS)[number] & { isActive: boolean }) {
  return (
    <div
      className={twMerge(
        'flex flex-col gap-2 rounded-lg border p-6',
        isActive ? 'border-primary-500' : 'border-gray-200',
      )}
    >
      <div className='flex items-center gap-2'>
        <Icon className='text-3xl text-primary-500' />
        <p className='text-2xl font-medium'>{title}</p>
      </div>
      <p className=''>{description}</p>
    </div>
  )
}

export function SectionProcess() {
  return (
    <Section>
      <Section.Title>
        Smart development and modern tech from idea to launch
      </Section.Title>
      <p className='mt-4 lg:w-1/2 lg:text-lg'>
        We build secure, scalable solutions tailored to your needs, ensuring a
        seamless launch and long-term success.
      </p>
      <Section.Content className='grid grid-cols-2 gap-8'>
        <div className='flex flex-col gap-8'>
          {STEPS.map((step, index) => (
            <Step
              key={index}
              Icon={step.Icon}
              title={step.title}
              description={step.description}
              isActive={index + 1 === STEPS.length}
            />
          ))}
        </div>
        <img src={Development} alt='' className='w-full rounded-lg shadow-lg' />
      </Section.Content>
    </Section>
  )
}
