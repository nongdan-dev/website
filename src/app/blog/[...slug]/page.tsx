import { posts } from '#velite'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { MDXContent } from '@/components/mdx-components'
import { PostList } from '@/components/post-list'
import { TableOfContents } from '@/components/table-of-content'
import { Tag } from '@/components/tag'
import { SectionSubscribe } from '@/components/widget/section-subscribe'
import { siteConfig } from '@/config/site'
import extractToc, { sortPosts } from '@/lib/utils'
import '@/styles/components.css'
import '@/styles/mdx.css'

interface PostPageProps {
  params: Promise<{
    slug: string[]
  }>
}

async function getPostFromParams(params: PostPageProps['params']) {
  const { slug } = await params
  const slugPr = slug.join('/')
  const post = posts.find(post => post.slugAsParams === slugPr)

  return post
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  const ogSearchParams = new URLSearchParams()
  ogSearchParams.set('title', post.title)

  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  }
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  return posts.map(post => ({ slug: post.slugAsParams.split('/') }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params)
  const A = JSON.stringify(post ? post.body : '')
  const B = JSON.parse(A)
  const toc = extractToc(B)

  const PostsArticle = sortPosts(
    posts.filter(
      p =>
        p.published &&
        p.slugAsParams !== post?.slugAsParams &&
        p.tags?.some(tag => post?.tags?.includes(tag)),
    ),
  )

  const PostsRelated = sortPosts(
    posts.filter(
      p =>
        p.published &&
        p.slugAsParams !== post?.slugAsParams &&
        !p.tags?.some(tag => post?.tags?.includes(tag)),
    ),
  )

  if (!post || !post.published) {
    notFound()
  }

  return (
    <div className='content-grid col-full-width pt-20'>
      <div id='hero-section' className='col-content prose dark:prose-invert'>
        <div id='grid-layout' className='mb-10 grid grid-cols-1 gap-6'>
          <div className='self-start lg:sticky lg:top-24'>
            <TableOfContents headings={toc} />
          </div>

          <div className='flex flex-col'>
            <h1 className='mb-2'>{post.title}</h1>
            <div className='mb-2 flex gap-2'>
              {post.tags?.map(tag => <Tag tag={tag} key={tag} />)}
            </div>
            {post.description && (
              <p className='text-muted-foreground mt-0 text-xl'>
                {post.description}
              </p>
            )}
            <hr className='my-4' />
            <MDXContent code={post.body} />
          </div>
        </div>
        {PostsArticle.length > 0 && (
          <PostList
            posts={PostsArticle}
            title='Similar category article'
            className='mt-6'
          />
        )}

        {PostsRelated.length > 0 && (
          <PostList posts={PostsRelated} title='Related Posts' />
        )}
      </div>
      <SectionSubscribe />
    </div>
  )
}
