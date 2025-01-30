import BgPattern1 from '@/assets/images/bg-pattern-1.png'
import BgPattern2 from '@/assets/images/bg-pattern-2.png'
import EngineeringImg from '@/assets/images/engineering.png'
import { Code, Diamond, Flow, Monitor } from '@/components/svg'
import { LineBreak } from '@/components/ui'
import { Section } from '@/components/widget'

function Engineering() {
  return (
    <Section subtitle='engineering' title="It's the details that count">
      <div className='flex justify-between'>
        <div className='max-w-3xl'>
          <div className='flex flex-col gap-y-3'>
            <p>
              Ensuring innovation products has enough capacity to “disrupt” the
              industry through emerging technology was our mission (and vision)
              since day one.
            </p>
            <p>
              Our approach to technologies and people is tailored to each
              product. You will always work with team of experts who understand
              your end goal and support you all the way to the finish line, no
              matter where it is in the product lifecycle.
            </p>
            <p>
              All of that establishes a strong partnership which results in
              world-class quality products on top of a solid technology
              foundation.
            </p>
          </div>
          <ul className='mt-12 grid grid-cols-2 gap-6 pr-20'>
            <li className='relative flex flex-col justify-between overflow-clip rounded-md bg-gray-200 px-8 py-10'>
              <div
                className='absolute inset-0 bg-cover'
                style={{ backgroundImage: `url(${BgPattern1})` }}
              />
              <div className='relative'>
                <Diamond className='mb-8 text-3xl text-gray-500/90' />
                <h3 className='text-balance text-xl font-semibold tracking-[0.2px]'>
                  Pride in well-
                  <LineBreak /> crafted products
                </h3>
              </div>
            </li>
            <li className='relative flex flex-col justify-between overflow-clip rounded-md bg-gray-200 px-8 py-10'>
              <div
                className='absolute inset-0 bg-cover'
                style={{ backgroundImage: `url(${BgPattern2})` }}
              />
              <div className='relative'>
                <Code className='mb-8 text-3xl text-gray-500' />
                <h3 className='text-balance text-xl font-semibold tracking-[0.2px]'>
                  Cultivating <LineBreak /> engineering culture
                </h3>
              </div>
            </li>
            <li className='relative flex flex-col justify-between overflow-clip rounded-md bg-gray-200 px-8 py-10'>
              <div
                className='absolute inset-0 rotate-180 scale-110 bg-cover'
                style={{ backgroundImage: `url(${BgPattern1})` }}
              />
              <div className='relative'>
                <Flow className='mb-8 text-3xl text-gray-500' />
                <h3 className='text-balance text-xl font-semibold tracking-[0.2px]'>
                  Embracing the <LineBreak /> Agile Manifesto
                </h3>
              </div>
            </li>
            <li className='relative flex flex-col justify-between overflow-clip rounded-md bg-gray-200 px-8 py-10'>
              <div
                className='absolute inset-0 rotate-180 bg-cover'
                style={{ backgroundImage: `url(${BgPattern2})` }}
              />
              <div className='relative'>
                <Monitor className='mb-8 text-3xl text-gray-500/90' />
                <h3 className='text-balance text-xl font-semibold tracking-[0.2px]'>
                  Technical decision based on real value
                </h3>
              </div>
            </li>
          </ul>
        </div>
        <div aria-hidden className='self-end'>
          <img src={EngineeringImg} alt='' />
        </div>
      </div>
    </Section>
  )
}

export default Engineering
