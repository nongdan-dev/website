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
          <li className='flex gap-3 overflow-clip rounded-md border border-gray-300 bg-white p-10 xl:pr-0'>
            <div>
              <h4 className='mb-2 text-sm uppercase text-indigo-500'>design</h4>
              <h3 className='text-2xl font-medium leading-normal'>
                Empower startups through design solutions
              </h3>
              <p className='mt-5'>
                Emphasize your business solution through Design Thinking - our
                approach to create strategic and people-centric design
                solutions. Together we collaborate to build experiences that
                make a successful product.
              </p>
            </div>
            <svg
              className='pointer-events-none hidden flex-shrink-0 translate-y-10 self-end xl:block'
              xmlns='http://www.w3.org/2000/svg'
              width='178'
              height='150'
              viewBox='0 0 178 150'
              fill='none'
            >
              <g>
                <path
                  d='M89.9359 2H35.2284C31.2363 2 28 4.95522 28 8.60066V86.1889C28 89.8344 31.2363 92.7896 35.2284 92.7896H89.9359C93.928 92.7896 97.1643 89.8344 97.1643 86.1889V8.60066C97.1643 4.95522 93.928 2 89.9359 2Z'
                  className='fill-indigo-200'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M114.456 8.60066C114.456 6.85006 115.217 5.17115 116.573 3.93329C117.928 2.69543 119.767 2 121.684 2H176.392C178.309 2 180.148 2.69543 181.504 3.93329C182.859 5.17115 183.621 6.85006 183.621 8.60066V86.1889C183.621 87.9395 182.859 89.6185 181.504 90.8563C180.148 92.0942 178.309 92.7896 176.392 92.7896H121.684C119.767 92.7896 117.928 92.0942 116.573 90.8563C115.217 89.6185 114.456 87.9395 114.456 86.1889V8.60066Z'
                  className='fill-indigo-300'
                  opacity='0.2'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M28 115.18C28 113.429 28.7616 111.75 30.1172 110.513C31.4728 109.275 33.3113 108.579 35.2284 108.579H176.392C178.309 108.579 180.148 109.275 181.504 110.513C182.859 111.75 183.621 113.429 183.621 115.18V145.399C183.621 147.15 182.859 148.829 181.504 150.067C180.148 151.305 178.309 152 176.392 152H35.2284C33.3113 152 31.4728 151.305 30.1172 150.067C28.7616 148.829 28 147.15 28 145.399V115.18Z'
                  className='fill-indigo-300'
                  opacity='0.2'
                />
              </g>
            </svg>
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
