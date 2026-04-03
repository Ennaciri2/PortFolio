import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    date: 'Feb 2026 – Present',
    company: 'Haut-Commissariat au Plan',
    role: 'Data Science / AI Intern',
    points: [
      'Automated scraping of real estate listings from Avito',
      'Built a data cleaning and feature engineering pipeline for rental price prediction',
      'Trained a rental price prediction model (regression / SVM)',
    ],
    tags: ['Python', 'Web Scraping', 'ML', 'Pandas'],
  },
  {
    date: 'Apr – Nov 2025',
    company: 'Ajiapp',
    role: 'React Frontend Developer',
    points: [
      'Developed a React dashboard with authentication, routing, and dynamic forms for service management',
      'Handled authentication, routing, and dynamic forms',
      'Designed a responsive service management interface',
    ],
    tags: ['React.js', 'Firebase', 'JavaScript'],
  },
  {
    date: 'Jun – Aug 2023',
    company: 'Best Clinique Istanbul',
    role: 'Mobile Developer — Flutter',
    points: [
      'Built Flutter screens for the patient journey flow',
      'Created medical intake forms with image upload',
      'Integrated Firebase for backend sync',
    ],
    tags: ['Flutter', 'Dart', 'Firebase'],
  },
  {
    date: 'Jan – Jul 2023',
    company: 'Asass For Education',
    role: 'Web Developer',
    points: [
      'WordPress integration and theme customization',
      'Technical SEO and performance optimization',
      'Improved enrollment forms and user flows',
    ],
    tags: ['WordPress', 'SEO', 'HTML/CSS'],
  },
]

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section className="section" id="experience" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <span className="section-label">Experience</span>
          <div className="divider" />
          <h2 className="section-heading">Where I've worked</h2>
        </motion.div>

        <div className="exp-list">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="exp-item"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="exp-left">
                <div className="exp-date">{exp.date}</div>
                <div className="exp-company-name">{exp.company}</div>
              </div>

              <div className="exp-right">
                <div className="exp-title">{exp.role}</div>
                <ul className="exp-points">
                  {exp.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
                <div className="exp-tags">
                  {exp.tags.map((t) => <span key={t} className="tag tag-gray">{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
