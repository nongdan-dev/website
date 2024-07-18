import { ComponentProps } from 'react'

export function Code(props: ComponentProps<'svg'>) {
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
        d='M5.938 8.25l-4 4 4 4m12-8l4 4-4 4m-8 4l4-16'
        strokeWidth={1.77778}
        strokeMiterlimit={10}
        strokeLinecap='square'
      />
    </svg>
  )
}
