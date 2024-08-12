import { Fragment } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { twMerge } from 'tailwind-merge'

import { Link } from '@/components/ui'
import { LineBreak, Section } from '@/components/widget'

function AboutUs() {
  return (
    <Section subtitle='About us'>
      {({ titleId, titleClassName }) => (
        <Fragment>
          <h2 id={titleId} className={twMerge(titleClassName)}>
            Nothing is impossible, <LineBreak /> when we come together
          </h2>
          <ul className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
            <li className='flex flex-col items-center justify-center gap-1 rounded-md border border-gray-200 bg-white p-8 text-center shadow-md'>
              <span className='text-5xl font-bold text-indigo-500'>12+</span>
              <span className='font-medium'>Years of experience</span>
            </li>
            <li className='flex flex-col items-center justify-center gap-1 rounded-md border border-gray-200 bg-white p-8 text-center shadow-md'>
              <span className='text-5xl font-bold text-indigo-500'>400+</span>
              <span className='font-medium'>Projects</span>
            </li>
            <li className='flex flex-col items-center justify-center gap-1 rounded-md border border-gray-200 bg-white p-8 text-center shadow-md'>
              <span className='text-5xl font-bold text-indigo-500'>80%</span>
              <span className='font-medium'>Repeat clients</span>
            </li>
            <li className='flex flex-col items-center justify-center gap-1 rounded-md border border-gray-200 bg-white p-8 text-center shadow-md'>
              <span className='text-5xl font-bold text-indigo-500'>90+</span>
              <span className='font-medium'>Clients</span>
            </li>
            <li className='flex flex-col items-center justify-center gap-1 rounded-md border border-gray-200 bg-white p-8 text-center shadow-md'>
              <span className='text-5xl font-bold text-indigo-500'>8</span>
              <span className='font-medium'>Sectors</span>
            </li>
          </ul>
          <div className='mt-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-2'>
            <div className='flex flex-col gap-4'>
              <p>
                <span className='font-semibold'>Nongdan.dev</span> is a startup
                based in Ho Chi Minh City, Vietnam, specializing in providing
                software development, maintenance, and upgrade services for
                businesses and individuals. We are committed to delivering
                optimal technology solutions, helping our clients enhance work
                efficiency, increase competitiveness, and easily adapt to the
                fast-paced changes in the market.
              </p>
              <p>
                With a team of experienced and dedicated professionals, we are
                proud to be a trusted partner, accompanying you on the journey
                of digital transformation and sustainable development. We
                believe in building long-term relationships with our clients by
                understanding their unique needs and delivering tailor-made
                solutions. Our mission is to empower businesses and individuals
                to thrive in the digital age, ensuring their growth and success
                in an increasingly competitive environment.
              </p>
            </div>
            <img
              className='h-[23rem] w-full rounded-md object-cover'
              src='https://placehold.co/600x400'
              alt=''
            />
          </div>
          <div className='mt-10'>
            <Link
              to='/about-us'
              useDefaultStyle
              className='inline-flex items-center gap-2 font-semibold text-indigo-500'
            >
              View more about us <FaArrowRightLong />
            </Link>
          </div>
        </Fragment>
      )}
    </Section>
  )
}

export default AboutUs
