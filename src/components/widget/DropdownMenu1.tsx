import * as Popover from '@radix-ui/react-popover'
import { RefObject } from 'react'
import { twMerge } from 'tailwind-merge'

import { ChevronDown } from '../icons'

export type DropdownMenuProps = Popover.PopoverProps
export type TriggerProps = Popover.PopoverTriggerProps
type ContentProps = Popover.PopoverContentProps & {
  containerRef?: RefObject<HTMLElement | null>
}

export function DropdownMenu(props: DropdownMenuProps) {
  return <Popover.Root {...props} />
}

function Trigger({ children, ...props }: TriggerProps) {
  return (
    <Popover.Trigger asChild {...props}>
      <button className='group flex h-full items-center gap-1 transition-colors hover:text-indigo-500 focus-visible:text-indigo-500 data-[state=open]:text-indigo-500'>
        <span>{children}</span>
        <ChevronDown className='text-lg transition-transform group-data-[state=open]:-rotate-180' />
      </button>
    </Popover.Trigger>
  )
}

function Content({
  containerRef,
  className,
  children,
  ...props
}: ContentProps) {
  return (
    <Popover.Portal container={containerRef?.current}>
      <Popover.Content
        sideOffset={16}
        className={twMerge(
          'z-10 grid grid-cols-2 gap-20 rounded-b-lg bg-white/95 px-10 py-8 shadow-sm shadow-black/10 backdrop-blur-md data-[state=open]:animate-slideUpAndFade',
          className,
        )}
        {...props}
      >
        {children}
      </Popover.Content>
    </Popover.Portal>
  )
}

DropdownMenu.Trigger = Trigger
DropdownMenu.Content = Content
