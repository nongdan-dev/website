import { Dispatch, SetStateAction } from 'react'
import { twMerge } from 'tailwind-merge'

export type MobileMenuTriggerProps = {
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
}

export function MobileMenuTrigger({
  visible,
  setVisible,
}: MobileMenuTriggerProps) {
  return (
    <button
      className='px-5 py-3 pr-0 lg:hidden'
      aria-label='toggle mobile menu'
      aria-expanded={visible}
      onClick={() => setVisible(prev => !prev)}
    >
      <svg
        viewBox='0 0 100 100'
        width={40}
        className='fill-body'
        aria-hidden='true'
      >
        <rect
          width='80'
          height='8'
          x='10'
          y={!visible ? 26 : 46}
          rx='5'
          className={twMerge(
            'origin-center transition-all',
            visible && 'rotate-45',
          )}
        />
        <rect
          width='80'
          height='8'
          x='10'
          y='46'
          rx='5'
          className={twMerge(
            'origin-center transition-all',
            visible && 'opacity-0',
          )}
        />
        <rect
          width='80'
          height='8'
          x='10'
          y={!visible ? 66 : 46}
          rx='5'
          rotate={45}
          className={twMerge(
            'origin-center transition-all',
            visible && '-rotate-45',
          )}
        />
      </svg>
    </button>
  )
}
