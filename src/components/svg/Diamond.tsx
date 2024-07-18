import { ComponentProps } from 'react'

export function Diamond(props: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 26 24'
      fill='none'
      stroke='currentColor'
      {...props}
    >
      <g
        clipPath='url(#clip0_144_2)'
        strokeWidth={2.34667}
        strokeMiterlimit={10}
        strokeLinejoin='round'
      >
        <path
          d='M4.934 2.467h16.133L24 8.333l-11 13.2L2 8.332l2.934-5.865z'
          strokeLinecap='round'
        />
        <path d='M7.527 8.332H18.48' />
      </g>
      <defs>
        <clipPath id='clip0_144_2'>
          <path fill='#fff' transform='translate(.5)' d='M0 0H25V24H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}
