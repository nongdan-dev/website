import { Flame } from '@/components/icons'
import { Button, Link } from '@/components/ui'
import { Section } from '@/components/widget'

function Hero() {
  return (
    <section>
      <div className='col-content grid gap-6'>
        <div className=''>
          <Section.SubTitle>
            <Flame className='text-base' />
            Mobile development
          </Section.SubTitle>

          <div className='grid gap-[18px]'>
            <Section.Title>Build and scale your mobile apps</Section.Title>
            <p className='w-1/2 text-lg text-gray-900'>
              Our expertise includes top mobile development service which is
              well-designed, practical and cross-platform, bringing seamless
              mobile apps experiences for digital users on any device.
            </p>
          </div>
        </div>
        <div>
          <Button asChild>
            <Link noHover to='/contact-us'>
              Let's build
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
