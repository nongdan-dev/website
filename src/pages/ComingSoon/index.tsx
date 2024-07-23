import { twMerge } from 'tailwind-merge'

import illustration from '@/assets/illustration2.svg'
import { Input } from '@/components/form'
import { Badge, Button } from '@/components/ui'
import { Section } from '@/components/widget'

function ComingSoonPage() {
  return (
    <Section>
      {({ titleId, titleClassName }) => (
        <div className='grid grid-cols-[32rem,1fr] gap-16'>
          <div className='content-center'>
            <Badge tone='warning' bordered className='mb-3 inline-block'>
              Coming soon
            </Badge>
            <h1 id={titleId} className={twMerge(titleClassName, 'mb-10')}>
              We are currently working on this page
            </h1>
            <div>
              <h2>Get notify when it's ready</h2>
              <form className='mt-1.5'>
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
