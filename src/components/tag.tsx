import { slug } from 'github-slugger'
import Link from 'next/link'

import { Badge } from './ui/badge'

interface TagProps {
  tag: string
  current?: boolean
  count?: number
  className?: string
}

export function Tag({ tag, current, count, className = '' }: TagProps) {
  return (
    <Link href={`/tags/${slug(tag)}`} className='no-underline'>
      <Badge
        variant={current ? 'default' : 'secondary'}
        className={`rounded-xl py-1 text-[14px] font-medium ${className}`}
      >
        {tag} {count ? `(${count})` : null}
      </Badge>
    </Link>
  )
}
