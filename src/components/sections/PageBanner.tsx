import { ReactNode } from 'react'
import { FadeIn } from '@/components/motion'

interface PageBannerProps {
  eyebrow?: string
  title: ReactNode
  sub?: string
  align?: 'left' | 'center'
}

export default function PageBanner({ eyebrow, title, sub, align = 'left' }: PageBannerProps) {
  return (
    <section
      className="relative pt-36 pb-20 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0D1628 0%, #080B14 70%)' }}
    >
      <div className="absolute inset-0 diagonal-grid opacity-60" />
      <div className="absolute -top-20 right-0 w-96 h-96 bg-[rgba(26,58,92,0.12)] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px" />

      <div className={`container relative z-10 ${align === 'center' ? 'text-center' : ''}`}>
        {eyebrow && (
          <FadeIn>
            <div className={`flex items-center gap-2 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
              <span className="w-5 h-px bg-[var(--gold)]" />
              <span className="text-[var(--gold)] text-[11px] font-medium uppercase tracking-widest2">{eyebrow}</span>
            </div>
          </FadeIn>
        )}
        <FadeIn delay={0.1}>
          <h1 className="font-display font-medium text-5xl lg:text-6xl xl:text-7xl text-[var(--text-1)] leading-[1.03]">
            {title}
          </h1>
        </FadeIn>
        {sub && (
          <FadeIn delay={0.2}>
            <p className={`text-[var(--text-2)] text-base lg:text-lg leading-relaxed mt-4 ${align === 'center' ? 'max-w-xl mx-auto' : 'max-w-xl'}`}>
              {sub}
            </p>
          </FadeIn>
        )}
      </div>
    </section>
  )
}
