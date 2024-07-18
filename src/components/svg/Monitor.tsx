import { ComponentProps } from 'react'

export function Monitor(props: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      {...props}
    >
      <path
        d='M19.714 21H4.286A1.286 1.286 0 013 19.714V4.286C3 3.576 3.576 3 4.286 3h15.428C20.424 3 21 3.576 21 4.286v15.428A1.286 1.286 0 0119.714 21z'
        strokeWidth={2.07692}
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.77 12h2.492l1.87-4.154 3.738 8.308L15.739 12h2.492'
        strokeWidth={2.07692}
        strokeMiterlimit={10}
        strokeLinejoin='round'
      />
    </svg>
  )
}
