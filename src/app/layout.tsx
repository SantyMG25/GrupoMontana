import "./globals.css";
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import CtaWhatsappFloating from "@/components/cta/WhatsAppFloating";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
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