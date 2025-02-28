import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Input, Textarea } from '@/components/form'
import { FormField } from '@/components/form/FormField'
import { Send } from '@/components/icons'
import { Button } from '@/components/ui'

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

function ContactForm() {
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
    <form onSubmit={handleSubmit(onSubmit)}>
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
          <div className='mt-3 grid gap-x-4 gap-y-3 sm:grid-cols-2'>
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
      <FormField control={control} name='requirements' label='Requirements'>
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
  )
}

export default ContactForm
