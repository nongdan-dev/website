import { Fragment } from 'react'

import BeingsLogo from '@/assets/images/beings-logo.png'
import BrekekeLogo from '@/assets/images/brekeke-logo.png'
import brekekeThumbnail from '@/assets/images/brekeke-thumbnail.png'
import ChimeraLogo from '@/assets/images/chimera-logo.png'
import { Button } from '@/components/ui'
import { BuildWithUs, LineBreak, Section } from '@/components/widget'

function OurWorkPage() {
  return (
    <Fragment>
      <Section
        subtitle='our work'
        title={
          <Fragment>
            Successful outcomes <LineBreak /> we are proud to be a part of
          </Fragment>
        }
      >
        <div className='mt-20'>
          <div className='grid gap-10 lg:grid-cols-[31.25rem,1fr]'>
            <div className='flex justify-center bg-blue-200'>
              <img
                src='https://placehold.co/500x300'
                className='max-h-[18.75rem] self-center'
                alt='app screenshot'
              />
            </div>
            <div className='order-1'>
              <div className='mb-5'>
                <img src={BeingsLogo} alt='beings' className='max-h-10' />
              </div>
              <div className='flex flex-col gap-2'>
                <p>
                  <span className='font-semibold text-indigo-500'>Beings</span>{' '}
                  is a Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati repellendus, vitae, ea numquam animi saepe ducimus
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  deserunt! Iure dolore, beatae asperiores illum nulla iusto
                  autem, voluptatum facere voluptate a, ex vel eius consequatur
                  quasi. Numquam hic accusantium sunt! Vero impedit qui at
                  quibusdam illum dolore. Labore quia quas ratione animi ab
                  exercitationem molestiae non totam consequuntur beatae eius
                  quibusdam amet rem quis nisi sit debitis minima obcaecati
                  alias tempore, recusandae doloribus ipsam magnam? Similique
                  quas deserunt earum hic voluptatibus sunt voluptates illo
                  possimus ratione! Tempora quo delectus ad nesciunt quasi
                  quisquam inventore fugit porro, veniam aut aliquam error
                  voluptas sit earum corrupti, magni dolores provident fuga.
                  Saepe.
                </p>
              </div>
            </div>
          </div>
          <div className='mt-20 grid gap-10 lg:grid-cols-[1fr,31.25rem]'>
            <div className='flex justify-center overflow-clip rounded-md bg-[#74CADC]'>
              <img
                src={brekekeThumbnail}
                className='max-h-[18.75rem] self-center'
                alt='thumbnail of Brekeke software'
              />
            </div>
            <div className='lg:order-[-1]'>
              <div className='mb-5'>
                <img src={BrekekeLogo} alt='brekeke' className='max-h-10' />
              </div>
              <div className='flex flex-col gap-2'>
                <p>
                  <span className='font-semibold text-indigo-500'>
                    Brekeke Software, Inc.
                  </span>{' '}
                  is an industry-leading developer of SIP
                  <span className='italic'>
                    (Session Initiation Protocol)
                  </span>{' '}
                  software products for IP{' '}
                  <span className='italic'>(Internet Protocol)</span> network
                  communications.
                </p>
                <p>
                  Our products set such a high standard in quality and
                  reliability that they are deployed as mission-critical
                  communication platforms for healthcare systems, military and
                  emergency communication systems, mass-communication
                  environments{' '}
                  <span className='italic'>
                    (such as call centers and financial institutions)
                  </span>{' '}
                  and SIP telephony platforms for a large number of SIP
                  applications and SIP telephony networks.
                </p>
                <Button asChild className='mt-2 inline-block w-fit'>
                  <a href='https://brekeke.com/' target='_blank'>
                    Try now!
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className='my-16 h-px w-full bg-gray-200 md:my-20' />
          <ul className='grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3'>
            <li>
              <div className='mb-5'>
                <img src={ChimeraLogo} alt='chimera' className='max-h-10' />
              </div>
              <div className='flex flex-col gap-2'>
                <p>
                  <span className='font-semibold text-indigo-500'>Chimera</span>{' '}
                  is a Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nesciunt temporibus vitae quaerat. Deleniti neque quisquam est
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  deserunt! Iure dolore, beatae asperiores illum nulla iusto
                  autem, voluptatum facere voluptate a, ex vel eius consequatur
                  quasi. Numquam hic accusantium sunt! Vero impedit qui at
                  quibusdam illum dolore. Labore quia quas ratione animi ab
                  exercitationem molestiae non totam consequuntur beatae eius
                  quibusdam amet rem quis nisi sit debitis minima obcaecati
                </p>
              </div>
            </li>
            <li>
              <div className='mb-5'>
                <img src={ChimeraLogo} alt='chimera' className='max-h-10' />
              </div>
              <div className='flex flex-col gap-2'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati repellendus, vitae, ea numquam animi saepe ducimus
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  deserunt! Iure dolore, beatae asperiores illum nulla iusto
                  autem, voluptatum facere voluptate a, ex vel eius consequatur
                  quasi. Numquam hic accusantium sunt! Vero impedit qui at
                  quibusdam illum dolore. Labore quia quas ratione animi ab
                  exercitationem molestiae non totam consequuntur beatae eius
                  Saepe.
                </p>
              </div>
            </li>
            <li>
              <div className='mb-5'>
                <img src={ChimeraLogo} alt='chimera' className='max-h-10' />
              </div>
              <div className='flex flex-col gap-2'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati repellendus, vitae, ea numquam animi saepe ducimus
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  deserunt! Iure dolore, beatae asperiores illum nulla iusto
                  autem, voluptatum facere voluptate a, ex vel eius consequatur
                  quasi. Numquam hic accusantium sunt! Vero impedit qui at
                  quibusdam illum dolore. Labore quia quas ratione animi ab
                  exercitationem molestiae non totam consequuntur beatae eius
                  Saepe.
                </p>
              </div>
            </li>
            <li>
              <div className='mb-5'>
                <img src={ChimeraLogo} alt='chimera' className='max-h-10' />
              </div>
              <div className='flex flex-col gap-2'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati repellendus, vitae, ea numquam animi saepe ducimus
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  deserunt! Iure dolore, beatae asperiores illum nulla iusto
                  autem, voluptatum facere voluptate a, ex vel eius consequatur
                  quasi. Numquam hic accusantium sunt! Vero impedit qui at
                  quibusdam illum dolore. Labore quia quas ratione animi ab
                  exercitationem molestiae non totam consequuntur beatae eius
                  Saepe.
                </p>
              </div>
            </li>
            <li>
              <div className='mb-5'>
                <img src={ChimeraLogo} alt='chimera' className='max-h-10' />
              </div>
              <div className='flex flex-col gap-2'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati repellendus, vitae, ea numquam animi saepe ducimus
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  deserunt! Iure dolore, beatae asperiores illum nulla iusto
                  autem, voluptatum facere voluptate a, ex vel eius consequatur
                  quasi. Numquam hic accusantium sunt! Vero impedit qui at
                  quibusdam illum dolore. Labore quia quas ratione animi ab
                  exercitationem molestiae non totam consequuntur beatae eius
                  Saepe.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Section>
      <BuildWithUs />
    </Fragment>
  )
}

export default OurWorkPage
