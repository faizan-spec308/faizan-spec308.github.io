import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const [isTouch, setIsTouch] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      setIsTouch(true)
      return
    }

    const move = (e) => {
      if (!dotRef.current) return
      dotRef.current.style.left = `${e.clientX}px`
      dotRef.current.style.top = `${e.clientY}px`
    }

    const handleOver = (e) => {
      const el = e.target
      if (
        el.tagName === 'A' ||
        el.tagName === 'BUTTON' ||
        el.closest('a') ||
        el.closest('button') ||
        el.dataset.cursor === 'hover'
      ) {
        setHovering(true)
      } else {
        setHovering(false)
      }
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', handleOver)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', handleOver)
    }
  }, [])

  if (isTouch) return null

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-100"
      style={{ transform: 'translate(-50%, -50%)' }}
    >
      <div
        className="rounded-full transition-all duration-150"
        style={{
          width: hovering ? '20px' : '8px',
          height: hovering ? '20px' : '8px',
          backgroundColor: hovering ? 'transparent' : '#00ff88',
          border: hovering ? '2px solid #00ff88' : 'none',
          boxShadow: '0 0 8px rgba(0, 255, 136, 0.6)',
        }}
      />
    </div>
  )
}
