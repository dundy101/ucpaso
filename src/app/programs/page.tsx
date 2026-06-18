import type { Metadata } from 'next'
import PageBanner from '@/components/sections/PageBanner'
import { FadeIn } from '@/components/motion'
import { Label } from '@/components/ui'
import { BookOpen, Users, Star, Sparkles, Briefcase } from 'lucide-react'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Programs',
  description: 'Explore PASO programs at UC — cultural education, community outreach, leadership, and more.',
}

const programs = [
  {
    Icon: BookOpen,
    title: 'Cultural Education',
    desc: 'Workshops, presentations, and experiences that deepen understanding of Filipino history, language, arts, and traditions.',
    tags: ['Workshops', 'Seminars', 'Cultural Events'],
  },
  {
    Icon: Users,
    title: 'Community Outreach',
    desc: 'Connecting with the broader Cincinnati community through volunteer initiatives, partnerships, and cross-cultural exchange.',
    tags: ['Volunteering', 'Partnerships', 'Outreach'],
  },
  {
    Icon: Star,
    title: 'Leadership Development',
    desc: 'Programs designed to cultivate confident, compassionate Filipino-American leaders prepared to create impact beyond campus.',
    tags: ['Mentorship', 'Officer Training', 'Conference'],
  },
  {
    Icon: Sparkles,
    title: 'Social Events',
    desc: 'From game nights to formal banquets, we create spaces for members to build genuine, lasting friendships.',
    tags: ['Socials', 'Banquets', 'Excursions'],
  },
  {
    Icon: Briefcase,
    title: 'Professional Development',
    desc: 'Career panels, networking events, and resume workshops connecting PASO members to professional opportunities and alumni.',
    tags: ['Career Panels', 'Networking', 'Alumni'],
  },
]

export default function ProgramsPage() {
  const [featured, ...rest] = programs
  const FeaturedIcon = featured.Icon

  return (
    <>
      <PageBanner
        eyebrow="What We Do"
        title={<>PASO <em className="italic text-[var(--gold-light)]">Programs</em></>}
        sub="Everything we do at PASO is guided by a commitment to culture, community, leadership, and growth."
      />

      <section className="section">
        <div className="container">
          <FadeIn>
            <Label>Our Initiatives</Label>
            <h2 className="font-display font-medium text-4xl lg:text-5xl text-[var(--text-1)] mt-2 mb-12">
              How we invest
              <br />
              <em className="italic text-[var(--gold-light)]">in our members</em>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-4">
            {/* Featured first program */}
            <FadeIn delay={0.05}>
              <div className="glass rounded-[var(--radius-xl)] p-8 lg:p-10 h-full flex flex-col gap-5 border border-[rgba(201,160,32,0.08)]">
                <div className="w-10 h-10 rounded-xl bg-[rgba(201,160,32,0.1)] flex items-center justify-center">
                  <FeaturedIcon size={18} className="text-[var(--gold)]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display font-medium text-2xl text-[var(--text-1)] mb-2">{featured.title}</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed">{featured.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {featured.tags.map(t => (
                    <span key={t} className="text-[var(--text-3)] text-[10px] uppercase tracking-wider border border-[var(--text-4)] px-2.5 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Remaining programs */}
            <div className="grid grid-cols-1 gap-4">
              {rest.map((p, i) => {
                const PIcon = p.Icon
                return (
                  <FadeIn key={p.title} delay={0.08 + i * 0.06}>
                    <div className="glass glass-hover rounded-[var(--radius-lg)] p-5 flex gap-4 group">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--fog)] flex items-center justify-center group-hover:bg-[rgba(201,160,32,0.1)] transition-colors">
                        <PIcon size={14} className="text-[var(--text-3)] group-hover:text-[var(--gold)] transition-colors" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-sans font-medium text-sm text-[var(--text-1)] mb-1 group-hover:text-[var(--gold-light)] transition-colors">
                          {p.title}
                        </h3>
                        <p className="text-[var(--text-3)] text-xs leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
