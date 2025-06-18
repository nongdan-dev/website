import { posts } from '#velite'
/* eslint-disable @typescript-eslint/no-unused-vars */
import { slug } from 'github-slugger'
import { Metadata } from 'next'

import { PostItem } from '@/components/post-item'
import { Tag } from '@/components/tag'
import { getAllTags, getPostsByTagSlug, sortTagsByCount } from '@/lib/utils'

interface TagPageProps {
  params: Promise<{
    tag: string
  }>
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { tag } = await params

  return {
    description: `Topics I have written about ${tag}`,
  }
}

export const generateStaticParams = () => {
  const tags = getAllTags(posts)
  const paths = Object.keys(tags).map(tag => ({ tag: slug(tag) }))
  return paths
}
export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params
  const title = tag.split('-').join(' ')

  const allPosts = getPostsByTagSlug(posts, tag)
  const displayPosts = allPosts.filter(post => post.published)
  const tags = getAllTags(posts)
  const sortedTags = sortTagsByCount(tags)

  return (
    <div className='content-grid col-full-width py-6 lg:py-10'>
      <div className='col-content pt-[4rem]'>
        <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
          <div className='flex-1 space-y-4'>
            <h1 className='text-4xl font-black capitalize lg:text-5xl'>
              {title}
            </h1>
          </div>
        </div>

        <div className='mt-8 grid grid-cols-12 gap-3'>
          <div className='col-span-12 col-start-1 sm:col-span-8'>
            {displayPosts.length > 0 ? (
              <ul className='flex flex-col gap-4'>
                {displayPosts.map(post => {
                  const { slug, date, title, description, tags } = post
                  return (
                    <article key={post.slug} className='mb-4'>
                      <PostItem
                        slug={post.slug}
                        date={date}
                        title={title}
                        description={description}
                        tags={tags}
                      />
                    </article>
                  )
                })}
              </ul>
            ) : (
              <p className='mt-4 text-center'>Nothing to see here yet.</p>
            )}
          </div>

          <div className='col-span-12 row-start-3 h-fit border shadow sm:col-span-4 sm:col-start-9 sm:row-start-1'>
            <div className='p-4'>
              <h2 className='mb-2 text-lg font-bold'>Tags</h2>
              <div className='flex flex-wrap gap-2'>
                {sortedTags?.map(t => (
                  <Tag
                    tag={t}
                    key={t}
                    count={tags[t]}
                    current={slug(t).toLowerCase() === tag.toLowerCase()}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
