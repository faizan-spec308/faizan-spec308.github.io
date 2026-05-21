import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/portfolio'
import { useEffect } from 'react'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="font-mono text-sm" style={{ color: '#8892a4' }}>Project not found.</p>
        <Link to="/" className="font-mono text-sm" style={{ color: '#00ff88' }}>← Back home</Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => navigate('/#projects')}
          className="font-mono text-xs mb-10 flex items-center gap-2 transition-colors duration-200"
          style={{ color: '#8892a4' }}
          onMouseEnter={e => e.currentTarget.style.color = '#00ff88'}
          onMouseLeave={e => e.currentTarget.style.color = '#8892a4'}
        >
          ← Back to Projects
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          {project.badge && (
            <p className="font-mono text-xs mb-3" style={{ color: '#f5c842' }}>{project.badge}</p>
          )}
          <h1
            className="font-syne font-extrabold mb-3"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f0f0f0' }}
          >
            {project.title}
          </h1>
          <p className="font-mono text-sm mb-8" style={{ color: '#00ff88' }}>
            {project.tagline}
          </p>

          {/* Description */}
          <div
            className="p-6 border rounded-sm mb-8"
            style={{ borderColor: '#1a2540', backgroundColor: '#0d1526' }}
          >
            <p className="font-mono text-sm leading-7" style={{ color: '#8892a4' }}>
              {project.description}
            </p>
          </div>

          {/* Stats callout */}
          {project.stats && (
            <div
              className="p-5 border-l-2 mb-8"
              style={{ borderColor: '#00ff88', backgroundColor: 'rgba(0,255,136,0.04)' }}
            >
              <p className="font-syne font-bold text-2xl" style={{ color: '#00ff88' }}>
                {project.stats}
              </p>
            </div>
          )}

          {/* Role */}
          {project.role && (
            <div className="mb-8">
              <p className="font-mono text-xs uppercase tracking-wider mb-2" style={{ color: '#8892a4' }}>Role</p>
              <span
                className="font-mono text-sm px-3 py-1 border"
                style={{ borderColor: '#00ff88', color: '#00ff88' }}
              >
                {project.role}
              </span>
            </div>
          )}

          {/* AI Agents breakdown (HillingOne) */}
          {project.agents && (
            <div className="mb-8">
              <p
                className="font-mono text-xs uppercase tracking-wider mb-4"
                style={{ color: '#8892a4' }}
              >
                Agent Architecture
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.agents.map((agent, i) => (
                  <motion.div
                    key={agent.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                    className="p-4 border rounded-sm"
                    style={{ borderColor: '#1a2540', backgroundColor: '#0d1526' }}
                  >
                    <p className="font-syne font-semibold text-sm mb-1" style={{ color: '#00ff88' }}>
                      {agent.name}
                    </p>
                    <p className="font-mono text-xs" style={{ color: '#8892a4' }}>
                      {agent.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Tech stack */}
          <div className="mb-8">
            <p className="font-mono text-xs uppercase tracking-wider mb-3" style={{ color: '#8892a4' }}>
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span
                  key={t}
                  className="font-mono text-sm px-3 py-1 border rounded-sm"
                  style={{ borderColor: '#00ff88', color: '#00ff88' }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 pt-6 border-t" style={{ borderColor: '#1a2540' }}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm px-5 py-2 border transition-all duration-200"
                style={{ borderColor: '#00ff88', color: '#00ff88' }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = 'rgba(0,255,136,0.08)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
              >
                View on GitHub ↗
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm px-5 py-2 transition-all duration-200"
                style={{ backgroundColor: '#00ff88', color: '#0a0f1e' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#00cc6a'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#00ff88'}
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
