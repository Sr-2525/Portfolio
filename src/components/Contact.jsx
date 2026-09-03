import TopHeader from './TopHeader'

function Contact() {
  return (
    <section className="slide-section">
      <TopHeader />
      <div className="section-tracker">GET IN TOUCH</div>
      <h2 className="main-heading">Let's connect.</h2>

      <div className="grid-2" style={{ alignItems: 'center' }}>
        <div>
          <ul className="square-list" style={{ fontSize: '1.1rem' }}>
            <li><strong>NAME:</strong> Sreethika Radhakrishnan</li>
            <li><strong>EMAIL:</strong> sreethika@example.com</li>
            <li><strong>GITHUB / LINKEDIN:</strong> github.com/sreethika</li>
            <li><strong>LOCATION:</strong> Kerala, India</li>
          </ul>
        </div>

        <div style={{ background: '#A62B12', color: '#F9F6F0', padding: '40px', borderRadius: '4px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>STATUS</span>
          <h3 style={{ color: '#FFFFFF', fontSize: '1.6rem', marginBottom: '20px', fontFamily: 'Playfair Display, serif' }}>OPEN TO ENTRY-LEVEL ROLES</h3>
          <p style={{ color: '#F9F6F0', fontSize: '0.95rem', fontStyle: 'italic' }}>
            &ldquo;The best software solutions start with a conversation. I look forward to connecting!&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
export default Contact