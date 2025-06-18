import { slug } from 'github-slugger'
import Link from 'next/link'

import { Badge } from './ui/badge'

interface TagProps {
  tag: string
  current?: boolean
  count?: number
}

export function Tag({ tag, current, count }: TagProps) {
  return (
    <Link href={`/tags/${slug(tag)}`} className='no-underline'>
      <Badge
        variant={current ? 'default' : 'secondary'}
        className='rounded-md text-sm'
      >
        {tag} {count ? `(${count})` : null}
      </Badge>
    </Link>
  )
}
