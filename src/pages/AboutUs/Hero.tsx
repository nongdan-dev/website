import Layout from '@/assets/svg/layout.svg'
import Users from '@/assets/svg/users.svg'
import { Section } from '@/components/widget'

function Hero() {
  return (
    <Section>
      <Section.SubTitle>About us</Section.SubTitle>
      <Section.Title className=''>Nongdan team</Section.Title>
      <p className='mt-4 w-[38rem] text-base font-normal'>
        The name "nongdan" meaning farmers, are also a characteristic part of
        Vietnam, with a simple and hard-working personality
      </p>
      <Section.Content className='grid grid-cols-2 gap-x-10'>
        <div className='flex flex-row rounded-xl border border-gray-200 shadow-sm'>
          <div className='px-6 py-8'>
            <p className='text-base font-normal leading-6 text-primary-500'>
              OUR MISSION
            </p>
            <h3 className='mb-3 mt-2 text-2xl font-medium'>
              Transform your dream product into reality
            </h3>
            <p className='text-lg'>
              Our woodland, backed by talented and ambitious workforce with
              years of experience, is the top-of-mind place for founders looking
              to scale up their engineering capabilities.
            </p>
          </div>
          <div className='bottom-0 mt-24 hidden w-full items-end justify-end lg:flex'>
            <img src={Layout} alt='' />
          </div>
        </div>
        <div className='flex flex-row rounded-xl border border-gray-200 shadow-sm'>
          <div className='px-6 py-8'>
            <p className='text-base font-normal leading-6 text-primary-500'>
              OUR VISION
            </p>
            <h3 className='mb-3 mt-2 text-2xl font-medium'>
              Build a trustworthy network between talents and founders
            </h3>
            <p className='text-lg'>
              Over the years, we thrive to continuously build a wide network of
              trust between talents and founders, with trust at the center of
              values. We connect founders with skillful developers across Asia.
            </p>
          </div>
          <div className='bottom-0 mt-24 hidden w-full items-end justify-end lg:flex'>
            <img src={Users} alt='' />
          </div>
        </div>
      </Section.Content>
    </Section>
  )
}

export default Hero
