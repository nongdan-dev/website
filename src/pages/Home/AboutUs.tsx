import { Fragment } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import BlobImg from '@/assets/images/blob.png'
import ExperienceImg from '@/assets/images/experience.png'
import SectorsImg from '@/assets/images/sectors.png'
import AppleLogo from '@/assets/svg/apple.svg'
import Chart1 from '@/assets/svg/chart-1.svg'
import Chart2 from '@/assets/svg/chart-2.svg'
import ChromeLogo from '@/assets/svg/chrome.svg'
import FigmaLogo from '@/assets/svg/figma.svg'
import GooglePlayLogo from '@/assets/svg/google-play.svg'
import { LineBreak, Section } from '@/components/widget'

function AboutUs() {
  return (
    <Section
      subtitle='About us'
      title={
        <Fragment>
          Nothing is impossible, <LineBreak /> when we come together
        </Fragment>
      }
    >
      <div className='flex max-w-3xl flex-col gap-y-3'>
        <p>
          Nongdan.dev is a startup based in Ho Chi Minh City, Vietnam,
          specializing in providing software development, maintenance, and
          upgrade services for businesses and individuals.
        </p>
        <p>
          We are committed to delivering optimal technology solutions, helping
          our clients enhance work efficiency, increase competitiveness, and
          easily adapt to the fast-paced changes in the market.
        </p>
      </div>
      <div className='mt-12 grid grid-cols-12 grid-rows-4 gap-6'>
        <div
          className='col-span-4 row-span-full h-[39rem] overflow-clip rounded-xl border border-gray-300 pl-8 pt-8'
          style={{
            background:
              'linear-gradient(180deg, #5B9AFF -11.62%, #1F55F1 125.4%)',
          }}
        >
          <div className='mb-8 flex flex-col gap-1 text-white'>
            <p className='text-[5rem] font-extrabold leading-none'>12+</p>
            <p className='text-lg font-medium uppercase'>years of experience</p>
          </div>
          <img alt='' src={ExperienceImg} className='w-full' />
        </div>
        <div className='relative col-span-4 row-span-2 h-[18.75rem] content-end overflow-clip rounded-xl border border-gray-300 p-6'>
          <img
            src={BlobImg}
            alt=''
            className='pointer-events-none absolute left-0 top-0'
          />
          <div
            aria-hidden
            className='pointer-events-none absolute inset-x-0 top-0 flex justify-between p-6'
          >
            <div className='flex h-[3.75rem] w-[3.75rem] place-content-center rounded-xl bg-white'>
              <img src={FigmaLogo} alt='' className='w-6' />
            </div>
            <div className='flex w-44 flex-wrap gap-4'>
              <div className='flex h-20 w-20 place-content-center rounded-xl bg-white'>
                <img src={ChromeLogo} alt='' className='w-12' />
              </div>
              <div className='flex h-20 w-20 place-content-center rounded-xl bg-white'>
                <img src={GooglePlayLogo} alt='' className='w-10' />
              </div>
              <div className='flex h-20 w-20 place-content-center rounded-xl bg-transparent'></div>
              <div className='flex h-20 w-20 place-content-center rounded-xl bg-white'>
                <img src={AppleLogo} alt='' className='w-10' />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-5xl font-extrabold leading-none'>400+</p>
            <p className='text-lg font-medium uppercase'>projects</p>
          </div>
        </div>
        <div
          className='col-span-4 row-span-2 h-[18.75rem] justify-items-end rounded-xl border border-gray-300 !bg-cover !bg-center !bg-no-repeat p-6'
          style={{ background: `url("${SectorsImg}")` }}
        >
          <div className='flex flex-col gap-1 rounded-xl bg-white px-6 py-4 text-center shadow-lg'>
            <p className='text-5xl font-extrabold leading-none'>8</p>
            <p className='text-lg font-medium uppercase'>sectors</p>
          </div>
        </div>
        <div className='col-span-5 flex h-[8.625rem] items-center justify-between rounded-xl border border-gray-300 p-6'>
          <img alt='' src={Chart1} className='w-56' />
          <div className='flex flex-col gap-1 text-right'>
            <p className='text-5xl font-extrabold leading-none'>90+</p>
            <p className='text-lg font-medium uppercase'>active clients</p>
          </div>
        </div>
        <div className='col-span-5 flex h-[8.625rem] items-center justify-between rounded-xl border border-gray-300 p-6'>
          <div className='flex flex-col gap-1'>
            <p className='text-5xl font-extrabold leading-none'>80%</p>
            <p className='text-lg font-medium uppercase'>repeat clients</p>
          </div>
          <img alt='' src={Chart2} className='w-60' />
        </div>
        <div className='col-[10/-1] row-[3/-1] h-[18.75rem] content-center rounded-xl border border-gray-300 p-6 text-center'>
          <div className='inline-flex flex-col gap-0.5'>
            <p className='text-left text-xl'>Learn more</p>
            <Link
              to='/about-us'
              className='flex items-center gap-3 text-primary-500 hover:underline'
            >
              <span className='text-[1.75rem] font-semibold'>About us</span>
              <FaArrowRightLong aria-hidden className='text-xl' />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default AboutUs
