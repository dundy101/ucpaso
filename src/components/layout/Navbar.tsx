'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import NextImage from 'next/image'

const links = [
  { label: 'Events',   href: '/events'   },
  { label: 'Programs', href: '/programs' },
  { label: 'Board',    href: '/board'    },
  { label: 'More',     href: '/more'     },
  { label: 'Contact',  href: '/contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const pathname = usePathname()
  const router   = useRouter()
  const navRef   = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    document.body.style.overflow = ''
  }, [pathname])

  const toggle = () => {
    setOpen(v => {
      document.body.style.overflow = v ? '' : 'hidden'
      return !v
    })
  }

  const scrollToEvents = () => {
    const el = document.getElementById('events')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleEventsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(false)
    document.body.style.overflow = ''
    if (pathname === '/') {
      // Already home — just scroll, don't change URL
      scrollToEvents()
    } else {
      // Go home first, then scroll after page loads
      router.push('/')
      setTimeout(scrollToEvents, 600)
    }
  }

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/')
    }
  }

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? 'bg-[rgba(8,11,20,0.92)] backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <div className="container flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-3 group flex-shrink-0"
            aria-label="PASO home"
          >
            <div className="relative w-10 h-10 flex-shrink-0 rounded-full overflow-hidden">
              <NextImage
                src="/images/pasologo.jpg"
                alt="PASO logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="text-[var(--text-1)] font-display font-medium text-sm tracking-wide">PASO</span>
              <span className="text-[var(--text-3)] font-sans text-[10px] tracking-widest2 uppercase mt-px">University of Cincinnati</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-1">
            {links.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={label === 'Events' ? handleEventsClick : undefined}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                  isActive(href)
                    ? 'text-[var(--gold-light)]'
                    : 'text-[var(--text-2)] hover:text-[var(--text-1)]'
                }`}
                aria-current={isActive(href) ? 'page' : undefined}
              >
                {label}
                {isActive(href) && (
                  <span
                    className="absolute bottom-0.5 left-4 right-4 h-px bg-[var(--gold)] rounded-full"
                    aria-hidden
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="https://getinvolved.uc.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 h-9 px-5 rounded-full border border-[rgba(201,160,32,0.35)] text-[var(--gold)] text-sm font-medium hover:bg-[var(--gold-sub)] hover:border-[var(--gold)] transition-all duration-200"
            >
              Join PASO
            </Link>
            <button
              onClick={toggle}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-[var(--text-2)] hover:text-[var(--text-1)] hover:bg-[var(--fog)] transition-colors"
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
          id="mobile-menu"
        >
          <div className="container pb-8 pt-4 border-t border-white/[0.06]">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-0.5">
              {links.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={label === 'Events' ? handleEventsClick : undefined}
                  className={`flex items-center h-11 px-3 rounded-lg text-base font-medium transition-colors ${
                    isActive(href)
                      ? 'text-[var(--gold-light)] bg-[var(--gold-sub)]'
                      : 'text-[var(--text-2)] hover:text-[var(--text-1)] hover:bg-[var(--fog)]'
                  }`}
                  aria-current={isActive(href) ? 'page' : undefined}
                >
                  {label}
                </Link>
              ))}
              <div className="mt-3 pt-4 border-t border-white/[0.06]">
                <Link
                  href="https://getinvolved.uc.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-11 rounded-full border border-[rgba(201,160,32,0.35)] text-[var(--gold)] text-sm font-medium hover:bg-[var(--gold-sub)] transition-all"
                >
                  Join PASO on GetInvolved
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={toggle}
          aria-hidden="true"
        />
      )}
    </>
  )
}
