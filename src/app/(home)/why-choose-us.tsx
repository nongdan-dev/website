import Image from 'next/image'
import WhyChooseUs1 from '@/assets/images/webp/why-choose-us-1.webp'
import WhyChooseUs2 from '@/assets/images/webp/why-choose-us-2.webp'
import { CheckCircle, Medal1st } from '@/components/icons'
import { Section, SubTitle, Title, Content } from '@/components/widget/Section1'

function WhyChooseUs() {
  return (
    <Section id='why-choose-us'>
      <div className='w-full place-items-center text-center'>
        <SubTitle>
          <Medal1st className='text-base' /> Why choose us
        </SubTitle>
        <Title>The right tech partner for your growth</Title>
      </div>
      <Content id='grid-layout'>
        <div className='place-content-center rounded-xl border border-gray-200 p-8 shadow-sm'>
          <div className='relative w-full'>
            <Image
              src={WhyChooseUs1}
              alt='Modern Technology'
              className='mx-auto w-full max-w-md object-cover md:w-3/4 xl:w-full'
              width={400}
              height={300}
              priority
            />
          </div>
          <div className='mt-8 flex flex-col gap-2.5 text-center'>
            <h3 className='text-2xl font-medium md:text-3xl'>
              Modern Technology
            </h3>
            <p className='mx-auto w-10/12 text-center sm:text-xl'>
              Leveraging the latest tech for fast, secure, and scalable
              applications.
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-between gap-8 rounded-xl border border-gray-200 p-8 shadow-sm'>
          <CheckCircle className='text-4xl text-primary-500' />
          <div className='flex flex-col gap-3'>
            <h3 className='text-2xl font-medium md:text-3xl'>
              Custom Solutions
            </h3>
            <p className='sm:text-xl'>
              We develop software tailored to your specific needs, not generic
              templates.
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-between gap-8 rounded-xl border border-gray-200 p-8 shadow-sm'>
          <CheckCircle className='text-4xl text-primary-500' />
          <div className='flex flex-col gap-3'>
            <h3 className='text-2xl font-medium md:text-3xl'>
              Flexible Integrations
            </h3>
            <p className='sm:text-xl'>
              Seamless connection with payment systems, CRM, AI, and more.
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-between gap-8 rounded-xl border border-gray-200 p-8 shadow-sm'>
          <CheckCircle className='text-4xl text-primary-500' />
          <div className='flex flex-col gap-3'>
            <h3 className='text-2xl font-medium md:text-3xl'>High Security</h3>
            <p className='sm:text-xl'>
              Implementing top security standards to protect your data and
              privacy.
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-between gap-8 rounded-xl border border-gray-200 p-8 shadow-sm'>
          <CheckCircle className='text-4xl text-primary-500' />
          <div className='flex flex-col gap-3'>
            <h3 className='text-2xl font-medium md:text-3xl'>
              Long-term Support
            </h3>
            <p className='sm:text-xl'>
              Beyond development, we offer maintenance, updates, and upgrades.
            </p>
          </div>
        </div>
        <div className='place-content-center rounded-xl border border-gray-200 p-8 shadow-sm'>
          <div className='relative w-full'>
            <Image
              src={WhyChooseUs2}
              alt='Fast Deployment'
              className='mx-auto w-full max-w-md object-cover md:w-3/4 xl:w-full'
              width={400}
              height={300}
              priority
            />
          </div>
          <div className='mt-8 flex flex-col gap-2.5 text-center'>
            <h3 className='text-2xl font-medium md:text-3xl'>
              Fast Deployment
            </h3>
            <p className='mx-auto w-10/12 text-center sm:text-xl'>
              Streamlined processes ensure quick go-to-market without
              compromising quality.
            </p>
          </div>
        </div>
      </Content>
    </Section>
  )
}

export default WhyChooseUs
