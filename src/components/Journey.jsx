import TopHeader from './TopHeader'

function Journey() {
  return (
    <section className="slide-section">
      <TopHeader />
      <div className="section-tracker">MY JOURNEY</div>
      <h2 className="main-heading">How I got here.</h2>

      <div>
        <div className="timeline-item">
          <div className="timeline-year">2024</div>
          <div className="timeline-content">
            <h3>Started MCA &amp; Deepened Core Foundations</h3>
            <p>Started my MCA at Sree Narayana Gurukulam College of Engineering, building on a BSc in Computer Science. Coursework introduced me to TensorFlow, PyTorch, Scikit-learn, and NLP concepts alongside core software development — my first real exposure to where theory meets practice.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-year">2025</div>
          <div className="timeline-content">
            <h3>Internship &amp; Independent Development</h3>
            <p>Completed a paid AI/ML internship at Right Soft Options Institute, Kochi, contributing to SafePassage, a safety platform — and independently built Haritha Connect, a Django logistics automation platform, using AI-assisted coding tools. This was my first time working within real production-style constraints, both guided and self-directed — seeing projects through from idea to working system.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-year">2026</div>
          <div className="timeline-content">
            <h3>Graduation &amp; Job Search Shift</h3>
            <p>Graduated with my MCA and shifted fully into an independent job search — tailoring applications, sharpening interviews, and continuing to build. This shift from academic structure to self-directed momentum has expanded how I think about ownership and follow-through.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-year">Present</div>
          <div className="timeline-content">
            <h3>Continuous Growth &amp; Looking Ahead</h3>
            <p>Job-searching for entry-level roles, and discovering along the way which skills I still need to build. I'm working on closing those gaps continuously. Each stage has shaped how I approach problems today — with curiosity first, and honesty about what I still need to learn.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey