'use client'

import { Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { formatDate, getLocalizedPostUrl } from '@/lib/utils'

import { Tag } from './tag'

interface PostItemProps {
  slug: string
  title: string
  date: string
  tags?: Array<string>
  image?: string
}

export function PostItem({ slug, title, date, tags, image }: PostItemProps) {
  const postUrl = getLocalizedPostUrl(slug)

  return (
    <article
      className={`flex flex-col rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-sm shadow-black/5`}
    >
      <div className='relative aspect-video w-full overflow-clip rounded-lg'>
        <Image
          src={image || ''}
          alt={title}
          fill
          className='h-full w-full object-cover'
        />
      </div>
      <div className='w-fit rounded-sm py-[2px] text-xs font-semibold uppercase text-[#242627] opacity-70'>
        {tags?.length ? (
          <div className='my-2 flex flex-wrap gap-2'>
            {tags.map(tag => (
              <Tag
                className='py-0.25 rounded-md px-1.5 text-[0.5rem]'
                key={tag}
                tag={tag}
              />
            ))}
          </div>
        ) : null}
      </div>
      <h2 className='mb-2 line-clamp-3 min-h-[52px] text-lg font-medium leading-tight'>
        <Link href={postUrl}>{title}</Link>
      </h2>

      <div className='text-[#242627]s'>
        <p className='font-genist mb-1 text-sm opacity-70'>Team Nongdandev</p>
        <div className='flex items-center gap-2 text-sm'>
          <Calendar className='h-4 w-4' />
          <time dateTime={date}>{formatDate(date)}</time>
        </div>
      </div>
    </article>
  )
}
