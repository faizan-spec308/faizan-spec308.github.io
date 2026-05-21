import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project, featured = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="card-hover group flex flex-col border rounded-sm p-6"
      style={{
        borderColor: featured ? 'rgba(0,255,136,0.25)' : '#1a2540',
        backgroundColor: '#0d1526',
        height: '100%',
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3 gap-3">
        <h3
          className="font-syne font-bold text-lg leading-tight"
          style={{ color: '#f0f0f0' }}
        >
          {project.title}
          {featured && (
            <span
              className="ml-2 text-xs font-mono font-normal px-1.5 py-0.5 border align-middle"
              style={{ borderColor: '#00ff88', color: '#00ff88', fontSize: '0.6rem' }}
            >
              FEATURED
            </span>
          )}
        </h3>
        <span className="text-lg shrink-0 mt-0.5">
          {project.badge?.startsWith('🏆') ? '🏆' :
           project.badge?.startsWith('🥇') ? '🥇' :
           project.stats ? '📊' : '⚡'}
        </span>
      </div>

      {/* Tagline */}
      <p className="font-mono text-xs leading-5 mb-4 flex-1" style={{ color: '#8892a4' }}>
        {project.tagline}
      </p>

      {/* Badge */}
      {project.badge && (
        <p
          className="font-mono text-xs mb-3"
          style={{ color: '#f5c842' }}
        >
          {project.badge}
        </p>
      )}

      {/* Role badge */}
      {project.role && (
        <span
          className="inline-block font-mono text-xs px-2 py-0.5 border mb-3 w-fit"
          style={{ borderColor: '#00ff88', color: '#00ff88' }}
        >
          {project.role}
        </span>
      )}

      {/* Stats */}
      {project.stats && (
        <p className="font-mono text-xs mb-3" style={{ color: '#00ff88' }}>
          {project.stats}
        </p>
      )}

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map(t => (
          <span
            key={t}
            className="font-mono text-xs px-2 py-0.5 border rounded-sm"
            style={{ borderColor: '#1a2540', color: '#8892a4' }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 mt-auto pt-3 border-t" style={{ borderColor: '#1a2540' }}>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs transition-colors duration-200"
            style={{ color: '#8892a4' }}
            onMouseEnter={e => e.currentTarget.style.color = '#00ff88'}
            onMouseLeave={e => e.currentTarget.style.color = '#8892a4'}
          >
            GitHub ↗
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs transition-colors duration-200"
            style={{ color: '#8892a4' }}
            onMouseEnter={e => e.currentTarget.style.color = '#00ff88'}
            onMouseLeave={e => e.currentTarget.style.color = '#8892a4'}
          >
            Live Demo ↗
          </a>
        )}
        <Link
          to={`/projects/${project.id}`}
          className="font-mono text-xs ml-auto transition-colors duration-200"
          style={{ color: '#00ff88' }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          View Details →
        </Link>
      </div>
    </motion.div>
  )
}
