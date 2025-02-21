import React from 'react'
import { useForm } from 'react-hook-form'

import CusorArrow from '@/assets/svg/cursorarrow.svg'
import { Input, Textarea } from '@/components/form'
import { Section } from '@/components/widget'

export default function ContactUs() {
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      name: '',
      email: '',
      services: [],
      requirements: '',
    },
    shouldUnregister: true,
  })

  const onSubmit = (data: any) => {
    console.log('Form Data:', data)
    reset()
  }

  return (
    <Section>
      <Section.SubTitle>Contact us</Section.SubTitle>
      <Section.Title
        children={({ titleId, titleClassName }) => (
          <h1 id={titleId} className={titleClassName}>
            Let's build an awesome project together{' '}
          </h1>
        )}
      />
      <p className='mt-4 w-1/2 text-lg'>
        Let's discuss your ideas. The more specific you are, the faster we can
        help. Our team will get back to you within 24hrs.
      </p>
      <Section.Content className='grid grid-cols-2'>
        <div className='flex flex-1'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='w-full max-w-xl bg-white'
          >
            <label className='mb-1 block text-sm font-medium'>Name</label>
            <Input
              {...register('name')}
              placeholder='Enter your name'
              required
            />

            <label className='mb-1 mt-6 block text-sm font-medium'>Email</label>
            <Input
              {...register('email')}
              type='email'
              placeholder='Enter your email address'
              required
            />

            <label className='mb-3.5 mt-6 block text-sm font-medium'>
              Which services are you looking for?
            </label>
            <div className='grid grid-cols-2 gap-3'>
              {[
                'Web Development',
                'Mobile Development',
                'Tooling Development',
                'API Integration',
                'UI Design',
                'UX Research',
                'Others',
              ].map(service => (
                <label
                  key={service}
                  className='flex h-6 items-center space-x-2'
                >
                  <Input
                    {...register('services')}
                    className='h-6 w-6'
                    type='checkbox'
                    value={service}
                  />
                  <span className='text-sm font-normal text-gray-900'>
                    {service}
                  </span>
                </label>
              ))}
            </div>

            <label className='mb-1 mt-6 block text-sm font-medium'>
              Requirements
            </label>
            <Textarea
              {...register('requirements')}
              className='h-32 w-full rounded-lg border border-gray-300 p-2 outline-none focus:ring-1 focus:ring-primary-500'
              placeholder='Share your requirements here....'
            />

            <button
              type='submit'
              className='mt-6 flex items-center justify-center space-x-2 rounded-lg bg-primary-500 px-6 py-3 text-white transition-all hover:bg-primary-700'
            >
              <span className='text-base font-medium'>Send message</span>
              <img src={CusorArrow} />
            </button>
          </form>
        </div>
        <div className='flex flex-1'>
          <div className='h-full w-full'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4143.1550046811135!2d106.84146337528799!3d10.838145089314422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752126d447fbd5%3A0xa714c8e67c35f0b0!2sAnnam%20cuisine!5e1!3m2!1svi!2s!4v1740117986089!5m2!1svi!2s'
              allowFullScreen
              loading='lazy'
              className='h-full w-full'
            ></iframe>
          </div>
        </div>
      </Section.Content>
    </Section>
  )
}
