import TopHeader from './TopHeader'

function Journey() {
  return (
    <section className="slide-section">
      <TopHeader />
      <div className="section-tracker">MY JOURNEY</div>
      <h2 className="main-heading">How I got here.</h2>

      <div>
        <div className="timeline-item">
          <div className="timeline-year">2023–2024</div>
          <div className="timeline-content">
            <h3>Early Groundwork</h3>
            <p>Built my first end-to-end project, Quick Serve, while finishing my BSc in Computer Science — my first real taste of designing a working system from scratch.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-year">2024</div>
          <div className="timeline-content">
            <h3>Started My MCA</h3>
            <p>Began my MCA at Sree Narayana Gurukulam College of Engineering, deepening my technical foundation and getting my first exposure to AI/ML concepts alongside core software development.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-year">2025</div>
          <div className="timeline-content">
            <h3>Independent Building</h3>
            <p>Took on two more projects — Chai Book and Haritha Connect — moving from guided coursework toward first-principles, self-directed system design.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-year">2026</div>
          <div className="timeline-content">
            <h3>Internship &amp; Graduation</h3>
            <p>Completed a paid AI/ML internship at Right Soft Options Institute, Kochi, where I contributed to SafePassage, an AI-driven personal safety platform — and graduated with my MCA, closing out my academic journey with my most technically ambitious project yet.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-year">Present</div>
          <div className="timeline-content">
            <h3>Continuous Growth &amp; Looking Ahead</h3>
            <p>Bringing everything I've built so far into the next chapter — approaching new opportunities with curiosity, adaptability, and a steady drive to keep growing.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey