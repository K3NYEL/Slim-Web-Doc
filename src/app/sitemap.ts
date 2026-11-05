
import type { MetadataRoute } from 'next'
import { docPages } from '../content/docs'
import { siteConfig } from '../config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/$/, '')

  return [
    {
      url: `${baseUrl}/`,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/versions`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacto`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...docPages.map((page) => ({
      url: `${baseUrl}/docs/${page.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
