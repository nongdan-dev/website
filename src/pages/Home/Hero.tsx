import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Button, LineBreak } from '@/components'

function Hero() {
  return (
    <div className='col-content py-24'>
      <h1 className='text-balance text-5xl font-semibold leading-snug'>
        Empower Innovation <LineBreak /> with Software Craftsmanship
      </h1>
      <p className='mt-6 text-balance text-lg'>
        Our agile team of craftsmen has worked with companies varied in size
        <LineBreak />
        from startups to corporates, to build world-class quality products and
        <LineBreak />
        lead the road to success, since 2013.
      </p>
      <Button className='mt-8' asChild>
        <Link to='/contact'>Let's talk</Link>
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
