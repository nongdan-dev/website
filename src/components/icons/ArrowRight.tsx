import { ComponentProps } from 'react'

export function ArrowRight(props: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 16 16'
      fill='none'
      aria-hidden
      {...props}
    >
      <path
        d='M2 8.00016H14M14 8.00016L8.33333 2.3335M14 8.00016L8.33333 13.6668'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
