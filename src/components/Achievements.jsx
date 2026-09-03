import TopHeader from './TopHeader'

function Achievements() {
  return (
    <section className="slide-section">
      <TopHeader />
      <div className="section-tracker">RECOGNITION &amp; MILESTONES</div>
      <h2 className="main-heading">Key achievements.</h2>

      <div className="grid-2">
        <div className="editorial-card">
          <span style={{ fontSize: '0.8rem', color: '#A62B12', fontWeight: 600, textTransform: 'uppercase' }}>Seminar Leadership</span>
          <h3 style={{ marginTop: '8px' }}>Smart Traffic Management</h3>
          <p style={{ marginTop: '10px' }}>Successfully conducted and presented a specialized technical seminar on edge-based data processing for smart city ecosystems in December 2025.</p>
        </div>

        <div className="editorial-card">
          <span style={{ fontSize: '0.8rem', color: '#A62B12', fontWeight: 600, textTransform: 'uppercase' }}>Academic Responsibility</span>
          <h3 style={{ marginTop: '8px' }}>AIMA Examination Supervision</h3>
          <p style={{ marginTop: '10px' }}>Served as an official invigilator and floor supervisor for AIMA-2025 examinations at SNGCE, demonstrating operational reliability and trust.</p>
        </div>
      </div>

      <div className="editorial-card" style={{ marginTop: '20px' }}>
        <span style={{ fontSize: '0.8rem', color: '#A62B12', fontWeight: 600, textTransform: 'uppercase' }}>Technical Upskilling</span>
        <h3 style={{ marginTop: '8px' }}>AI &amp; Software Certifications</h3>
        <p style={{ marginTop: '10px' }}>Completed rigorous technical challenges, webinars, and continuous learning modules via TCS iON and Coursera platforms.</p>
      </div>
    </section>
  )
}

export default Achievements