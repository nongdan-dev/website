import { ComponentProps } from 'react'

export function Star(props: ComponentProps<'svg'>) {
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
      <g clipPath='url(#clip0_515_39)'>
        <path
          d='M5.72491 5.49048L7.4566 2.00234C7.67886 1.55456 8.32113 1.55456 8.5434 2.00234L10.2751 5.49048L14.1477 6.05328C14.6445 6.12549 14.8425 6.73277 14.4829 7.0811L11.6811 9.79437L12.3423 13.6274C12.4273 14.1197 11.9076 14.495 11.463 14.2626L8 12.4518L4.53698 14.2626C4.0924 14.495 3.57272 14.1197 3.65763 13.6274L4.31883 9.79437L1.51716 7.0811C1.15744 6.73277 1.35548 6.12549 1.85234 6.05328L5.72491 5.49048Z'
          fill='currentColor'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_515_39'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
