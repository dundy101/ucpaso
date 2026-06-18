import type { Metadata } from 'next'
import Link from 'next/link'
import Countdown from '@/components/ui/Countdown'
import { FadeIn, FadeInSide, Stagger } from '@/components/motion'
import { Label, Btn, Tag, ExtLink } from '@/components/ui'
import { Calendar, Clock, MapPin, Utensils, Shirt, Car, ExternalLink, Mail, Instagram, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mock Debut 2026',
  description: 'Mock Debut 2026: Under the Sea — November 7, 2026 at the TUC Great Hall. PASO\'s fifth annual Filipino debut celebration at UC.',
}

const itinerary = [
  { time: '4:00 PM', event: 'Doors Open',                   note: '' },
  { time: '5:00 PM', event: 'Event Begins',                  note: '' },
  { time: '5:05 PM', event: 'Family Introduction & Speech',  note: '' },
  { time: '5:10 PM', event: 'Court Introduction & Performance', note: '' },
  { time: '5:20 PM', event: 'Debutante Introduction & Performance', note: '' },
  { time: '5:30 PM', event: 'Dinner & Intermission',         note: 'Filipino cuisine served' },
  { time: '6:15 PM', event: '9 Roses',                       note: 'Traditional ceremony' },
  { time: '6:25 PM', event: '9 Candles',                     note: 'Traditional ceremony' },
  { time: '6:35 PM', event: 'Cake Announcement',             note: '' },
  { time: '6:40 PM', event: 'Game #1 — Bring Me',            note: '' },
  { time: '6:50 PM', event: 'Ritmo Performance',             note: '' },
  { time: '7:00 PM', event: 'Game #2',                       note: '' },
  { time: '7:10 PM', event: 'Ritmo Performance',             note: '' },
  { time: '7:20 PM', event: 'Conclusion',                    note: '' },
]

