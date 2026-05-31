import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact',      href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [active, setActive]       = useState('')
  const [menuOpen, setMenuOpen]   = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isHome) return
    const sections = NAV_LINKS.map(l => document.querySelector(l.href))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive('#' + entry.target.id)
        })
      },
      { threshold: 0.3 }
    )
    sections.forEach(s => s && observer.observe(s))
    return () => observer.disconnect()
  }, [isHome])

  const scrollTo = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        backgroundColor: scrolled ? 'rgba(10, 15, 30, 0.85)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(26, 37, 64, 0.8)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-syne font-bold text-xl tracking-widest"
          style={{ color: '#00ff88' }}>
          FN
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="relative font-mono text-xs tracking-wider uppercase transition-colors duration-200"
              style={{ color: active === link.href ? '#00ff88' : '#8892a4' }}
            >
              {link.label}
              {active === link.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-px"
                  style={{ backgroundColor: '#00ff88' }}
                />
              )}
            </button>
          ))}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs tracking-wider uppercase px-3 py-1.5 border transition-all duration-200 hover:text-navy hover:bg-accent"
            style={{
              borderColor: '#00ff88',
              color: '#00ff88',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#00ff88'
              e.currentTarget.style.color = '#0a0f1e'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#00ff88'
            }}
          >
            CV ↓
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className="block w-6 h-px transition-all duration-300"
              style={{
                backgroundColor: '#00ff88',
                transform: menuOpen
                  ? i === 0 ? 'rotate(45deg) translate(4px, 4px)'
                  : i === 1 ? 'opacity: 0'
                  : 'rotate(-45deg) translate(4px, -4px)'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4 pb-4 border-t"
            style={{ borderColor: '#1a2540' }}
          >
            <div className="flex flex-col gap-4 pt-4">
              {NAV_LINKS.map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left font-mono text-sm uppercase tracking-wider transition-colors"
                  style={{ color: active === link.href ? '#00ff88' : '#8892a4' }}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm tracking-wider uppercase w-fit px-3 py-1.5 border"
                style={{ borderColor: '#00ff88', color: '#00ff88' }}
              >
                CV ↓
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
