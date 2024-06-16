import { BiSolidPhoneCall } from 'react-icons/bi'
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
  FaSlack,
  FaTwitter,
} from 'react-icons/fa6'
import { GrMail } from 'react-icons/gr'

import { Link } from '@/components'

function Footer() {
  return (
    <footer className='grid-container mt-20'>
      <div className='col-content'>
        <div className='flex gap-16'>
          <address className='flex w-1/3 flex-col gap-y-1.5 not-italic'>
            <div className='flex items-center gap-3'>
              <BiSolidPhoneCall
                aria-hidden='true'
                className='h-4 w-4 flex-shrink-0 text-body/80'
              />
              <a
                href={`tel:+84000000000`}
                aria-label={`call us at +84000000000`}
              >
                (+84) 000 000 000
              </a>
            </div>
            <div className='flex items-center gap-3'>
              <GrMail
                aria-hidden='true'
                className='h-4 w-4 flex-shrink-0 text-body/80'
              />
              <a
                href={`mailto:nongdan.dev@gmail.com`}
                aria-label={`email us at nongdan.dev@gmail.com`}
              >
                nongdan.dev@gmail.com
              </a>
            </div>
            <div className='flex gap-3'>
              <FaLocationDot
                aria-hidden='true'
                className='h-4 w-4 flex-shrink-0 translate-y-1 text-body/80'
              />
              <a
                className='text-balance'
                href={`https://maps.google.com/?q=vietnam`}
                target='_blank'
                aria-label={`visit us at vietnam`}
              >
                T12-05 Manhattan, Vinhomes Grand Park, Nguyen Xien street, Long
                Thanh My Ward, Thu Duc city, HCMC, Viet Nam
              </a>
            </div>
          </address>
          <div className='grid w-2/3 grid-cols-3 gap-16'>
            <nav aria-label='About us'>
              <span aria-hidden='true' className='font-semibold'>
                About us
              </span>
              <ul className='mt-3'>
                <li>
                  <Link to='/' className='inline-block py-1'>
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link to='/' className='inline-block py-1'>
                    Our Clients
                  </Link>
                </li>
                <li>
                  <Link to='/' className='inline-block py-1'>
                    Events
                  </Link>
                </li>
                <li>
                  <Link to='/' className='inline-block py-1'>
                    Goals
                  </Link>
                </li>
              </ul>
            </nav>
            <nav aria-label='Services'>
              <span aria-hidden='true' className='font-semibold'>
                Services
              </span>
              <ul className='mt-3'>
                <li>
                  <Link to='/' className='inline-block py-1'>
                    Consulting and Research
                  </Link>
                </li>
                <li>
                  <Link to='/' className='inline-block py-1'>
                    Product Design and Prototype
                  </Link>
                </li>
                <li>
                  <Link to='/' className='inline-block py-1'>
                    Minimal Product Development
                  </Link>
                </li>
                <li>
                  <Link to='/' className='inline-block py-1'>
                    Offshore Center
                  </Link>
                </li>
              </ul>
            </nav>
            <div>
              <p className='font-semibold'>Follow us</p>
              <ul className='mt-4 flex flex-row gap-4 text-lg'>
                <li>
                  <a href='http://google.com'>
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href='http://google.com'>
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href='http://google.com'>
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href='http://google.com'>
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a href='http://google.com'>
                    <FaSlack />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr aria-hidden='true' className='mt-10 border-b border-gray-200' />
        <p className='py-4 text-sm text-gray-400'>
          nongdan.dev, LLC © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
