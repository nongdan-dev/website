import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function LineBreak(props: ComponentProps<'br'>) {
  return (
    <br
      {...props}
      aria-hidden='true'
      className={twMerge('hidden xl:inline', props.className)}
    />
  )
}
