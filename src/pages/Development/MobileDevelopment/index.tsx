import { Fragment } from 'react/jsx-runtime'
import { Grid } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { twMerge } from 'tailwind-merge'

import ChimeraLogo from '@/assets/chimera-logo.png'
import { Button, Link } from '@/components/ui'
import {
  BuildWithUs,
  LineBreak,
  ProcessSteps,
  Section,
} from '@/components/widget'

import techStackData from './techStackData'

function MobileDevelopment() {
  return (
    <Fragment>
      <Section subtitle='mobile development' className='pb-0'>
        {({ titleId, titleClassName }) => (
          <Fragment>
            <h1 className={twMerge(titleClassName, 'mb-6')} id={titleId}>
              Build and scale your mobile apps
            </h1>
            <p className='lg:w-[40%]'>
              Our expertise includes top mobile development service which is
              well-designed, practical and cross-platform, bringing seamless
              mobile apps experiences for digital users on any device.
            </p>
            <Button asChild className='mt-8'>
              <Link to='/contact' useDefaultStyle>
                Let's build
              </Link>
            </Button>
          </Fragment>
        )}
      </Section>
      <Section>
        {({ titleId, titleClassName }) => (
          <Fragment>
            <h2
              className={twMerge(
                titleClassName,
                'mb-6 text-3xl sm:text-3xl md:text-3xl',
              )}
              id={titleId}
            >
              What we have built
            </h2>
            <ul className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
              {Array.from({ length: 3 }).map((_, idx) => (
                <li key={idx} className='rounded-md border border-gray-300 p-8'>
                  <div className='mb-5'>
                    <img src={ChimeraLogo} alt='chimera' className='max-h-10' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <p>
                      <span className='font-semibold text-indigo-500'>
                        Chimera
                      </span>{' '}
                      is a Lorem ipsum dolor sit, amet consectetur adipisicing
                      elit. Nesciunt temporibus vitae quaerat. Deleniti neque
                      quisquam est
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aut dolores unde repellat sit incidunt obcaecati ipsam,
                      molestias laudantium facere, placeat quia nostrum
                      laboriosam dignissimos fugiat quaerat asperiores ex nulla
                      hic!
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Fragment>
        )}
      </Section>
      <div className='col-full-width bg-gray-100'>
        <Section subtitle='process' title='Step by step from idea stage'>
          <div className='col-content'>
            <ProcessSteps className='mt-10' />
          </div>
        </Section>
      </div>
      <Section
        subtitle='techstack'
        title={
          <Fragment>
            Technologies and platforms <LineBreak /> we work with
          </Fragment>
        }
      >
        <p className='lg:max-w-[45%]'>
          We employ cutting-edge tools and tech stack and ensure compatibility
          with various platforms. This versatility allows us to build software
          that seamlessly integrates into your existing systems.
        </p>
        <Swiper
          tag='ul'
          grid={{ rows: 3 }}
          slidesPerView={1.5}
          spaceBetween={24}
          className='mt-12 h-[520px] py-1'
          modules={[Grid]}
          breakpoints={{
            450: { slidesPerView: 2.2 },
            650: { slidesPerView: 3.2 },
            850: { slidesPerView: 4.2 },
            1050: { slidesPerView: 5.2 },
            1250: { slidesPerView: 6.2 },
            1400: { slidesPerView: 7.2 },
          }}
        >
          {techStackData.map(({ name, img }) => (
            <SwiperSlide
              key={name}
              tag='li'
              className='flex flex-col items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-6 shadow-md'
            >
              <img src={img} alt='' className='h-16 w-16' />
              <p className='mt-3'>{name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>
      <BuildWithUs />
    </Fragment>
  )
}

export default MobileDevelopment
