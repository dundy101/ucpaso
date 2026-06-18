import type { Metadata } from 'next'
import Link from 'next/link'
import PageBanner from '@/components/sections/PageBanner'
import { FadeIn, Stagger } from '@/components/motion'
import { Tag } from '@/components/ui'
import { ArrowRight, Calendar, Clock, MapPin } from 'lucide-react'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Discover PASO events — Mock Debut 2026, WorldWide, and more at the University of Cincinnati.',
}

const events = [
  {
    title: 'Mock Debut 2026',
    theme: 'Under the Sea',
    date: 'November 7, 2026', doors: '4:00 PM', start: '5:00 PM',
    venue: 'TUC Great Hall, University of Cincinnati',
    desc: "PASO's fifth annual Filipino debut celebration. An unforgettable evening of cultural performances, traditional customs, Filipino cuisine, and an afterset celebration. Open to all.",
    tag: 'Flagship Event' as const,
    tagVariant: 'gold' as const,
    href: '/events/mock-debut',
    live: true,
  },
  {
    title: 'WorldWide',
    theme: 'Annual Cultural Showcase',
    date: 'Date TBA · 2026', doors: 'TBA', start: 'TBA',
    venue: 'University of Cincinnati',
    desc: "PASO's annual cultural showcase celebrating the diversity of our community — featuring performances, food, and connections from cultures around the world.",
    tag: 'Coming Soon' as const,
    tagVariant: 'dim' as const,
    href: '/events/worldwide',
    live: false,
  },
]

export default function EventsPage() {
  return (
    <>
      <PageBanner
        eyebrow="PASO"
        title={<>PASO <em className="italic text-[var(--gold-light)]">Events</em></>}
        sub="From flagship cultural celebrations to community socials — every event is an invitation to connect."
      />

      <section className="section bg-[var(--ink)]">
        <div className="container max-w-4xl">
          <Stagger stagger={0.12} delay={0.1}>
            {events.map(ev => (
              <Link key={ev.title} href={ev.href} className="group block mb-4">
                <div className="glass glass-hover rounded-[var(--radius-xl)] p-7 lg:p-9 flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Date card — centered */}
                  <div className="flex-shrink-0 flex justify-center lg:justify-start">
                    <div className="glass rounded-[var(--radius)] px-3 py-2 text-center w-20">
                      <div className="text-[var(--text-4)] text-[9px] uppercase tracking-widest">Date</div>
                      <div className="text-[var(--text-1)] font-sans text-xs mt-0.5 leading-snug">
                        {ev.date.split(' · ')[0]}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Tag variant={ev.tagVariant}>{ev.tag}</Tag>
                      {ev.live && (
                        <span className="flex items-center gap-1.5 text-emerald-400 text-[10px] font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Upcoming
                        </span>
                      )}
                    </div>

                    <h2 className="font-display font-medium text-3xl lg:text-4xl text-[var(--text-1)] group-hover:text-[var(--gold-light)] transition-colors leading-tight mb-1">
                      {ev.title}
                    </h2>
                    <p className="text-[var(--text-3)] text-sm italic mb-4">{ev.theme}</p>
                    <p className="text-[var(--text-2)] text-sm leading-relaxed mb-5">{ev.desc}</p>

                    <div className="flex flex-wrap gap-5 text-xs text-[var(--text-3)] mb-6">
                      <span className="flex items-center gap-1.5"><Calendar size={11} strokeWidth={1.5} /> {ev.date}</span>
                      <span className="flex items-center gap-1.5"><Clock size={11} strokeWidth={1.5} /> Doors {ev.doors} · Show {ev.start}</span>
                      <span className="flex items-center gap-1.5"><MapPin size={11} strokeWidth={1.5} /> {ev.venue}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-sm font-medium text-[var(--gold)] group-hover:gap-2.5 transition-all">
                      View Details <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Stagger>
        </div>
      </section>

      <CTA />
    </>
  )
}
