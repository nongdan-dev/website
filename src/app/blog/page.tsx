import { posts } from '#velite'
import Link from 'next/link'

import { PostItem } from '@/components/post-item'
import { Button } from '@/components/ui'
import { Section, SubTitle, Title } from '@/components/widget'
import { sortPosts } from '@/lib/utils'

export default async function Home() {
  const latestPosts = sortPosts(posts).slice(0, 6)

  return (
    <>
      <Section className='col-full-width pt-[calc(theme(spacing.header)*2)]'>
        <div className='col-content'>
          <SubTitle>Blog</SubTitle>
          <Title asChild>
            <h1> NongDan.dev Tech Blog</h1>
          </Title>
          <p className='my-4 w-full text-lg lg:w-1/2'>
            Sharing programming knowledge, technology insights, and real-world
            experiences from the NongDan.dev team.
          </p>
          <Button size='medium' asChild>
            <Link href={`/blog/page/1`}>See all Articles</Link>
          </Button>
        </div>
      </Section>

      <section className='content-grid col-full-width pb-20'>
        <div className='col-content'>
          <ul className='flex flex-col'>
            <div className='grid grid-cols-2 gap-6 max-[500px]:grid-cols-1 md:gap-8 lg:grid-cols-3'>
              {latestPosts.map(
                post =>
                  post.published && (
                    <li key={post.slug}>
                      <PostItem
                        slug={post.slug}
                        title={post.title}
                        date={post.date}
                        tags={post.tags}
                        image={post.image}
                      />
                    </li>
                  ),
              )}
            </div>
          </ul>
        </div>
      </section>
    </>
  )
}
