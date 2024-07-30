import { Fragment } from 'react/jsx-runtime'
import { twMerge } from 'tailwind-merge'

import ChimeraLogo from '@/assets/chimera-logo.png'
import { Button, Link } from '@/components/ui'
import { LineBreak, ProcessSteps, Section } from '@/components/widget'

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
      <Section>
        {({ titleId, titleClassName }) => (
          <Fragment>
            <h2
              className={twMerge(
                titleClassName,
                'mb-6 text-3xl sm:text-3xl md:text-3xl',
              )}
              id={titleId}
            >
              What we have built
            </h2>
            <ul className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
              {Array.from({ length: 3 }).map((_, idx) => (
                <li key={idx} className='rounded-md border border-gray-300 p-8'>
                  <div className='mb-5'>
                    <img src={ChimeraLogo} alt='chimera' className='max-h-10' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <p>
                      <span className='font-semibold text-indigo-500'>
                        Chimera
                      </span>{' '}
                      is a Lorem ipsum dolor sit, amet consectetur adipisicing
                      elit. Nesciunt temporibus vitae quaerat. Deleniti neque
                      quisquam est
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aut dolores unde repellat sit incidunt obcaecati ipsam,
                      molestias laudantium facere, placeat quia nostrum
                      laboriosam dignissimos fugiat quaerat asperiores ex nulla
                      hic!
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Fragment>
        )}
      </Section>
      <div className='col-full-width bg-gray-100'>
        <Section subtitle='process' title='Step by step from idea stage'>
          <div className='col-content'>
            <ProcessSteps className='mt-10' />
          </div>
        </Section>
      </div>
      <Section
        subtitle='techstack'
        title={
          <Fragment>
            Technologies and platforms <LineBreak /> we work with
          </Fragment>
        }
      >
        <p className='max-w-[45%]'>
          We employ cutting-edge tools and tech stack and ensure compatibility
          with various platforms. This versatility allows us to build software
          that seamlessly integrates into your existing systems.
        </p>
      </Section>
    </Fragment>
  )
}

export default WebDevelopment
