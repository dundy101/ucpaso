import { FadeIn, Stagger } from '@/components/motion'
import { Label } from '@/components/ui'
import { CalendarDays, ExternalLink, Clock, MapPin } from 'lucide-react'
import Link from 'next/link'

const upcoming = [
  {
    month: 'NOV', day: '7', year: '2026',
    title: 'Mock Debut 2026',
    subtitle: 'Under the Sea',
    time: '5:00 PM', location: 'TUC Great Hall',
    tag: 'Flagship', href: '/events/mock-debut',
    live: true,
  },
  {
    month: 'TBD', day: '—', year: '2026',
    title: 'WorldWide',
    subtitle: 'Cultural Showcase',
    time: 'TBA', location: 'University of Cincinnati',
    tag: 'Announced', href: '/events/worldwide',
    live: false,
  },
]

export default function Calendar() {
  return (
    <section className="section bg-[var(--ink-50)] relative">
      <div className="absolute top-0 inset-x-0 h-px rule-gold" />
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-14">

          {/* Google Calendar embed */}
          <FadeIn>
            <div>
              <div className="flex items-center justify-between mb-5">
                <div>
                  <Label>What's On</Label>
                  <h2 className="font-display font-medium text-3xl lg:text-4xl text-[var(--text-1)] leading-tight mt-1">
                    PASO Calendar
                  </h2>
                </div>
                <a
                  href="https://calendar.google.com/calendar/u/0/r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1.5 text-[var(--text-3)] text-xs hover:text-[var(--gold)] transition-colors"
                  aria-label="Open in Google Calendar"
                >
                  <ExternalLink size={12} />
                  Open Calendar
                </a>
              </div>

              <div className="glass rounded-[var(--radius-xl)] overflow-hidden">
                <div className="flex items-center gap-2.5 px-5 py-3.5 border-b border-[var(--text-4)]">
                  <CalendarDays size={14} className="text-[var(--gold)]" strokeWidth={1.5} />
                  <span className="text-[var(--text-3)] text-xs font-medium">Google Calendar · PASO UC</span>
                </div>

                <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                  <iframe
                    src="https://calendar.google.com/calendar/embed?src=b0a63a9325b25e0865eb0fbf9cf9dd2cda43bf38cfe35f0f038576418cd7e2c0%40group.calendar.google.com&ctz=America%2FChicago&bgcolor=%230D1220&showTitle=0&showNav=1&showPrint=0&showTabs=0&showCalendars=0&mode=AGENDA"
                    className="absolute inset-0 w-full h-full border-0"
                    title="PASO Events Calendar"
                    loading="lazy"
                    aria-label="PASO events calendar"
                  />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Upcoming cards */}
          <div className="flex flex-col justify-start">
            <FadeIn delay={0.1}>
              <p className="text-[var(--text-4)] text-[10px] uppercase tracking-widest2 font-medium mb-4">
                Upcoming
              </p>
            </FadeIn>
            <Stagger stagger={0.1} delay={0.15}>
              {upcoming.map(ev => (
                <Link key={ev.title} href={ev.href} className="block group">
                  <div className="glass glass-hover rounded-[var(--radius-lg)] p-4 mb-3 flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[rgba(201,160,32,0.07)] border border-[rgba(201,160,32,0.12)] flex flex-col items-center justify-center">
                      <span className="text-[var(--gold)] text-[8px] font-semibold uppercase leading-none tracking-wider">{ev.month}</span>
                      <span className="text-[var(--text-1)] font-display text-xl font-medium leading-none mt-px">{ev.day}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <h3 className="text-[var(--text-1)] font-medium text-sm group-hover:text-[var(--gold-light)] transition-colors truncate">
                          {ev.title}
                        </h3>
                        {ev.live && (
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        )}
                      </div>
                      <p className="text-[var(--text-3)] text-xs italic mb-2">{ev.subtitle}</p>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-[var(--text-4)] text-[10px]">
                          <Clock size={9} strokeWidth={1.5} /> {ev.time}
                        </span>
                        <span className="flex items-center gap-1 text-[var(--text-4)] text-[10px]">
                          <MapPin size={9} strokeWidth={1.5} /> {ev.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}

              <FadeIn delay={0.3}>
                <Link
                  href="/events"
                  className="text-center block py-3 text-[var(--text-3)] text-xs hover:text-[var(--gold)] transition-colors"
                >
                  All events →
                </Link>
              </FadeIn>
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  )
}
