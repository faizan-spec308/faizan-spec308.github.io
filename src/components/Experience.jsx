import { motion } from 'framer-motion'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6" style={{ backgroundColor: 'rgba(13, 21, 38, 0.4)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label"
        >
          // 04 — EXPERIENCE
        </motion.p>

        <div className="mt-10 relative pl-8">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, #00ff88, transparent)' }}
          />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
                className="relative"
              >
                {/* Dot on timeline */}
                <div
                  className="absolute -left-8 top-2 w-2 h-2 rounded-full border"
                  style={{ backgroundColor: '#00ff88', borderColor: '#00ff88', transform: 'translateX(-50%)' }}
                />

                <div
                  className="p-6 border rounded-sm"
                  style={{ borderColor: '#1a2540', backgroundColor: '#0d1526' }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="font-syne font-bold text-base" style={{ color: '#f0f0f0' }}>
                      {job.title}
                    </h3>
                    <span className="font-mono text-xs shrink-0" style={{ color: '#00ff88' }}>
                      {job.period}
                    </span>
                  </div>
                  <p className="font-mono text-xs mb-4" style={{ color: '#8892a4' }}>
                    {job.company} · {job.location}
                  </p>
                  <ul className="space-y-2">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="font-mono text-xs leading-5 flex gap-3" style={{ color: '#8892a4' }}>
                        <span style={{ color: '#00ff88', flexShrink: 0 }}>▹</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
