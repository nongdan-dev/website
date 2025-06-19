import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkMath from 'remark-math'
import { defineConfig, defineCollection, s } from 'velite'

const posts = defineCollection({
  name: 'Post',
  pattern: '**/*.mdx',
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(Infinity),
      description: s.string().max(Infinity).optional(),
      date: s.isodate(),
      published: s.boolean().default(true),
      tags: s.array(s.string()).optional(),
      body: s.mdx(),
    })
    .transform(data => {
      const slugWithoutExt = data.slug.replace(/\.mdx$/, '')
      const slugParts = slugWithoutExt.split('/')
      const slugAsParams = slugParts[slugParts.length - 1]

      return {
        ...data,
        slug: slugWithoutExt,
        slugAsParams,
      }
    }),
})

export default defineConfig({
  root: './posts',
  output: {
    data: './.velite',
    assets: './public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { posts },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: 'github-dark' }],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
      rehypeKatex,
    ],
    remarkPlugins: [remarkMath],
  },
})
