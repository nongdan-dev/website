import { ComponentProps } from 'react'

export function Check(props: ComponentProps<'svg'>) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M20 7L9.35355 17.6464C9.15829 17.8417 8.84171 17.8417 8.64645 17.6464L4 13'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  )
}
