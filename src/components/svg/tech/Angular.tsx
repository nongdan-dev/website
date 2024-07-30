import { ComponentProps } from 'react'

export function Angular(props: ComponentProps<'svg'>) {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 100 100'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M3 16.5746L49.5191 0L97.2909 16.2799L89.5559 77.8268L49.5191 100L10.1087 78.1215L3 16.5746Z'
        fill='#E23237'
      />
      <path
        d='M97.2909 16.2799L49.519 0V100L89.5558 77.8638L97.2909 16.2799Z'
        fill='#B52E31'
      />
      <path
        d='M49.5927 11.676L20.606 76.1695L31.4344 75.9854L37.2541 61.4364H63.2576L69.6297 76.1695L79.9794 76.3536L49.5927 11.676ZM49.6667 32.3391L59.4639 52.8176H41.0475L49.6667 32.3391Z'
        fill='white'
      />
    </svg>
  )
}
