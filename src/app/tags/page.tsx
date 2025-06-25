import { posts } from '#velite'
import { Metadata } from 'next'

import { Tag } from '@/components/tag'
import { getAllTags, sortTagsByCount } from '@/lib/utils'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Tags',
    description: 'Topics I have written about',
  }
}

export default async function TagsPage() {
  const tags = getAllTags(posts)
  const sortedTags = sortTagsByCount(tags)

  return (
    <div className='container max-w-4xl py-6 lg:py-10'>
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
        <div className='flex-1 space-y-4'>
          <h1 className='text-4xl font-black lg:text-5xl'>Tags</h1>
        </div>
      </div>

      <div className='divider my-6'>All Tags</div>

      <div className='border shadow-sm'>
        <div>
          <div className='flex flex-wrap gap-3'>
            {sortedTags.map(tag => (
              <Tag key={tag} tag={tag} count={tags[tag]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
