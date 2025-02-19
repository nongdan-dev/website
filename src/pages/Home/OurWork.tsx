import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

import Beings from '@/assets/videos/beings.mp4'
import Chimera from '@/assets/videos/Chimera.mp4'
import { ArrowRight, Sparks } from '@/components/icons'
import { Link } from '@/components/ui'
import { Section } from '@/components/widget'

const OUR_WORK = [
  {
    id: 1,
    videoSrc: Beings,
    name: 'Beings',
    type: 'Collaboration',
  },
  {
    id: 2,
    videoSrc: Chimera,
    name: 'Chimera',
    type: 'Medical Appointment',
  },
  {
    id: 3,
    videoSrc: '',
    name: 'Broadflow',
    type: 'Security CRM',
  },
]

function OurWork() {
  const [activeIndex, setActiveIndex] = useState(0)

  const renderWork = (work: (typeof OUR_WORK)[number], idx: number) => {
    const isActive = idx === activeIndex

    return (
      <button
        key={work.id}
        aria-pressed={isActive}
        onClick={() => setActiveIndex(idx)}
        className={twMerge(
          'h-[8.25rem] cursor-pointer rounded-lg border p-4 text-left transition-all',
          isActive
            ? 'border-primary-500 bg-primary-500 shadow-md shadow-primary-200'
            : 'border-gray-200 bg-white hover:bg-primary-100',
        )}
      >
        <span
          aria-hidden
          className={twMerge(
            'mb-3 inline-block rounded-[4px] px-4 py-2 font-bold transition-colors',
            isActive ? 'bg-white' : 'bg-gray-400 text-white',
          )}
        >
          {work.id}
        </span>
        <h3
          className={twMerge(
            'mb-1 text-xl font-medium leading-title transition-colors',
            isActive && 'text-white',
          )}
        >
          {work.name}
        </h3>
        <p
          className={twMerge(
            'text-sm transition-colors',
            isActive && 'text-white',
          )}
        >
          {work.type}
        </p>
      </button>
    )
  }

  return (
    <Section>
      <div className='w-full place-items-center text-center'>
        <Section.SubTitle>
          <Sparks className='text-base' /> Our work
        </Section.SubTitle>
        <Section.Title>We transform your idea into real product</Section.Title>
      </div>
      <Section.Content className='grid grid-cols-[15rem_1fr] gap-12 rounded-xl bg-primary-50 p-12'>
        <div className='flex flex-col gap-8'>
          {OUR_WORK.map(renderWork)}
          <Link
            to='/our-work'
            className='flex h-[8.25rem] cursor-pointer place-content-center items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 text-center text-lg font-semibold underline shadow-md'
          >
            Explore our work
            <ArrowRight className='text-xl' />
          </Link>
        </div>
        <video
          src={OUR_WORK[activeIndex].videoSrc}
          muted
          controls
          className='h-full w-full rounded-lg bg-gray-950'
        />
      </Section.Content>
    </Section>
  )
}

export default OurWork
