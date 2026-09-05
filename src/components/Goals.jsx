import AnimatedCard from './AnimatedCard'

function Goals() {
  return (
    <section className="slide-section">
      <div className="section-tracker">WHAT'S NEXT</div>
      <h2 className="main-heading">What I'm looking for.</h2>

      <div className="grid-2" style={{ alignItems: 'start' }}>
        <AnimatedCard delay={0.1}>
          <div className="editorial-card">
            <h3>Career Objective</h3>
            <p style={{ marginTop: '12px', lineHeight: '1.7' }}>
              I'm currently looking for an entry-level software engineering position in backend or full-stack development—or a broader technical role—where I can apply my foundational skills, ramp up quickly on new stacks, and build reliable digital solutions. The right opportunity involves a forward-thinking environment that encourages continuous learning and technical curiosity, and ideally connects with my goal to evolve alongside experienced engineers.
            </p>
            <p style={{ marginTop: '15px', fontWeight: '600', color: '#A62B12', fontSize: '0.95rem', fontStyle: 'italic' }}>
              Open to conversations, and referrals are always welcome. Ready to relocate as job demands for the right opportunity.
            </p>
          </div>
        </AnimatedCard>

        <div>
          <AnimatedCard delay={0.2}>
            <div className="editorial-card" style={{ marginBottom: '15px' }}>
              <h3 style={{ fontSize: '1.1rem' }}>Work that matters</h3>
              <p style={{ fontSize: '0.95rem' }}>Projects with a clear human or social dimension where quality counts. I thrive in environments that prioritize meaningful impact over mere output, contributing to engineering work that solves real problems and delivers genuine value.</p>
            </div>
          </AnimatedCard>
          <AnimatedCard delay={0.3}>
            <div className="editorial-card" style={{ marginBottom: '15px' }}>
              <h3 style={{ fontSize: '1.1rem' }}>A good cultural fit</h3>
              <p style={{ fontSize: '0.95rem' }}>Environments where honesty, creativity, and accountability are the standard. I look for supportive, communicative teams that value direct communication, mutual respect, and individuals who take genuine ownership from day one.</p>
            </div>
          </AnimatedCard>
          <AnimatedCard delay={0.4}>
            <div className="editorial-card">
              <h3 style={{ fontSize: '1.1rem' }}>Room to grow</h3>
              <p style={{ fontSize: '0.95rem' }}>Opportunities that stretch my capabilities and offer genuine long-term potential. I am looking for a place where I can both contribute and evolve within a growth-driven culture.</p>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  )
}

export default Goals