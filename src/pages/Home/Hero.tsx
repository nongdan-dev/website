import { Swiper, SwiperSlide } from 'swiper/react'

import { Button, LineBreak, Link } from '@/components'

function Hero() {
  return (
    <div className='col-content py-24'>
      <h1 className='text-balance text-4xl font-semibold leading-snug sm:text-5xl sm:leading-snug'>
        Practical <LineBreak className='md:inline' /> Software Development
      </h1>
      <p className='mt-6 text-balance text-lg'>
        Through dedication and endurance effort, we have been delivering{' '}
        <LineBreak /> production-grade software solutions to companies and
        startups around the world.
      </p>
      <Button className='mt-8' asChild>
        <Link to='/projects' defaultStyle>
          View our projects
        </Link>
      </Button>
      <Swiper
        spaceBetween={20}
        className='mt-20'
        tag='ul'
        slidesPerView={1.1}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          950: { slidesPerView: 2.1 },
          1300: { slidesPerView: 3.1 },
        }}
      >
        <SwiperSlide tag='li'>
          <img
            src='https://placehold.co/420x320'
            alt='showcase 1'
            className='h-80 w-full rounded-md object-cover'
          />
        </SwiperSlide>
        <SwiperSlide tag='li'>
          <img
            src='https://placehold.co/420x320'
            alt='showcase 2'
            className='h-80 w-full rounded-md object-cover'
          />
        </SwiperSlide>
        <SwiperSlide tag='li'>
          <img
            src='https://placehold.co/420x320'
            alt='showcase 3'
            className='h-80 w-full rounded-md object-cover'
          />
        </SwiperSlide>
        <SwiperSlide tag='li'>
          <img
            src='https://placehold.co/420x320'
            alt='showcase 4'
            className='h-80 w-full rounded-md object-cover'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero
