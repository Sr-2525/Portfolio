import TopHeader from './TopHeader'

function Goals() {
  return (
    <section className="slide-section">
      <TopHeader />
      <div className="section-tracker">WHAT'S NEXT</div>
      <h2 className="main-heading">What I'm looking for.</h2>

      <div className="grid-2">
        <div className="editorial-card">
          <h3>Career Objective</h3>
          <p style={{ marginTop: '12px', lineHeight: '1.7' }}>
            An entry-level software engineering position in backend or full-stack development—or a broader technical role—where I can apply my foundational skills, ramp up quickly on new stacks, and build reliable digital solutions.
          </p>
          <p style={{ marginTop: '15px', fontWeight: '600', color: '#A62B12', fontSize: '0.95rem' }}>
            📍 Ready to relocate as job demands for the right opportunity.
          </p>
        </div>

        <div>
          <div className="editorial-card" style={{ marginBottom: '15px' }}>
            <h3 style={{ fontSize: '1.1rem' }}>Impactful Projects</h3>
            <p style={{ fontSize: '0.95rem' }}>An opportunity to contribute to engineering work that solves real problems, scales cleanly, and delivers meaningful value to users rather than just writing code for its own sake.</p>
          </div>
          <div className="editorial-card" style={{ marginBottom: '15px' }}>
            <h3 style={{ fontSize: '1.1rem' }}>Growth-Driven Culture</h3>
            <p style={{ fontSize: '0.95rem' }}>A forward-thinking environment that encourages continuous learning, technical curiosity, and mentorship, allowing me to evolve alongside experienced engineers.</p>
          </div>
          <div className="editorial-card">
            <h3 style={{ fontSize: '1.1rem' }}>Collaboration</h3>
            <p style={{ fontSize: '0.95rem' }}>A supportive, communicative team that values shared problem-solving, constructive feedback, and individuals who take genuine ownership of their responsibilities from day one.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Goals