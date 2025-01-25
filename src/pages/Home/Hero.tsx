import { Button, Link } from '@/components/ui'
import { LineBreak } from '@/components/widget'

function Hero() {
  return (
    <div className='hero-bg col-full-width overflow-hidden pt-40'>
      <div className='col-content'>
        <div>
          <h1 className='text-title'>
            Practical Software <LineBreak className='md:inline' /> Development
          </h1>
          <p className='text-lg leading-normal'>
            Through dedicated and persistent effort, we have been delivering
            production-grade software solutions to companies and startups around
            the world.
          </p>
          <Button asChild>
            <Link to='/work' useDefaultStyle>
              Explore our work
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
