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
          <p style={{ marginTop: '12px' }}>
            Looking for entry-level software engineering or developer roles where I can contribute my MCA background, build scalable AI/software solutions, and grow rapidly alongside seasoned mentors.
          </p>
        </div>

        <div>
          <div className="editorial-card" style={{ marginBottom: '15px' }}>
            <h3 style={{ fontSize: '1.1rem' }}>Impactful Software</h3>
            <p style={{ fontSize: '0.95rem' }}>Projects that solve actual user or societal challenges.</p>
          </div>
          <div className="editorial-card" style={{ marginBottom: '15px' }}>
            <h3 style={{ fontSize: '1.1rem' }}>Growth-Driven Culture</h3>
            <p style={{ fontSize: '0.95rem' }}>Teams that encourage continuous learning and code excellence.</p>
          </div>
          <div className="editorial-card">
            <h3 style={{ fontSize: '1.1rem' }}>Collaboration</h3>
            <p style={{ fontSize: '0.95rem' }}>Environments valuing open communication and innovative engineering.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Goals