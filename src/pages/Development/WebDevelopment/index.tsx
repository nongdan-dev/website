import { Fragment } from 'react/jsx-runtime'
import { twMerge } from 'tailwind-merge'

import { Button, Link } from '@/components/ui'
import { Section } from '@/components/widget'

function WebDevelopment() {
  return (
    <Fragment>
      <Section subtitle='web development' className='pb-0'>
        {({ titleId, titleClassName }) => (
          <Fragment>
            <h1 className={twMerge(titleClassName, 'mb-6')} id={titleId}>
              Build a solid web application
            </h1>
            <p className='lg:w-[40%]'>
              We design and build apps for both startups and established
              businesses. You've got the vision. Now you need an expert partner
              focusing on delivering values to your business and users.
            </p>
            <Button asChild className='mt-8'>
              <Link to='/contact' useDefaultStyle>
                Let's build
              </Link>
            </Button>
          </Fragment>
        )}
      </Section>
    </Fragment>
  )
}

export default WebDevelopment
