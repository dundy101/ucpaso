'use client'

import { useEffect, useRef, ReactNode } from 'react'
import { motion, useInView, useAnimation, Variants, MotionProps } from 'framer-motion'

// ── Fade + slide up on scroll ────────────────────
interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  y?: number
  className?: string
  once?: boolean
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  y = 24,
  className = '',
  once = true,
}: FadeInProps) {
  const ref     = useRef<HTMLDivElement>(null)
  const inView  = useInView(ref, { once, margin: '-60px 0px' })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) controls.start('visible')
  }, [inView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden:  { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration, delay, ease: [0.4, 0, 0.2, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ── Staggered children ───────────────────────────
interface StaggerProps {
  children: ReactNode
  stagger?: number
  delay?: number
  className?: string
}

export function Stagger({ children, stagger = 0.08, delay = 0, className = '' }: StaggerProps) {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px 0px' })

  const container: Variants = {
    hidden:  {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  }
  const child: Variants = {
    hidden:  { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
  }

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child_, i) => (
            <motion.div key={i} variants={child}>{child_}</motion.div>
          ))
        : <motion.div variants={child}>{children}</motion.div>
      }
    </motion.div>
  )
}

// ── Horizontal fade (left or right) ─────────────
interface FadeInSideProps {
  children: ReactNode
  from?: 'left' | 'right'
  delay?: number
  className?: string
}

export function FadeInSide({ children, from = 'left', delay = 0, className = '' }: FadeInSideProps) {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px 0px' })
  const x = from === 'left' ? -32 : 32

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x }}
      transition={{ duration: 0.65, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ── Scale on hover ────────────────────────────────
interface ScaleOnHoverProps {
  children: ReactNode
  scale?: number
  className?: string
}
export function ScaleOnHover({ children, scale = 1.02, className = '' }: ScaleOnHoverProps) {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ duration: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ── Number counter ───────────────────────────────
interface CounterProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export function Counter({ end, suffix = '', prefix = '', duration = 2, className = '' }: CounterProps) {
  const ref     = useRef<HTMLSpanElement>(null)
  const inView  = useInView(ref, { once: true })
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const start   = performance.now()
    const ms      = duration * 1000
    const animate = (now: number) => {
      const p = Math.min((now - start) / ms, 1)
      const e = 1 - Math.pow(1 - p, 3)
      if (ref.current) ref.current.textContent = `${prefix}${Math.round(e * end).toLocaleString()}${suffix}`
      if (p < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [inView, end, suffix, prefix, duration])

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>
}
