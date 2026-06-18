import Link from 'next/link'
import { FadeIn } from '@/components/motion'
import { ArrowRight, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section
      className="section relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0C1628 0%, #080B14 55%, #130810 100%)' }}
      aria-label="Join PASO"
    >
      <div className="absolute top-0 inset-x-0 h-px rule-gold" />

      {/* Background: subtle sun motif */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.025]"
          viewBox="0 0 700 700"
          fill="none"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={i}
              x1="350" y1="350"
              x2={350 + 350 * Math.cos((i * Math.PI) / 4)}
              y2={350 + 350 * Math.sin((i * Math.PI) / 4)}
              stroke="#C9A020" strokeWidth="1"
            />
          ))}
          <circle cx="350" cy="350" r="70"  stroke="#C9A020" strokeWidth="1" />
          <circle cx="350" cy="350" r="130" stroke="#C9A020" strokeWidth="0.5" opacity="0.4" />
        </svg>
      </div>

      <div className="container relative z-10 text-center max-w-3xl mx-auto">
        <FadeIn>
          <span className="eyebrow justify-center">Become Part of the Family</span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-display font-medium text-5xl lg:text-6xl xl:text-7xl text-[var(--text-1)] leading-[1.03] mt-4">
            Find your community
            <br />
            <em className="italic text-[var(--gold-light)]">at UC.</em>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-[var(--text-2)] text-base lg:text-lg leading-relaxed max-w-xl mx-auto mt-6">
            Whether you're Filipino, Filipino-American, or simply drawn to the culture —
            PASO is a place where everyone is welcomed as family.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href="https://getinvolved.uc.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-[var(--gold)] text-[var(--ink)] text-sm font-bold hover:bg-[var(--gold-light)] transition-all duration-200 shadow-[0_0_32px_rgba(201,160,32,0.2)] hover:shadow-[0_0_48px_rgba(201,160,32,0.35)] active:scale-[0.97]"
            >
              Join PASO <ArrowRight size={14} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-full border border-white/[0.12] text-[var(--text-2)] text-sm font-medium hover:border-white/25 hover:text-[var(--text-1)] hover:bg-white/[0.03] transition-all active:scale-[0.97]"
            >
              <Mail size={14} strokeWidth={1.5} />
              Get in Touch
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
