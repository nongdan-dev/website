import { Post } from '#velite'
import { type ClassValue, clsx } from 'clsx'
import { slug } from 'github-slugger'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function sortPosts(posts: Array<Post>) {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1
    if (a.date < b.date) return 1
    return 0
  })
}

export function getAllTags(posts: Array<Post>) {
  const tags: Record<string, number> = {}
  posts.forEach(post => {
    if (post.published) {
      post.tags?.forEach(tag => {
        tags[tag] = (tags[tag] ?? 0) + 1
      })
    }
  })

  return tags
}

export function sortTagsByCount(tags: Record<string, number>) {
  return Object.keys(tags).sort((a, b) => tags[b] - tags[a])
}

export function getPostsByTagSlug(posts: Array<Post>, tag: string) {
  return posts.filter(post => {
    if (!post.tags) return false
    const slugifiedTags = post.tags.map((tag: string) => slug(tag))
    return slugifiedTags.includes(tag)
  })
}

export function getLocalizedPostUrl(slug: string) {
  let cleanSlug = slug.replace(/^\/+/, '').replace(/^blog\//, '')
  cleanSlug = cleanSlug.replace(/^(en|vn)\//, '')
  return `/blog/${cleanSlug}`
}

export function getLocalizedTagUrl(tag: string) {
  return `/tags/${slug(tag)}`
}

export default function extractAllH3Variants(compiledMDX: string) {
  const matches = compiledMDX.match(/(h[1-6]),{id:"[^"]+",children:.*?\}\)}/gm)

  const result = matches?.map(match => ({
    level: match.match(/(h[1-6])/)?.[1] ?? '',
    id: match.match(/id:"([^"]+)"/)?.[1] ?? '',
    text: match.match(/children:"([^"]+)"/)?.[1] ?? '',
  }))

  return result?.filter(item => item.id && item.text) || []
}
