import { Link } from 'react-router-dom'

import HeroImg from '@/assets/images/hero.png'
import { Button } from '@/components/ui'
import { FeedBack, LineBreak } from '@/components/widget'

function Hero() {
  return (
    <div className='hero-bg col-full-width overflow-hidden pt-40'>
      <div className='col-content flex h-[23.75rem] items-center'>
        <div className='w-[41.25rem] flex-shrink-0'>
          <h1 className='text-title mb-4'>
            Practical Software <LineBreak className='md:inline' /> Development
          </h1>
          <p className='mb-8 text-lg'>
            Through dedicated and persistent effort, we have been delivering
            production-grade software solutions to companies and startups around
            the world.
          </p>
          <Button asChild>
            <Link to='/work'>Explore our work</Link>
          </Button>
        </div>
        <div aria-hidden className='relative ml-auto h-full w-[27rem]'>
          <FeedBack
            className='absolute -right-11 -top-8 z-0 scale-75 blur-sm'
            starCount={5}
            userName='Eric Zimerman'
            userRole='Founder of Broadflow'
            message="For the past ten years, I've had the privilege of working with
              Nam, who is both a talented technical expert and a conscientious
              business owner"
          />
          <FeedBack
            className='absolute top-1/2 z-10 -translate-y-1/2 shadow-sm'
            starCount={5}
            userName='Eric Zimerman'
            userRole='Founder of Broadflow'
            message="For the past ten years, I've had the privilege of working with
              Nam, who is both a talented technical expert and a conscientious
              business owner"
          />
          <FeedBack
            className='absolute -bottom-8 -right-4 z-0 scale-75 blur-sm'
            starCount={5}
            userName='Eric Zimerman'
            userRole='Founder of Broadflow'
            message="For the past ten years, I've had the privilege of working with
              Nam, who is both a talented technical expert and a conscientious
              business owner"
          />
        </div>
      </div>
      <div className='col-content mt-20'>
        <img
          src={HeroImg}
          alt=''
          className='h-[24rem] translate-y-5 scale-110'
        />
      </div>
    </div>
  )
}

export default Hero
