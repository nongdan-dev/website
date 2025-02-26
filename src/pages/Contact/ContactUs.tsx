import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Input, Textarea } from '@/components/form'
import { FormField } from '@/components/form/FormField'
import { Send } from '@/components/icons'
import { Button } from '@/components/ui'
import { Section } from '@/components/widget'

const services = [
  'Web Development',
  'UI Design',
  'Mobile Development',
  'UX Research',
  'Tooling Development',
  'Others',
  'API Integration',
]

const schema = z.object({
  name: z.string({ required_error: 'Name is required' }),
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email address'),
  services: z.array(z.string()).min(1, 'Please select at least one service'),
  requirements: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

export default function ContactUs() {
  const { handleSubmit, control } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: undefined,
      email: undefined,
      services: [],
      requirements: undefined,
    },
  })

  const onSubmit = (data: FormValues) => {
    console.log('Form Data:', data)
  }

  return (
    <Section>
      <Section.SubTitle>Contact us</Section.SubTitle>
      <Section.Title
        children={({ titleId, titleClassName }) => (
          <h1 id={titleId} className={titleClassName}>
            Let's build an awesome project together
          </h1>
        )}
      />
      <p className='mt-4 w-1/2 text-lg'>
        Let's discuss your ideas. The more specific you are, the faster we can
        help. Our team will get back to you within 24hrs.
      </p>
      <Section.Content className='grid grid-cols-1 gap-y-10 lg:grid-cols-2'>
        <div className='flex w-full flex-1'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='w-full max-w-xl bg-white'
          >
            <FormField control={control} name='name' label='Name' required>
              <Input placeholder='Enter your name' />
            </FormField>
            <FormField control={control} name='email' label='Email' required>
              <Input placeholder='Enter your email address' />
            </FormField>
            <FormField
              control={control}
              name='services'
              label='Which services are you looking for?'
              required
            >
              {({ field }) => (
                <div className='mt-3 grid grid-cols-2 gap-x-4 gap-y-3'>
                  {services.map(service => (
                    <div key={service} className='flex items-center space-x-2'>
                      <input
                        id={service}
                        type='checkbox'
                        value={service}
                        className='h-6 w-6'
                        onChange={e => {
                          e.target.checked
                            ? field.onChange([...field.value, service])
                            : field.onChange(
                                field.value?.filter(
                                  (value: string) => value !== service,
                                ),
                              )
                        }}
                      />
                      <label htmlFor={service} className='text-sm leading-none'>
                        {service}
                      </label>
                    </div>
                  ))}
                </div>
              )}
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
            <Button
              type='submit'
              className='mt-6 flex items-center justify-center rounded-lg bg-primary-500 px-6 py-3 text-white transition-all hover:bg-primary-700'
            >
              <span className='text-base font-medium'>Send message</span>
              <Send />
            </Button>
          </form>
        </div>
        <div className='flex flex-1'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4143.1550046811135!2d106.84146337528799!3d10.838145089314422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752126d447fbd5%3A0xa714c8e67c35f0b0!2sAnnam%20cuisine!5e1!3m2!1svi!2s!4v1740117986089!5m2!1svi!2s'
            allowFullScreen
            loading='lazy'
            title='Nong dan dev location map'
            aria-label='Google Maps shows the location of Nong dan dev'
            className='h-96 w-full rounded-md lg:h-full'
          />
        </div>
      </Section.Content>
    </Section>
  )
}
