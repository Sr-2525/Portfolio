import TopHeader from './TopHeader'

function Achievements() {
  return (
    <section className="slide-section">
      <TopHeader />
      <div className="section-tracker">RECOGNITION &amp; MILESTONES</div>
      <h2 className="main-heading">Key achievements.</h2>

      <p style={{ fontSize: '1.05rem', color: '#333', marginBottom: '25px', lineHeight: '1.6' }}>
        Key achievements and milestones that reflect my academic consistency, technical curiosity, and practical initiative:
      </p>

      <div className="grid-2">
        <div className="editorial-card">
          <span style={{ fontSize: '0.8rem', color: '#A62B12', fontWeight: 600, textTransform: 'uppercase' }}>Academic Excellence</span>
          <h3 style={{ fontSize: '1.25rem', marginTop: '4px' }}>Gold Category Recognition</h3>
          <p style={{ fontSize: '0.95rem', marginTop: '8px' }}>Consistently secured top-tier marks across all four semesters of my MCA program, earning a Gold Category certificate for each semester.</p>
        </div>

        <div className="editorial-card">
          <span style={{ fontSize: '0.8rem', color: '#A62B12', fontWeight: 600, textTransform: 'uppercase' }}>Technical Seminar</span>
          <h3 style={{ fontSize: '1.25rem', marginTop: '4px' }}>Edge-Based Smart Traffic</h3>
          <p style={{ fontSize: '0.95rem', marginTop: '8px' }}>Conducted a specialized seminar on an Edge-Based Smart Traffic Management System, exploring decentralized data processing for smart cities.</p>
        </div>
      </div>

      <div className="grid-2" style={{ marginTop: '20px' }}>
        <div className="editorial-card">
          <span style={{ fontSize: '0.8rem', color: '#A62B12', fontWeight: 600, textTransform: 'uppercase' }}>Certifications</span>
          <h3 style={{ fontSize: '1.25rem', marginTop: '4px' }}>Cloud Computing</h3>
          <p style={{ fontSize: '0.95rem', marginTop: '8px' }}>Completed the NPTEL Cloud Computing certification from the Government of India (Jan–Apr 2025) and a 5-day Cloud Computing Workshop with Educkshetra (Oct 2025).</p>
        </div>

        <div className="editorial-card">
          <span style={{ fontSize: '0.8rem', color: '#A62B12', fontWeight: 600, textTransform: 'uppercase' }}>Leadership &amp; Initiative</span>
          <h3 style={{ fontSize: '1.25rem', marginTop: '4px' }}>Tech Fest Management</h3>
          <p style={{ fontSize: '0.95rem', marginTop: '8px' }}>Managed and operated a food stall during the college tech fest, generating a substantial profit and earning recognition for the department.</p>
        </div>
      </div>

      <div className="editorial-card" style={{ marginTop: '20px' }}>
        <span style={{ fontSize: '0.8rem', color: '#A62B12', fontWeight: 600, textTransform: 'uppercase' }}>Civic &amp; Community Engagement</span>
        <h3 style={{ fontSize: '1.25rem', marginTop: '4px' }}>Urban Kerala Vision</h3>
        <p style={{ fontSize: '0.95rem', marginTop: '8px' }}>Participated in the "Children &amp; Youth Vision for Urban Kerala" program organized by KILA (Feb 2025), focusing on urban development initiatives.</p>
      </div>
    </section>
  )
}

export default Achievements