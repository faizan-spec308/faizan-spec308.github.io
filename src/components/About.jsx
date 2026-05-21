import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { stats, education } from '../data/portfolio'

function CountUp({ target, suffix = '', duration = 1800 }) {
  const [val, setVal] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started || typeof target !== 'number') return
    const start = performance.now()
    const frame = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setVal(Math.round(ease * target))
      if (progress < 1) requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
  }, [started, target, duration])

  const display = typeof target === 'number' ? val : target
  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="section-label"
        >
          // 01 — ABOUT
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16 mt-10">
          {/* Bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {[
              "I'm a second-year BSc Computer Science student at Brunel University London, predicted a First-Class Honours degree, with a focus on software engineering, data science, and applied AI.",
              "I build real things independently — from end-to-end machine learning pipelines to agentic AI platforms — because I learn best by solving genuine problems.",
              "Currently seeking a 12-month placement year starting June 2026.",
            ].map((para, i) => (
              <p key={i} className="font-mono text-sm leading-7" style={{ color: '#8892a4' }}>
                {para}
              </p>
            ))}

            {/* Education block */}
            <div
              className="mt-8 p-5 border rounded-sm"
              style={{ borderColor: '#1a2540', borderLeft: '2px solid #00ff88' }}
            >
              <p className="font-syne font-bold text-base mb-1" style={{ color: '#f0f0f0' }}>
                {education.university}
              </p>
              <p className="font-mono text-xs mb-3" style={{ color: '#00ff88' }}>
                {education.degree} · {education.period}
              </p>
              <p className="font-mono text-xs mb-2" style={{ color: '#8892a4' }}>
                Predicted: <span style={{ color: '#f5c842' }}>{education.predicted}</span>
              </p>
              <p className="font-mono text-xs mb-1" style={{ color: '#8892a4' }}>
                Modules: {education.modules.join(', ')}
              </p>
              <p className="font-mono text-xs mb-1" style={{ color: '#8892a4' }}>
                Award: <span style={{ color: '#f5c842' }}>{education.award}</span>
              </p>
              <p className="font-mono text-xs" style={{ color: '#8892a4' }}>
                A-Levels: {education.alevels}
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-6 border rounded-sm"
                  style={{ borderColor: '#1a2540', backgroundColor: '#0d1526' }}
                >
                  <div
                    className="font-syne font-extrabold mb-1"
                    style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#00ff88' }}
                  >
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="font-mono text-xs" style={{ color: '#8892a4' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
