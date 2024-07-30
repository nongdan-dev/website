import { ComponentProps } from 'react'

export function Html(props: ComponentProps<'svg'>) {
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
        d='M14.0214 90.034L6 0H94.1867L86.1653 89.9854L50.0204 100'
        fill='#E44D26'
      />
      <path d='M50.0928 92.344V7.39014H86.1404L79.2615 84.201' fill='#F16529' />
      <path
        d='M22.3828 18.4009H50.0931V29.4364H34.4878L35.5087 40.7392H50.0931V51.7504H25.3969L22.3828 18.4009ZM25.8831 57.2925H36.9672L37.745 66.116L50.0931 69.4218V80.9434L27.4387 74.6235'
        fill='#EBEBEB'
      />
      <path
        d='M77.7056 18.4009H50.0439V29.4364H76.6847L77.7056 18.4009ZM75.6881 40.7392H50.0439V51.7747H63.656L62.3677 66.116L50.0439 69.4218V80.8948L72.6497 74.6235'
        fill='white'
      />
    </svg>
  )
}
