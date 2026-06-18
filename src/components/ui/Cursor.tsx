'use client'

import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    let raf: number
    let mouseX = 0, mouseY = 0
    let ringX  = 0, ringY  = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      setVisible(true)

      // Snap dot to cursor immediately
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`
      }
    }

    const onLeave  = () => setVisible(false)
    const onEnter  = () => setVisible(true)
    const onDown   = () => setClicked(true)
    const onUp     = () => setClicked(false)

    // Detect hoverable elements
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      setHovered(
        !!(t.closest('a') || t.closest('button') || t.closest('[role="button"]'))
      )
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)
    document.addEventListener('mouseover', onOver)

    // Ring lags behind with lerp
    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <>
      {/* Gold dot — snaps instantly */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform"
        style={{
          marginLeft: '-4px',
          marginTop:  '-4px',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
      >
        <div
          style={{
            width:  clicked ? '6px' : hovered ? '10px' : '8px',
            height: clicked ? '6px' : hovered ? '10px' : '8px',
            borderRadius: '50%',
            background: '#C9A020',
            transition: 'width 0.15s, height 0.15s',
            boxShadow: hovered ? '0 0 10px rgba(201,160,32,0.6)' : '0 0 4px rgba(201,160,32,0.3)',
          }}
        />
      </div>

      {/* Ring — lags behind */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[9998] pointer-events-none will-change-transform"
        style={{
          marginLeft: hovered ? '-20px' : '-16px',
          marginTop:  hovered ? '-20px' : '-16px',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s, margin 0.2s',
        }}
      >
        <div
          style={{
            width:  hovered ? '40px' : '32px',
            height: hovered ? '40px' : '32px',
            borderRadius: '50%',
            border: `1px solid rgba(201,160,32,${hovered ? '0.5' : '0.25'})`,
            background: hovered ? 'rgba(201,160,32,0.04)' : 'transparent',
            transition: 'width 0.25s cubic-bezier(0.34,1.56,0.64,1), height 0.25s cubic-bezier(0.34,1.56,0.64,1), border-color 0.2s, background 0.2s',
          }}
        />
      </div>
    </>
  )
}
