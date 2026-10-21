import type { Metadata } from 'next'
import NextImage from 'next/image'
import PageBanner from '@/components/sections/PageBanner'
import { FadeIn, Stagger } from '@/components/motion'
import { Label } from '@/components/ui'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Board',
  description: 'Meet the PASO executive board and leadership team at the University of Cincinnati.',
}

type BoardMember = {
  name: string
  position: string
  year: string
  study: string
  photo?: string
  blurb?: string
}

const executive: BoardMember[] = [
  { name: 'Paolo Rosales',         position: 'President',               year: '4th Year', study: 'Architecture · Minor in Entrepreneurship', photo: '/images/board/paolo-rosales.webp',
    blurb: "Paolo leads PASO's executive board, guiding the events, programs, and community that make PASO a home for Filipino and Filipino-American students at UC." },
  { name: 'Sabrina Halili-Felse',  position: 'Vice President Internal', year: '3rd Year', study: 'International Business', photo: '/images/board/sabrina-halili-felse.webp' },
  { name: 'Jaeden Wheatley',       position: 'Vice President External', year: '3rd Year', study: 'Biological Sciences Pre-Med', photo: '/images/board/jaeden-wheatley.webp' },
  { name: 'Joel Tamunday',         position: 'Secretary',               year: '2nd Year', study: 'Operations Management & International Business', photo: '/images/board/joel-tamunday.webp' },
  { name: 'Yejin No',              position: 'Treasurer',               year: '2nd Year', study: 'Statistics', photo: '/images/board/yejin-no.webp' },
]

const chairs: BoardMember[] = [
  { name: 'Jacob Maluyao',     position: 'Public Relations',  year: '2nd Year', study: 'Communications Design', photo: '/images/board/jacob-maluyao.webp' },
  { name: 'Arianne Bengil',    position: 'Lead Creative',     year: '3rd Year', study: 'Dentistry', photo: '/images/board/arianne-bengil.webp' },
  { name: 'Alex Gapultos',     position: 'Lead Creative',     year: '3rd Year', study: 'Marketing', photo: '/images/board/alex-gapultos.webp' },
  { name: 'Isabella Elmore',   position: 'Event Coordinator', year: '3rd Year', study: 'Marketing & Sports Administration' },
  { name: 'Rene Mamacos',      position: 'Event Coordinator', year: '2nd Year', study: 'Health Sciences', photo: '/images/board/rene-mamacos.webp' },
  { name: 'Ryan Sambas',       position: 'Fundraising Chair', year: '2nd Year', study: 'Aerospace Engineering', photo: '/images/board/ryan-sambas.webp' },
  { name: 'Czyrah Cruz',       position: 'Programs Chair',    year: '2nd Year', study: 'Nursing', photo: '/images/board/czyrah-cruz.webp' },
  { name: 'Alex Dueñas',       position: 'Programs Chair',    year: '2nd Year', study: 'Aerospace Engineering', photo: '/images/board/alex-duenas.webp' },
]

const [president, ...officers] = executive

const initials = (name: string) =>
  name.split(/[\s-]+/).map(w => w[0]).slice(0, 2).join('').toUpperCase()

function Photo({ m, sizes }: { m: BoardMember; sizes: string }) {
  return m.photo ? (
    <NextImage
      src={m.photo}
      alt={`${m.name}, ${m.position}`}
      fill
      sizes={sizes}
      className="board-photo object-cover object-top"
    />
  ) : (
    <div className="absolute inset-0 bg-gradient-to-br from-[var(--ink-100)] to-[var(--ink-50)] diagonal-grid flex items-center justify-center">
      <span className="font-display italic text-5xl text-[var(--text-4)] group-hover:text-[var(--gold-dim)] transition-colors duration-500 -translate-y-8">
        {initials(m.name)}
      </span>
    </div>
  )
}

