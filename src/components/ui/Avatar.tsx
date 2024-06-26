import { update } from 'jdenticon'
import { ComponentProps, useEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge'

type Size = 'small' | 'medium' | 'large'

export type AvatarProps = ComponentProps<'div'> & {
  name: string
  size?: Size
  url?: string
}

const sizeClasses: Record<Size, string> = {
  small: 'w-5 h-5',
  medium: 'w-10 h-10',
  large: 'w-20 h-20',
}

export function Avatar({
  name,
  url,
  size = 'medium',
  className,
  ...props
}: AvatarProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const ariaLabel = `${name}'s avatar profile`

  useEffect(() => {
    if (svgRef.current) {
      update(svgRef.current, name)
    }
  }, [name])

  return (
    <div
      {...props}
      className={twMerge(
        'inline-block h-10 w-10 overflow-clip rounded-full border border-gray-100 bg-white',
        sizeClasses[size],
        className,
      )}
    >
      {url ? (
        <img alt={ariaLabel} src={url} className='h-full w-full object-cover' />
      ) : (
        <svg
          ref={svgRef}
          aria-label={ariaLabel}
          data-jdenticon-value={name}
          className='scale-[0.8]'
        />
      )}
    </div>
  )
}
