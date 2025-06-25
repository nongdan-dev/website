import { Suspense } from 'react'

import { posts } from '@/../.velite/index'
import { sortPosts } from '@/lib/utils'

import Body from './body'

export async function generateStaticParams() {
  const sortedPosts = sortPosts(posts.filter(post => post.published))
  const postsPerPage = 6
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage)

  return Array.from({ length: totalPages }, (_, i) => ({
    pageno: (i + 1).toString(),
  }))
}

export default async function BlogPage({
  params,
}: {
  params: { pageno: string }
}) {
  const { pageno } = await params

  const currentPage = Number(pageno ?? 1)
  const postsPerPage = 6
  const sortedPosts = sortPosts(posts.filter(post => post.published))

  const displayPosts = sortedPosts.slice(
    postsPerPage * (currentPage - 1),
    postsPerPage * currentPage,
  )

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Body
          posts={displayPosts}
          currentPage={currentPage}
          totalPages={Math.ceil(sortedPosts.length / postsPerPage)}
          searchParams={{
            page: currentPage.toString(),
          }}
        />
      </Suspense>
    </>
  )
}
