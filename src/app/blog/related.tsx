import type { Post } from '#velite'

import { Link } from '@/components/ui'
import { sortPosts } from '@/lib/utils'

interface RelatedProps {
  posts: Post[]
}

export default function Related({ posts }: RelatedProps) {
  const sortedPosts = sortPosts(posts.filter(post => post.published))

  return (
    <div className='w-full border-t border-gray-200 pb-8 dark:border-gray-700'>
      <h2 className='mb-6 text-2xl font-bold text-gray-900 dark:text-white'>
        Related Posts
      </h2>

      {sortedPosts?.length > 0 ? (
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-4'>
          {sortedPosts.slice(0, 4).map(post => (
            <article
              key={post.slug}
              className='group flex h-full cursor-pointer flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-200 dark:border-gray-700 dark:bg-gray-800'
            >
              <div className='flex h-full flex-col px-4'>
                <div className='mb-2 flex-1'>
                  <h3 className='mb-2 line-clamp-2 text-lg font-semibold leading-snug text-gray-900 dark:text-white'>
                    <Link
                      href={`/blog/${post.slugAsParams}`}
                      className='blog-link'
                    >
                      {post.title}
                    </Link>
                  </h3>
                  {post.description && (
                    <p className='line-clamp-3 text-sm text-gray-600 dark:text-gray-300'>
                      {post.description}
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className='py-8 text-center text-gray-500 dark:text-gray-400'>
          No related posts yet.
        </p>
      )}
    </div>
  )
}
