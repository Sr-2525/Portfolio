import TopHeader from './TopHeader'

function Journey() {
  return (
    <section className="slide-section">
      <TopHeader />
      <div className="section-tracker">MY JOURNEY</div>
      <h2 className="main-heading">How I got here.</h2>

      <div>
        <div className="timeline-item">
          <div className="timeline-year">2025</div>
          <div className="timeline-content">
            <h3>Smart Traffic Management Seminar</h3>
            <p>Conducted a seminar focused on processing traffic data locally at edge devices for smart city infrastructures.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-year">2025–26</div>
          <div className="timeline-content">
            <h3>Professional Upskilling &amp; Certifications</h3>
            <p>Engaged in advanced software engineering and AI development via Coursera and TCS iON technical challenges.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-year">May 2026</div>
          <div className="timeline-content">
            <h3>Developed SafePassage</h3>
            <p>Engineered an AI-powered personal safety platform featuring automated SOS alerts based on worker check-ins.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-year">Present</div>
          <div className="timeline-content">
            <h3>Completing MCA at SNGCE</h3>
            <p>Culminating academic learning into practical, production-ready software solutions.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Journey