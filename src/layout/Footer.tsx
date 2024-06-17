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
        <div className='flex flex-col gap-16 lg:flex-row'>
          <address className='order-1 flex flex-col gap-y-1.5 not-italic lg:order-none lg:w-1/3'>
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
            <ul className='ml-7 mt-4 flex flex-row gap-4 text-lg text-gray-400'>
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
          </address>
          <div className='grid grid-cols-2 gap-16 lg:w-2/3 lg:grid-cols-3'>
            <nav aria-label='Services'>
              <span aria-hidden='true' className='font-semibold'>
                Services
              </span>
              <ul className='mt-3'>
                <li>
                  <Link to='/' className='inline-block py-1'>
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to='/' className='inline-block py-1'>
                    Mobile Development
                  </Link>
                </li>
                <li>
                  <Link to='/' className='inline-block py-1'>
                    Tooling Development
                  </Link>
                </li>
                <li>
                  <Link to='/' className='inline-block py-1'>
                    API Integration
                  </Link>
                </li>
                <li>
                  <Link to='/' className='inline-block py-1'>
                    Strategy & Architecture
                  </Link>
                </li>
                <li>
                  <Link to='/' className='inline-block py-1'>
                    Managed Services
                  </Link>
                </li>
              </ul>
            </nav>
            <nav aria-label='Design'>
              <span aria-hidden='true' className='font-semibold'>
                Design
              </span>
              <ul className='mt-3'>
                <li>
                  <Link to='/' className='inline-block py-1'>
                    User Research
                  </Link>
                </li>
                <li>
                  <Link to='/' className='inline-block py-1'>
                    User Interface
                  </Link>
                </li>
                <li>
                  <Link to='/' className='inline-block py-1'>
                    Experience Design
                  </Link>
                </li>
                <li>
                  <Link to='/' className='inline-block py-1'>
                    Digital Product Design
                  </Link>
                </li>
              </ul>
            </nav>
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
