import Link from 'next/link'
import { FadeIn, FadeInSide } from '@/components/motion'
import { Label, Btn } from '@/components/ui'
import { ArrowRight, Calendar, MapPin } from 'lucide-react'

const events = [
  {
    title: 'Mock Debut 2026',
    theme: 'Under the Sea',
    date:  'November 7, 2026',
    time:  'Doors 4 PM · Show 5 PM',
    venue: 'TUC Great Hall, Cincinnati',
    desc:  "PASO's most beloved tradition returns for the fifth time. Witness the elegance of a Filipino debut — court presentations, cultural performances, Filipino cuisine, and an unforgettable evening of community.",
    tag:   'Flagship Event',
    href:  '/events/mock-debut',
    accent: 'gold' as const,
  },
  {
    title: 'WorldWide',
    theme: 'Annual Cultural Showcase',
    date:  'Date TBA · 2026',
    time:  'Time TBA',
    venue: 'University of Cincinnati',
    desc:  "PASO's annual celebration of cultural diversity — featuring performances, food, and connection that brings the entire UC community together.",
    tag:   'Coming Soon',
    href:  '/events/worldwide',
    accent: 'dim' as const,
  },
]

export default function FeaturedEvents() {
  return (
    <section className="section" id="events">
      <div className="container">
        <div className="flex items-end justify-between mb-12 lg:mb-16">
          <FadeIn>
            <div>
              <Label>Events</Label>
              <h2 className="font-display font-medium text-4xl lg:text-5xl text-[var(--text-1)] leading-tight mt-2">
                Celebrate with us
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Btn href="/events" variant="ghost" size="sm" className="hidden sm:inline-flex">
              All events <ArrowRight size={12} />
            </Btn>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-5">
          {/* Primary card */}
          <FadeInSide from="left" delay={0.05}>
            <Link href={events[0].href} className="group block h-full">
              <div className="relative rounded-[var(--radius-xl)] overflow-hidden h-full min-h-[400px] border border-[var(--text-4)] hover:border-[rgba(201,160,32,0.18)] transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0E1828] via-[var(--ink-50)] to-[#0A0E1A]" />
                <div className="absolute inset-0 diagonal-grid opacity-50" />
                <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-[rgba(201,160,32,0.06)] blur-[80px] pointer-events-none group-hover:bg-[rgba(201,160,32,0.1)] transition-colors" />

                <div className="relative p-8 lg:p-10 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-auto">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[var(--gold)] text-[10px] font-medium uppercase tracking-widest border border-[rgba(201,160,32,0.25)] px-2.5 py-0.5 rounded-full">
                          {events[0].tag}
                        </span>
                      </div>
                      <h3 className="font-display font-medium text-3xl lg:text-4xl text-[var(--text-1)] group-hover:text-[var(--gold-light)] transition-colors leading-tight mb-1">
                        {events[0].title}
                      </h3>
                      <p className="text-[var(--text-3)] text-sm italic">{events[0].theme}</p>
                    </div>
                  </div>

                  <p className="text-[var(--text-2)] text-sm leading-relaxed my-6 max-w-sm">
                    {events[0].desc}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-6 text-xs text-[var(--text-3)]">
                    <span className="flex items-center gap-1.5"><Calendar size={11} strokeWidth={1.5} /> {events[0].date}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={11} strokeWidth={1.5} /> {events[0].venue}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium text-[var(--gold)] group-hover:gap-3 transition-all">
                    View Event <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          </FadeInSide>

          {/* Secondary card */}
          <FadeInSide from="right" delay={0.1}>
            <Link href={events[1].href} className="group block h-full">
              <div className="relative rounded-[var(--radius-xl)] overflow-hidden h-full min-h-[300px] border border-[var(--text-4)] hover:border-white/[0.1] transition-colors">
                <div className="absolute inset-0 bg-[var(--ink-50)]" />
                <div className="relative p-7 h-full flex flex-col">
                  <div className="mb-auto">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[var(--text-3)] text-[10px] font-medium uppercase tracking-widest border border-[var(--text-4)] px-2.5 py-0.5 rounded-full">
                        {events[1].tag}
                      </span>
                    </div>
                    <h3 className="font-display font-medium text-3xl text-[var(--text-1)] group-hover:text-[var(--text-1)] transition-colors leading-tight mb-1">
                      {events[1].title}
                    </h3>
                    <p className="text-[var(--text-3)] text-sm italic">{events[1].theme}</p>
                  </div>

                  <p className="text-[var(--text-2)] text-sm leading-relaxed my-5">{events[1].desc}</p>

                  <div className="flex items-center gap-2 text-sm font-medium text-[var(--text-2)] group-hover:text-[var(--text-1)] transition-colors">
                    Learn More <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          </FadeInSide>
        </div>

        {/* Mobile CTA */}
        <FadeIn delay={0.2}>
          <div className="mt-6 sm:hidden">
            <Btn href="/events" variant="ghost" size="md" className="w-full justify-center">
              All events <ArrowRight size={14} />
            </Btn>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
