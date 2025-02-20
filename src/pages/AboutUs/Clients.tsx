import AboutUs from '@/assets/images/png/about-us-1.png'
import AboutUs2 from '@/assets/images/png/about-us-2.png'
import Vector from '@/assets/images/png/bg-vector.png'
import Apple from '@/assets/svg/apple.svg'
import BarChart from '@/assets/svg/bar-chart.svg'
import Figma from '@/assets/svg/figma.svg'
import Chrome from '@/assets/svg/google-chrome.svg'
import ChPlay from '@/assets/svg/google-play.svg'
import WaveChart from '@/assets/svg/wave-chart.svg'
import { ArrowRight } from '@/components/icons'
import { Link } from '@/components/ui'
import { Section } from '@/components/widget'

function Clients() {
  return (
    <Section id='our-company'>
      <Section.Title>
        Nothing is impossible, when we come together
      </Section.Title>
      <p className='mt-4 w-[38rem] text-base font-normal'>
        Our team is a startup based in Ho Chi Minh City, Vietnam, specializing
        in providing software development, maintenance and upgrade services for
        businesses and individuals.
      </p>
      <Section.Content id='grid-layout'>
        {/* section1 */}
        <div className='flex flex-1 flex-col rounded-xl bg-gradient-to-b from-primary-400 to-primary-600 pl-8 pt-8 shadow-xl'>
          <p className='text-7xl font-bold leading-none text-white'>12+</p>
          <p className='mb-8 mt-1 text-lg uppercase tracking-wider text-white'>
            Years of experience
          </p>
          <div className='bottom-0 right-0 flex flex-1 items-end justify-end'>
            <img src={AboutUs} alt='' className='h-full' />
          </div>
        </div>
        {/* section2 */}
        <div className='relative h-full overflow-hidden rounded-xl bg-white p-6 shadow-sm'>
          <div className='clip-wave absolute inset-0 rounded-xl'>
            <img src={Vector} alt='' className='bottom-0 right-0' />
          </div>

          <div className='relative z-10 flex h-full flex-1 flex-col justify-between gap-6'>
            <div className='flex items-center gap-4'>
              <div className='flex items-center justify-center rounded-xl bg-white px-3 py-2'>
                <img src={Figma} alt='' className='h-9 w-6' />
              </div>
            </div>
            <div>
              <p className='mb-1 text-5xl font-bold leading-none text-gray-900'>
                400+
              </p>
              <p className='text-lg uppercase tracking-wider text-gray-900'>
                Projects
              </p>
            </div>
          </div>

          <div className='absolute right-6 top-6 flex flex-col items-end gap-4'>
            <div className='flex flex-row gap-4'>
              <div className='flex items-center justify-center rounded-xl bg-white p-3'>
                <img src={Chrome} alt='' className='h-12 w-12' />
              </div>
              <div className='flex items-center justify-center rounded-xl bg-white p-3'>
                <img src={ChPlay} alt='' className='h-12 w-12' />
              </div>
            </div>
            <div className='flex items-center justify-center rounded-xl bg-white p-3'>
              <img src={Apple} alt='' className='h-12 w-12' />
            </div>
          </div>
        </div>
        {/* section3 */}
        <div className='relative flex w-full flex-1 rounded-xl bg-slate-100'>
          <img src={AboutUs2} alt='' className='w-full rounded-xl shadow-sm' />

          <div className='absolute right-4 top-4 rounded-xl bg-white px-6 py-3 shadow-md'>
            <p className='text-center text-6xl font-bold leading-none text-gray-900'>
              8
            </p>
            <p className='text-center text-lg font-semibold uppercase text-gray-900'>
              SECTORS
            </p>
          </div>
        </div>
        {/* section4 */}
        <div className='flex flex-row justify-between rounded-xl border border-gray-200 p-6 shadow-sm'>
          <div className='flex items-center justify-center rounded-xl bg-white p-3'>
            <img src={BarChart} alt='' />
          </div>
          <div className='flex flex-col items-end justify-center'>
            <p className='mb-1 text-5xl font-bold leading-none text-gray-900'>
              90+
            </p>
            <p className='text-lg uppercase tracking-wider text-gray-900'>
              Active Clients
            </p>
          </div>
        </div>
        <div className='flex flex-row justify-between rounded-xl border border-gray-200 p-6 shadow-sm'>
          <div className='flex flex-col items-start justify-center'>
            <p className='mb-1 text-5xl font-bold leading-none text-gray-900'>
              80%
            </p>
            <p className='text-lg uppercase tracking-wider text-gray-900'>
              Repeat clients
            </p>
          </div>
          <div className='flex items-center justify-center rounded-xl bg-white p-3'>
            <img src={WaveChart} alt='' />
          </div>
        </div>
        {/* section6 */}
        <div className='flex cursor-pointer flex-col items-center justify-center bg-white text-center text-lg shadow-sm'>
          <div className='flex flex-col items-start'>
            <p className='text-xl'>Are you ready to</p>
            <Link to='/our-work' className='flex flex-row items-center gap-x-3'>
              <p className='text-3xl'>Build with us</p>
              <ArrowRight className='text-3xl' />
            </Link>
          </div>
        </div>
      </Section.Content>
    </Section>
  )
}

export default Clients
