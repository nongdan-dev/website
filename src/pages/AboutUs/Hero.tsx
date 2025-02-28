import Layout from '@/assets/svg/layout.svg'
import Users from '@/assets/svg/users.svg'
import { Section } from '@/components/widget'

function Hero() {
  return (
    <Section>
      <Section.SubTitle>About us</Section.SubTitle>
      <Section.Title
        children={({ titleId, titleClassName }) => (
          <h1 id={titleId} className={titleClassName}>
            Nongdan team
          </h1>
        )}
      />
      <p className='mt-4 w-full text-lg lg:w-1/2'>
        The name "nongdan" meaning farmers, are also a characteristic part of
        Vietnam, with a simple and hard-working personality
      </p>
      <Section.Content className='grid gap-6 md:grid-cols-2 md:gap-8'>
        <div className='flex gap-14 rounded-xl border border-gray-200 shadow-sm'>
          <div className='flex-1 p-8 xl:pr-0'>
            <span className='uppercase text-primary-500'>our mission</span>
            <h3 className='mb-3.5 mt-2 text-2xl font-medium'>
              Transform your dream product into reality
            </h3>
            <p className='md:text-lg'>
              Our woodland, backed by talented and ambitious workforce with
              years of experience, is the top-of-mind place for founders looking
              to scale up their engineering capabilities.
            </p>
          </div>
          <div aria-hidden className='hidden self-end xl:block'>
            <img src={Layout} alt='' className='w-full' />
          </div>
        </div>

        <div className='flex gap-14 rounded-xl border border-gray-200 shadow-sm'>
          <div className='flex-1 p-8 xl:pr-0'>
            <span className='uppercase text-primary-500'>our vision</span>
            <h3 className='mb-3.5 mt-2 text-2xl font-medium'>
              Build a trustworthy network between talents and founders
            </h3>
            <p className='md:text-lg'>
              We thrive to continuously build a wide network of trust between
              talents and founders, with trust at the center of values. We
              connect founders with skillful developers across Asia.
            </p>
          </div>
          <div aria-hidden className='hidden self-end xl:block'>
            <img src={Users} alt='' className='w-full' />
          </div>
        </div>
      </Section.Content>
    </Section>
  )
}

export default Hero
