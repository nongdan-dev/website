'use client'

import { Calendar } from 'lucide-react'
import Link from 'next/link'

import { formatDate, getLocalizedPostUrl } from '@/lib/utils'

import { Tag } from './tag'

interface PostItemProps {
  slug: string
  title: string
  description?: string
  date: string
  tags?: Array<string>
  readMoreText?: string
  isRelated?: boolean
}

export function PostItem({
  slug,
  title,
  description,
  date,
  tags,
  readMoreText,
  isRelated,
}: PostItemProps) {
  const postUrl = getLocalizedPostUrl(slug)

  return (
    <article
      className={`border p-4 shadow-sm transition-shadow duration-200 hover:shadow-md ${
        isRelated ? 'flex h-full flex-col' : ''
      }`}
    >
      <div className='flex flex-1 flex-col space-y-2 p-0'>
        <h2 className='text-2xl'>
          <Link
            href={postUrl}
            className='link link-hover hover:text-primary text-primary-500'
          >
            {title}
          </Link>
        </h2>

        {tags?.length ? (
          <div className='flex flex-wrap gap-2'>
            {tags.map(tag => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        ) : null}

        {description && <p className='mt-2'>{description}</p>}

        <div className='mt-auto flex items-center justify-between pt-2'>
          <div className='flex items-center gap-2 text-sm'>
            <Calendar className='h-4 w-4' />
            <time dateTime={date}>{formatDate(date)}</time>
          </div>

          <Link
            href={postUrl}
            className='hover:text-primary px-2 text-primary-500'
            aria-label={'Read more about {title}'}
          >
            {readMoreText || 'Read more'} →
          </Link>
        </div>
      </div>
    </article>
  )
}
