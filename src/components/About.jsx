import AnimatedCard from './AnimatedCard'

function About() {
  return (
    <section className="slide-section">
      <div className="section-tracker">WHO I AM</div>
      <h2 className="main-heading">A little about me.</h2>
      
      <div className="grid-2" style={{ alignItems: 'start' }}>
        <AnimatedCard delay={0.1}>
          <p style={{ fontSize: '1.1rem', color: '#333', lineHeight: '1.8' }}>
            I'm an aspiring software engineer based in Palakkad, fresh out of my MCA. I've spent my academic and project time building backend and full-stack web applications, and I care deeply about understanding why a system works the way it does, not just getting it to run. I work best when I have a clear problem to solve and space to learn as I go.
          </p>
        </AnimatedCard>
        <AnimatedCard delay={0.2}>
          <ul className="square-list">
            <li>📍 Based in Palakkad — open to relocating</li>
            <li>🎓 2026 MCA graduate, ready to start my career</li>
            <li>💼 Available for full-time entry-level roles</li>
          </ul>
        </AnimatedCard>
      </div>
    </section>
  )
}

export default About