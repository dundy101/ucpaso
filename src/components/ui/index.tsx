import { ReactNode, ButtonHTMLAttributes } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

// ── Button ───────────────────────────────────────
type BtnVariant = 'primary' | 'ghost' | 'outline'
type BtnSize    = 'sm' | 'md' | 'lg'

interface BtnProps {
  href?: string
  onClick?: () => void
  variant?: BtnVariant
  size?: BtnSize
  children: ReactNode
  className?: string
  external?: boolean
  disabled?: boolean
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  icon?: ReactNode
}

const btnBase =
  'inline-flex items-center justify-center gap-2 font-sans font-medium rounded-full transition-all duration-200 active:scale-[0.97]'

const btnSizes: Record<BtnSize, string> = {
  sm: 'h-8 px-4 text-xs',
  md: 'h-10 px-6 text-sm',
  lg: 'h-12 px-8 text-sm',
}

const btnVariants: Record<BtnVariant, string> = {
  primary: 'bg-[var(--gold)] text-[var(--ink)] hover:bg-[var(--gold-light)] shadow-[0_0_0_0_rgba(201,160,32,0)] hover:shadow-[0_0_24px_rgba(201,160,32,0.25)]',
  ghost:   'text-[var(--text-2)] hover:text-[var(--text-1)] hover:bg-[var(--fog)]',
  outline: 'border border-[rgba(201,160,32,0.35)] text-[var(--gold)] hover:bg-[var(--gold-sub)] hover:border-[var(--gold)]',
}

export function Btn({
  href, onClick, variant = 'outline', size = 'md', children,
  className = '', external, disabled, type = 'button', icon,
}: BtnProps) {
  const cls = `${btnBase} ${btnSizes[size]} ${btnVariants[variant]} ${disabled ? 'opacity-40 pointer-events-none' : ''} ${className}`
  const ext = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  if (href) return <Link href={href} className={cls} {...ext}>{children}{icon}</Link>
  return <button className={cls} onClick={onClick} disabled={disabled} type={type}>{children}{icon}</button>
}

// ── Section label (eyebrow) ──────────────────────
export function Label({ children }: { children: ReactNode }) {
  return (
    <span className="eyebrow mb-4 block">{children}</span>
  )
}

// ── Section heading ──────────────────────────────
interface HeadingProps {
  children: ReactNode
  sub?: ReactNode
  as?: 'h1' | 'h2' | 'h3'
  size?: 'xl' | '2xl' | '3xl'
  className?: string
}

export function Heading({ children, sub, as: Tag = 'h2', size = '2xl', className = '' }: HeadingProps) {
  const sizes = {
    xl:  'text-4xl lg:text-5xl',
    '2xl': 'text-5xl lg:text-6xl xl:text-7xl',
    '3xl': 'text-6xl lg:text-7xl xl:text-[5.5rem]',
  }
  return (
    <div className={className}>
      <Tag className={`font-display font-medium leading-[1.05] text-[var(--text-1)] ${sizes[size]}`}>
        {children}
      </Tag>
      {sub && <p className="mt-4 text-[var(--text-2)] text-base lg:text-lg leading-relaxed">{sub}</p>}
    </div>
  )
}

// ── Divider ──────────────────────────────────────
export function Divider({ gold }: { gold?: boolean }) {
  return (
    <div className={gold ? 'rule-gold my-12' : 'rule my-12'} role="separator" />
  )
}

// ── Glass card ───────────────────────────────────
interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: string
}

export function Card({ children, className = '', hover = false, padding = 'p-6' }: CardProps) {
  return (
    <div className={`glass rounded-[var(--radius-lg)] ${padding} ${hover ? 'glass-hover cursor-pointer' : ''} ${className}`}>
      {children}
    </div>
  )
}

// ── External link ─────────────────────────────────
interface ExtLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export function ExtLink({ href, children, className = '' }: ExtLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors group ${className}`}
    >
      {children}
      <ArrowUpRight size={14} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-px group-hover:-translate-y-px transition-all" />
    </a>
  )
}

// ── Tag / badge ───────────────────────────────────
interface TagProps {
  children: ReactNode
  variant?: 'gold' | 'dim' | 'blue' | 'red'
}

export function Tag({ children, variant = 'dim' }: TagProps) {
  const variants = {
    gold: 'bg-[var(--gold-sub)] text-[var(--gold)] border-[rgba(201,160,32,0.2)]',
    dim:  'bg-white/[0.04] text-[var(--text-3)] border-white/[0.08]',
    blue: 'bg-[rgba(26,58,92,0.4)] text-[#7AADFF] border-[rgba(26,58,92,0.6)]',
    red:  'bg-[rgba(180,30,40,0.15)] text-[#FF8A95] border-[rgba(180,30,40,0.2)]',
  }
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full border text-[10px] uppercase tracking-wider font-medium ${variants[variant]}`}>
      {children}
    </span>
  )
}
