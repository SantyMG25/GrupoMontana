import "./globals.css";
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import CtaWhatsappFloating from "@/components/cta/WhatsAppFloating";
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
    default: "Montana | Soluciones y Servicios de Construcción en Bogotá",
    template: "%s | Montana Soluciones",
  },
  description: "Transformamos y remodelamos espacios con asesoría estratégica, precisión técnica y acabados de alto nivel en Bogotá y alrededores.",
  keywords: ["construcción Bogotá", "remodelación", "acabados", "arquitectura", "diseño de interiores", "Montana", "servicios de construcción"],
  authors: [{ name: "Montana Soluciones y Servicios" }],
  creator: "Montana Soluciones y Servicios",
  publisher: "Montana Soluciones y Servicios",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Montana | Construcción y Remodelación en Bogotá",
    description: "Construimos y remodelamos espacios con propósito. Asesoría estratégica y acabados de alto nivel.",
    url: "https://montana-servicios.com",
    siteName: "Montana Soluciones y Servicios",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Montana | Construcción y Remodelación",
    description: "Transformamos espacios con asesoría estratégica y acabados de alto nivel en Bogotá.",
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
    "@type": "LocalBusiness",
    "name": "Montana Soluciones y Servicios",
    "image": "https://montana-servicios.com/img/hero/hero.webp", // Ruta de ejemplo
    "description": "Empresa especializada en construcción y remodelación de espacios en Bogotá.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bogotá",
      "addressCountry": "CO"
    },
    "url": "https://montana-servicios.com"
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

      </body>
    </html>
  )
}