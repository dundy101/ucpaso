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
}

const executive: BoardMember[] = [
  { name: 'Paolo Rosales',         position: 'President',               year: '4th Year', study: 'Science in Architecture · Minor in Entrepreneurship', photo: '/images/board/paolo-rosales.webp' },
  { name: 'Sabrina Halili-Felse',  position: 'Vice President Internal', year: '3rd Year', study: 'International Business', photo: '/images/board/sabrina-halili-felse.webp' },
  { name: 'Jaeden Wheatley',       position: 'Vice President External', year: '3rd Year', study: 'Biological Sciences Pre-Med', photo: '/images/board/jaeden-wheatley.webp' },
  { name: 'Joel Tamunday',         position: 'Secretary',               year: '2nd Year', study: 'Operations Management & International Business', photo: '/images/board/joel-tamunday.webp' },
  { name: 'Yejin No',              position: 'Treasurer',               year: '2nd Year', study: 'Statistics', photo: '/images/board/yejin-no.webp' },
]

const chairs: BoardMember[] = [
  { name: 'Jacob Maluyao',     position: 'Public Relations',  year: '2nd Year', study: 'DAAP · Communications Design', photo: '/images/board/jacob-maluyao.webp' },
  { name: 'Arianne Bengil',    position: 'Lead Creative',     year: '3rd Year', study: 'Dentistry', photo: '/images/board/arianne-bengil.webp' },
  { name: 'Alex Gapultos',     position: 'Lead Creative',     year: '3rd Year', study: 'Marketing', photo: '/images/board/alex-gapultos.webp' },
  { name: 'Isabella Elmore',   position: 'Event Coordinator', year: '3rd Year', study: 'Marketing & Sports Administration' },
  { name: 'Rene Mamacos',      position: 'Event Coordinator', year: '2nd Year', study: 'Health Sciences Pre-Physician Assistant', photo: '/images/board/rene-mamacos.webp' },
  { name: 'Ryan Sambas',       position: 'Fundraising Chair', year: '2nd Year', study: 'Aerospace Engineering', photo: '/images/board/ryan-sambas.webp' },
  { name: 'Czyrah Cruz',       position: 'Programs Chair',    year: '2nd Year', study: 'Nursing', photo: '/images/board/czyrah-cruz.webp' },
  { name: 'Alex Dueñas',       position: 'Programs Chair',    year: '2nd Year', study: 'Aerospace Engineering', photo: '/images/board/alex-duenas.webp' },
]

const [president, ...officers] = executive

const initials = (name: string) =>
  name.split(/[\s-]+/).map(w => w[0]).slice(0, 2).join('').toUpperCase()

function MemberCard({ m }: { m: BoardMember }) {
  return (
    <div className="glass glass-hover rounded-[var(--radius-lg)] p-4 flex flex-col gap-4 group h-full">
      <div className="relative w-full aspect-[3/4] rounded-[var(--radius)] bg-gradient-to-br from-[var(--ink-100)] to-[var(--ink-50)] flex items-center justify-center border border-[var(--text-4)] group-hover:border-[rgba(201,160,32,0.12)] transition-colors overflow-hidden">
        {m.photo ? (
          <NextImage
            src={m.photo}
            alt={`${m.name}, ${m.position}`}
            fill
            sizes="(min-width: 1024px) 22vw, 45vw"
            className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
          />
        ) : (
          <span className="font-display font-medium text-3xl text-[var(--text-4)] group-hover:text-[var(--gold-dim)] transition-colors">
            {initials(m.name)}
          </span>
        )}
      </div>
      <div className="px-1 pb-1">
        <p className="text-[var(--gold)] text-[10px] uppercase tracking-widest font-medium mb-0.5">{m.position}</p>
        <h3 className="font-sans font-medium text-[var(--text-1)] text-sm mb-1 group-hover:text-[var(--gold-light)] transition-colors">{m.name}</h3>
        <p className="text-[var(--text-3)] text-xs leading-relaxed">{m.study}</p>
        <p className="text-[var(--text-4)] text-[11px] mt-1">{m.year}</p>
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
            <div className="w-full max-w-[280px] mx-auto mb-4">
              <MemberCard m={president} />
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
