import AnimatedCard from './AnimatedCard'

function Strengths() {
  return (
    <section className="slide-section">
      <div className="section-tracker">MY STRENGTHS</div>
      <h2 className="main-heading">Where I add the most value.</h2>

      <div className="quote-bar">
        &ldquo;How can we bridge the gap between complex software logic and real-world human safety?&rdquo;
      </div>

      <div className="grid-3">
        <AnimatedCard delay={0.1}>
          <div className="editorial-card">
            <h3 style={{ color: '#D96B27' }}>Analytical Problem-Solving &amp; Planning</h3>
            <p>I like to take the time to deeply analyze complex problems, break them down into manageable pieces, and plan out my approach carefully. I believe in documenting my steps clearly so the logic is always transparent and easy to follow.</p>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.2}>
          <div className="editorial-card">
            <h3 style={{ color: '#D96B27' }}>Detail-Oriented Execution</h3>
            <p>I focus on writing clean, reliable code with strong attention to detail. Whether it's database design or testing, I care about building systems that are efficient, maintainable, and robust.</p>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.3}>
          <div className="editorial-card">
            <h3 style={{ color: '#D96B27' }}>Collaborative Team Player</h3>
            <p>I enjoy working across different teams and learning from others. By recognizing and appreciating each team member's strengths, I help keep communication respectful and workflows smooth to bring a project across the finish line.</p>
          </div>
        </AnimatedCard>
      </div>
    </section>
  )
}

export default Strengths