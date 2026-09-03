import TopHeader from './TopHeader'

function Beyond() {
  return (
    <section className="slide-section">
      <TopHeader />
      <div className="section-tracker">BEYOND THE DESK</div>
      <h2 className="main-heading">What else drives me.</h2>

      <p style={{ fontSize: '1.05rem', color: '#333', marginBottom: '25px', lineHeight: '1.7' }}>
        Beyond the desk, the pursuit of new perspectives and creative expression keeps my approach to work balanced and grounded.
      </p>

      <div className="grid-3">
        <div className="editorial-card">
          <h3>Video Editing &amp; Content Creation</h3>
          <p>Shaping raw footage and framing stories into vlogs sharpens my sense of pacing, visual rhythm, and audience engagement, which translates naturally into how I structure digital projects.</p>
        </div>
        <div className="editorial-card">
          <h3>Event Management &amp; Anchoring</h3>
          <p>Orchestrating live events and anchoring on stage helps build real-time adaptability, clear communication, and composure under pressure, supporting how I collaborate with teams and manage group workflows.</p>
        </div>
        <div className="editorial-card">
          <h3>Language Acquisition</h3>
          <p>Exploring new languages encourages continuous learning and adaptability, helping me approach complex problem-solving from different angles.</p>
        </div>
      </div>

      <div className="quote-bar" style={{ marginTop: '30px', textAlign: 'center' }}>
        &ldquo;Curiosity is the engine of technological achievement.&rdquo;
      </div>
    </section>
  )
}

export default Beyond