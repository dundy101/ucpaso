import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'More',
  description: 'FAQ, history, resources, alumni info, and sponsorship opportunities for PASO UC.',
}
export default function MoreLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
