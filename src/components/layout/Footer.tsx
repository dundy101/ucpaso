import Link from 'next/link'
import NextImage from 'next/image'
import { Instagram, Mail, ArrowUpRight } from 'lucide-react'

const nav = [
  { label: 'Events',   href: '/events'   },
  { label: 'Programs', href: '/programs' },
  { label: 'Board',    href: '/board'    },
  { label: 'More',     href: '/more'     },
  { label: 'Contact',  href: '/contact'  },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative bg-[var(--ink)] border-t border-white/[0.06]" role="contentinfo">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,160,32,0.25)] to-transparent" />

      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr] gap-12 lg:gap-16">

          {/* Brand column */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="relative w-12 h-12 flex-shrink-0 rounded-full overflow-hidden">
                <NextImage
                  src="/images/pasologo.jpg"
                  alt="PASO logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="leading-none">
                <div className="text-[var(--text-1)] font-display font-medium text-sm">PASO</div>
                <div className="text-[var(--text-3)] text-[10px] tracking-widest2 uppercase mt-0.5">University of Cincinnati</div>
              </div>
            </Link>
            <p className="text-[var(--text-3)] text-sm leading-relaxed max-w-[280px]">
              Celebrating Filipino heritage, leadership, and community at UC since 2017.
            </p>
            <div className="flex items-center gap-2 mt-6">
              <a
                href="https://instagram.com/uc_paso"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/[0.08] flex items-center justify-center text-[var(--text-3)] hover:text-[var(--gold)] hover:border-[rgba(201,160,32,0.3)] transition-all duration-200"
                aria-label="PASO on Instagram"
              >
                <Instagram size={14} strokeWidth={1.5} />
              </a>
              <a
                href="mailto:uc.paso17@gmail.com"
                className="w-8 h-8 rounded-lg border border-white/[0.08] flex items-center justify-center text-[var(--text-3)] hover:text-[var(--gold)] hover:border-[rgba(201,160,32,0.3)] transition-all duration-200"
                aria-label="Email PASO"
              >
                <Mail size={14} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Nav column */}
          <div>
            <p className="text-[var(--text-4)] text-[10px] uppercase tracking-widest2 font-medium mb-4">Pages</p>
            <ul className="space-y-2.5" role="list">
              <li><Link href="/" className="text-[var(--text-3)] text-sm hover:text-[var(--text-1)] transition-colors">Home</Link></li>
              {nav.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[var(--text-3)] text-sm hover:text-[var(--text-1)] transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <p className="text-[var(--text-4)] text-[10px] uppercase tracking-widest2 font-medium mb-4">Connect</p>
            <ul className="space-y-3" role="list">
              <li>
                <p className="text-[var(--text-4)] text-[10px] uppercase tracking-wider mb-0.5">General</p>
                <a href="mailto:uc.paso17@gmail.com" className="text-[var(--text-3)] text-sm hover:text-[var(--text-1)] transition-colors">uc.paso17@gmail.com</a>
              </li>
              <li>
                <p className="text-[var(--text-4)] text-[10px] uppercase tracking-wider mb-0.5">Leadership</p>
                <a href="mailto:rosalepc@mail.uc.edu" className="text-[var(--text-3)] text-sm hover:text-[var(--text-1)] transition-colors">rosalepc@mail.uc.edu</a>
              </li>
              <li>
                <p className="text-[var(--text-4)] text-[10px] uppercase tracking-wider mb-0.5">Instagram</p>
                <a href="https://instagram.com/uc_paso" target="_blank" rel="noopener noreferrer" className="text-[var(--text-3)] text-sm hover:text-[var(--text-1)] transition-colors">@uc_paso</a>
              </li>
              <li className="pt-1">
                <a href="https://getinvolved.uc.edu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[var(--gold)] text-sm hover:text-[var(--gold-light)] transition-colors">
                  GetInvolved UC <ArrowUpRight size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[var(--text-4)] text-xs">© {year} Pinoy-American Student Organization · University of Cincinnati</p>
          <p className="text-[var(--text-4)] text-xs italic font-display">Mga Pilipino sa UC</p>
        </div>
      </div>
    </footer>
  )
}
