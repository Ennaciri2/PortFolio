import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi'

const roles = ['Data Science', 'AI Engineer', 'React Developer', 'ML & Software Development']

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0)
  const [text, setText] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIdx]
    let t

    if (typing) {
      if (text.length < current.length) {
        t = setTimeout(() => setText(current.slice(0, text.length + 1)), 80)
      } else {
        t = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (text.length > 0) {
        t = setTimeout(() => setText(text.slice(0, -1)), 45)
      } else {
        setRoleIdx((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(t)
  }, [text, typing, roleIdx])

  return (
    <section className="hero" id="hero">
      <div className="hero-inner">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="hero-eyebrow">
            <span className="dot" />
            Open to opportunities
          </div>

          <h1 className="hero-name">
            Tawfik<br />
            <span className="accent">Ennaciri.</span>
          </h1>

          <p className="hero-role">
            <span className="typed">{text}</span>
            <span className="cursor" />
          </p>

          <p className="hero-bio">
            Master’s student in Data Science & AI at UM5 Rabat,
            with hands-on experience in machine learning, 
            data pipelines, and software development.
            I build useful solutions ranging from ML projects to web and mobile applications.
          </p>

          <div className="hero-actions">
            <Link to="projects" smooth duration={700} offset={-80}>
              <button className="btn btn-primary">
                See my work <FiArrowRight size={15} />
              </button>
            </Link>
            <Link to="contact" smooth duration={700} offset={-80}>
              <button className="btn btn-ghost">Contact me</button>
            </Link>
          </div>

          <div className="hero-meta">
            {[
              { num: '3+', label: 'Years of experience' },
              { num: '4',  label: 'Professional roles' },
              { num: '2',  label: 'Tech stacks' },
            ].map((m) => (
              <div className="meta-item" key={m.label}>
                <div className="meta-num">{m.num}</div>
                <div className="meta-label">{m.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Photo */}
        <motion.div
          className="hero-photo-side"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
        >
          <div className="hero-img-wrapper">
            <img
              src="/profile.jpg"
              alt="Tawfik Ennaciri"
              className="hero-img"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className="hero-img-fallback" style={{ display: 'none' }}>TE</div>
            <div className="hero-accent-dot" />
          </div>
          <div className="hero-accent-line" />
        </motion.div>

      </div>

      <div className="scroll-hint">
        <div className="scroll-hint-line" />
        <span>scroll</span>
      </div>
    </section>
  )
}

export default Hero
