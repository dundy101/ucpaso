import type { Metadata } from 'next'
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
  major: string
  year: string
  bio: string
  initials: string
}

const executive: BoardMember[] = [
  { name: 'Name Placeholder', position: 'President',          major: 'Major · College', year: "'2X", bio: 'Biography coming soon. This space will feature a headshot and short biography.', initials: 'P' },
  { name: 'Name Placeholder', position: 'Vice President',     major: 'Major · College', year: "'2X", bio: 'Biography coming soon.', initials: 'VP' },
  { name: 'Name Placeholder', position: 'Secretary',          major: 'Major · College', year: "'2X", bio: 'Biography coming soon.', initials: 'S' },
  { name: 'Name Placeholder', position: 'Treasurer',          major: 'Major · College', year: "'2X", bio: 'Biography coming soon.', initials: 'T' },
]

const chairs: BoardMember[] = [
  { name: 'Name Placeholder', position: 'Events Chair',       major: 'Major · College', year: "'2X", bio: 'Biography coming soon.', initials: 'EC' },
  { name: 'Name Placeholder', position: 'Marketing Chair',    major: 'Major · College', year: "'2X", bio: 'Biography coming soon.', initials: 'MC' },
  { name: 'Name Placeholder', position: 'Cultural Chair',     major: 'Major · College', year: "'2X", bio: 'Biography coming soon.', initials: 'CC' },
  { name: 'Name Placeholder', position: 'Outreach Chair',     major: 'Major · College', year: "'2X", bio: 'Biography coming soon.', initials: 'OC' },
]

function MemberCard({ m }: { m: BoardMember }) {
  return (
    <div className="glass glass-hover rounded-[var(--radius-lg)] p-6 flex flex-col gap-4 group">
      {/* Headshot placeholder */}
      <div className="w-full aspect-square rounded-[var(--radius)] bg-gradient-to-br from-[var(--ink-100)] to-[var(--ink-50)] flex items-center justify-center border border-[var(--text-4)] group-hover:border-[rgba(201,160,32,0.12)] transition-colors overflow-hidden">
        {/* Replace this div with <Image> once headshots are added */}
        <span className="font-display font-medium text-3xl text-[var(--text-4)] group-hover:text-[var(--gold-dim)] transition-colors">
          {m.initials}
        </span>
      </div>
      <div>
        <p className="text-[var(--gold)] text-[10px] uppercase tracking-widest font-medium mb-0.5">{m.position}</p>
        <h3 className="font-sans font-medium text-[var(--text-1)] text-sm mb-1 group-hover:text-[var(--gold-light)] transition-colors">{m.name}</h3>
        <p className="text-[var(--text-3)] text-xs">{m.major} · {m.year}</p>
      </div>
      <p className="text-[var(--text-3)] text-xs leading-relaxed">{m.bio}</p>
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
          <Stagger stagger={0.07} delay={0.1} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {executive.map(m => <MemberCard key={m.position} m={m} />)}
          </Stagger>

          <FadeIn delay={0.2}>
            <div className="rule my-14" />
          </FadeIn>

          <FadeIn delay={0.2}>
            <Label>Committee Chairs</Label>
            <h2 className="font-display font-medium text-3xl lg:text-4xl text-[var(--text-1)] mt-2 mb-10">Chairs</h2>
          </FadeIn>
          <Stagger stagger={0.07} delay={0.1} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {chairs.map(m => <MemberCard key={m.position} m={m} />)}
          </Stagger>

          <FadeIn delay={0.1}>
            <p className="text-[var(--text-4)] text-xs text-center mt-10 italic">
              Update member data in{' '}
              <code className="text-[var(--gold-dim)]">src/app/board/page.tsx</code>
            </p>
          </FadeIn>
        </div>
      </section>

      <CTA />
    </>
  )
}
