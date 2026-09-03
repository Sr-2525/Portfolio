import TopHeader from './TopHeader'

function Skills() {
  return (
    <section className="slide-section">
      <TopHeader />
      <div className="section-tracker">WHAT I BRING</div>
      <h2 className="main-heading">My skill set.</h2>

      <div className="grid-2">
        <div className="editorial-card">
          <h3>Core Competencies</h3>
          <ul className="square-list">
            <li>Object-oriented programming &amp; software development</li>
            <li>AI-powered platform design &amp; logic building</li>
            <li>Edge computing concepts &amp; smart traffic systems</li>
            <li>Analytical problem-solving &amp; team collaboration</li>
          </ul>
        </div>

        <div className="editorial-card">
          <h3>Tools &amp; Environment</h3>
          <ul className="square-list">
            <li>Python, Java, and modern programming stacks</li>
            <li>AI developer toolkits &amp; automation workflows</li>
            <li>Git version control &amp; project hubs</li>
            <li>Google Workspace &amp; technical documentation</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
export default Skills