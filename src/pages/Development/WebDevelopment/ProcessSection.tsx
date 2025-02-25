import React from 'react'

import ProcessScection from '@/assets/images/png/ProcessSection.png'
import {
  Analysis,
  Desktop,
  DesktopSearch,
  Person,
  Rocket,
} from '@/components/icons'
import { Window } from '@/components/icons/Window'
import StepCard from '@/components/widget/StepCard'

const ProcessSection: React.FC = () => {
  const steps = [
    {
      title: 'Discovery',
      description:
        'Involves gathering and understanding the client’s requirements and objectives. It sets the foundation by aligning everyone on the project’s vision.',
      icon: <Person />,
    },
    {
      title: 'Analysis & Planning',
      description:
        'Focuses on analyzing requirements, breaking them down into tasks, and creating a detailed project plan, ensuring the project stays on track and within budget.',
      icon: <Analysis />,
    },
    {
      title: 'UI/UX Design',
      description:
        'Centers on creating intuitive and engaging interfaces that enhance user experience, turning ideas into wireframes and prototypes.',
      icon: <Window />,
    },
    {
      title: 'App Development',
      description:
        'The step where developers translate designs into functional software, writing code and building features while ensuring the software works as intended.',
      icon: <Desktop />,
    },
    {
      title: 'QA Testing',
      description:
        'Covers quality assurance, involving rigorous testing to identify and fix any issues, ensuring stability and reliability before release.',
      icon: <DesktopSearch />,
    },
    {
      title: 'Deployment & Support',
      description:
        'Concludes with deploying the software to users, followed by ongoing support and maintenance to address issues and implement updates.',
      icon: <Rocket />,
    },
  ]

  return (
    <section className='mt-10 py-20'>
      <div className='w-1/2 gap-8'>
        <h1 className='text-title mb-4'>
          Smart development and modern tech from idea to launch
        </h1>
        <p className='text-lg'>
          We build secure, scalable solutions tailored to your needs, ensuring a
          seamless launch and long-term success.
        </p>
      </div>
      <div className='mt-10 flex gap-8'>
        <div className='grid w-1/2'>
          {steps.map((step, index) => (
            <StepCard
              index={index}
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
        <div className='flex w-auto'>
          <img
            src={ProcessScection}
            alt='Process'
            className='w-full rounded-lg shadow-lg'
          />
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
