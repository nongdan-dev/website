import Image from 'next/image'
import Link from 'next/link'
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

import { Content, Section, Title } from './section'

export type SectionAboutUsProps = {
  subtitle?: ReactNode
  cellAction?: ReactNode
}

export function SectionAboutUs({ subtitle, cellAction }: SectionAboutUsProps) {
  return (
    <Section id='about-us'>
      {subtitle}
      <Title>Nothing is impossible, when we are together</Title>
      <p className='mt-4 lg:w-1/2 lg:text-lg'>
        Our team is a startup based in Ho Chi Minh City, Vietnam, specializing
        in providing software development, maintenance and upgrade services for
        businesses and individuals.
      </p>
      <Content id='grid-layout'>
        <div className='flex flex-col gap-8 overflow-hidden rounded-xl bg-gradient-to-b from-primary-400 to-primary-600 pl-8 pt-8 shadow-sm'>
          <div className='flex flex-col gap-1'>
            <h3 className='text-5xl font-semibold leading-none text-white md:text-6xl xl:text-7xl'>
              12+
            </h3>
            <p className='text-sm uppercase tracking-wider text-white md:text-base xl:text-lg'>
              Years of experience
            </p>
          </div>
          <div className='flex-1'>
            <Image
              src={AboutUs}
              alt=''
              className='min-h-full min-w-full max-w-[unset]'
            />
          </div>
        </div>

        <div className='relative overflow-hidden rounded-xl border border-gray-200 p-6 shadow-sm'>
          <div className='pointer-events-none absolute inset-0'>
            <Image src={AboutUs3} alt='' className='w-full' />
          </div>
          <div className='relative z-10 flex h-full flex-col justify-between gap-0'>
            <div className='flex justify-between'>
              <div className='flex size-[3.75rem] items-center justify-center rounded-xl bg-white'>
                <Image src={Figma} alt='' />
              </div>
              <div className='flex w-[calc(theme(width.20)*2+theme(spacing.4))] flex-wrap gap-4'>
                <div className='flex size-20 items-center justify-center rounded-xl bg-white'>
                  <Image src={Chrome} alt='' />
                </div>
                <div className='flex size-20 items-center justify-center rounded-xl bg-white'>
                  <Image src={ChPlay} alt='' />
                </div>
                <div className='pointer-events-none flex size-20 items-center justify-center rounded-xl bg-white opacity-0'>
                  <Image src={Apple} alt='' />
                </div>
                <div className='flex size-20 items-center justify-center rounded-xl bg-white'>
                  <Image src={Apple} alt='' />
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-between gap-1'>
              <h3 className='text-3xl font-semibold leading-none md:text-4xl xl:text-5xl'>
                400+
              </h3>
              <p className='text-sm uppercase tracking-wider md:text-base xl:text-lg'>
                Projects
              </p>
            </div>
          </div>
        </div>
        <div
          className='relative min-h-72 rounded-xl border border-gray-200 bg-cover bg-center bg-no-repeat shadow-sm'
          style={{ backgroundImage: `url(${AboutUs2.src})` }}
        >
          <div className='absolute right-6 top-6 flex flex-col gap-1 rounded-xl bg-white px-6 py-3 shadow-md'>
            <h3 className='text-center text-3xl font-semibold leading-none md:text-4xl xl:text-5xl'>
              8
            </h3>
            <p className='text-center text-sm uppercase md:text-base xl:text-lg'>
              SECTORS
            </p>
          </div>
        </div>
        <div className='flex items-center justify-between gap-6 rounded-xl border border-gray-200 p-6 shadow-sm'>
          <div className='h-[5.625rem] flex-grow-0 place-content-center'>
            <Image src={BarChart} alt='' />
          </div>
          <div className='flex flex-col gap-1 text-right'>
            <h3 className='text-3xl font-semibold leading-none md:text-4xl xl:text-5xl'>
              90+
            </h3>
            <p className='text-sm uppercase tracking-wider md:text-base xl:text-lg'>
              Active Clients
            </p>
          </div>
        </div>
        <div className='flex items-center justify-between gap-6 rounded-xl border border-gray-200 p-6 shadow-sm'>
          <div className='flex flex-col gap-1'>
            <h3 className='text-3xl font-semibold leading-none md:text-4xl xl:text-5xl'>
              80%
            </h3>
            <p className='text-sm uppercase tracking-wider md:text-base xl:text-lg'>
              Repeat clients
            </p>
          </div>
          <div className='h-[5.625rem] flex-grow-0 place-content-center'>
            <Image src={WaveChart} alt='' />
          </div>
        </div>
        <div className='flex min-h-32 items-center justify-center rounded-xl border border-gray-200 shadow-sm'>
          {cellAction ? (
            cellAction
          ) : (
            <div className='flex flex-col gap-1'>
              <p className='text-lg'>Are you ready to</p>
              <Link
                href='/contact-us'
                className='flex flex-row items-center gap-3 text-2xl font-semibold text-primary-500 hover:underline'
              >
                Build with us
                <ArrowRight className='text-xl' />
              </Link>
            </div>
          )}
        </div>
      </Content>
    </Section>
  )
}
