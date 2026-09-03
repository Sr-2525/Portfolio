import TopHeader from './TopHeader'

function Approach() {
  return (
    <section className="slide-section">
      <TopHeader />
      <div className="section-tracker">HOW I WORK</div>
      <h2 className="main-heading">My approach.</h2>

      <div className="grid-2">
        <div className="editorial-card">
          <h3>1. Structured development</h3>
          <p>Plan carefully, execute methodically, and adapt smoothly when requirements shift.</p>
        </div>
        <div className="editorial-card">
          <h3>2. Logic-first communication</h3>
          <p>Keep technical details transparent and maintain clean documentation.</p>
        </div>
        <div className="editorial-card" style={{ marginTop: '20px' }}>
          <h3>3. Detail-oriented execution</h3>
          <p>Care about edge cases without losing sight of the core software objective.</p>
        </div>
        <div className="editorial-card" style={{ marginTop: '20px' }}>
          <h3>4. Autonomous ownership</h3>
          <p>Take full responsibility for features and code blocks from start to deployment.</p>
        </div>
      </div>
    </section>
  )
}
export default Approach