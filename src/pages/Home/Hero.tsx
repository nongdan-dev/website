import Illustration from '@/assets/illustration.svg'
import { Button, LineBreak, Link } from '@/components'

function Hero() {
  return (
    <div className='col-full-width relative overflow-hidden bg-[hsl(0,0,99%)] pb-24 pt-44'>
      <div className='col-content xl:grid xl:grid-cols-2'>
        <div>
          <h1 className='text-balance text-4xl font-semibold leading-snug sm:text-5xl sm:leading-snug'>
            Practical <LineBreak className='md:inline' /> Software Development
          </h1>
          <p className='mt-6 text-balance text-lg'>
            Through dedicated and persistent effort, we have been delivering{' '}
            <LineBreak /> production-grade software solutions to companies and
            startups around the world.
          </p>
          <Button className='mt-8' asChild>
            <Link to='/porfolio' defaultStyle>
              View our porfolio
            </Link>
          </Button>
        </div>
        <div className='hidden xl:block xl:translate-x-28'>
          <img src={Illustration} alt='' />
        </div>
      </div>
      <div className='col-content mt-16'>testimonial</div>
    </div>
  )
}

export default Hero
