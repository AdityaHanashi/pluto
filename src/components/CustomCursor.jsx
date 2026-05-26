import React, { useEffect, useRef } from 'react'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const dotRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const delayedPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`
        dotRef.current.style.top = `${e.clientY}px`
      }
    }

    let rafId
    const updateCursor = () => {
      // Smooth lerp (linear interpolation) for outer circle
      delayedPos.current.x += (pos.current.x - delayedPos.current.x) * 0.15
      delayedPos.current.y += (pos.current.y - delayedPos.current.y) * 0.15

      if (cursorRef.current) {
        cursorRef.current.style.left = `${delayedPos.current.x}px`
        cursorRef.current.style.top = `${delayedPos.current.y}px`
      }
      rafId = requestAnimationFrame(updateCursor)
    }

    // Global event delegation for mouse over/out
    const handleMouseOver = (e) => {
      const target = e.target
      if (target) {
        const hoverable = target.closest('a, button, input, textarea, select, .cursor-pointer, [role="button"]')
        if (hoverable) {
          if (cursorRef.current) {
            cursorRef.current.classList.add('cursor-hover')
          }
          if (dotRef.current) {
            dotRef.current.classList.add('dot-hover')
          }
        }
      }
    }

    const handleMouseOut = (e) => {
      const target = e.target
      const relatedTarget = e.relatedTarget
      
      const wasHover = target && target.closest('a, button, input, textarea, select, .cursor-pointer, [role="button"]')

      if (wasHover) {
        const isStillHover = relatedTarget && relatedTarget.closest('a, button, input, textarea, select, .cursor-pointer, [role="button"]')

        if (!isStillHover) {
          if (cursorRef.current) {
            cursorRef.current.classList.remove('cursor-hover')
          }
          if (dotRef.current) {
            dotRef.current.classList.remove('dot-hover')
          }
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mouseout', handleMouseOut)
    rafId = requestAnimationFrame(updateCursor)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
      cancelAnimationFrame(rafId)
    }
  }, [])

  // Disable on devices with touch screens
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <>
      {/* Outer ring */}
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 rounded-full border border-purple-500/60 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999] transition-transform duration-300 ease-out"
        style={{ left: '-100px', top: '-100px' }}
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed w-1.5 h-1.5 rounded-full bg-purple-500 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[10000] transition-all duration-150 ease-out"
        style={{ left: '-100px', top: '-100px' }}
      />
      <style>{`
        .cursor-hover {
          transform: translate(-50%, -50%) scale(1.6) !important;
          border-color: rgba(59, 130, 246, 0.8) !important;
          background: rgba(139, 92, 246, 0.1) !important;
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.4) !important;
        }
        .dot-hover {
          transform: translate(-50%, -50%) scale(0.6) !important;
          background: #3b82f6 !important;
        }
      `}</style>
    </>
  )
}

export default CustomCursor
