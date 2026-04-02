import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    emoji: '🔍',
    category: 'Academic · PFE',
    name: 'Fraud Detection System',
    desc: 'Supervised ML pipeline to classify fraudulent transactions. Uses SVM with SMOTE oversampling and a Streamlit dashboard for live predictions.',
    stat: '~77% accuracy',
    tags: ['Python', 'SVM', 'Streamlit', 'Scikit-learn'],
    github: '#',
    demo: null,
  },
  {
    emoji: '🏠',
    category: 'Internship · HCP',
    name: 'Real Estate Price Predictor',
    desc: 'End-to-end pipeline: Avito scraper → cleaning → regression model predicting rental prices in Morocco based on property features.',
    stat: 'Automated scraping pipeline',
    tags: ['Python', 'BeautifulSoup', 'ML', 'Pandas'],
    github: '#',
    demo: null,
  },
  {
    emoji: '📊',
    category: 'Professional · Ajiapp',
    name: 'React Services Dashboard',
    desc: 'Production dashboard with React and Firebase: user auth, role-based routing, real-time service management, responsive UI.',
    stat: 'Firebase real-time sync',
    tags: ['React.js', 'Firebase', 'JavaScript'],
    github: null,
    demo: '#',
  },
  {
    emoji: '🏥',
    category: 'Professional · Best Clinique',
    name: 'Patient Journey App',
    desc: 'Cross-platform Flutter app for a medical clinic: patient onboarding, appointment booking, medical forms with image upload.',
    stat: 'iOS + Android',
    tags: ['Flutter', 'Dart', 'Firebase'],
    github: null,
    demo: null,
  },
  {
    emoji: '📚',
    category: 'Professional · Asass',
    name: 'Educational Platform',
    desc: 'WordPress customization and technical SEO overhaul — improved Core Web Vitals, enrollment UX, and structured data markup.',
    stat: 'SEO & performance boost',
    tags: ['WordPress', 'SEO', 'JavaScript'],
    github: null,
    demo: '#',
  },
  {
    emoji: '🤖',
    category: 'Personal',
    name: 'NLP Text Classifier',
    desc: 'Text classification pipeline with TF-IDF vectorization and SVM. Handles tokenization, stopword removal, and multi-class categorization.',
    stat: 'Multi-class NLP',
    tags: ['Python', 'NLP', 'TF-IDF', 'SVM'],
    github: '#',
    demo: null,
  },
]

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section className="section" id="projects" ref={ref} style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <span className="section-label">Projects</span>
          <div className="divider" />
          <h2 className="section-heading">Things I've built</h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="card project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="project-top">
                <span className="project-emoji">{p.emoji}</span>
                <div className="project-links">
                  {p.github && (
                    <a href={p.github} className="project-link" target="_blank" rel="noreferrer">
                      <FiGithub size={14} />
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} className="project-link" target="_blank" rel="noreferrer">
                      <FiExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              <div className="project-category">{p.category}</div>
              <div className="project-name">{p.name}</div>
              <p className="project-desc">{p.desc}</p>

              {p.stat && (
                <div className="project-stat">
                  <span>✓</span> {p.stat}
                </div>
              )}

              <div className="project-tech">
                {p.tags.map((t) => (
                  <span key={t} className="tag tag-gray">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
