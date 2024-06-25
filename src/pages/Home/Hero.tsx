import { Button, LineBreak, Link } from '@/components'

function Hero() {
  return (
    <div className='col-content py-24'>
      <h1 className='text-balance text-4xl font-semibold leading-snug sm:text-5xl sm:leading-snug'>
        Practical <LineBreak className='md:inline' /> Software Development
      </h1>
      <p className='mt-6 text-balance text-lg'>
        Through a dedicated & persistent effort, we have been delivering{' '}
        <LineBreak /> production-grade software solutions to companies and
        startups around the world.
      </p>
      <Button className='mt-8' asChild>
        <Link to='/projects' defaultStyle>
          View our projects
        </Link>
      </Button>
      <div className='mt-16'>testimonial</div>
    </div>
  )
}

export default Hero
