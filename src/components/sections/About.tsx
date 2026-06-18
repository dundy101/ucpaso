import { FadeIn, FadeInSide } from '@/components/motion'
import { Label, Btn } from '@/components/ui'

const pillars = [
  { title: 'Cultural Celebration',   body: 'From debut nights to cultural showcases, we honor Filipino heritage through living tradition.' },
  { title: 'Community & Belonging',  body: 'PASO is a family. We build bonds that outlast degrees and friendships that cross borders.' },
  { title: 'Leadership & Growth',    body: 'We develop the next generation of Filipino-American leaders through action, service, and mentorship.' },
]

export default function About() {
  return (
    <section id="about" className="section relative">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: text */}
          <div>
            <FadeIn>
              <Label>Who We Are</Label>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-display font-medium text-4xl lg:text-5xl xl:text-6xl leading-[1.05] text-[var(--text-1)] mt-4">
                More than a club —{' '}
                <em className="italic text-[var(--gold-light)]">a second family.</em>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-[var(--text-2)] text-base lg:text-[17px] leading-relaxed max-w-md">
                PASO is dedicated to celebrating Filipino culture, fostering community, and
                creating opportunities for cultural appreciation, leadership, and lifelong
                friendships among students at the University of Cincinnati.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p className="mt-4 text-[var(--text-3)] text-sm lg:text-base leading-relaxed max-w-md">
                Rooted in the spirit of <span className="italic text-[var(--text-2)]">bayanihan</span> — the Filipino
                tradition of communal unity — we welcome students of every background who
                are curious about the culture or looking for a place to call home at UC.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-3 mt-8">
                <Btn href="/more" variant="outline" size="md">Our Story</Btn>
                <Btn href="/board" variant="ghost" size="md">Meet the Board</Btn>
              </div>
            </FadeIn>
          </div>

          {/* Right: pillar list */}
          <div className="space-y-px">
            {pillars.map((p, i) => (
              <FadeInSide key={p.title} from="right" delay={0.1 + i * 0.1}>
                <div className="group flex items-start gap-5 py-6 border-b border-[var(--text-4)] last:border-0 hover:border-[rgba(201,160,32,0.15)] transition-colors cursor-default">
                  {/* Index */}
                  <span className="flex-shrink-0 w-7 h-7 rounded-full border border-[var(--text-4)] flex items-center justify-center text-[var(--text-4)] font-sans text-xs group-hover:border-[var(--gold-dim)] group-hover:text-[var(--gold)] transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-sans font-medium text-sm text-[var(--text-2)] group-hover:text-[var(--text-1)] transition-colors mb-1.5">
                      {p.title}
                    </h3>
                    <p className="font-sans text-sm text-[var(--text-3)] leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </FadeInSide>
            ))}

            {/* Thin flag stripe */}
            <FadeIn delay={0.5}>
              <div className="flex h-0.5 rounded-full overflow-hidden mt-6">
                <div className="flex-1 bg-[var(--ocean)]" />
                <div className="flex-1 bg-[var(--text-4)]" />
                <div className="flex-1 bg-[rgba(180,30,40,0.4)]" />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
