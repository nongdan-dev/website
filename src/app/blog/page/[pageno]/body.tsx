import { Post, posts } from '#velite'
import { Metadata } from 'next'

import { PostItem } from '@/components/post-item'
import { QueryPagination } from '@/components/query-pagination'
import { Tag } from '@/components/tag'
import { getAllTags, sortPosts, sortTagsByCount } from '@/lib/utils'

const POSTS_PER_PAGE = 5

interface BlogPageProps {
  searchParams: {
    page?: string
  }
  posts: Post[]
  currentPage: number
  totalPages: number
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Blog',
    description: 'Latest articles about programming and technology',
  }
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { page } = await searchParams
  const currentPage = Number(page) || 1
  const sortedPosts = sortPosts(posts.filter(post => post.published))
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE)

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage,
  )

  const tags = getAllTags(posts)
  const sortedTags = sortTagsByCount(tags)

  return (
    <div className='content-grid col-full-width py-6 lg:py-10'>
      <div className='col-content pt-[4rem]'>
        <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
          <div className='flex-1 space-y-4'>
            <h1 className='text-4xl font-black lg:text-5xl'>Blog</h1>
            <p className='text-xl'>My ramblings on all things web dev.</p>
          </div>
        </div>

        <div className='mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12'>
          <div className='pb-8 lg:col-span-8'>
            {displayPosts.length > 0 ? (
              <>
                <ul className='flex flex-col gap-4'>
                  {displayPosts.map(post => {
                    const { slug, date, title, description, tags } = post
                    return (
                      <li key={slug}>
                        <PostItem
                          slug={slug}
                          date={date}
                          title={title}
                          description={description}
                          tags={tags}
                        />
                      </li>
                    )
                  })}
                </ul>
                <div className='mt-8 flex justify-end'>
                  <QueryPagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                  />
                </div>
              </>
            ) : (
              <p className='mt-4 text-center text-lg'>
                Nothing to see here yet.
              </p>
            )}
          </div>

          <div className='lg:col-span-4'>
            <div className='border shadow-sm'>
              <div className='p-4'>
                <h2 className='mb-2 text-lg font-bold'>Tags</h2>
                <div className='flex flex-wrap gap-2'>
                  {sortedTags.map(tag => (
                    <Tag key={tag} tag={tag} count={tags[tag]} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
