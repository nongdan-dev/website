import { Button, Link } from '@/components/ui'
import { LineBreak } from '@/components/widget'

function Hero() {
  return (
    <div className='col-full-width overflow-hidden pt-20'>
      <div className='col-content'>
        <div>
          <h1 className='text-title'>
            Practical Software <LineBreak className='md:inline' /> Development
          </h1>
          <p>
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
