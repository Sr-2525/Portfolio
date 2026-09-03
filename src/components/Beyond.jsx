import TopHeader from './TopHeader'

function Beyond() {
  return (
    <section className="slide-section">
      <TopHeader />
      <div className="section-tracker">BEYOND THE DESK</div>
      <h2 className="main-heading">What else drives me.</h2>

      <div className="grid-3">
        <div className="editorial-card">
          <h3>Continuous Learning</h3>
          <p>Exploring new tech trends, AI advancements, and developer platforms to stay sharp.</p>
        </div>
        <div className="editorial-card">
          <h3>Structured Writing</h3>
          <p>Translating complex technical concepts into clear articles and seminar presentations.</p>
        </div>
        <div className="editorial-card">
          <h3>Travel &amp; Exploration</h3>
          <p>Regular train travel across locations, expanding perspective and adaptability in new environments.</p>
        </div>
      </div>

      <div className="quote-bar" style={{ marginTop: '30px', textAlign: 'center' }}>
        &ldquo;Curiosity is the engine of technological achievement.&rdquo;
      </div>
    </section>
  )
}
export default Beyond