import { Fragment } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

import { BuildWithUs, LineBreak, Section } from '@/components'
import { Code, Diamond, Flow, Monitor } from '@/components/svg'

import Hero from './Hero'

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <Section subtitle='engineering' title="It's the details that count">
        <div className='flex max-w-3xl flex-col gap-y-4'>
          <p>
            Ensuring innovation products has enough capacity to “disrupt” the
            industry through emerging technology was our mission (and vision)
            since day one.
          </p>
          <p>
            Our approach to technologies and people is tailored to each product.
            You will always work with team of experts who understand your end
            goal and support you all the way to the finish line, no matter where
            it is in the product lifecycle.
          </p>
          <p>
            All of that establishes a strong partnership which results in
            world-class quality products on top of a solid technology
            foundation.
          </p>
        </div>
        <ul className='mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4'>
          <li className='flex flex-col justify-between rounded-md bg-gray-200/80 p-8'>
            <Diamond className='mb-8 text-3xl text-gray-500/90' />
            <h3 className='text-balance text-xl font-medium tracking-[0.2px]'>
              Pride in well-crafted products
            </h3>
          </li>
          <li className='flex flex-col justify-between rounded-md bg-gray-200/80 p-8'>
            <Code className='mb-8 text-3xl text-gray-500' />
            <h3 className='text-balance text-xl font-medium tracking-[0.2px]'>
              Cultivating engineering culture
            </h3>
          </li>
          <li className='flex flex-col justify-between rounded-md bg-gray-200/80 p-8'>
            <Flow className='mb-8 text-3xl text-gray-500' />
            <h3 className='text-balance text-xl font-medium tracking-[0.2px]'>
              Embracing the Agile Manifesto
            </h3>
          </li>
          <li className='flex flex-col justify-between rounded-md bg-gray-200/80 p-8'>
            <Monitor className='mb-8 text-3xl text-gray-500/90' />
            <h3 className='text-balance text-xl font-medium tracking-[0.2px]'>
              Technical decision based on real value
            </h3>
          </li>
        </ul>
        <div className='mt-10'>
          <Link
            to='/'
            className='inline-flex items-center gap-2 font-semibold text-indigo-500'
          >
            Our Engineering definition <FaArrowRightLong />
          </Link>
        </div>
      </Section>

      {/* --------------------------------------------------------------------------------------------------- */}

      <div className='col-full-width bg-gray-100'>
        <Section
          subtitle='our work'
          title={
            <Fragment>
              Successful outcomes <LineBreak /> we are proud to be a part of
            </Fragment>
          }
        >
          <p className='max-w-3xl'>
            From small startups idea to established businesses, we cover areas
            that are usually hard to get right - from design, branding,
            development, consulting and offshore. With years of experience and a
            cultivated engineering culture that focus on building quality
            products, we take care of the whole product cycle so you can truly
            focus on the business.
          </p>
          <ul className='mt-16 grid grid-cols-1 gap-10 md:grid-cols-2'>
            {Array.from({ length: 4 }).map((_, idx) => (
              <li
                key={idx}
                className='rounded-md border border-gray-100 bg-white p-10 shadow-md xl:pr-40'
              >
                <h4 className='mb-2 text-sm uppercase text-indigo-500'>
                  design
                </h4>
                <h3 className='text-2xl font-medium'>
                  Empower startups through design solutions
                </h3>
                <p className='mt-5'>
                  Emphasize your business solution through Design Thinking - our
                  approach to create strategic and people-centric design
                  solutions. Together we collaborate to build experiences that
                  make a successful product.
                </p>
              </li>
            ))}
          </ul>
          <div className='mt-10'>
            <Link
              to='/work'
              className='inline-flex items-center gap-2 font-semibold text-indigo-500'
            >
              Explore our work <FaArrowRightLong />
            </Link>
          </div>
        </Section>
      </div>

      {/* --------------------------------------------------------------------------------------------------- */}

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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Vitae, repellat voluptatem quibusdam, quia nemo voluptates
                  quas distinctio nostrum voluptatibus velit reprehenderit quas
                  quas distinctio nostrum voluptatibus velit reprehenderit quas
                  distinctio nostrum voluptatibus velit reprehenderit
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Vitae, repellat voluptatem quibusdam, quia nemo voluptates
                  quas distinctio nostrum voluptatibus velit reprehenderit
                  impedit dolores quis eveniet architecto et vero consequatur
                  ea! impedit dolores quis eveniet architecto et vero ea! ea!
                  impedit dolores quis eveniet architecto et vero ea! impedit
                  dolores quis eveniet architecto et vero consequatur
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

      {/* --------------------------------------------------------------------------------------------------- */}

      <BuildWithUs />
    </Fragment>
  )
}

export default HomePage
