import Illustration from '@/assets/illustration.svg'
import { Button, Link } from '@/components/ui'
import { LineBreak } from '@/components/widget'

function Hero() {
  return (
    <div className='col-full-width overflow-hidden pb-20 pt-48 xl:pb-10 xl:pt-60'>
      <div className='col-content xl:flex xl:gap-4'>
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
            <Link to='/work' useDefaultStyle>
              Explore our work
            </Link>
          </Button>
        </div>
        <div className='hidden w-[48rem] flex-shrink-0 -translate-y-12 xl:block'>
          <img src={Illustration} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Hero
