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
      <Section.Content className='grid gap-6 sm:gap-8 md:grid-cols-2'>
        <div className='space-y-8'>
          {STEPS.map(({ Icon, title, description }, index, self) => (
            <div
              key={index}
              className={twMerge(
                'relative flex flex-col gap-2 rounded-lg border p-6',
                'after:absolute after:-bottom-[calc(theme(spacing.8)+1px)] after:left-1/2 after:h-8 after:w-px after:-translate-x-1/2 after:bg-gray-200 after:content-[""]',
                index + 1 === self.length
                  ? 'border-primary-500 after:content-none'
                  : 'border-gray-200',
                index + 2 === self.length && 'after:bg-primary-500',
              )}
            >
              <div className='flex items-center gap-2'>
                <Icon className='text-3xl text-primary-500' />
                <p className='text-2xl font-medium'>{title}</p>
              </div>
              <p className='md:text-lg'>{description}</p>
            </div>
          ))}
        </div>
        <img
          src={Development}
          alt=''
          className='hidden h-full w-full rounded-lg object-cover shadow-lg md:block'
        />
      </Section.Content>
    </Section>
  )
}
