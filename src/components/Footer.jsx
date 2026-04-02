import { Link } from 'react-scroll'

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-name">
        Tawfik <span>Ennaciri</span>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} · Built with React + Framer Motion
      </p>

      <nav className="footer-nav">
        {['about', 'skills', 'experience', 'projects', 'contact'].map((s) => (
          <Link key={s} to={s} smooth duration={700} offset={-80}>
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </Link>
        ))}
      </nav>
    </div>
  </footer>
)

export default Footer
