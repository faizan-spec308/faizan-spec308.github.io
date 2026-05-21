import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const ROLES = [
  'Software Engineer',
  'Data Scientist',
  'AI Builder',
  'CS @ Brunel University London',
]

function useTypewriter(words, typeSpeed = 80, deleteSpeed = 40, pauseMs = 1800) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [phase, setPhase] = useState('typing')

  useEffect(() => {
    const word = words[wordIdx]
    let timeout

    if (phase === 'typing') {
      if (display.length < word.length) {
        timeout = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), typeSpeed)
      } else {
        timeout = setTimeout(() => setPhase('pausing'), pauseMs)
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), 0)
    } else if (phase === 'deleting') {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(display.slice(0, -1)), deleteSpeed)
      } else {
        setWordIdx((wordIdx + 1) % words.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timeout)
  }, [display, phase, wordIdx, words, typeSpeed, deleteSpeed, pauseMs])

  return display
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  const role = useTypewriter(ROLES)

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center hero-grid"
    >
      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,255,136,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto w-full px-6 pt-24 pb-12 grid lg:grid-cols-[3fr_2fr] gap-16 items-center">
        {/* Left — text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={itemVariants} className="section-label mb-4">
            // hello world
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="font-mono text-sm mb-2"
            style={{ color: '#8892a4' }}
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-syne font-extrabold leading-none mb-4"
            style={{
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              color: '#f0f0f0',
              letterSpacing: '-0.02em',
            }}
          >
            FAIZAN
            <br />
            NAVEED
            <span className="typewriter-cursor" />
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="font-syne font-semibold mb-4"
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', color: '#00ff88', minHeight: '2rem' }}
          >
            {role}
            <span className="typewriter-cursor" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="font-mono text-sm mb-8"
            style={{ color: '#8892a4' }}
          >
            Second-year CS student · Predicted First-Class Honours · Seeking Placement 2026
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <button
              onClick={scrollToProjects}
              className="font-mono text-sm px-6 py-3 font-medium transition-all duration-200"
              style={{
                backgroundColor: '#00ff88',
                color: '#0a0f1e',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#00cc6a'
                e.currentTarget.style.boxShadow = '0 0 24px rgba(0,255,136,0.4)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#00ff88'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              View My Work
            </button>
            <a
              href="/portfolio/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm px-6 py-3 border transition-all duration-200"
              style={{ borderColor: '#00ff88', color: '#00ff88' }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'rgba(0,255,136,0.08)'
                e.currentTarget.style.boxShadow = '0 0 24px rgba(0,255,136,0.15)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Right — floating code card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="hidden lg:flex lg:justify-end lg:items-start lg:pt-8"
        >
          <div
            className="rounded-lg p-6 font-mono text-sm leading-7 border"
            style={{
              backgroundColor: 'rgba(13, 21, 38, 0.85)',
              borderColor: '#1a2540',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,255,136,0.08)',
            }}
          >
            {/* Window chrome */}
            <div className="flex items-center gap-2 mb-5">
              {['#ff5f57', '#febc2e', '#28c840'].map(c => (
                <span key={c} className="w-3 h-3 rounded-full" style={{ backgroundColor: c }} />
              ))}
              <span className="ml-2 text-xs" style={{ color: '#8892a4' }}>faizan.py</span>
            </div>

            <div>
              <span className="code-comment"># Faizan Naveed</span>
            </div>
            <div>
              <span className="code-var">status</span>
              <span style={{ color: '#8892a4' }}> = </span>
              <span className="code-string">"Seeking Placement 2026"</span>
            </div>
            <div>
              <span className="code-var">skills</span>
              <span style={{ color: '#8892a4' }}> = </span>
              <span style={{ color: '#8892a4' }}>[</span>
              {['Python', 'React', 'PyTorch', 'FastAPI'].map((s, i, arr) => (
                <span key={s}>
                  <span className="code-string">"{s}"</span>
                  {i < arr.length - 1 && <span style={{ color: '#8892a4' }}>, </span>}
                </span>
              ))}
              <span style={{ color: '#8892a4' }}>]</span>
            </div>
            <div>
              <span className="code-var">gpa</span>
              <span style={{ color: '#8892a4' }}> = </span>
              <span className="code-string">"Predicted First Class"</span>
            </div>
            <div>
              <span className="code-var">built</span>
              <span style={{ color: '#8892a4' }}> = </span>
              <span style={{ color: '#8892a4' }}>[</span>
              {['HillingOne', 'KnownLy', 'FraudDetect'].map((s, i, arr) => (
                <span key={s}>
                  <span className="code-string">"{s}"</span>
                  {i < arr.length - 1 && <span style={{ color: '#8892a4' }}>, </span>}
                </span>
              ))}
              <span style={{ color: '#8892a4' }}>]</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs" style={{ color: '#8892a4' }}>scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          style={{ color: '#00ff88' }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  )
}
