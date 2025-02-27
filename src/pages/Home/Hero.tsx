import HeroImg from '@/assets/images/webp/hero.webp'
import { Orbits } from '@/components/icons'
import { Button, Link } from '@/components/ui'

function Hero() {
  return (
    <section className='col-full-width relative overflow-clip bg-gradient-to-b from-primary-200 to-white/0 pt-[calc(theme(spacing.header)*2)]'>
      <Orbits className='pointer-events-none absolute left-1/2 z-0 -translate-x-1/2 -translate-y-1/4 text-[52rem] text-primary-200' />
      <div className='col-content z-10 place-items-center'>
        <h1 className='text-title mb-4 text-center'>Idea. Develop. Launch.</h1>
        <p className='text-center md:w-[34rem] md:text-lg'>
          From idea to a real application. We design, develop and optimize to
          deliver a high-quality product, ready to launch.
        </p>
        <div className='mt-6 flex flex-wrap gap-3 md:gap-4'>
          <Button asChild>
            <Link noHover to='/contact-us'>
              Let's build with us
            </Link>
          </Button>
          <Button tone='light' asChild>
            <Link noHover to='/our-work'>
              Explore our work
            </Link>
          </Button>
        </div>
      </div>
      <div
        aria-hidden
        className='col-content z-10 mt-16 place-items-center md:mt-24'
      >
        <img
          src={HeroImg}
          alt=''
          className='w-[170%] max-w-[unset] sm:w-auto sm:max-w-full'
        />
      </div>
    </section>
  )
}

export default Hero
