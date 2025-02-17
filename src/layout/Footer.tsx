import Flag from '@/assets/svg/flag.svg'
import Logo from '@/assets/svg/logo.svg'
import { Link } from '@/components/ui'
import { companyInfo } from '@/config/metadata'

function Footer() {
  return (
    <footer className='content-grid bor border-t border-gray-200 pt-20 text-lg'>
      <div className='col-content'>
        <div className='flex flex-row gap-16'>
          <address className='flex w-1/3 flex-col gap-y-2 not-italic'>
            <div aria-label='website logo' className='mb-4'>
              <img src={Logo} alt='' className='h-6' />
            </div>
            <a
              className='flex items-center gap-1.5'
              href={`tel:${companyInfo.phone}`}
              aria-label={`call us at ${companyInfo.phone}`}
            >
              <img src={Flag} alt='' className='h-5 rounded-sm' />
              {companyInfo.phone}
            </a>
            <a
              className='text-balance'
              href={`https://maps.google.com/?q=vietnam`}
              target='_blank'
              aria-label={`visit us at ${companyInfo.location.address}`}
            >
              {companyInfo.location.address}
            </a>
          </address>
          <div className='grid w-2/3 grid-cols-3 gap-16'>
            <nav aria-label='Development'>
              <span aria-hidden className='font-bold'>
                Development
              </span>
              <ul className='mt-3'>
                <li>
                  <Link
                    to='/development/web-development'
                    className='inline-block py-1'
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    to='/development/mobile-development'
                    className='inline-block py-1'
                  >
                    Mobile Development
                  </Link>
                </li>
                <li>
                  <Link to='/coming-soon' className='inline-block py-1'>
                    Tooling Development
                  </Link>
                </li>
                <li>
                  <Link to='/coming-soon' className='inline-block py-1'>
                    API Integration
                  </Link>
                </li>
              </ul>
            </nav>
            <nav aria-label='Design'>
              <span aria-hidden className='font-bold'>
                Design
              </span>
              <ul className='mt-3'>
                <li>
                  <Link to='/coming-soon' className='inline-block py-1'>
                    User Interface
                  </Link>
                </li>
                <li>
                  <Link to='/coming-soon' className='inline-block py-1'>
                    User Experience
                  </Link>
                </li>
              </ul>
            </nav>
            <nav aria-label='Other'>
              <span aria-hidden className='font-bold'>
                Other
              </span>
              <ul className='mt-3'>
                <li>
                  <Link to='/about-us' className='inline-block py-1'>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to='/our-work' className='inline-block py-1'>
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link to='/contact-us' className='inline-block py-1'>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <hr aria-hidden className='mt-10 border-b border-gray-100' />
        <p className='py-4 text-gray-400'>
          nongdan.dev, LLC © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
