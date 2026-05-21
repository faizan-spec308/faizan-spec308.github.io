import { motion } from 'framer-motion'
import { achievements } from '../data/portfolio'

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label"
        >
          // 05 — ACHIEVEMENTS
        </motion.p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: 'easeOut' }}
              className="card-hover p-6 border rounded-sm"
              style={{ borderColor: '#1a2540', backgroundColor: '#0d1526' }}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-syne font-bold text-sm mb-2" style={{ color: '#f0f0f0' }}>
                {item.title}
              </h3>
              <p className="font-mono text-xs leading-5" style={{ color: '#8892a4' }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
