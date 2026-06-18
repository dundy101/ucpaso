import { Counter, FadeIn } from '@/components/motion'

const stats = [
  { end: 150, suffix: '+', label: 'Active Members',   sub: 'Students united in culture' },
  { end: 30,  suffix: '+', label: 'Events Hosted',    sub: 'Cultural & social events per year' },
  { end: 7,   suffix: '',  label: 'Years Active',      sub: 'Building community since 2017' },
  { end: 500, suffix: '+', label: 'Community Reach',  sub: 'Lives touched annually' },
]

export default function Stats() {
  return (
    <section
      className="section-sm relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0C1628 0%, #080B14 50%, #140810 100%)' }}
      aria-label="Organization statistics"
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(201,160,32,0.06) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />
      <div className="absolute top-0 inset-x-0 h-px rule-gold" />
      <div className="absolute bottom-0 inset-x-0 h-px rule-gold" />

      <div className="container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[var(--text-4)]">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.08}>
              <div className="text-center lg:px-10 group">
                <div
                  className="font-display font-medium text-5xl lg:text-6xl xl:text-7xl text-[var(--text-1)] mb-1.5 leading-none"
                  aria-label={`${s.end}${s.suffix} ${s.label}`}
                >
                  <Counter end={s.end} suffix={s.suffix} />
                </div>
                <p className="text-[var(--gold)] font-sans text-xs font-medium uppercase tracking-widest mb-1">
                  {s.label}
                </p>
                <p className="text-[var(--text-3)] font-sans text-xs leading-snug">{s.sub}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
