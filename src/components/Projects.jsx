import TopHeader from './TopHeader'

function Projects() {
  return (
    <section className="slide-section">
      <TopHeader />
      <div className="section-tracker">RECENT WORK</div>
      <h2 className="main-heading">Projects I'm proud of.</h2>

      <div className="grid-2">
        <div className="editorial-card">
          <span style={{ fontSize: '0.8rem', color: '#A62B12', fontWeight: 600, textTransform: 'uppercase' }}>AI &amp; Personal Safety</span>
          <h3 style={{ marginTop: '8px' }}>SafePassage</h3>
          <p style={{ marginTop: '10px' }}>Developed and tested an AI-powered safety application featuring automated SOS alerts driven by worker check-ins and live location tracking.</p>
        </div>

        <div className="editorial-card">
          <span style={{ fontSize: '0.8rem', color: '#A62B12', fontWeight: 600, textTransform: 'uppercase' }}>IoT &amp; Edge Computing</span>
          <h3 style={{ marginTop: '8px' }}>Smart Traffic Management</h3>
          <p style={{ marginTop: '10px' }}>Researched and delivered a technical seminar on decentralized traffic data processing for smart city infrastructure.</p>
        </div>
      </div>
    </section>
  )
}
export default Projects