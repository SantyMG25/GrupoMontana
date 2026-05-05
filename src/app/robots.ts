import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://montana-servicios.com' // Ajustar a tu dominio

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Rutas que no quieres que Google indexe
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
