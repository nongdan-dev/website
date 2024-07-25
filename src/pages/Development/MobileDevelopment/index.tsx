import { Fragment } from 'react/jsx-runtime'
import { twMerge } from 'tailwind-merge'

import ChimeraLogo from '@/assets/chimera-logo.png'
import { Button, Link } from '@/components/ui'
import { BuildWithUs, ProcessSteps, Section } from '@/components/widget'

function MobileDevelopment() {
  return (
    <Fragment>
      <Section subtitle='mobile development' className='pb-0'>
        {({ titleId, titleClassName }) => (
          <Fragment>
            <h1 className={twMerge(titleClassName, 'mb-6')} id={titleId}>
              Build and scale your mobile apps
            </h1>
            <p className='lg:w-[40%]'>
              Our expertise includes top mobile development service which is
              well-designed, practical and cross-platform, bringing seamless
              mobile apps experiences for digital users on any device.
            </p>
            <Button asChild className='mt-8'>
              <Link to='/contact' useDefaultStyle>
                Let's build
              </Link>
            </Button>
          </Fragment>
        )}
      </Section>
      <Section className='pb-0 pt-24'>
        {({ titleId, titleClassName }) => (
          <Fragment>
            <h2
              className={twMerge(
                titleClassName,
                'mb-8 text-3xl sm:text-3xl md:text-3xl',
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
      <Section className='py-24'>
        {({ titleId, titleClassName }) => (
          <Fragment>
            <h2
              className={twMerge(
                titleClassName,
                'mb-8 text-3xl sm:text-3xl md:text-3xl',
              )}
              id={titleId}
            >
              Step by step from idea stage
            </h2>
            <ProcessSteps className='mt-0' />
          </Fragment>
        )}
      </Section>

      <BuildWithUs />
    </Fragment>
  )
}

export default MobileDevelopment
