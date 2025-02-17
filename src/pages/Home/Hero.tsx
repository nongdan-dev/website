import HeroImg from '@/assets/images/png/hero.png'
import { Orbits } from '@/components/icons'
import { Button, Link } from '@/components/ui'

function Hero() {
  return (
    <div className='col-full-width relative bg-gradient-to-b from-primary-200 to-white/0 pt-[calc(theme(spacing.header)*2)]'>
      <Orbits className='pointer-events-none absolute left-1/2 z-0 -translate-x-1/2 -translate-y-1/4 text-[48.75rem] text-primary-200' />
      <div className='col-content z-10 place-items-center'>
        <h1 className='text-title mb-4'>Idea. Develop. Launch.</h1>
        <p className='w-[34rem] text-center text-lg'>
          From idea to a real application. We design, develop and optimize to
          deliver a high-quality product, ready to launch.
        </p>
        <div className='mt-6 flex gap-4'>
          <Button asChild>
            <Link noHover to='/contact'>
              Let's build with us
            </Link>
          </Button>
          <Button tone='light' asChild>
            <Link noHover to='/work'>
              Explore our work
            </Link>
          </Button>
        </div>
      </div>
      <div aria-hidden className='col-content z-10 mt-header'>
        <img src={HeroImg} alt='' />
      </div>
    </div>
  )
}

export default Hero
