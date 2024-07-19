import { Fragment } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import { LineBreak, Section } from '@/components/widget'

function OurWork() {
  return (
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
          <li className='rounded-md border border-gray-300 bg-white p-10'>
            <h4 className='mb-2 text-sm uppercase text-indigo-500'>ideate</h4>
            <h3 className='text-2xl font-medium leading-normal'>
              Spark and kick-off your innovation ideas
            </h3>
            <p className='mt-5'>
              We're the “soul mate” you need to ship the MVP in a timely manner
              so you can quickly validate your idea and turn it into reality.
            </p>
          </li>
          <li className='rounded-md border border-gray-300 bg-white p-10'>
            <h4 className='mb-2 text-sm uppercase text-indigo-500'>design</h4>
            <h3 className='text-2xl font-medium leading-normal'>
              Empower startups through design solutions
            </h3>
            <p className='mt-5'>
              Emphasize your business solution through Design Thinking - our
              approach to create strategic and people-centric design solutions.
              Together we collaborate to build experiences that make a
              successful product.
            </p>
          </li>
          <li className='rounded-md border border-gray-300 bg-white p-10'>
            <h4 className='mb-2 text-sm uppercase text-indigo-500'>build</h4>
            <h3 className='text-2xl font-medium leading-normal'>
              Transform your dream product into reality
            </h3>
            <p className='mt-5'>
              Our woodland, backed by talented and ambitious workforce with
              years of experience, is the top-of-mind place for founders looking
              to scale up their engineering capabilities.
            </p>
          </li>
          <li className='rounded-md border border-gray-300 bg-white p-10'>
            <h4 className='mb-2 text-sm uppercase text-indigo-500'>offshore</h4>
            <h3 className='text-2xl font-medium leading-normal'>
              Build a trustworthy network between talents and founders
            </h3>
            <p className='mt-5'>
              Over the years, we thrive to continuously build a wide network of
              trust between talents and founders, with trust at the center of
              values. We connect founders with skillful developers across Asia.
            </p>
          </li>
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
  )
}

export default OurWork
