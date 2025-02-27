import Flag from '@/assets/svg/flag.svg'
import Logo from '@/assets/svg/logo.svg'
import { Facebook, Github, LinkedIn, Slack, Twitter } from '@/components/icons'
import { Link } from '@/components/ui'
import { companyInfo } from '@/config/metadata'

function Footer() {
  return (
    <footer
      id='footer'
      className='content-grid border-t border-gray-200 pt-20 text-lg'
    >
      <div className='col-content'>
        <div className='flex flex-row flex-wrap gap-8 lg:flex-nowrap lg:gap-16'>
          <address className='w-full flex-shrink-0 border-b border-gray-200 pb-8 not-italic lg:w-[22rem] lg:border-none lg:pb-0 xl:w-[30rem]'>
            <img src={Logo} alt='website logo' className='mb-5 h-6' />
            <div className='flex flex-col gap-1.5'>
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
            </div>
            <ul aria-label='socials' className='mt-4 flex gap-3'>
              <li aria-label='facebook'>
                <a href={companyInfo.social.facebook} target='_blank'>
                  <Facebook className='text-lg text-gray-400' />
                </a>
              </li>
              <li aria-label='linked in'>
                <a href={companyInfo.social.linkedin} target='_blank'>
                  <LinkedIn className='text-lg text-gray-400' />
                </a>
              </li>
              <li aria-label='twitter'>
                <a href={companyInfo.social.twitter} target='_blank'>
                  <Twitter className='text-lg text-gray-400' />
                </a>
              </li>
              <li aria-label='github'>
                <a href={companyInfo.social.github} target='_blank'>
                  <Github className='text-lg text-gray-400' />
                </a>
              </li>
              <li aria-label='slack'>
                <a href={companyInfo.social.slack} target='_blank'>
                  <Slack className='text-lg text-gray-400' />
                </a>
              </li>
            </ul>
          </address>
          <div className='grid w-full grid-cols-2 gap-16 md:grid-cols-3'>
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
                  <span className='inline-block cursor-default py-1 text-gray-400'>
                    Tooling Development
                  </span>
                </li>
                <li>
                  <span className='inline-block cursor-default py-1 text-gray-400'>
                    API Integration
                  </span>
                </li>
              </ul>
            </nav>
            <nav aria-label='Design'>
              <span aria-hidden className='font-bold'>
                Design
              </span>
              <ul className='mt-3'>
                <li>
                  <span className='inline-block cursor-default py-1 text-gray-400'>
                    User Interface
                  </span>
                </li>
                <li>
                  <span className='inline-block cursor-default py-1 text-gray-400'>
                    User Experience
                  </span>
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
