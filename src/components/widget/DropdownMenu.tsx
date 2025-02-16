import * as Popover from '@radix-ui/react-popover'
import { RefObject } from 'react'
import { twMerge } from 'tailwind-merge'

export type DropdownMenuProps = Popover.PopoverProps
export type TriggerProps = Popover.PopoverTriggerProps
export type ContentProps = Popover.PopoverContentProps & {
  containerRef?: RefObject<HTMLElement>
}

export function DropdownMenu(props: DropdownMenuProps) {
  return <Popover.Root {...props} />
}

export function Trigger({ children, ...props }: TriggerProps) {
  return (
    <Popover.Trigger asChild {...props}>
      <button className='group flex h-full items-center gap-1.5 px-5 transition-colors hover:text-indigo-500 focus-visible:text-indigo-500 data-[state=open]:text-indigo-500'>
        <span>{children}</span>
        <span className='transition-transform group-data-[state=open]:-rotate-180'>
          v
        </span>
      </button>
    </Popover.Trigger>
  )
}

export function Content({
  containerRef,
  className,
  children,
  ...props
}: ContentProps) {
  return (
    <Popover.Portal container={containerRef?.current}>
      <Popover.Content
        sideOffset={20}
        className={twMerge(
          'z-10 grid grid-cols-2 gap-20 rounded-b-lg bg-white px-10 py-8 shadow-sm data-[state=open]:animate-slideUpAndFade',
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
