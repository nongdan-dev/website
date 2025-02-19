import { zodResolver } from '@hookform/resolvers/zod'
import { useId } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { FormField, Input } from '@/components/form'
import { Button } from '@/components/ui'
import { Section } from '@/components/widget'

const Schema = z.object({
  email: z
    .string({ message: 'Email is required' })
    .email({ message: 'Invalid email address' }),
})

type FormSchema = z.infer<typeof Schema>

function ComingSoon() {
  const fieldId = useId()
  const { control, handleSubmit } = useForm<FormSchema>({
    resolver: zodResolver(Schema),
  })

  const _handleSubmit = (values: FormSchema) => {
    console.log(values)
  }

  return (
    <Section className='grid grid-cols-2 gap-24'>
      <div>
        <Section.SubTitle>Coming soon</Section.SubTitle>
        <Section.Title className='w-full'>
          We are currently working on this page
        </Section.Title>
        <form className='mt-12' onSubmit={handleSubmit(_handleSubmit)}>
          <label htmlFor={fieldId} className='mb-2 inline-block'>
            Get notify when it's ready
          </label>
          <div className='flex items-start gap-2'>
            <FormField
              fieldId={fieldId}
              className='flex-1'
              control={control}
              name='email'
            >
              <Input placeholder='example@gmail.com' className='' />
            </FormField>
            <Button className='grow-0'>Notify me</Button>
          </div>
        </form>
      </div>
    </Section>
  )
}

export default ComingSoon