/* Magazine-cover style card: name and role sit on the photo */
function MemberCard({ m }: { m: BoardMember }) {
  return (
    <div className="group relative aspect-[3/4] rounded-[var(--radius-lg)] overflow-hidden border border-[var(--text-4)] hover:border-[rgba(201,160,32,0.35)] transition-colors duration-500 bg-[var(--ink-50)]">
      <Photo m={m} sizes="(min-width: 1024px) 280px, 50vw" />
      <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[rgba(8,11,20,0.95)] via-[rgba(8,11,20,0.6)] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
        <p className="text-[var(--gold)] text-[8px] sm:text-[10px] uppercase tracking-widest font-semibold mb-1">{m.position}</p>
        <h3 className="font-display font-medium text-[15px] sm:text-xl leading-tight text-white group-hover:text-[var(--gold-light)] transition-colors duration-300">{m.name}</h3>
        <p className="text-[rgba(255,255,255,0.6)] text-[10px] sm:text-xs leading-snug mt-1 sm:mt-1.5">{m.study}</p>
        <p className="text-[rgba(255,255,255,0.4)] text-[10px] sm:text-[11px] mt-0.5">{m.year}</p>
      </div>
    </div>
  )
}

/* Wide feature for the President */
function Spotlight({ m }: { m: BoardMember }) {
  return (
    <div className="group relative grid grid-cols-1 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] rounded-[var(--radius-xl)] overflow-hidden border border-[rgba(201,160,32,0.2)] bg-[var(--ink-50)]">
      <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[480px] overflow-hidden">
        <Photo m={m} sizes="(min-width: 768px) 460px, 100vw" />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-transparent to-[rgba(13,18,32,0.9)] pointer-events-none" />
      </div>
      <div className="relative p-8 sm:p-10 lg:p-14 flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 diagonal-grid opacity-60 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[rgba(201,160,32,0.08)] blur-[90px] pointer-events-none group-hover:bg-[rgba(201,160,32,0.14)] transition-colors duration-700" />
        <div className="relative">
          <p className="eyebrow mb-5">{m.position}</p>
          <h3 className="font-display font-medium text-5xl lg:text-6xl leading-[1.05] text-[var(--text-1)]">
            {m.name.split(' ')[0]}{' '}
            <em className="italic text-[var(--gold-light)]">{m.name.split(' ').slice(1).join(' ')}</em>
          </h3>
          <div className="rule-gold my-7 max-w-xs" />
          {m.blurb && <p className="text-[var(--text-2)] text-base leading-relaxed max-w-md">{m.blurb}</p>}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-7 text-xs uppercase tracking-widest text-[var(--text-3)]">
            <span>{m.year}</span>
            <span>{m.study}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BoardPage() {
  return (
    <>
      <PageBanner
        eyebrow="Leadership"
        title={<>Meet the <em className="italic text-[var(--gold-light)]">Board</em></>}
        sub="The dedicated students who bring PASO to life — planning events, building community, and representing our culture at UC."
      />

      <section className="section">
        <div className="container">
          <FadeIn>
            <Label>Executive Board</Label>
            <h2 className="font-display font-medium text-3xl lg:text-4xl text-[var(--text-1)] mt-2 mb-10">Leadership</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mb-5">
              <Spotlight m={president} />
            </div>
          </FadeIn>
          <Stagger stagger={0.07} delay={0.15} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {officers.map(m => <MemberCard key={m.name} m={m} />)}
          </Stagger>

          <FadeIn delay={0.2}>
            <div className="rule my-14" />
          </FadeIn>

          <FadeIn delay={0.2}>
            <Label>Officers & Chairs</Label>
            <h2 className="font-display font-medium text-3xl lg:text-4xl text-[var(--text-1)] mt-2 mb-10">Officers & Chairs</h2>
          </FadeIn>
          <Stagger stagger={0.07} delay={0.1} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {chairs.map(m => <MemberCard key={m.name} m={m} />)}
          </Stagger>
        </div>
      </section>

      <CTA />
    </>
  )
}
