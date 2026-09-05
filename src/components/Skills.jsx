import AnimatedCard from './AnimatedCard'

function Skills() {
  return (
    <section className="slide-section">
      <div className="section-tracker">WHAT I BRING</div>
      <h2 className="main-heading">My skill set.</h2>

      <div className="grid-2">
        <AnimatedCard delay={0.1}>
          <div className="editorial-card">
            <h3>Languages &amp; Development</h3>
            <ul className="square-list">
              <li><strong>Languages:</strong> Python, PHP, Java, SQL, C, C++</li>
              <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript</li>
              <li><strong>Backend:</strong> Django, PHP, REST APIs</li>
              <li><strong>Databases:</strong> MySQL, MongoDB, SQLite, PostgreSQL (working knowledge)</li>
            </ul>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.2}>
          <div className="editorial-card">
            <h3>AI &amp; Machine Learning</h3>
            <ul className="square-list">
              <li><strong>Frameworks:</strong> TensorFlow, PyTorch, Scikit-learn</li>
              <li><strong>Specializations:</strong> NLP concepts, Rule-based + ML hybrid systems (Random Forest)</li>
            </ul>
          </div>
        </AnimatedCard>
      </div>

      <div className="grid-2" style={{ marginTop: '20px' }}>
        <AnimatedCard delay={0.3}>
          <div className="editorial-card">
            <h3>Tools &amp; Environment</h3>
            <ul className="square-list">
              <li>Git, GitHub, VS Code, XAMPP</li>
              <li>AI-assisted coding tools integrated into development workflows</li>
            </ul>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.4}>
          <div className="editorial-card">
            <h3>Practices &amp; Methodologies</h3>
            <ul className="square-list">
              <li>Agile/Scrum and sprint-based delivery</li>
              <li>Software Testing &amp; Debugging, Database Design, Technical Documentation, RBAC</li>
              <li>Continuously exploring emerging AI tools and software engineering trends.</li>
            </ul>
          </div>
        </AnimatedCard>
      </div>
    </section>
  )
}

export default Skills