import { Fragment } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

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
            <li className='flex flex-col items-center justify-center gap-1 rounded-md border border-gray-100 bg-white p-8 text-center shadow-md'>
              <span className='text-5xl font-bold text-indigo-500'>12+</span>
              <span className='font-medium'>Years of experience</span>
            </li>
            <li className='flex flex-col items-center justify-center gap-1 rounded-md border border-gray-100 bg-white p-8 text-center shadow-md'>
              <span className='text-5xl font-bold text-indigo-500'>400+</span>
              <span className='font-medium'>Projects</span>
            </li>
            <li className='flex flex-col items-center justify-center gap-1 rounded-md border border-gray-100 bg-white p-8 text-center shadow-md'>
              <span className='text-5xl font-bold text-indigo-500'>80%</span>
              <span className='font-medium'>Repeat clients</span>
            </li>
            <li className='flex flex-col items-center justify-center gap-1 rounded-md border border-gray-100 bg-white p-8 text-center shadow-md'>
              <span className='text-5xl font-bold text-indigo-500'>90+</span>
              <span className='font-medium'>Clients</span>
            </li>
            <li className='flex flex-col items-center justify-center gap-1 rounded-md border border-gray-100 bg-white p-8 text-center shadow-md'>
              <span className='text-5xl font-bold text-indigo-500'>8</span>
              <span className='font-medium'>Sectors</span>
            </li>
          </ul>
          <div className='mt-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-2'>
            <div className='flex flex-col gap-4'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                repellat voluptatem quibusdam, quia nemo voluptates quas
                distinctio nostrum voluptatibus velit reprehenderit quas quas
                distinctio nostrum voluptatibus velit reprehenderit quas
                distinctio nostrum voluptatibus velit reprehenderit
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                repellat voluptatem quibusdam, quia nemo voluptates quas
                distinctio nostrum voluptatibus velit reprehenderit impedit
                dolores quis eveniet architecto et vero consequatur ea! impedit
                dolores quis eveniet architecto et vero ea! ea! impedit dolores
                quis eveniet architecto et vero ea! impedit dolores quis eveniet
                architecto et vero consequatur
              </p>
            </div>
            <div className='relative'>
              <img
                aria-hidden='true'
                className='pointer-events-none absolute h-[23rem] w-full rounded-md object-cover blur-sm'
                src='https://placehold.co/600x400'
                alt=''
              />
              <img
                className='relative h-[23rem] w-full rounded-md object-cover'
                src='https://placehold.co/600x400'
                alt=''
              />
            </div>
          </div>
          <div className='mt-10'>
            <Link
              to='/about-us'
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
