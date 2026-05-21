import { motion } from 'framer-motion'
import { projects } from '../data/portfolio'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const featured  = projects.find(p => p.featured)
  const secondary = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label"
        >
          // 03 — PROJECTS
        </motion.p>

        {/* Bento grid */}
        <div className="mt-10 space-y-4">
          {/* Featured — full width */}
          {featured && (
            <div className="grid lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2">
                <ProjectCard project={featured} featured />
              </div>
              {/* First secondary beside featured */}
              {secondary[0] && (
                <ProjectCard project={secondary[0]} />
              )}
            </div>
          )}

          {/* Remaining projects — 3-col grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {secondary.slice(1).map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
