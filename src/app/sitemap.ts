
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://slimexecutor-doc.vercel.app'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // {
    //   url: `${baseUrl}/`,
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.9,
    // },
    {
      url: `${baseUrl}/public/download`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
