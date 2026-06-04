import "./globals.css";
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import CtaWhatsappFloating from "@/components/cta/WhatsAppFloating";
import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://montana-servicios.com"), // Ajustar a dominio real
  title: {
    default: "Montana | Soluciones y Servicios de Construcción y Remodelación",
    template: "%s | Montana Soluciones",
  },
  description: "Empresa líder en soluciones y servicios de construcción, remodelación integral y acabados en Bogotá y a nivel nacional. Asesoría estratégica para tus proyectos.",
  keywords: [
    "construcción Bogotá",
    "remodelación Bogotá",
    "remodelaciones Colombia",
    "acabados de obra",
    "diseño de interiores Bogotá",
    "empresa de construcción",
    "adecuación de oficinas",
    "construcción de casas",
    "remodelación residencial",
    "remodelación comercial",
    "adecuaciones estructurales",
    "obras civiles Bogotá"
  ],
  authors: [{ name: "Montana Soluciones y Servicios" }],
  creator: "Montana Soluciones y Servicios",
  publisher: "Montana Soluciones y Servicios",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Montana | Construcción, Remodelación y Acabados en Bogotá y Colombia",
    description: "Transformamos espacios con asesoría estratégica, precisión técnica y acabados de alto nivel en Bogotá y a nivel nacional.",
    url: "https://montana-servicios.com",
    siteName: "Montana Soluciones y Servicios",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Montana | Construcción y Remodelación Nacional",
    description: "Transformamos espacios con asesoría estratégica y acabados de alto nivel en Bogotá y a nivel nacional.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Montana Soluciones y Servicios",
    "image": "https://montana-servicios.com/img/hero/hero.webp",
    "description": "Empresa especializada en construcción, remodelación integral, acabados y adecuación de espacios residenciales y comerciales en Bogotá y a nivel nacional.",
    "telephone": "+573113743784",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bogotá",
      "addressRegion": "Cundinamarca",
      "addressCountry": "CO"
    },
    "url": "https://montana-servicios.com",
    "sameAs": [
      "https://wa.me/573113743784"
    ]
  };

  return (
    <html lang="es" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">

        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

        <CtaWhatsappFloating />

        <Analytics />
      </body>
    </html>
  )
}