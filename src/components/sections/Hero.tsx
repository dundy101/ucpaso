'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const y    = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 60])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center" style={{ overflow: "hidden", zIndex: 0, isolation: "isolate" }}
      aria-label="PASO hero"
    >
      {/* ── Background photo with parallax ── */}
      <motion.div style={{ y: imgY }} className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="PASO members celebrating at a past event"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
      </motion.div>

      {/* ── Cinematic overlays ── */}
      {/* Left-heavy gradient so text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(8,11,20,0.93)] via-[rgba(8,11,20,0.60)] to-[rgba(8,11,20,0.20)]" />
      {/* Bottom fade into site bg */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-transparent to-transparent" />
      {/* Top vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(8,11,20,0.55)] via-transparent to-transparent" />

      {/* ── Content ── */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container pt-28 pb-16 flex flex-col gap-8 max-w-5xl"
      >
        {/* Eyebrow row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="flex items-center gap-4"
        >
          <div className="flex items-center gap-2">
            <span className="w-6 h-px bg-[var(--gold)]" />
            <span className="text-[var(--gold)] font-sans text-xs font-medium uppercase tracking-widest2">
              University of Cincinnati
            </span>
          </div>
          <div className="w-px h-3 bg-[var(--text-4)]" />
          <span className="text-[var(--text-3)] font-sans text-xs uppercase tracking-widest">Est. 2017</span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <h1 className="font-display font-medium leading-[1.0] text-[var(--text-1)]">
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] 2xl:text-[6.5rem]">
              Pinoy-American
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] 2xl:text-[6.5rem] italic text-[var(--gold-light)]">
              Student Organization
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
          className="text-[var(--text-2)] text-base lg:text-lg leading-relaxed max-w-lg font-sans"
        >
          A modern cultural organization celebrating Filipino heritage, leadership,
          community, and connection at the University of Cincinnati.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-wrap items-center gap-4"
        >
          <Link
            href="https://getinvolved.uc.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-[var(--gold)] text-[var(--ink)] text-sm font-semibold hover:bg-[var(--gold-light)] transition-all duration-200 shadow-[0_0_28px_rgba(201,160,32,0.2)] hover:shadow-[0_0_40px_rgba(201,160,32,0.35)] active:scale-[0.97]"
          >
            Join PASO
          </Link>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full border border-white/[0.18] text-[var(--text-2)] text-sm font-medium hover:border-white/30 hover:text-[var(--text-1)] hover:bg-white/[0.05] backdrop-blur-sm transition-all duration-200 active:scale-[0.97]"
          >
            Explore Events
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center gap-8 pt-2"
        >
          {[
            { n: '150+', label: 'Members' },
            { n: '7',    label: 'Years Active' },
            { n: '30+',  label: 'Events / Year' },
          ].map(({ n, label }) => (
            <div key={label} className="flex flex-col gap-0.5">
              <span className="font-display font-medium text-2xl text-[var(--text-1)]">{n}</span>
              <span className="font-sans text-xs text-[var(--text-3)] uppercase tracking-wider">{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 text-[var(--text-4)] hover:text-[var(--text-2)] transition-colors group"
          aria-label="Scroll down"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} strokeWidth={1.5} />
          </motion.div>
        </button>
      </motion.div>
    </section>
  )
}
