import { ComponentProps } from 'react'

export function Orbits(props: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 16 16'
      fill='none'
      {...props}
    >
      <g opacity='1'>
        <circle
          cx='8'
          cy='8'
          r='7.99'
          stroke='currentColor'
          strokeWidth='0.015'
        />
        <circle
          cx='8.00008'
          cy='8.00008'
          r='4.06564'
          stroke='currentColor'
          strokeWidth='0.015'
        />
        <circle
          cx='7.99991'
          cy='7.99991'
          r='1.99222'
          stroke='currentColor'
          strokeWidth='0.015'
        />
        <circle
          cx='9.66406'
          cy='6.93237'
          r='0.174658'
          fill='currentColor'
          stroke='currentColor'
          strokeWidth='0.00663506'
        />
        <circle
          cx='0.231381'
          cy='9.81536'
          r='0.219152'
          fill='currentColor'
          stroke='currentColor'
          strokeWidth='0.00663506'
        />
        <circle
          cx='4.09344'
          cy='6.87884'
          r='0.30814'
          fill='currentColor'
          stroke='currentColor'
          strokeWidth='0.00663506'
        />
      </g>
    </svg>
  )
}
