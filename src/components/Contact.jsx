import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const href = `mailto:ennaciritawfik175@gmail.com?subject=Portfolio contact from ${form.name}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.email)}`
    window.location.href = href
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className="section" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <span className="section-label">Contact</span>
          <div className="divider" />
          <h2 className="section-heading">Get in touch</h2>
        </motion.div>

        <div className="contact-layout">

          {/* Left */}
          <motion.div
            className="contact-left"
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p>
              I'm open to internships, freelance work, and full-time positions in
              data science or frontend development. If you have something in mind, just reach out —
              I'll get back to you within a day.
            </p>

            <div className="contact-links">
              {[
                { icon: <FiMail size={14} />, text: 'ennaciritawfik175@gmail.com', href: 'mailto:ennaciritawfik175@gmail.com' },
                { icon: <FiPhone size={14} />, text: '+212 664 879 113', href: 'tel:+212664879113' },
                { icon: <FiMapPin size={14} />, text: 'Salé, Morocco', href: null },
              ].map((item, i) => (
                <div key={i}>
                  {item.href ? (
                    <a href={item.href} className="contact-link-item">
                      <span className="icon">{item.icon}</span>
                      {item.text}
                    </a>
                  ) : (
                    <div className="contact-link-item">
                      <span className="icon">{item.icon}</span>
                      {item.text}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="socials">
              <a href="https://github.com/Ennaciri1" target="_blank" rel="noreferrer" className="social-icon" title="GitHub">
                <FiGithub size={16} />
              </a>
              <a href="https://www.linkedin.com/in/tawfik-ennaciri-027586271/" target="_blank" rel="noreferrer" className="social-icon" title="LinkedIn">
                <FiLinkedin size={16} />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="form-row">
              <div className="form-field">
                <label className="form-label">Name</label>
                <input
                  type="text" name="name" className="form-input"
                  placeholder="Your name" value={form.name}
                  onChange={handleChange} required
                />
              </div>
              <div className="form-field">
                <label className="form-label">Email</label>
                <input
                  type="email" name="email" className="form-input"
                  placeholder="your@email.com" value={form.email}
                  onChange={handleChange} required
                />
              </div>
            </div>

            <div className="form-field">
              <label className="form-label">Message</label>
              <textarea
                name="message" className="form-textarea" rows={5}
                placeholder="Tell me about your project or opportunity..."
                value={form.message} onChange={handleChange} required
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
              {sent ? '✓ Sent!' : <><FiSend size={14} /> Send message</>}
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  )
}

export default Contact
