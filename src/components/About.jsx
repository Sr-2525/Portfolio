import TopHeader from './TopHeader'

function About() {
  return (
    <section className="slide-section">
      <TopHeader />
      <div className="section-tracker">WHO I AM</div>
      <h2 className="main-heading">A little about me.</h2>
      
      <div className="grid-2" style={{ alignItems: 'start' }}>
        <p style={{ fontSize: '1.1rem', color: '#333', lineHeight: '1.8' }}>
          Recent MCA graduate who enjoys building backend and full-stack web applications, and I'm always curious about why a system works the way it does — not just getting it to work. I try to stay honest about what I know well and what I'm still figuring out.
        </p>
        <ul className="square-list">
          <li>📍 Based in Palakkad, Kerala</li>
          <li>🧩 Enjoys problem-solving, not just task-checking</li>
          <li>🌱 Early in my career, and genuinely enjoying the learning curve</li>
        </ul>
      </div>
    </section>
  )
}

export default About