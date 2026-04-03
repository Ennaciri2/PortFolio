import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const groups = [
  {
    label: 'Software Development',
    skills: ['React.js', 'JavaScript (ES6+)', 'HTML / CSS', 'Vite', 'Flask', 'FastAPI' ,'REST APIs'],
  },
  {
    label: 'Data Science & AI',
    skills: ['Python', 'Machine Learning', 'SVM', 'NLP', 'Web Scraping', 'Pandas', 'Scikit-learn'],
  },
  {
    label: 'Mobile & Backend',
    skills: ['Flutter', 'Dart', 'Firebase', 'SQL', 'REST APIs'],
  },
  {
    label: 'Tools & Workflow',
    skills: ['Git', 'GitLab', 'Docker', 'VS Code', 'Streamlit'],
  },
]

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section skills-section" id="skills" ref={ref}>
      <div className="container">
        <div className="skills-layout">

          {/* Left — intro */}
          <motion.div
            className="skills-intro"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Skills</span>
            <div className="divider" />
            <h2 className="section-heading">What I work with</h2>
            <p className="section-subtext">
              A mix of data science and software engineering — I'm comfortable moving
              between building models and shipping interfaces.
            </p>
          </motion.div>

          {/* Right — skill groups */}
          <div className="skill-groups">
            {groups.map((g, i) => (
              <motion.div
                key={g.label}
                className="skill-group"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="skill-group-label">{g.label}</div>
                <div className="skill-tags">
                  {g.skills.map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills
