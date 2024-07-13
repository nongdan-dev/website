import { BiSolidQuoteAltLeft } from 'react-icons/bi'
import { Swiper, SwiperSlide } from 'swiper/react'

import Illustration from '@/assets/illustration.svg'
import { Avatar, Button, LineBreak, Link } from '@/components'

function Hero() {
  return (
    <div className='col-full-width relative overflow-hidden pb-20 pt-48'>
      <div className='col-content xl:grid xl:grid-cols-2'>
        <div>
          <h1 className='text-balance text-4xl font-semibold leading-snug sm:text-5xl sm:leading-snug'>
            Practical <LineBreak className='md:inline' /> Software Development
          </h1>
          <p className='mt-6 text-balance text-lg lg:max-w-[95%]'>
            Through dedicated and persistent effort, we have been delivering
            production-grade software solutions to companies and startups around
            the world.
          </p>
          <Button className='mt-8' asChild>
            <Link to='/work' defaultStyle>
              View our Work
            </Link>
          </Button>
        </div>
        <div className='hidden xl:block xl:translate-x-20'>
          <img
            aria-hidden='true'
            className='h-[26.25rem]'
            src={Illustration}
            alt=''
          />
        </div>
      </div>
      <div className='col-content mt-24 xl:mt-[7.5rem]'>
        <Swiper
          className='pb-1'
          spaceBetween={32}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            950: { slidesPerView: 2.1 },
            1300: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide
            tag='blockquote'
            className='rounded-xl border border-gray-300 px-8 py-10 leading-relaxed shadow-md'
          >
            <BiSolidQuoteAltLeft className='mb-8 text-5xl text-indigo-500' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              eum laboriosam ipsum dignissimos incidunt veritatis delectus
              laborum beatae ad neque cupiditate minima perspiciatis non at
              voluptatum aliquid, sapiente aspernatur maxime?
            </p>
            <footer className='mt-8 flex items-center gap-3'>
              <Avatar
                className='h-12 w-12'
                name='Anon'
                url='https://placehold.co/40x40?text=Anon'
              />
              <span className='font-medium'>Anonymous</span>
            </footer>
          </SwiperSlide>
          <SwiperSlide
            tag='blockquote'
            className='rounded-xl border border-gray-300 px-8 py-10 leading-relaxed shadow-md'
          >
            <BiSolidQuoteAltLeft className='mb-8 text-5xl text-indigo-500' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              eum laboriosam ipsum dignissimos incidunt veritatis delectus
              laborum beatae ad neque cupiditate minima perspiciatis non at
              voluptatum aliquid, sapiente aspernatur maxime?
            </p>
            <footer className='mt-8 flex items-center gap-3'>
              <Avatar
                className='h-12 w-12'
                name='Anon'
                url='https://placehold.co/40x40?text=Anon'
              />
              <span className='font-medium'>Anonymous</span>
            </footer>
          </SwiperSlide>
          <SwiperSlide
            tag='blockquote'
            className='rounded-xl border border-gray-300 px-8 py-10 leading-relaxed shadow-md'
          >
            <BiSolidQuoteAltLeft
              aria-hidden='true'
              className='mb-8 text-5xl text-indigo-500'
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              eum laboriosam ipsum dignissimos incidunt veritatis delectus
              laborum beatae ad neque cupiditate minima perspiciatis non at
              voluptatum aliquid, sapiente aspernatur maxime?
            </p>
            <footer className='mt-8 flex items-center gap-3'>
              <Avatar
                className='h-12 w-12'
                name='Anon'
                url='https://placehold.co/40x40?text=Anon'
              />
              <span className='font-medium'>Anonymous</span>
            </footer>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Hero
