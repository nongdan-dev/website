import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { z } from 'zod'

import illustration from '@/assets/illustration2.svg'
import { FormField, Input } from '@/components/form'
import { Badge, Button } from '@/components/ui'
import { Section } from '@/components/widget'

const FormSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email address'),
})

type FormValues = z.infer<typeof FormSchema>

function ComingSoonPage() {
  const { handleSubmit: _handleSubmit, control } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    shouldFocusError: false,
  })

  const handleSubmit = (values: FormValues) => {
    alert(JSON.stringify(values))
  }

  return (
    <Section>
      {({ titleId, titleClassName }) => (
        <div className='grid grid-cols-[32rem,1fr] gap-20'>
          <div className='content-center'>
            <Badge tone='warning' bordered className='mb-3 inline-block'>
              Coming soon
            </Badge>
            <h1 id={titleId} className={twMerge(titleClassName, 'mb-10')}>
              We are currently working on this page
            </h1>
            <div>
              <h2>Get notify when it's ready</h2>
              <form className='mt-1.5' onSubmit={_handleSubmit(handleSubmit)}>
                <FormField name='email' control={control}>
                  <Input
                    containerClassName='h-14'
                    className='rounded-full pl-4 pr-36 text-base'
                    placeholder='Enter your email address'
                    addOn={
                      <Button className='absolute right-1 top-1 rounded-full'>
                        Notify me
                      </Button>
                    }
                  />
                </FormField>
              </form>
            </div>
          </div>
          <img
            src={illustration}
            className='w-full translate-x-6 scale-110'
            alt=''
            aria-hidden='true'
          />
        </div>
      )}
    </Section>
  )
}

export default ComingSoonPage
