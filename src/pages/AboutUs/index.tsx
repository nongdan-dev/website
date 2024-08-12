import { Fragment } from 'react'
import { twMerge } from 'tailwind-merge'

import { BuildWithUs, LineBreak, Section } from '@/components/widget'

import TeamMembers from './TeamMembers'

function AboutUsPage() {
  return (
    <Fragment>
      <Section
        subtitle='Definition'
        title={({ titleId, titleClassName }) => (
          <h1 id={titleId} className={twMerge(titleClassName, 'mb-6')}>
            Nongdan Team
          </h1>
        )}
      >
        <p className='w-full md:w-9/12 lg:w-7/12 xl:w-6/12'>
          The name <span className='mr-1 italic'>"nongdan"</span> meaning
          farmers, are also a characteristic part of Vietnam, with a simple and
          hard-working personality
        </p>
        <div className='mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2'>
          <div className='flex gap-3 overflow-clip rounded-md border border-gray-300 bg-white p-10 xl:pr-0'>
            <div>
              <h4 className='mb-2 text-sm uppercase text-indigo-500'>
                our mission
              </h4>
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
          </div>
          <div className='flex gap-3 overflow-clip rounded-md border border-gray-300 bg-white p-10 xl:pr-0'>
            <div>
              <h4 className='mb-2 text-sm uppercase text-indigo-500'>
                our vision
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
          </div>
        </div>
      </Section>
      <Section className='col-full-width bg-gray-100'>
        {({ titleId, titleClassName }) => (
          <div className='col-content'>
            <h2 id={titleId} className={twMerge(titleClassName)}>
              Nothing is impossible, when we come <LineBreak /> together
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
                  <span className='font-semibold'>Nongdan.dev</span> is a
                  startup based in Ho Chi Minh City, Vietnam, specializing in
                  providing software development, maintenance, and upgrade
                  services for businesses and individuals. We are committed to
                  delivering optimal technology solutions, helping our clients
                  enhance work efficiency, increase competitiveness, and easily
                  adapt to the fast-paced changes in the market.
                </p>
                <p>
                  With a team of experienced and dedicated professionals, we are
                  proud to be a trusted partner, accompanying you on the journey
                  of digital transformation and sustainable development. We
                  believe in building long-term relationships with our clients
                  by understanding their unique needs and delivering tailor-made
                  solutions. Our mission is to empower businesses and
                  individuals to thrive in the digital age, ensuring their
                  growth and success in an increasingly competitive environment.
                </p>
              </div>
              <img
                className='h-[23rem] w-full rounded-md object-cover'
                src='https://placehold.co/600x400'
                alt=''
              />
            </div>
          </div>
        )}
      </Section>
      <TeamMembers />
      <BuildWithUs />
    </Fragment>
  )
}

export default AboutUsPage
