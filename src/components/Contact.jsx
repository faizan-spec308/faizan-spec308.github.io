import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { contact } from '../data/portfolio'

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [form, setForm] = useState({ from_name: '', from_email: '', message: '' })

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    /* --- EmailJS integration ---
       Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY with real values.
       Template must have {{from_name}}, {{from_email}}, {{message}} variables.
    */
    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.sendForm(
        'service_qxwm38r',
        'template_m5bfese',
        formRef.current,
        'SOn1DFV--_ZIzb9sj'
      )
      setStatus('sent')
      setForm({ from_name: '', from_email: '', message: '' })
    } catch {
      // Fallback to mailto if EmailJS not configured
      const subject = encodeURIComponent(`Portfolio enquiry from ${form.from_name}`)
      const body = encodeURIComponent(`${form.message}\n\n—\n${form.from_name}\n${form.from_email}`)
      window.open(`mailto:${contact.email}?subject=${subject}&body=${body}`)
      setStatus('idle')
    }
  }

  const inputClass = {
    backgroundColor: '#0d1526',
    border: '1px solid #1a2540',
    color: '#f0f0f0',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <section id="contact" className="py-24 px-6" style={{ backgroundColor: 'rgba(13, 21, 38, 0.4)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label"
        >
          // 06 — CONTACT
        </motion.p>

        <div className="mt-10 grid lg:grid-cols-2 gap-16">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-syne font-extrabold mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#f0f0f0' }}
            >
              Let's talk.
            </h2>
            <p className="font-mono text-sm mb-8" style={{ color: '#8892a4' }}>
              Open to placement opportunities starting June 2026.<br />
              Response within 24 hours.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { icon: '📧', label: contact.email, href: `mailto:${contact.email}` },
                { icon: '📱', label: contact.phone, href: `tel:${contact.phone}` },
                { icon: '📍', label: contact.location, href: null },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="text-base">{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-mono text-sm transition-colors duration-200"
                      style={{ color: '#8892a4' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#00ff88'}
                      onMouseLeave={e => e.currentTarget.style.color = '#8892a4'}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="font-mono text-sm" style={{ color: '#8892a4' }}>{item.label}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              {[
                { label: 'GitHub', href: contact.github },
                { label: 'LinkedIn', href: contact.linkedin },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs px-4 py-2 border transition-all duration-200"
                  style={{ borderColor: '#1a2540', color: '#8892a4' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#00ff88'
                    e.currentTarget.style.color = '#00ff88'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#1a2540'
                    e.currentTarget.style.color = '#8892a4'
                  }}
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {status === 'sent' ? (
              <div
                className="h-full flex items-center justify-center p-10 border rounded-sm text-center"
                style={{ borderColor: '#00ff88', backgroundColor: 'rgba(0,255,136,0.04)' }}
              >
                <div>
                  <p className="text-3xl mb-4">✓</p>
                  <p className="font-syne font-bold text-lg mb-2" style={{ color: '#00ff88' }}>Message sent.</p>
                  <p className="font-mono text-xs" style={{ color: '#8892a4' }}>I'll get back to you within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-mono text-xs uppercase tracking-wider block mb-2" style={{ color: '#8892a4' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    value={form.from_name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 font-mono text-sm rounded-sm"
                    style={inputClass}
                    onFocus={e => e.target.style.borderColor = '#00ff88'}
                    onBlur={e => e.target.style.borderColor = '#1a2540'}
                  />
                </div>
                <div>
                  <label className="font-mono text-xs uppercase tracking-wider block mb-2" style={{ color: '#8892a4' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    value={form.from_email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 font-mono text-sm rounded-sm"
                    style={inputClass}
                    onFocus={e => e.target.style.borderColor = '#00ff88'}
                    onBlur={e => e.target.style.borderColor = '#1a2540'}
                  />
                </div>
                <div>
                  <label className="font-mono text-xs uppercase tracking-wider block mb-2" style={{ color: '#8892a4' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about the opportunity..."
                    className="w-full px-4 py-3 font-mono text-sm rounded-sm resize-none"
                    style={inputClass}
                    onFocus={e => e.target.style.borderColor = '#00ff88'}
                    onBlur={e => e.target.style.borderColor = '#1a2540'}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 font-mono text-sm font-medium transition-all duration-200 rounded-sm"
                  style={{ backgroundColor: '#00ff88', color: '#0a0f1e' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = '#00cc6a'
                    e.currentTarget.style.boxShadow = '0 0 24px rgba(0,255,136,0.3)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = '#00ff88'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
