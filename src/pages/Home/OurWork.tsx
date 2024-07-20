import { Fragment } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

import { Link } from '@/components/ui'
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
          <li className='flex gap-3 overflow-clip rounded-md border border-gray-300 bg-white p-10 shadow-sm xl:pr-0'>
            <div>
              <h4 className='mb-2 text-sm uppercase text-indigo-500'>ideate</h4>
              <h3 className='text-2xl font-medium leading-normal'>
                Spark and kick-off your innovation ideas
              </h3>
              <p className='mt-5'>
                We're the “soul mate” you need to ship the MVP in a timely
                manner so you can quickly validate your idea and turn it into
                reality.
              </p>
            </div>
            <svg
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              width='178'
              height='150'
              viewBox='0 0 178 150'
              fill='none'
              className='pointer-events-none hidden flex-shrink-0 translate-y-10 self-end xl:block'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M36.6993 133.831V148.049C36.6993 150.22 38.4209 151.982 40.5426 151.982H94.6107C96.7325 151.982 98.454 150.22 98.454 148.049V134.193H113.55C119.592 134.193 124.527 129.144 124.527 122.963V103.302L133.366 103.129C136.872 103.067 139.086 99.2284 137.44 96.0678L127.786 77.4451C125.633 73.284 124.51 68.6668 124.511 63.9815C124.511 34.3651 100.929 10.3952 71.9198 10.6314C43.0029 10.8667 19.9118 34.947 20.2032 64.5322C20.296 73.0568 22.3401 81.11 25.8913 88.2187C32.9925 102.375 36.6933 117.993 36.6993 133.831Z'
                opacity='0.2'
                className='fill-indigo-300'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M181.702 133.831V148.049C181.702 150.22 179.98 151.982 177.858 151.982H123.79C121.668 151.982 119.947 150.22 119.947 148.049V134.193H104.85C98.8086 134.193 93.8736 129.144 93.8736 122.963V103.302L85.0344 103.129C81.5289 103.067 79.3151 99.2284 80.9606 96.0678L90.6145 77.4451C92.7678 73.284 93.891 68.6668 93.8896 63.9815C93.8896 34.3651 117.472 10.3952 146.482 10.6314C175.399 10.8667 198.49 34.947 198.198 64.5322C198.105 73.0568 196.061 81.11 192.51 88.2187C185.408 102.375 181.707 117.993 181.702 133.831Z'
                className='fill-indigo-200'
              />
            </svg>
          </li>
          <li className='flex gap-3 overflow-clip rounded-md border border-gray-300 bg-white p-10 shadow-sm xl:pr-0'>
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
              aria-hidden='true'
              className='pointer-events-none hidden flex-shrink-0 translate-y-10 self-end xl:block'
              xmlns='http://www.w3.org/2000/svg'
              width='178'
              height='150'
              viewBox='0 0 178 150'
              fill='none'
            >
              <path
                d='M89.9359 2H35.2284C31.2363 2 28 4.95522 28 8.60066V86.1889C28 89.8344 31.2363 92.7896 35.2284 92.7896H89.9359C93.928 92.7896 97.1643 89.8344 97.1643 86.1889V8.60066C97.1643 4.95522 93.928 2 89.9359 2Z'
                className='fill-indigo-200'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M114.456 8.60066C114.456 6.85006 115.217 5.17115 116.573 3.93329C117.928 2.69543 119.767 2 121.684 2H176.392C178.309 2 180.148 2.69543 181.504 3.93329C182.859 5.17115 183.621 6.85006 183.621 8.60066V86.1889C183.621 87.9395 182.859 89.6185 181.504 90.8563C180.148 92.0942 178.309 92.7896 176.392 92.7896H121.684C119.767 92.7896 117.928 92.0942 116.573 90.8563C115.217 89.6185 114.456 87.9395 114.456 86.1889V8.60066Z'
                className='fill-indigo-300'
                opacity='0.2'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M28 115.18C28 113.429 28.7616 111.75 30.1172 110.513C31.4728 109.275 33.3113 108.579 35.2284 108.579H176.392C178.309 108.579 180.148 109.275 181.504 110.513C182.859 111.75 183.621 113.429 183.621 115.18V145.399C183.621 147.15 182.859 148.829 181.504 150.067C180.148 151.305 178.309 152 176.392 152H35.2284C33.3113 152 31.4728 151.305 30.1172 150.067C28.7616 148.829 28 147.15 28 145.399V115.18Z'
                className='fill-indigo-300'
                opacity='0.2'
              />
            </svg>
          </li>
          <li className='flex gap-3 overflow-clip rounded-md border border-gray-300 bg-white p-10 shadow-sm xl:pr-0'>
            <div>
              <h4 className='mb-2 text-sm uppercase text-indigo-500'>build</h4>
              <h3 className='text-2xl font-medium leading-normal'>
                Transform your dream product into reality
              </h3>
              <p className='mt-5'>
                Our woodland, backed by talented and ambitious workforce with
                years of experience, is the top-of-mind place for founders
                looking to scale up their engineering capabilities.
              </p>
            </div>

            <svg
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              width='178'
              height='150'
              viewBox='0 0 178 150'
              fill='none'
              className='pointer-events-none hidden flex-shrink-0 translate-y-10 self-end xl:block'
            >
              <path
                d='M192.117 47.7999H43.6834C40.4344 47.7999 37.8006 50.4337 37.8006 53.6826V145.75C37.8006 148.999 40.4344 151.633 43.6834 151.633H192.117C195.366 151.633 198 148.999 198 145.75V53.6826C198 50.4337 195.366 47.7999 192.117 47.7999Z'
                opacity='0.2'
                className='fill-indigo-300'
              />
              <path
                d='M174.317 30H25.8828C22.6338 30 20 32.6338 20 35.8828V127.95C20 131.199 22.6338 133.833 25.8828 133.833H174.317C177.566 133.833 180.199 131.199 180.199 127.95V35.8828C180.199 32.6338 177.566 30 174.317 30Z'
                className='fill-indigo-200'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M87.3528 106.786L95.1048 110.016L115.479 62.8988L107.731 59.6662L87.3528 106.786ZM79.9603 68.347L64.5004 84.8423L79.9603 101.335L85.5953 95.3218L75.7725 84.8423L85.5953 74.3607L79.9603 68.347ZM121.115 68.347L115.479 74.3607L125.3 84.8423L115.479 95.3218L121.115 101.335L136.574 84.8423L121.115 68.347Z'
                fill='white'
              />
            </svg>
          </li>
          <li className='flex gap-3 overflow-clip rounded-md border border-gray-300 bg-white p-10 shadow-sm xl:pr-0'>
            <div>
              <h4 className='mb-2 text-sm uppercase text-indigo-500'>
                offshore
              </h4>
              <h3 className='text-2xl font-medium leading-normal'>
                Build a trustworthy network between talents and founders
              </h3>
              <p className='mt-5'>
                Over the years, we thrive to continuously build a wide network
                of trust between talents and founders, with trust at the center
                of values. We connect founders with skillful developers across
                Asia.
              </p>
            </div>
            <svg
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              width='178'
              height='150'
              viewBox='0 0 178 150'
              fill='none'
              className='pointer-events-none hidden flex-shrink-0 translate-y-10 self-end xl:block'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M122.657 64.2354C139.776 64.2354 153.655 50.5277 153.655 33.6181C153.655 16.7086 139.776 3 122.657 3C105.538 3 91.6597 16.7086 91.6597 33.6181C91.6597 50.5277 105.538 64.2354 122.657 64.2354Z'
                opacity='0.2'
                className='fill-indigo-300'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M62.0094 131.207C62.0094 97.6605 89.766 70.4649 124.005 70.4649C158.243 70.4649 186 97.6605 186 131.207V151.389C186 151.816 185.827 152.226 185.518 152.528C185.21 152.83 184.792 153 184.355 153H63.654C63.2178 153 62.7995 152.83 62.4911 152.528C62.1827 152.226 62.0094 151.816 62.0094 151.389V131.207Z'
                opacity='0.2'
                className='fill-indigo-300'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M98.5242 65.1402C115.891 65.1402 129.97 51.4324 129.97 34.5221C129.97 17.6126 115.891 3.90478 98.5242 3.90478C81.1573 3.90478 67.0787 17.6126 67.0787 34.5221C67.0787 51.4324 81.1573 65.1402 98.5242 65.1402Z'
                className='fill-indigo-200'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M37 130.891C37 97.5187 64.6119 70.4649 98.6722 70.4649H101.111C135.171 70.4649 162.783 97.5187 162.783 130.891V151.388C162.783 151.815 162.61 152.225 162.302 152.527C161.993 152.829 161.575 152.999 161.139 152.999H38.6446C38.2084 152.999 37.7901 152.829 37.4817 152.527C37.1733 152.225 37 151.815 37 151.388V130.891Z'
                className='fill-indigo-200'
              />
            </svg>
          </li>
        </ul>
        <div className='mt-10'>
          <Link
            to='/work'
            useDefaultStyle
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
