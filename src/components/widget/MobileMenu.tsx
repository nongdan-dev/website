import { twMerge } from 'tailwind-merge'

export type MobileMenuProps = {
  visible: boolean
}

export function MobileMenu({ visible }: MobileMenuProps) {
  return (
    <div
      aria-hidden={!visible}
      className={twMerge(
        'fixed inset-0 top-20 z-10 bg-white transition-all duration-200 lg:hidden',
        !visible ? 'translate-x-full' : 'translate-x-0',
      )}
    >
      hi
    </div>
  )
}
