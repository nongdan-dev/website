import Illustration from '@/assets/illustration.svg'
import { Button, LineBreak, Link } from '@/components'

function Hero() {
  return (
    <div className='col-full-width relative overflow-hidden pb-20 pt-48'>
      <div className='col-content xl:grid xl:grid-cols-2'>
        <div>
          <h1 className='text-balance text-4xl font-semibold leading-snug sm:text-5xl sm:leading-snug'>
            Practical <LineBreak className='md:inline' /> Software Development
          </h1>
          <p className='mt-6 text-balance text-lg'>
            Through dedicated and persistent effort, we have been delivering
            production-grade software solutions to companies and startups around
            the world.
          </p>
          <Button className='mt-8' asChild>
            <Link to='/porfolio' defaultStyle>
              View our Porfolio
            </Link>
          </Button>
        </div>
        <div className='hidden xl:block xl:translate-x-36'>
          <img
            aria-hidden='true'
            className='h-[26.25rem]'
            src={Illustration}
            alt=''
          />
        </div>
      </div>
      <div className='col-content mt-24 flex flex-col gap-y-6 xl:mt-[7.5rem]'>
        asd
      </div>
    </div>
  )
}

export default Hero
