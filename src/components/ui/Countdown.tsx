'use client'

import { useEffect, useState } from 'react'

const TARGET = new Date('2026-11-07T16:00:00') // Nov 7, 2026 at 4:00 PM

interface TimeLeft { days: number; hours: number; minutes: number; seconds: number }

function calcTimeLeft(): TimeLeft {
  const diff = TARGET.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export default function Countdown() {
  const [t, setT]       = useState<TimeLeft | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setT(calcTimeLeft())
    const id = setInterval(() => setT(calcTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!mounted || !t) {
    // SSR placeholder
    return (
      <div className="flex items-center gap-3 sm:gap-5">
        {['--', '--', '--', '--'].map((_, i) => (
          <div key={i} className="text-center min-w-[56px]">
            <div className="font-display text-4xl sm:text-5xl lg:text-6xl text-[var(--text-4)] leading-none">--</div>
            <div className="text-[var(--text-4)] text-[9px] uppercase tracking-widest mt-1.5" />
          </div>
        ))}
      </div>
    )
  }

  const ended = t.days === 0 && t.hours === 0 && t.minutes === 0 && t.seconds === 0

  if (ended) {
    return (
      <div className="text-[var(--gold-light)] font-display text-3xl font-medium italic">
        The evening begins tonight ✨
      </div>
    )
  }

  const units = [
    { value: t.days,    label: 'Days'    },
    { value: t.hours,   label: 'Hours'   },
    { value: t.minutes, label: 'Minutes' },
    { value: t.seconds, label: 'Seconds' },
  ]

  return (
    <div className="flex items-start gap-4 sm:gap-6 lg:gap-8" aria-live="polite" aria-label="Countdown to Mock Debut 2026">
      {units.map(({ value, label }, i) => (
        <div key={label} className="flex items-start gap-4 sm:gap-6 lg:gap-8">
          {i > 0 && <span className="font-display text-3xl sm:text-4xl text-[var(--text-4)] mt-1 select-none">:</span>}
          <div className="text-center">
            <div
              className="font-display font-medium text-5xl sm:text-6xl lg:text-7xl text-[var(--text-1)] leading-none tabular-nums"
              style={{ minWidth: label === 'Days' ? 'auto' : '2ch' }}
            >
              {String(value).padStart(2, '0')}
            </div>
            <div className="text-[var(--text-3)] text-[9px] uppercase tracking-widest2 font-sans mt-2">
              {label}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
