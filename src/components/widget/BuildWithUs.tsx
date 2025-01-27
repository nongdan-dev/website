import SectionBg from '@/assets/images/build-width-us-bg.png'

import { Button, Link } from '../ui'
import { Section } from './Section'

export function BuildWithUs() {
  return (
    <Section
      className='col-full-width bg-gray-100 !bg-cover !bg-no-repeat py-20'
      style={{ background: `url(${SectionBg})` }}
    >
      {({ titleId }) => (
        <div className='col-content text-center'>
          <h2
            id={titleId}
            className='text-balance text-3xl font-semibold leading-snug'
          >
            We'd love to work with you.
          </h2>
          <p className='mt-3'>Drop us a message if you need any help</p>
          <Button asChild className='mt-8'>
            <Link to='/contact' useDefaultStyle>
              Let's build with us
            </Link>
          </Button>
        </div>
      )}
    </Section>
  )
}
