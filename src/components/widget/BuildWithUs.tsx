import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

import SectionBg from '@/assets/images/build-width-us-bg.png'

import { Button } from '../ui'
import { Section } from './Section'

export function BuildWithUs() {
  return (
    <Section
      className='col-full-width bg-gray-100 !bg-cover !bg-no-repeat py-20'
      style={{ background: `url(${SectionBg})` }}
    >
      {({ titleId, titleClassName }) => (
        <div className='col-content text-center'>
          <h2
            id={titleId}
            className={twMerge(titleClassName, 'mb-4 !text-3xl')}
          >
            We'd love to work with you.
          </h2>
          <p>Drop us a message if you need any help</p>
          <Button asChild className='mt-6'>
            <Link to='/contact'>Let's build with us</Link>
          </Button>
        </div>
      )}
    </Section>
  )
}
