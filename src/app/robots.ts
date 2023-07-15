import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/u', '/u/stats', '/u/edit'],
    },
    sitemap: 'https://gegabase.com/sitemap.xml',
  }
}
