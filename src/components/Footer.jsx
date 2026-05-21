import { contact } from '../data/portfolio'

export default function Footer() {
  return (
    <footer
      className="py-8 px-6 border-t text-center"
      style={{ borderColor: '#1a2540' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs" style={{ color: '#8892a4' }}>
          Faizan Naveed · Built with React · 2026
        </p>
        <a
          href={contact.github}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-xs transition-colors duration-200"
          style={{ color: '#8892a4' }}
          onMouseEnter={e => e.currentTarget.style.color = '#00ff88'}
          onMouseLeave={e => e.currentTarget.style.color = '#8892a4'}
        >
          github.com/faizan-spec308
        </a>
      </div>
    </footer>
  )
}
