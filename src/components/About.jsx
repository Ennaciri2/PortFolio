import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiArrowUpRight } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: i * 0.1 },
  }),
}

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <div className="about-grid">

          {/* Photo */}
          <motion.div
            className="about-photo-col"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="about-img-frame">
              <img
                src="/profile.jpg"
                alt="Tawfik Ennaciri"
                className="about-img"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="about-img-placeholder" style={{ display: 'none' }}>TE</div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="about-text-col"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.span className="section-label" variants={fadeUp}>About</motion.span>
            <motion.div className="divider" variants={fadeUp} />
            <motion.h2 className="section-heading" variants={fadeUp}>
              Who I am
            </motion.h2>

            <motion.p className="about-bio" variants={fadeUp}>
              I'm a Data Science &amp; AI Master's student at Mohamed V University in Rabat,
              Morocco. My work sits at the intersection of machine learning and practical
              software — I like building things that are both analytically solid and
              actually useful.
            </motion.p>

            <motion.p className="about-bio" variants={fadeUp}>
              Over the past three years I've worked across web, mobile, and data science
              roles — from scraping and modeling real estate data, to shipping production
              React dashboards and Flutter apps. I like clean code, clean data, and
              interfaces that don't get in the way.
            </motion.p>

            <motion.div className="about-details" variants={fadeUp}>
              {[
                { label: 'Location', value: 'Salé, Morocco' },
                { label: 'Email', value: 'ennaciritawfik175@gmail.com' },
                { label: 'Phone', value: '+212 664 879 113' },
                { label: 'Status', value: "Master's (2024–2026)" },
              ].map((d) => (
                <div className="detail-item" key={d.label}>
                  <div className="detail-label">{d.label}</div>
                  <div className="detail-value">{d.value}</div>
                </div>
              ))}
            </motion.div>

            <motion.div className="about-actions" variants={fadeUp}>
              <a href="mailto:ennaciritawfik175@gmail.com" className="btn btn-primary">
                <FiMail size={15} /> Say hello
              </a>
              <a href="/CV_Tawfik_Ennaciri.pdf" download className="btn btn-ghost">
                Download CV <FiArrowUpRight size={14} />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          className="edu-row"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="section-label">Education</span>
          <div className="edu-list">
            {[
              { year: '2019–2020', degree: 'Bac Sciences Mathématiques B', school: 'Lycée Hassan II' },
              { year: '2021–2023', degree: 'Licence Informatique', school: 'UM5 – Rabat' },
              { year: '2024–2026', degree: 'Master Data Science & IA', school: 'UM5 – Rabat' },
            ].map((e, i) => (
              <div className="card edu-item" key={i}>
                <div className="edu-year">{e.year}</div>
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-school">{e.school}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
