import WhyChooseUs1 from '@/assets/images/webp/why-choose-us-1.webp'
import WhyChooseUs2 from '@/assets/images/webp/why-choose-us-2.webp'
import { CheckCircle, Medal1st } from '@/components/icons'
import { Section } from '@/components/widget'

function WhyChooseUs() {
  return (
    <Section id='why-choose-us'>
      <div className='w-full place-items-center text-center'>
        <Section.SubTitle>
          <Medal1st className='text-base' /> Why choose us
        </Section.SubTitle>
        <Section.Title>The right tech partner for your growth</Section.Title>
      </div>
      <Section.Content id='grid-layout'>
        <div className='rounded-xl border border-gray-200 p-8 shadow-sm'>
          <img src={WhyChooseUs1} alt='' className='w-full' />
          <div className='mt-8 flex flex-col gap-2.5 text-center'>
            <h3 className='text-3xl font-medium'>Modern Technology</h3>
            <p className='mx-auto w-10/12 text-center text-xl'>
              Leveraging the latest tech for fast, secure, and scalable
              applications.
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-between rounded-xl border border-gray-200 p-8 shadow-sm'>
          <CheckCircle className='text-4xl text-primary-500' />
          <div className='flex flex-col gap-3'>
            <h3 className='text-3xl font-medium'>Custom Solutions</h3>
            <p className='text-xl'>
              We develop software tailored to your specific needs, not generic
              templates.
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-between rounded-xl border border-gray-200 p-8 shadow-sm'>
          <CheckCircle className='text-4xl text-primary-500' />
          <div className='flex flex-col gap-3'>
            <h3 className='text-3xl font-medium'>Flexible Integrations</h3>
            <p className='text-xl'>
              Seamless connection with payment systems, CRM, AI, and more.
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-between rounded-xl border border-gray-200 p-8 shadow-sm'>
          <CheckCircle className='text-4xl text-primary-500' />
          <div className='flex flex-col gap-3'>
            <h3 className='text-3xl font-medium'>High Security</h3>
            <p className='text-xl'>
              Implementing top security standards to protect your data and
              privacy.
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-between rounded-xl border border-gray-200 p-8 shadow-sm'>
          <CheckCircle className='text-4xl text-primary-500' />
          <div className='flex flex-col gap-3'>
            <h3 className='text-3xl font-medium'>Long-term Support</h3>
            <p className='text-xl'>
              Beyond development, we offer maintenance, updates, and upgrades.
            </p>
          </div>
        </div>
        <div className='rounded-xl border border-gray-200 p-8 shadow-sm'>
          <img src={WhyChooseUs2} alt='' className='w-full' />
          <div className='mt-8 flex flex-col gap-2.5 text-center'>
            <h3 className='text-3xl font-medium'>Fast Deployment</h3>
            <p className='mx-auto w-10/12 text-center text-xl'>
              Streamlined processes ensure quick go-to-market without
              compromising quality.
            </p>
          </div>
        </div>
      </Section.Content>
    </Section>
  )
}

export default WhyChooseUs