export default function MockDebutPage() {
  return (
    <>
      {/* ════════════════════════════════════════
          HERO — cinematic, full screen
      ════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        aria-label="Mock Debut 2026 hero"
      >
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#04090F] via-[#060D18] to-[var(--ink)]" />
        {/* Ocean glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[rgba(10,40,80,0.35)] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[var(--ink)] to-transparent" />

        {/* Subtle wave pattern — Under the Sea motif */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="wave" x="0" y="0" width="120" height="60" patternUnits="userSpaceOnUse">
                <path d="M 0 30 Q 30 10 60 30 Q 90 50 120 30" fill="none" stroke="#C9A020" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave)" />
          </svg>
        </div>

        <div className="container relative z-10 pt-28 pb-16">
          <div className="max-w-4xl">
            <FadeIn>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Tag variant="blue">5th Year at UC</Tag>
                <Tag variant="gold">Flagship Event</Tag>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-4 h-px bg-[var(--gold)]" />
                <span className="text-[var(--gold)] text-[10px] font-medium uppercase tracking-widest2">
                  PASO UC presents
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h1 className="font-display font-medium text-6xl sm:text-7xl lg:text-8xl xl:text-[6.5rem] text-[var(--text-1)] leading-[1.0]">
                Mock Debut
                <br />
                <em className="italic text-[var(--gold-light)]">2026</em>
              </h1>
            </FadeIn>

            <FadeIn delay={0.22}>
              <p className="text-[var(--text-2)] text-xl lg:text-2xl font-display italic mt-3 mb-8">
                Under the Sea
              </p>
            </FadeIn>

            {/* Event quick facts */}
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-5 mb-10 text-sm text-[var(--text-2)]">
                <span className="flex items-center gap-1.5"><Calendar size={14} strokeWidth={1.5} className="text-[var(--gold)]" /> November 7, 2026</span>
                <span className="flex items-center gap-1.5"><Clock size={14} strokeWidth={1.5} className="text-[var(--gold)]" /> Doors 4:00 PM · Show 5:00 PM</span>
                <span className="flex items-center gap-1.5"><MapPin size={14} strokeWidth={1.5} className="text-[var(--gold)]" /> TUC Great Hall, UC</span>
              </div>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.38}>
              <div className="flex flex-wrap gap-3 mb-16">
                <Btn
                  href="https://forms.gle/1PtGkQoueDaRT2PG7"
                  variant="primary"
                  size="lg"
                  external
                >
                  RSVP Now <ArrowRight size={14} />
                </Btn>
                <Btn
                  href="https://forms.gle/2Bw2bi366UPn8YLt5"
                  variant="outline"
                  size="lg"
                  external
                >
                  Afterset Tickets
                </Btn>
              </div>
            </FadeIn>

            {/* ── COUNTDOWN ── */}
            <FadeIn delay={0.45}>
              <div>
                <p className="text-[var(--text-4)] text-[10px] uppercase tracking-widest2 font-sans mb-4">
                  Countdown to doors open
                </p>
                <Countdown />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          EVENT DETAILS
      ════════════════════════════════════════ */}
      <section className="section bg-[var(--ink-50)]" aria-label="Event details">
        <div className="absolute top-0 inset-x-0 h-px rule-gold" />
        <div className="container">
          <FadeIn>
            <Label>Event Details</Label>
            <h2 className="font-display font-medium text-4xl lg:text-5xl text-[var(--text-1)] mt-2 mb-10">
              Everything you need
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* RSVP */}
            <FadeIn delay={0.05}>
              <a
                href="https://forms.gle/1PtGkQoueDaRT2PG7"
                target="_blank"
                rel="noopener noreferrer"
                className="group glass glass-hover rounded-[var(--radius-lg)] p-6 flex flex-col gap-3 h-full"
              >
                <div className="w-9 h-9 rounded-xl bg-[rgba(201,160,32,0.1)] flex items-center justify-center">
                  <ExternalLink size={16} className="text-[var(--gold)]" strokeWidth={1.5} />
                </div>
                <h3 className="font-sans font-medium text-[var(--text-1)] text-sm group-hover:text-[var(--gold-light)] transition-colors">RSVP</h3>
                <p className="text-[var(--text-3)] text-xs leading-relaxed flex-1">Secure your seat at Mock Debut 2026. Free to attend.</p>
                <span className="text-[var(--gold)] text-xs font-medium group-hover:underline">RSVP Now →</span>
              </a>
            </FadeIn>

            {/* Afterset */}
            <FadeIn delay={0.1}>
              <a
                href="https://forms.gle/2Bw2bi366UPn8YLt5"
                target="_blank"
                rel="noopener noreferrer"
                className="group glass glass-hover rounded-[var(--radius-lg)] p-6 flex flex-col gap-3 h-full"
              >
                <div className="w-9 h-9 rounded-xl bg-[rgba(26,58,92,0.4)] flex items-center justify-center">
                  <ExternalLink size={16} className="text-[#7AADFF]" strokeWidth={1.5} />
                </div>
                <h3 className="font-sans font-medium text-[var(--text-1)] text-sm group-hover:text-[var(--gold-light)] transition-colors">Afterset Tickets</h3>
                <p className="text-[var(--text-3)] text-xs leading-relaxed flex-1">
                  Continue the night at the afterset — November 7 at 10:00 PM.
                  <br /><span className="text-[var(--text-4)] italic">Location TBD</span>
                </p>
                <span className="text-[#7AADFF] text-xs font-medium group-hover:underline">Get Tickets →</span>
              </a>
            </FadeIn>

            {/* Dress Code */}
            <FadeIn delay={0.15}>
              <div className="glass rounded-[var(--radius-lg)] p-6 flex flex-col gap-3 h-full">
                <div className="w-9 h-9 rounded-xl bg-[rgba(255,255,255,0.04)] flex items-center justify-center">
                  <Shirt size={16} className="text-[var(--text-2)]" strokeWidth={1.5} />
                </div>
                <h3 className="font-sans font-medium text-[var(--text-1)] text-sm">Dress Code</h3>
                <p className="text-[var(--text-2)] text-sm font-medium">Formal or Cultural Attire</p>
                <p className="text-[var(--text-3)] text-xs leading-relaxed flex-1">
                  Suits, gowns, barong tagalog, baro't saya, or other cultural formal wear are all welcome and encouraged.
                </p>
              </div>
            </FadeIn>

            {/* Catering */}
            <FadeIn delay={0.2}>
              <div className="glass rounded-[var(--radius-lg)] p-6 flex flex-col gap-3 h-full sm:col-span-2 lg:col-span-1">
                <div className="w-9 h-9 rounded-xl bg-[rgba(255,255,255,0.04)] flex items-center justify-center">
                  <Utensils size={16} className="text-[var(--text-2)]" strokeWidth={1.5} />
                </div>
                <h3 className="font-sans font-medium text-[var(--text-1)] text-sm">Catering</h3>
                <p className="text-[var(--text-3)] text-xs leading-relaxed">
                  Vegetarian, vegan, and halal options available.
                </p>
                <div className="text-[var(--text-3)] text-xs leading-relaxed space-y-1">
                  <p className="text-[var(--text-4)] uppercase tracking-wider text-[9px] mb-1">Entrees donated by</p>
                  <p>Halili-Felse Family</p>
                  <p>Bengil Family</p>
                  <p>Mamacos Family</p>
                  <p>Rosales Family</p>
                  <p className="text-[var(--text-4)] uppercase tracking-wider text-[9px] mt-2 mb-1">Desserts by</p>
                  <p>Stacie Tan</p>
                </div>
              </div>
            </FadeIn>

            {/* Venue & Parking */}
            <FadeIn delay={0.25}>
              <div className="glass rounded-[var(--radius-lg)] p-6 flex flex-col gap-3 h-full">
                <div className="w-9 h-9 rounded-xl bg-[rgba(255,255,255,0.04)] flex items-center justify-center">
                  <Car size={16} className="text-[var(--text-2)]" strokeWidth={1.5} />
                </div>
                <h3 className="font-sans font-medium text-[var(--text-1)] text-sm">Venue & Parking</h3>
                <p className="text-[var(--text-2)] text-sm">Tangeman University Center (TUC) Great Hall</p>
                <p className="text-[var(--text-3)] text-xs">University of Cincinnati, Cincinnati, OH</p>
                {/*
                  Replace the href below with your actual parking PDF link once available.
                  The PDF should be placed in the /public folder or linked from Google Drive.
                */}
                <a
                  href="/parking-directions.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 text-[var(--gold)] text-xs font-medium hover:text-[var(--gold-light)] transition-colors"
                >
                  <Car size={11} strokeWidth={1.5} />
                  Parking Directions PDF
                  <ExternalLink size={10} />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHAT IS A DEBUT?
      ════════════════════════════════════════ */}
      <section className="section" aria-label="What is a Filipino Debut?">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
            <div>
              <FadeIn>
                <Label>A Filipino Tradition</Label>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="font-display font-medium text-4xl lg:text-5xl text-[var(--text-1)] leading-tight mt-3">
                  What is a
                  <br />
                  <em className="italic text-[var(--gold-light)]">Filipino Debut?</em>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="mt-6 rule-gold" />
              </FadeIn>
              <FadeIn delay={0.25}>
                <div className="flex items-center gap-3 mt-6">
                  <div className="text-4xl font-display font-medium text-[var(--gold)] opacity-30">5</div>
                  <p className="text-[var(--text-3)] text-sm">Years of Mock Debut at UC</p>
                </div>
              </FadeIn>
            </div>

            <div className="space-y-5">
              <FadeInSide from="right" delay={0.1}>
                <p className="text-[var(--text-1)] text-base lg:text-[17px] leading-relaxed font-sans">
                  On November 7, 2026, PASO will proudly bring the beloved Filipino tradition of a
                  debut to UC for the fifth year in a row — an evening that has become one of the
                  most anticipated cultural events on campus.
                </p>
              </FadeInSide>
              <FadeInSide from="right" delay={0.18}>
                <p className="text-[var(--text-2)] text-base leading-relaxed font-sans">
                  A debut is a cherished coming-of-age ceremony that honors a young woman's
                  18th birthday, marking her transition into adulthood through meaningful
                  traditions, family, and community. Rooted in the richness of Filipino heritage,
                  it is a night filled with grace, storytelling, and celebration.
                </p>
              </FadeInSide>
              <FadeInSide from="right" delay={0.26}>
                <p className="text-[var(--text-2)] text-base leading-relaxed font-sans">
                  This year, PASO will spotlight one of its own members as our debutante in an
                  evening filled with traditional and modern Filipino dance performances, authentic
                  cuisine, and the timeless customs that give this tradition its heart.
                </p>
              </FadeInSide>
              <FadeInSide from="right" delay={0.34}>
                <p className="text-[var(--text-3)] text-sm leading-relaxed font-sans italic">
                  Through this event, PASO invites all backgrounds to witness, share, and celebrate
                  the values of heritage and family spirit that continue to unite our communities.
                </p>
              </FadeInSide>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          ITINERARY
      ════════════════════════════════════════ */}
      <section className="section bg-[var(--ink-50)] relative" aria-label="Event itinerary">
        <div className="absolute top-0 inset-x-0 h-px rule-gold" />
        <div className="container max-w-3xl">
          <FadeIn>
            <Label>Evening Programme</Label>
            <h2 className="font-display font-medium text-4xl lg:text-5xl text-[var(--text-1)] mt-2 mb-12">
              The Evening
              <em className="italic text-[var(--gold-light)]"> Unfolds</em>
            </h2>
          </FadeIn>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[80px] top-0 bottom-0 w-px bg-[var(--text-4)]" aria-hidden="true" />

            <Stagger stagger={0.04} delay={0.1}>
              {itinerary.map((item, i) => (
                <div key={i} className="flex items-start gap-6 mb-0 group">
                  {/* Time */}
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-[var(--text-3)] font-sans text-xs tabular-nums">{item.time}</span>
                  </div>
                  {/* Dot */}
                  <div className="relative flex-shrink-0 flex flex-col items-center" style={{ width: '1px' }}>
                    <div className={`relative z-10 w-2 h-2 rounded-full mt-1.5 ${
                      i === 0 ? 'bg-[var(--gold)] shadow-[0_0_8px_rgba(201,160,32,0.5)]' : 'bg-[var(--text-4)] group-hover:bg-[var(--gold-dim)] transition-colors'
                    }`} />
                  </div>
                  {/* Event */}
                  <div className="flex-1 pb-7">
                    <p className="text-[var(--text-1)] font-sans font-medium text-sm leading-snug group-hover:text-[var(--gold-light)] transition-colors">
                      {item.event}
                    </p>
                    {item.note && (
                      <p className="text-[var(--text-3)] text-xs mt-0.5 italic">{item.note}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Afterset */}
              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-[var(--gold)] font-sans text-xs tabular-nums font-medium">10:00 PM</span>
                </div>
                <div className="relative flex-shrink-0 flex flex-col items-center" style={{ width: '1px' }}>
                  <div className="relative z-10 w-2.5 h-2.5 rounded-full mt-1 bg-[var(--gold)] shadow-[0_0_10px_rgba(201,160,32,0.6)]" />
                </div>
                <div className="flex-1 pb-4">
                  <p className="text-[var(--gold-light)] font-sans font-semibold text-sm">Afterset Begins</p>
                  <p className="text-[var(--text-3)] text-xs mt-0.5">Location TBD — tickets required</p>
                  <Btn
                    href="https://forms.gle/2Bw2bi366UPn8YLt5"
                    variant="outline"
                    size="sm"
                    external
                    className="mt-3"
                  >
                    Get Afterset Tickets
                  </Btn>
                </div>
              </div>
            </Stagger>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PHOTO GALLERY (placeholder)
      ════════════════════════════════════════ */}
      <section className="section" aria-label="Photo gallery">
        <div className="container">
          <FadeIn>
            <Label>Gallery</Label>
            <h2 className="font-display font-medium text-4xl lg:text-5xl text-[var(--text-1)] mt-2 mb-3">
              Past Moments
            </h2>
            <p className="text-[var(--text-3)] text-sm mb-10 max-w-md">
              A glimpse into previous Mock Debut celebrations and our members' personal debut milestones.
            </p>
          </FadeIn>

          {/* Gallery grid — placeholder blocks */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div
                  className={`glass rounded-[var(--radius)] overflow-hidden ${
                    i === 0 ? 'row-span-2 col-span-1 lg:col-span-1' : ''
                  }`}
                  style={{ paddingBottom: i === 0 ? '200%' : '100%', position: 'relative' }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-[var(--text-4)] text-[10px] uppercase tracking-wider text-center px-3">
                      {i < 5 ? 'Past Mock Debut' : "Member's Debut"}
                      <br />Photo {i + 1}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <p className="text-[var(--text-4)] text-xs text-center italic mt-6">
              Replace placeholder blocks with real images in{' '}
              <code className="text-[var(--gold-dim)]">src/app/events/mock-debut/page.tsx</code>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CONTACT
      ════════════════════════════════════════ */}
      <section className="section-sm bg-[var(--ink-50)] relative" aria-label="Contact">
        <div className="absolute top-0 inset-x-0 h-px rule-gold" />
        <div className="container max-w-2xl text-center">
          <FadeIn>
            <Label>Questions?</Label>
            <h2 className="font-display font-medium text-3xl lg:text-4xl text-[var(--text-1)] mt-3 mb-6">
              We'd love to hear from you
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:uc.paso17@gmail.com"
                className="flex items-center gap-2 h-10 px-5 rounded-full glass glass-hover text-[var(--text-2)] text-sm hover:text-[var(--text-1)] transition-colors"
              >
                <Mail size={14} strokeWidth={1.5} /> uc.paso17@gmail.com
              </a>
              <a
                href="https://instagram.com/uc_paso"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 h-10 px-5 rounded-full glass glass-hover text-[var(--text-2)] text-sm hover:text-[var(--text-1)] transition-colors"
              >
                <Instagram size={14} strokeWidth={1.5} /> @uc_paso
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
