import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { IoMdSend } from 'react-icons/io'
import { z } from 'zod'

import { FormField, Input, Select, Textarea } from '@/components/form'
import { Button } from '@/components/ui'

const options = [
  {
    label: 'Development',
    options: [
      { label: 'Web Development', value: 'Web Development' },
      { label: 'Mobile Development', value: 'Mobile Development' },
      { label: 'Tooling Development', value: 'Tooling Development' },
      { label: 'API Integration', value: 'API Integration' },
    ],
  },
  {
    label: 'Design',
    options: [
      { label: 'User Research', value: 'User Research' },
      { label: 'User Interface', value: 'User Interface' },
      { label: 'Experience Design', value: 'Experience Design' },
      { label: 'Digital Product Design', value: 'Digital Product Design' },
    ],
  },
  {
    label: 'Other',
    options: [
      { label: 'Strategy & Architecture', value: 'Strategy & Architecture' },
      { label: 'Managed Services', value: 'Managed Services' },
    ],
  },
]

const FormSchema = z.object({
  name: z.string({ required_error: 'Name is required' }),
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email address'),
  services: z.custom<(typeof options)[number]['options'] | undefined>(),
  requirements: z.string().optional(),
})

type FormValues = z.infer<typeof FormSchema>

function ContactForm() {
  const { handleSubmit: _handleSubmit, control } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    shouldFocusError: false,
  })

  const handleSubmit = (values: FormValues) => {
    alert(JSON.stringify(values))
  }

  return (
    <form onSubmit={_handleSubmit(handleSubmit)}>
      <FormField label='Name' name='name' control={control} required>
        <Input placeholder='e.g. John Doe' />
      </FormField>
      <FormField label='Email' name='email' control={control} required>
        <Input placeholder='e.g. john_doe@example.com' />
      </FormField>
      <FormField
        label='Which services are you looking for?'
        name='services'
        control={control}
      >
        <Select
          mode='multiple'
          placeholder='Select services'
          options={options}
        />
      </FormField>
      <FormField label='Requirements' name='requirements' control={control}>
        <Textarea placeholder='Share your requirements here...' />
      </FormField>
      <Button type='submit' className='px-8'>
        Send
        <IoMdSend />
      </Button>
    </form>
  )
}

export default ContactForm
