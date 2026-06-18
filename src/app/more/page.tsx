'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import PageBanner from '@/components/sections/PageBanner'
import { FadeIn, Stagger } from '@/components/motion'
import { Label } from '@/components/ui'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  { q: 'Do I need to be Filipino to join PASO?', a: "Absolutely not! PASO welcomes students of all backgrounds. Whether you're Filipino, Filipino-American, or simply curious about the culture, you're always welcome here." },
  { q: 'How do I become a member?', a: 'You can sign up through GetInvolved UC. Come to a general meeting, join our group chat, and get involved in events. There are no dues to attend most PASO events.' },
  { q: 'When do you hold general meetings?', a: 'General meetings are held regularly throughout the semester. Check our Google Calendar or Instagram (@uc_paso) for the most up-to-date schedule.' },
  { q: 'How can I get involved in planning events like Mock Debut?', a: "Reach out to our board or express interest during a general meeting. We're always looking for enthusiastic members to join committees." },
  { q: 'Does PASO have a performance group?', a: "Yes! Ritmo is PASO's performance troupe, showcasing traditional and modern Filipino dance and music. Audition info is shared at the beginning of each semester." },
  { q: 'How can my family or organization sponsor PASO?', a: 'We welcome sponsorships for events like Mock Debut. Email uc.paso17@gmail.com with your inquiry and a board member will follow up.' },
]

const history = [
  { year: '2017', milestone: 'PASO is founded at the University of Cincinnati, establishing a home for Filipino students on campus.' },
  { year: '2019', milestone: 'First Mock Debut held at UC — a landmark event that would become PASO\'s most beloved annual tradition.' },
  { year: '2021', milestone: 'PASO adapts through the pandemic, hosting virtual cultural events to keep community alive.' },
  { year: '2023', milestone: 'Record membership year. PASO expands programming with new leadership and community outreach initiatives.' },
  { year: '2026', milestone: 'Mock Debut 2026: Under the Sea — the fifth year of this flagship event at the TUC Great Hall.' },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <button
      onClick={() => setOpen(v => !v)}
      className="w-full text-left glass glass-hover rounded-[var(--radius-lg)] p-5 group transition-all"
      aria-expanded={open}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-sans font-medium text-sm text-[var(--text-1)] group-hover:text-[var(--gold-light)] transition-colors leading-snug">
          {q}
        </span>
        <span className="flex-shrink-0 w-5 h-5 rounded-full border border-[var(--text-4)] flex items-center justify-center mt-0.5 group-hover:border-[var(--gold-dim)] transition-colors">
          {open
            ? <Minus size={10} className="text-[var(--gold)]" />
            : <Plus size={10} className="text-[var(--text-3)]" />
          }
        </span>
      </div>
      {open && (
        <p className="text-[var(--text-2)] text-sm leading-relaxed mt-3 text-left">
          {a}
        </p>
      )}
    </button>
  )
}

