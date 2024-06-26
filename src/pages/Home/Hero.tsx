import { Button, LineBreak, Link } from '@/components'

function Hero() {
  return (
    <div className='col-full-width relative overflow-hidden bg-gray-100'>
      <div className='hero-bg absolute bg-cover bg-center bg-no-repeat' />
      <div className='col-content relative pb-24 pt-44'>
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
        <div className='mt-16'>testimonial</div>
      </div>
    </div>
  )
}

export default Hero
