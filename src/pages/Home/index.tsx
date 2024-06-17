import { Fragment } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { IoCodeSlashOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

import { Button, LineBreak, Section } from '@/components'

import Hero from './Hero'

function Home() {
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
          {Array.from({ length: 4 }).map((_, idx) => (
            <li
              key={idx}
              className='flex flex-col justify-between rounded-md bg-gray-200/80 p-8'
            >
              <IoCodeSlashOutline className='mb-8 text-4xl text-gray-500' />
              <h3 className='text-balance text-xl font-medium'>
                Pride in well-crafted products
              </h3>
            </li>
          ))}
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
              className='rounded-md border border-gray-300 p-10 xl:pr-40'
            >
              <h4 className='mb-2 text-sm uppercase text-indigo-500'>design</h4>
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
            to='/'
            className='inline-flex items-center gap-2 font-semibold text-indigo-500'
          >
            Explore our work <FaArrowRightLong />
          </Link>
        </div>
      </Section>

      {/* --------------------------------------------------------------------------------------------------- */}

      <Section className='col-full-width bg-gray-50'>
        {titleId => (
          <div className='col-content text-center'>
            <h2
              id={titleId}
              className='text-balance text-3xl font-semibold leading-snug'
            >
              We'd love to work with you.
            </h2>
            <p className='mt-3'>Drop us a message if you need any help</p>
            <Button asChild className='mt-8'>
              <Link to='/contact'>Let's build with us</Link>
            </Button>
          </div>
        )}
      </Section>
    </Fragment>
  )
}

export default Home
