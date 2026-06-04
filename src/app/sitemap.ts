import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://montana-servicios.com' // Ajustar a tu dominio

  // Rutas estáticas de tu aplicación
  const routes = ['', '/nosotros', '/servicios', '/contacto'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return [...routes]
}
