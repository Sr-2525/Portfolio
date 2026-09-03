import TopHeader from './TopHeader'

function About() {
  return (
    <section className="slide-section">
      <TopHeader />
      <div className="section-tracker">WHO I AM</div>
      <h2 className="main-heading">A little about me.</h2>
      
      <div className="grid-2" style={{ alignItems: 'start' }}>
        <p style={{ fontSize: '1.1rem', color: '#333', lineHeight: '1.8' }}>
          I'm an MCA postgraduate student at Sree Narayana Gurukulam College of Engineering (SNGCE) graduating in 2026. I care deeply about clean code, AI-driven applications, and solving real-world challenges through technology.
        </p>
        <ul className="square-list">
          <li>Based in Kerala, India · Open to software roles</li>
          <li>Focused on AI, software engineering, and smart systems</li>
          <li>Available for full-time entry-level opportunities</li>
        </ul>
      </div>
    </section>
  )
}
export default About