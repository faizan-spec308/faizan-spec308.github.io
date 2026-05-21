import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'

function SkillTag({ name, delay }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.25, ease: 'easeOut' }}
      className="skill-tag inline-flex items-center px-3 py-1.5 border font-mono text-xs rounded-sm transition-all duration-200"
      style={{
        borderColor: '#1a2540',
        color: '#8892a4',
        backgroundColor: '#0d1526',
      }}
    >
      {name}
    </motion.span>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6" style={{ backgroundColor: 'rgba(13, 21, 38, 0.4)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label"
        >
          // 02 — SKILLS
        </motion.p>

        <div className="mt-10 space-y-10">
          {Object.entries(skills).map(([category, items], catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.05, duration: 0.5 }}
            >
              <h3
                className="font-syne font-semibold text-sm mb-4 uppercase tracking-wider"
                style={{ color: '#f0f0f0' }}
              >
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <SkillTag
                    key={skill.name}
                    name={skill.name}
                    delay={i * 0.04}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 p-5 border rounded-sm inline-flex items-center gap-3"
          style={{ borderColor: '#1a2540', backgroundColor: '#0d1526' }}
        >
          <span className="text-xl">📜</span>
          <div>
            <p className="font-mono text-sm" style={{ color: '#f0f0f0' }}>
              Machine Learning & AI Ethics
            </p>
            <p className="font-mono text-xs mt-0.5" style={{ color: '#8892a4' }}>
              Coursera · <span style={{ color: '#f5c842' }}>In Progress</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
