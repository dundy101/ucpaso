import type { Metadata } from 'next'
import Link from 'next/link'
import PageBanner from '@/components/sections/PageBanner'
import CTA from '@/components/sections/CTA'
import { FadeIn, FadeInSide } from '@/components/motion'
import { Label } from '@/components/ui'
import { ArrowRight, Calendar, Clock, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Upcoming PASO events at the University of Cincinnati \u2014 Mock Debut, WorldWide, and more.',
}

const events = [
  {
    title: 'Mock Debut 2026',
    date:  'November 7, 2026',
    time:  'Doors 4 PM \u00b7 Show 5 PM',
    venue: 'TUC Great Hall, Cincinnati',
    desc:  "PASO's most beloved tradition returns for the fifth time. Witness the elegance of a Filipino debut \u2014 court presentations, cultural performances, Filipino cuisine, and an unforgettable evening of community.",
    tag:   'Flagship Event',
    href:  '/events/mock-debut',
    featured: true,
  },
  {
    title: 'WorldWide',
    date:  'Date TBA \u00b7 2026',
    time:  'Time TBA',
    venue: 'University of Cincinnati',
    desc:  "PASO's annual celebration of cultural diversity \u2014 featuring performances, food, and connection that brings the entire UC community together.",
    tag:   'Coming Soon',
    href:  '/events/worldwide',
    featured: false,
  },
]

export default function EventsPage() {
  return (
    <>
      <PageBanner
        eyebrow="What's On"
        title={<>Upcoming <em className="italic text-[var(--gold-light)]">Events</em></>}
        sub={'From our flagship Mock Debut to the annual WorldWide showcase \u2014 find your next night with PASO.'}
      />

      <section className="section">
        <div className="container">
          <FadeIn>
            <Label>Upcoming</Label>
            <h2 className="font-display font-medium text-4xl lg:text-5xl text-[var(--text-1)] leading-tight mt-2 mb-12">
              Celebrate with us
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-5">
            {events.map((e, i) => (
              <FadeInSide key={e.href} from={i % 2 === 0 ? 'left' : 'right'} delay={0.05 * i}>
                <Link href={e.href} className="group block">
                  <div
                    className={`relative rounded-[var(--radius-xl)] overflow-hidden border transition-colors ${
                      e.featured
                        ? 'border-[var(--text-4)] hover:border-[rgba(201,160,32,0.18)]'
                        : 'border-[var(--text-4)] hover:border-white/[0.1]'
                    }`}
                  >
                    <div
                      className={`absolute inset-0 ${
                        e.featured
                          ? 'bg-gradient-to-br from-[#0E1828] via-[var(--ink-50)] to-[#0A0E1A]'
                          : 'bg-[var(--ink-50)]'
                      }`}
                    />
                    {e.featured && <div className="absolute inset-0 diagonal-grid opacity-50" />}

                    <div className="relative p-8 lg:p-10 grid lg:grid-cols-[1fr_auto] gap-6 items-end">
                      <div>
                        <span
                          className={`inline-block text-[10px] font-medium uppercase tracking-widest px-2.5 py-0.5 rounded-full border mb-4 ${
                            e.featured
                              ? 'text-[var(--gold)] border-[rgba(201,160,32,0.25)]'
                              : 'text-[var(--text-3)] border-[var(--text-4)]'
                          }`}
                        >
                          {e.tag}
                        </span>
                        <h3 className="font-display font-medium text-3xl lg:text-4xl text-[var(--text-1)] group-hover:text-[var(--gold-light)] transition-colors leading-tight mb-4">
                          {e.title}
                        </h3>
                        <p className="text-[var(--text-2)] text-sm leading-relaxed max-w-xl mb-6">{e.desc}</p>
                        <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-[var(--text-3)]">
                          <span className="flex items-center gap-1.5"><Calendar size={11} strokeWidth={1.5} /> {e.date}</span>
                          <span className="flex items-center gap-1.5"><Clock size={11} strokeWidth={1.5} /> {e.time}</span>
                          <span className="flex items-center gap-1.5"><MapPin size={11} strokeWidth={1.5} /> {e.venue}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm font-medium text-[var(--gold)] group-hover:gap-3 transition-all">
                        {e.featured ? 'View Event' : 'Learn More'} <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeInSide>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
