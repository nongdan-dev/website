import { FaArrowRightLong } from 'react-icons/fa6'

import BgPattern1 from '@/assets/bg-pattern-1.png'
import BgPattern2 from '@/assets/bg-pattern-2.png'
import { Code, Diamond, Flow, Monitor } from '@/components/svg'
import { Link } from '@/components/ui'
import { Section } from '@/components/widget'

function Engineering() {
  return (
    <Section subtitle='engineering' title="It's the details that count">
      <div className='flex max-w-3xl flex-col gap-y-4'>
        <p>
          Ensuring innovation products has enough capacity to “disrupt” the
          industry through emerging technology was our mission (and vision)
          since day one.
        </p>
        <p>
          Our approach to technologies and people is tailored to each product.
          You will always work with team of experts who understand your end goal
          and support you all the way to the finish line, no matter where it is
          in the product lifecycle.
        </p>
        <p>
          All of that establishes a strong partnership which results in
          world-class quality products on top of a solid technology foundation.
        </p>
      </div>
      <ul className='mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4'>
        <li className='relative flex flex-col justify-between overflow-clip rounded-md bg-gray-200 p-8'>
          <div
            className='absolute inset-0 bg-cover'
            style={{ backgroundImage: `url(${BgPattern1})` }}
          />
          <div className='relative'>
            <Diamond className='mb-8 text-3xl text-gray-500/90' />
            <h3 className='text-balance text-xl font-medium tracking-[0.2px]'>
              Pride in well-crafted products
            </h3>
          </div>
        </li>
        <li className='relative flex flex-col justify-between overflow-clip rounded-md bg-gray-200 p-8'>
          <div
            className='absolute inset-0 bg-cover'
            style={{ backgroundImage: `url(${BgPattern2})` }}
          />
          <div className='relative'>
            <Code className='mb-8 text-3xl text-gray-500' />
            <h3 className='text-balance text-xl font-medium tracking-[0.2px]'>
              Cultivating engineering culture
            </h3>
          </div>
        </li>
        <li className='relative flex flex-col justify-between overflow-clip rounded-md bg-gray-200 p-8'>
          <div
            className='absolute inset-0 rotate-180 scale-110 bg-cover'
            style={{ backgroundImage: `url(${BgPattern1})` }}
          />
          <div className='relative'>
            <Flow className='mb-8 text-3xl text-gray-500' />
            <h3 className='text-balance text-xl font-medium tracking-[0.2px]'>
              Embracing the Agile Manifesto
            </h3>
          </div>
        </li>
        <li className='relative flex flex-col justify-between overflow-clip rounded-md bg-gray-200 p-8'>
          <div
            className='absolute inset-0 rotate-180 bg-cover'
            style={{ backgroundImage: `url(${BgPattern2})` }}
          />
          <div className='relative'>
            <Monitor className='mb-8 text-3xl text-gray-500/90' />
            <h3 className='text-balance text-xl font-medium tracking-[0.2px]'>
              Technical decision based on real value
            </h3>
          </div>
        </li>
      </ul>
      <div className='mt-10'>
        <Link
          to='/'
          useDefaultStyle
          className='inline-flex items-center gap-2 font-semibold text-indigo-500'
        >
          Our Engineering definition <FaArrowRightLong />
        </Link>
      </div>
    </Section>
  )
}

export default Engineering
