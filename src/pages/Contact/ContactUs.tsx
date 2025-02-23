import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Input, Textarea } from '@/components/form'
import { FormField } from '@/components/form/FormField'
import { Send } from '@/components/icons'
import { Section } from '@/components/widget'

const services = [
  'Web Development',
  'Mobile Development',
  'Tooling Development',
  'API Integration',
  'UI Design',
  'UX Research',
  'Others',
]

const schema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  services: z.array(z.string()).min(1, 'Select at least one service'),
  requirements: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

export default function ContactUs() {
  const { handleSubmit, control, reset } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      services: [],
      requirements: '',
    },
  })

  const onSubmit = (data: FormValues) => {
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
        <div className='flex w-full flex-1'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='w-full max-w-xl bg-white'
          >
            <FormField control={control} name='name' label='Name' required>
              <Input placeholder='Enter your name' />
            </FormField>

            <FormField control={control} name='email' label='Email' required>
              <Input type='email' placeholder='Enter your email address' />
            </FormField>

            <FormField
              control={control}
              name='services'
              label='Which services are you looking for?'
              required
            >
              <div className='mt-3 grid grid-cols-2 gap-x-4 gap-y-3'>
                {services.map(service => (
                  <div
                    key={service}
                    className='flex h-6 w-full items-center space-x-2 overflow-hidden'
                  >
                    <input
                      type='checkbox'
                      value={service}
                      className='h-6 w-6 cursor-pointer bg-slate-200'
                    />
                    <span className='text-sm font-normal text-gray-900'>
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </FormField>

            <FormField
              control={control}
              name='requirements'
              label='Requirements'
            >
              <Textarea
                className='h-32 w-full rounded-lg border border-gray-300 p-2 outline-none focus:ring-1 focus:ring-primary-500'
                placeholder='Share your requirements here...'
              />
            </FormField>

            <button
              type='submit'
              className='mt-6 flex items-center justify-center space-x-2 rounded-lg bg-primary-500 px-6 py-3 text-white transition-all hover:bg-primary-700'
            >
              <span className='text-base font-medium'>Send message</span>
              <Send />
            </button>
          </form>
        </div>
        <div className='flex flex-1'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4143.1550046811135!2d106.84146337528799!3d10.838145089314422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752126d447fbd5%3A0xa714c8e67c35f0b0!2sAnnam%20cuisine!5e1!3m2!1svi!2s!4v1740117986089!5m2!1svi!2s'
            allowFullScreen
            loading='lazy'
            className='h-full w-full'
          />
        </div>
      </Section.Content>
    </Section>
  )
}
