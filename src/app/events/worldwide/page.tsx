import type { Metadata } from 'next'
import PageBanner from '@/components/sections/PageBanner'
import { FadeIn } from '@/components/motion'
import { Label } from '@/components/ui'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'WorldWide',
  description: "PASO's annual cultural showcase at the University of Cincinnati.",
}

export default function WorldWidePage() {
  return (
    <>
      <PageBanner
        eyebrow="PASO Events"
        title={<>WorldWide <em className="italic text-[var(--gold-light)]">2026</em></>}
        sub="PASO's annual cultural showcase celebrating the diversity within our community — performances, food, and connection."
      />
      <section className="section">
        <div className="container max-w-2xl text-center">
          <FadeIn>
            <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-3xl mx-auto mb-6">🌏</div>
            <Label>Coming Soon</Label>
            <h2 className="font-display font-medium text-3xl lg:text-4xl text-[var(--text-1)] mt-3 mb-4">
              Details Dropping Soon
            </h2>
            <p className="text-[var(--text-2)] leading-relaxed">
              WorldWide 2026 is in the works. Follow us on Instagram{' '}
              <a href="https://instagram.com/uc_paso" target="_blank" rel="noopener noreferrer" className="text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors">
                @uc_paso
              </a>{' '}
              for the latest updates.
            </p>
          </FadeIn>
        </div>
      </section>
      <CTA />
    </>
  )
}
