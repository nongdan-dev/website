import Broadflow from '@/assets/images/client-logos/broadflow.webp'
import { Orbits } from '@/components/icons'
import { Divider } from '@/components/ui'
import { Section } from '@/components/widget'
import { colors } from '@/config/colors'

function Feedback() {
  return (
    <Section className='col-content relative overflow-clip border-b border-gray-200'>
      <figure className='relative z-10'>
        <blockquote className='font-serif text-3xl font-bold leading-[1.1] md:text-4xl lg:w-7/12 lg:text-5xl'>
          “For the past ten years, I've had the privilege of working with Nam,
          who is both a talented technical expert and a conscientious business
          owner”
        </blockquote>
        <figcaption className='mt-12 flex flex-wrap items-center'>
          <img
            src={Broadflow}
            alt='broadflow logo'
            className='hidden h-11 sm:block'
          />
          <Divider
            direction='vertical'
            className='mx-10 hidden h-14 w-0.5 before:w-full after:w-full sm:flex'
          />
          <div className='flex flex-col justify-center gap-1'>
            <span className='text-xl font-semibold'>Eric Zimerman</span>
            <span className='text-lg text-gray-700'>Founder of Broadflow</span>
          </div>
        </figcaption>
      </figure>
      <div
        className='pointer-events-none absolute inset-0'
        style={{
          background: `radial-gradient(ellipse farthest-side at 50% 100%, ${colors.primary[100]} 0%, transparent 100%)`,
        }}
      />
      <Orbits
        hideInnerCircles
        className='pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-[55rem] text-primary-100'
      />
    </Section>
  )
}

export default Feedback
