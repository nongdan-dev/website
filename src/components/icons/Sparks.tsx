import { ComponentProps } from 'react'

export function Sparks(props: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 16 16'
      fill='none'
      {...props}
    >
      <g clipPath='url(#clip0_473_182)'>
        <path
          d='M5.33331 9.99992C8.58311 9.99992 9.99998 8.63259 9.99998 5.33325C9.99998 8.63259 11.4069 9.99992 14.6666 9.99992C11.4069 9.99992 9.99998 11.4069 9.99998 14.6666C9.99998 11.4069 8.58311 9.99992 5.33331 9.99992Z'
          fill='currentColor'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinejoin='round'
        />
        <path
          d='M1.33331 4.33325C3.42249 4.33325 4.33331 3.45427 4.33331 1.33325C4.33331 3.45427 5.23777 4.33325 7.33331 4.33325C5.23777 4.33325 4.33331 5.23771 4.33331 7.33325C4.33331 5.23771 3.42249 4.33325 1.33331 4.33325Z'
          fill='currentColor'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_473_182'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
