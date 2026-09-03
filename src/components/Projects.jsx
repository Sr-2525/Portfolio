import TopHeader from './TopHeader'

function Projects() {
  return (
    <section className="slide-section">
      <TopHeader />
      <div className="section-tracker">RECENT WORK</div>
      <h2 className="main-heading">Projects I'm proud of.</h2>

      <div className="editorial-card" style={{ marginBottom: '25px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <span style={{ fontSize: '0.8rem', color: '#A62B12', fontWeight: 600, textTransform: 'uppercase' }}>AI-Driven Personal Safety Platform</span>
            <h3 style={{ fontSize: '1.4rem', marginTop: '4px' }}>SafePassage</h3>
          </div>
          <span style={{ fontSize: '0.85rem', color: '#666', background: '#F4EFE6', padding: '4px 10px', borderRadius: '4px' }}>Jan 2026 – Apr 2026</span>
        </div>
        <p style={{ fontSize: '0.9rem', color: '#555', fontStyle: 'italic', margin: '8px 0 12px 0' }}>Python, Django, SQLite, REST APIs, AI/ML</p>
        <p style={{ marginBottom: '14px', color: '#333' }}>
          Built during my paid AI/ML internship at Right Soft Options Institute, Kochi. An intelligent web-based safety system for tourists and night workers, combining AI-driven risk analysis, real-time location tracking, and dual operating modes.
        </p>
        <ul className="square-list" style={{ fontSize: '0.95rem' }}>
          <li>Designed dual operating modes (Tourist &amp; Night Worker) on a unified Django backend, with REST-based communication between modules</li>
          <li>Contributed to an AI-driven Risk Analysis Engine combining rule-based scoring with a separately trained Random Forest model on NCRB crime data, achieving strong cross-validated accuracy</li>
          <li>Implemented secure Role-Based Access Control and automated emergency SOS functionality with real-time alerts</li>
          <li>Authored structured architecture and ML documentation, maintained via Git/GitHub</li>
        </ul>
      </div>

      <div className="grid-2">
        <div className="editorial-card">
          <span style={{ fontSize: '0.8rem', color: '#A62B12', fontWeight: 600, textTransform: 'uppercase' }}>Logistics Automation</span>
          <h3 style={{ fontSize: '1.25rem', marginTop: '4px' }}>Haritha Connect</h3>
          <p style={{ fontSize: '0.8rem', color: '#666', margin: '4px 0 8px 0' }}>Python, Django · Aug 2025 – Nov 2025</p>
          <p style={{ fontSize: '0.95rem', marginBottom: '10px' }}>Automated task scheduling and allocation for 1,000+ monthly collection requests.</p>
          <ul className="square-list" style={{ fontSize: '0.9rem' }}>
            <li>Designed a three-tier access control system with offline payment tracking and verification workflows</li>
            <li>Documented system architecture, test cases, and workflows for maintainability</li>
          </ul>
        </div>

        <div className="editorial-card">
          <span style={{ fontSize: '0.8rem', color: '#A62B12', fontWeight: 600, textTransform: 'uppercase' }}>Transaction Management</span>
          <h3 style={{ fontSize: '1.25rem', marginTop: '4px' }}>Chai Book</h3>
          <p style={{ fontSize: '0.8rem', color: '#666', margin: '4px 0 8px 0' }}>PHP, MySQL, JavaScript · Apr 2025 – May 2025</p>
          <p style={{ fontSize: '0.95rem', marginBottom: '10px' }}>Built with a focus on database integrity and query efficiency.</p>
          <ul className="square-list" style={{ fontSize: '0.9rem' }}>
            <li>Independently debugged logic errors using a methodical, root-cause approach</li>
            <li>Implemented secure session handling and data validation workflows to protect user transactions</li>
          </ul>
        </div>
      </div>

      <div className="editorial-card" style={{ marginTop: '20px' }}>
        <span style={{ fontSize: '0.8rem', color: '#A62B12', fontWeight: 600, textTransform: 'uppercase' }}>Scheduling Platform</span>
        <h3 style={{ fontSize: '1.25rem', marginTop: '4px' }}>Quick Serve</h3>
        <p style={{ fontSize: '0.8rem', color: '#666', margin: '4px 0 8px 0' }}>PHP, MySQL · Sep 2023 – Mar 2024</p>
        <p style={{ fontSize: '0.95rem', marginBottom: '10px' }}>Multi-user appointment-scheduling platform.</p>
        <ul className="square-list" style={{ fontSize: '0.9rem' }}>
          <li>Engineered scheduling logic to process requests and resolve conflicts</li>
          <li>Created full technical documentation, system design diagrams, and testing protocols</li>
        </ul>
      </div>
    </section>
  )
}

export default Projects