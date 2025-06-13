import { twMerge } from 'tailwind-merge'
import Image from 'next/image'

import Development from '@/assets/images/webp/development.webp'
import {
  Neurology,
  Computer,
  ScreenSearch,
  PersonSearch,
  Rocket,
  Dashboard,
} from '@/components/icons'

import { Section, Title, Content } from './section'

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
      <Title> Smart development and modern tech from idea to launch
</Title>
      <p className='mt-4 text-lg lg:w-1/2'>
        We build secure, scalable solutions tailored to your needs, ensuring a
        seamless launch and long-term success.
      </p>
      <Content className='grid gap-6 sm:gap-8 lg:grid-cols-2'>
        <div className='space-y-6 md:space-y-8 '>
          {STEPS.map(({ Icon, title, description }, index, self) => (
            <div
              key={index}
              className={twMerge(
                'relative flex flex-col gap-2 rounded-lg border p-6',
                'after:absolute after:-bottom-[calc(theme(spacing.6)+1px)] after:left-1/2 after:h-6 after:w-px after:-translate-x-1/2 after:bg-gray-200 after:content-[""] md:after:-bottom-[calc(theme(spacing.8)+1px)] md:after:h-8',
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
              <p className='lg:text-lg'>{description}</p>
            </div>
          ))}
        </div>
        <Image
          src={Development}
          alt=''
          className='hidden h-full w-full rounded-lg object-cover shadow-lg lg:block'
        />
      </Content>
    </Section>
  )
}
