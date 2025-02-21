import { ReactNode } from 'react'

import AboutUs from '@/assets/images/webp/about-us-1.webp'
import AboutUs2 from '@/assets/images/webp/about-us-2.webp'
import AboutUs3 from '@/assets/images/webp/about-us-3.webp'
import Apple from '@/assets/svg/apple.svg'
import BarChart from '@/assets/svg/bar-chart.svg'
import Figma from '@/assets/svg/figma.svg'
import Chrome from '@/assets/svg/google-chrome.svg'
import ChPlay from '@/assets/svg/google-play.svg'
import WaveChart from '@/assets/svg/wave-chart.svg'
import { ArrowRight } from '@/components/icons'
import { Link } from '@/components/ui'

import { Section } from './Section'

export type SectionAboutUsProps = {
  subtitle?: ReactNode
  cellAction?: ReactNode
}

export function SectionAboutUs({ subtitle, cellAction }: SectionAboutUsProps) {
  return (
    <Section id='about-us'>
      {subtitle}
      <Section.Title>Nothing is impossible, when we are together</Section.Title>
      <p className='mt-4 w-1/2 text-lg'>
        Our team is a startup based in Ho Chi Minh City, Vietnam, specializing
        in providing software development, maintenance and upgrade services for
        businesses and individuals.
      </p>
      <Section.Content id='grid-layout'>
        <div className='overflow-clip rounded-xl bg-gradient-to-b from-primary-400 to-primary-600 pl-8 pt-8 shadow-sm'>
          <div className='mb-8 flex h-[6.9375rem] flex-col gap-1'>
            <h3 className='text-7xl font-semibold leading-none text-white'>
              12+
            </h3>
            <p className='text-lg uppercase tracking-wider text-white'>
              Years of experience
            </p>
          </div>
          <img src={AboutUs} alt='' className='min-w-full max-w-[unset]' />
        </div>
        <div className='relative h-[18.75rem] overflow-clip rounded-xl border border-gray-200 p-6 shadow-sm'>
          <div className='pointer-events-none absolute inset-0'>
            <img src={AboutUs3} alt='' />
          </div>
          <div className='relative z-10 flex h-full flex-col justify-between gap-0'>
            <div className='flex justify-between'>
              <div className='flex size-[3.75rem] items-center justify-center rounded-xl bg-white'>
                <img src={Figma} alt='' />
              </div>
              <div className='flex w-[calc(theme(width.20)*2+theme(spacing.4))] flex-wrap gap-4'>
                <div className='flex size-20 items-center justify-center rounded-xl bg-white'>
                  <img src={Chrome} alt='' />
                </div>
                <div className='flex size-20 items-center justify-center rounded-xl bg-white'>
                  <img src={ChPlay} alt='' />
                </div>
                <div className='pointer-events-none flex size-20 items-center justify-center rounded-xl bg-white opacity-0'>
                  <img src={Apple} alt='' />
                </div>
                <div className='flex size-20 items-center justify-center rounded-xl bg-white'>
                  <img src={Apple} alt='' />
                </div>
              </div>
            </div>
            <div className='flex h-20 flex-col justify-between'>
              <h3 className='text-5xl font-semibold'>400+</h3>
              <p className='text-lg uppercase tracking-wider'>Projects</p>
            </div>
          </div>
        </div>
        <div
          className='relative h-[18.75rem] rounded-xl border border-gray-200 bg-cover bg-center shadow-sm'
          style={{ backgroundImage: `url(${AboutUs2})` }}
        >
          <div className='absolute right-6 top-6 rounded-xl bg-white px-6 py-3 shadow-md'>
            <h3 className='mb-0.5 text-center text-6xl font-semibold leading-none'>
              8
            </h3>
            <p className='text-center text-lg uppercase'>SECTORS</p>
          </div>
        </div>
        <div className='flex h-[8.625rem] justify-between rounded-xl border border-gray-200 p-6 shadow-sm'>
          <div className='flex-grow-0 self-center'>
            <img src={BarChart} alt='' />
          </div>
          <div className='flex h-20 flex-col justify-between text-right'>
            <h3 className='text-5xl font-semibold'>90+</h3>
            <p className='text-lg uppercase tracking-wider'>Active Clients</p>
          </div>
        </div>
        <div className='flex h-[8.625rem] justify-between rounded-xl border border-gray-200 p-6 shadow-sm'>
          <div className='flex h-20 flex-col justify-between'>
            <h3 className='text-5xl font-semibold'>80%</h3>
            <p className='text-lg uppercase tracking-wider'>Repeat clients</p>
          </div>
          <div className='flex-grow-0 self-center'>
            <img src={WaveChart} alt='' />
          </div>
        </div>
        <div className='flex items-center justify-center rounded-xl border border-gray-200 shadow-sm'>
          {cellAction ? (
            cellAction
          ) : (
            <div className='flex flex-col gap-1'>
              <p className='text-lg'>Are you ready to</p>
              <Link
                to='/contact-us'
                className='flex flex-row items-center gap-3 text-2xl font-semibold text-primary-500 hover:underline'
              >
                Build with us
                <ArrowRight className='text-xl' />
              </Link>
            </div>
          )}
        </div>
      </Section.Content>
    </Section>
  )
}
