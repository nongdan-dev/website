import { Link } from '@/components/ui'
import { companyInfo } from '@/config/metadata'

function Footer() {
  return (
    <footer className='content-grid mt-20'>
      <div className='col-content'>
        <div id='services' className='flex flex-col gap-16 lg:flex-row'>
          <address className='order-1 flex flex-col gap-y-1.5 not-italic lg:order-none lg:w-1/3'>
            <div aria-label='website logo' className='mb-4'>
              logo
            </div>
            <div className='flex items-center gap-3'>
              <a
                href={`tel:${companyInfo.phone}`}
                aria-label={`call us at ${companyInfo.phone}`}
              >
                {companyInfo.phone}
              </a>
            </div>
            <div className='flex gap-3'>
              <a
                className='text-balance'
                href={`https://maps.google.com/?q=vietnam`}
                target='_blank'
                aria-label={`visit us at ${companyInfo.location.address}`}
              >
                {companyInfo.location.address}
              </a>
            </div>
          </address>
          <div className='grid grid-cols-2 gap-16 lg:w-2/3 lg:grid-cols-3'>
            <nav aria-label='Development'>
              <span aria-hidden='true' className='font-bold'>
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
              <span aria-hidden='true' className='font-bold'>
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
              <span aria-hidden='true' className='font-bold'>
                Other
              </span>
              <ul className='mt-3'>
                <li>
                  <Link to='/work' className='inline-block py-1'>
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link to='/contact' className='inline-block py-1'>
                    Contact Us
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
