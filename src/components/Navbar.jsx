import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'

const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Brand */}
      <Link to="hero" smooth duration={800} style={{ cursor: 'pointer' }}>
        <div className="nav-brand">
          <span className="brand-text">TE</span>
        </div>
      </Link>

      {/* Desktop links */}
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.07 }}
          >
            <Link
              to={item.toLowerCase()}
              smooth
              duration={800}
              offset={-80}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          </motion.li>
        ))}
        <motion.li
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="mailto:ennaciritawfik175@gmail.com"
            className="nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </a>
        </motion.li>
      </ul>

      {/* Hamburger */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span style={{ transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
        <span style={{ opacity: menuOpen ? 0 : 1 }} />
        <span style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
      </button>
    </motion.nav>
  )
}

export default Navbar
