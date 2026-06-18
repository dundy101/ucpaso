import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with PASO UC — contact form, email, Instagram, and location.',
}
export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
