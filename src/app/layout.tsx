import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Cursor from '@/components/ui/Cursor'

export const metadata: Metadata = {
  title: {
    default: 'PASO — Pinoy-American Student Organization at UC',
    template: '%s — PASO UC',
  },
  description:
    'A modern cultural organization celebrating Filipino heritage, leadership, community, and connection at the University of Cincinnati.',
  keywords: ['PASO', 'Filipino', 'University of Cincinnati', 'cultural organization', 'student org', 'Pinoy'],
  openGraph: {
    title: 'PASO — Pinoy-American Student Organization',
    description: 'Celebrating Filipino heritage at the University of Cincinnati.',
    type: 'website',
    locale: 'en_US',
    siteName: 'PASO UC',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#080B14',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Cursor />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
