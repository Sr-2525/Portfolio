import TopHeader from './TopHeader'

function Strengths() {
  return (
    <section className="slide-section">
      <TopHeader />
      <div className="section-tracker">MY STRENGTHS</div>
      <h2 className="main-heading">Where I add the most value.</h2>

      <div className="quote-bar">
        &ldquo;How can we bridge the gap between complex software logic and real-world human safety?&rdquo;
      </div>

      <div className="grid-3">
        <div className="editorial-card">
          <h3>Clarity under complexity</h3>
          <p>Taking intricate technical problems like edge data processing and breaking them down into clean, scalable systems.</p>
        </div>
        <div className="editorial-card">
          <h3>Building things that last</h3>
          <p>Focusing on code longevity, system efficiency, and architecture that holds up long-term under production demands.</p>
        </div>
        <div className="editorial-card">
          <h3>Collaborative drive</h3>
          <p>Eager to learn, quick to adapt to team workflows, and genuinely invested in positive project outcomes.</p>
        </div>
      </div>
    </section>
  )
}
export default Strengths