export default function MorePage() {
  return (
    <>
      <PageBanner
        eyebrow="PASO"
        title={<>More About <em className="italic text-[var(--gold-light)]">PASO</em></>}
        sub="History, frequently asked questions, resources, and sponsorship opportunities."
      />

      {/* FAQ */}
      <section className="section">
        <div className="container max-w-3xl">
          <FadeIn>
            <Label>FAQ</Label>
            <h2 className="font-display font-medium text-4xl lg:text-5xl text-[var(--text-1)] mt-2 mb-10">
              Common Questions
            </h2>
          </FadeIn>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <FAQItem q={f.q} a={f.a} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section bg-[var(--ink-50)] relative">
        <div className="absolute top-0 inset-x-0 h-px rule-gold" />
        <div className="container max-w-3xl">
          <FadeIn>
            <Label>Organization History</Label>
            <h2 className="font-display font-medium text-4xl lg:text-5xl text-[var(--text-1)] mt-2 mb-12">
              Our Story
            </h2>
          </FadeIn>

          <div className="relative">
            <div className="absolute left-[52px] top-0 bottom-0 w-px bg-[var(--text-4)]" aria-hidden="true" />
            <Stagger stagger={0.08} delay={0.1}>
              {history.map((h, i) => (
                <div key={h.year} className="flex items-start gap-6 mb-0 group">
                  <div className="flex-shrink-0 w-[52px] text-right">
                    <span className={`font-display text-sm font-medium ${i === history.length - 1 ? 'text-[var(--gold)]' : 'text-[var(--text-3)]'}`}>
                      {h.year}
                    </span>
                  </div>
                  <div className="relative flex-shrink-0" style={{ width: '1px' }}>
                    <div className={`relative z-10 w-2 h-2 rounded-full mt-1.5 ${
                      i === history.length - 1 ? 'bg-[var(--gold)] shadow-[0_0_6px_rgba(201,160,32,0.5)]' : 'bg-[var(--text-4)]'
                    }`} />
                  </div>
                  <p className="flex-1 text-[var(--text-2)] text-sm leading-relaxed pb-7">{h.milestone}</p>
                </div>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* Resources & Sponsorship */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Resources */}
            <div>
              <FadeIn>
                <Label>Resources</Label>
                <h2 className="font-display font-medium text-3xl text-[var(--text-1)] mt-2 mb-6">Helpful Links</h2>
              </FadeIn>
              <Stagger stagger={0.07} delay={0.1} className="space-y-3">
                {[
                  { label: 'PASO on GetInvolved UC', href: 'https://getinvolved.uc.edu', note: 'Official university listing' },
                  { label: '@uc_paso on Instagram', href: 'https://instagram.com/uc_paso', note: 'Latest news & photos' },
                  { label: 'UC Student Activities', href: 'https://uc.edu', note: 'University student life resources' },
                  { label: 'Contact the Board', href: 'mailto:uc.paso17@gmail.com', note: 'uc.paso17@gmail.com' },
                ].map(r => (
                  <a
                    key={r.label}
                    href={r.href}
                    target={r.href.startsWith('http') ? '_blank' : undefined}
                    rel={r.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center justify-between glass glass-hover rounded-[var(--radius)] px-4 py-3.5 group"
                  >
                    <div>
                      <p className="text-[var(--text-1)] text-sm font-medium group-hover:text-[var(--gold-light)] transition-colors">{r.label}</p>
                      <p className="text-[var(--text-3)] text-xs">{r.note}</p>
                    </div>
                    <span className="text-[var(--text-3)] group-hover:text-[var(--gold)] transition-colors">→</span>
                  </a>
                ))}
              </Stagger>
            </div>

            {/* Sponsorship */}
            <div>
              <FadeIn delay={0.05}>
                <Label>Sponsorship</Label>
                <h2 className="font-display font-medium text-3xl text-[var(--text-1)] mt-2 mb-6">Partner With Us</h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="glass rounded-[var(--radius-xl)] p-7 border border-[rgba(201,160,32,0.08)]">
                  <p className="text-[var(--text-2)] text-sm leading-relaxed mb-5">
                    PASO welcomes partnerships with businesses, families, and organizations who share
                    our commitment to cultural appreciation and community. Sponsorships help us produce
                    high-quality events like Mock Debut and provide enriching experiences for our members.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {['Event sponsorship (Mock Debut, WorldWide)', 'Food & beverage donations', 'Financial contributions', 'In-kind services and goods'].map(item => (
                      <li key={item} className="flex items-start gap-2 text-[var(--text-3)] text-sm">
                        <span className="flex-shrink-0 w-1 h-1 rounded-full bg-[var(--gold)] mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="mailto:uc.paso17@gmail.com?subject=Sponsorship Inquiry"
                    className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-[var(--gold)] text-[var(--ink)] text-sm font-semibold hover:bg-[var(--gold-light)] transition-all active:scale-[0.97]"
                  >
                    Reach Out
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
