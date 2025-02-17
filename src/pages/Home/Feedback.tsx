import Broadflow from '@/assets/images/client-logos/broadflow.png'
import { Divider } from '@/components/ui'
import { Section } from '@/components/widget'
import { colors } from '@/config/colors'

function Feedback() {
  return (
    <Section className='col-content relative overflow-clip border-b border-gray-200'>
      <figure className='relative z-10'>
        <blockquote className='w-7/12 font-serif text-5xl font-bold leading-[110%]'>
          “For the past ten years, I've had the privilege of working with Nam,
          who is both a talented technical expert and a conscientious business
          owner”
        </blockquote>
        <figcaption className='mt-12 flex'>
          <img src={Broadflow} alt='broadflow logo' className='h-11' />
          <Divider
            direction='vertical'
            className='mx-10 h-14 w-0.5 before:w-full after:w-full'
          />
          <div className='flex flex-col justify-center gap-1'>
            <span className='text-xl font-semibold'>Eric Zimerman</span>
            <span className='text-lg text-gray-700'>Founder of Broadflow</span>
          </div>
        </figcaption>
      </figure>
      <div
        className='bg-radial absolute inset-0'
        style={{
          background: `radial-gradient(ellipse farthest-side at 50% 100%, ${colors.primary[100]} 0%, transparent 100%)`,
        }}
      />
    </Section>
  )
}

export default Feedback
