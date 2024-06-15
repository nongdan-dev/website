import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Button, LineBreak } from '@/components'

function Hero() {
  return (
    <div className='col-content py-24'>
      <h1 className='text-balance text-5xl font-semibold leading-snug'>
        Practical <LineBreak /> Software Development
      </h1>
      <p className='mt-6 text-balance text-lg'>
        Through dedication and endurance effort, we have been delivering <LineBreak /> production-grade software solutions to companies and startups around the world.
      </p>
      <Button className='mt-8' asChild>
        <Link to='/projects'>View our projects</Link>
      </Button>
      <Swiper spaceBetween={40} className='mt-20' tag='ul' slidesPerView={3.2}>
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
