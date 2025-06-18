import { posts } from '#velite'
import Link from 'next/link'

import { PostItem } from '@/components/post-item'
import { Button } from '@/components/ui'
import { sortPosts } from '@/lib/utils'

export default async function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5)

  return (
    <>
      <section className='content-grid col-full-width mb-10 mt-20 space-y-6 bg-primary-200 pb-8 pt-10 md:pb-12 lg:py-32'>
        <div className='col-content flex flex-col gap-4 text-center'>
          <div className='flex flex-col items-center gap-4'>
            <p className='text-3xl font-black text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl'>
              NongDan.dev Tech Blog
            </p>
            <p className='text-base-200 mx-auto max-w-[42rem] sm:text-xl'>
              Sharing programming knowledge, technology insights, and real-world
              experiences from the NongDan.dev team.
            </p>
            <Button size='large' asChild>
              <Link href={`/blog/page/1`}>View Blog</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className='content-grid col-full-width pb-20'>
        <div className='col-content lg:px-[12rem]'>
          <h2 className='text-center text-3xl font-black sm:text-5xl md:text-6xl lg:text-7xl'>
            Latest Posts
          </h2>

          <ul className='mt-4 flex flex-col'>
            {latestPosts.map(
              post =>
                post.published && (
                  <li key={post.slug} className='py-4'>
                    <PostItem
                      slug={post.slug}
                      title={post.title}
                      description={post.description}
                      date={post.date}
                      tags={post.tags}
                    />
                  </li>
                ),
            )}
          </ul>
        </div>
      </section>
    </>
  )
}
