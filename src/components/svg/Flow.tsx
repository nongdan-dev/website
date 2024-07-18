import { ComponentProps } from 'react'

export function Flow(props: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.352 18.92h6.327v-1.774h-4.263a9.21 9.21 0 01-2.064 1.774zm-5.102.218H.725v-1.773h9.525v1.774z'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.459 11.158A7.981 7.981 0 015.46 17.365h4.722v-.007a6.208 6.208 0 10-3.35-1.175H4.276a7.98 7.98 0 016.201-13.006 7.98 7.98 0 017.982 7.98z'
      />
      <path d='M23.725 18.131l-2.963 2.2v-4.399l2.963 2.2z' />
    </svg>
  )
}
