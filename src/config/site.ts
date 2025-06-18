const baseUrl = 'https://nongdan.dev'

const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/namnm',
  github: baseUrl,
  facebook: 'https://www.facebook.com/',
  twitter: 'https://x.com/',
  slack: 'https://slack.com/',
}

export const siteConfig = {
  name: 'NongDan.Dev',
  url: baseUrl,
  description: 'Nextjs 14 blog using velite, tailwind and shadcn',
  author: 'NongDanDev',
  contact: {
    email: 'nam@nongdan.dev',
    phone: '(+84) 35 664 5211',
    location:
      '08, N20 street, Truong Thanh ward, Thu Duc city, Ho Chi Minh city, Vietnam',
  },
  social: {
    ...socialLinks,
    links: {
      ...socialLinks,
      website: baseUrl,
    },
  },
} as const

export type SiteConfig = typeof siteConfig
