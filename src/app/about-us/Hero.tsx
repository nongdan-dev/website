'use client'

import Layout from '@/assets/svg/layout.svg'
import Users from '@/assets/svg/users.svg'
import { Section, SubTitle, Title, Content } from '@/components/widget/Section'
import Image from 'next/image'

export default function AboutUsHero() {
  return (
    <Section className='col-full-width bg-gray-50 pt-[calc(theme(spacing.header)*2)]'>
      <div className='col-content'>
      <SubTitle>About us</SubTitle>
      <Title asChild>
          <h1>
            Nongdan team
          </h1>
      </Title>
      <p className='mt-4 w-full text-lg lg:w-1/2'>
        The name "nongdan" meaning farmers, are also a characteristic part of
        Vietnam, with a simple and hard-working personality
      </p>
      <Content className='grid gap-6 md:grid-cols-2 md:gap-8'>
        <div className='flex flex-col gap-8 rounded-xl border border-gray-200 bg-white p-8 shadow-sm md:flex-row'>
          <div className='flex-1'>
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
          <div className='relative h-48 w-full md:h-auto md:w-1/2 lg:w-1/3'>
          <Image src={Layout} alt='layout' className='w-full' />
          </div>
        </div>

        <div className='flex flex-col gap-8 rounded-xl border border-gray-200 bg-white p-8 shadow-sm md:flex-row'>
          <div className='flex-1'>
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
          <div className='relative h-48 w-full md:h-auto md:w-1/2 lg:w-1/3'>
          <Image src={Users} alt='users' className=' w-full' />
          </div>
        </div>
      </Content>
      </div>
    </Section>
  )
}
