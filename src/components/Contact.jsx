import TopHeader from './TopHeader'

function Contact() {
  return (
    <section className="slide-section">
      <TopHeader />
      <div className="section-tracker">GET IN TOUCH</div>
      <h2 className="main-heading">Let's connect.</h2>

      <p style={{ fontSize: '1.05rem', color: '#333', marginBottom: '30px', lineHeight: '1.6' }}>
        I'm always happy to talk about work, ideas, or possibilities.
      </p>

      <div className="grid-2" style={{ alignItems: 'center' }}>
        <div>
          <ul className="square-list" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
            <li><strong>NAME:</strong> Sreethika R</li>
            <li><strong>EMAIL:</strong> <a href="mailto:sreethikaradhakrishnan03@gmail.com" style={{ color: '#A62B12', textDecoration: 'none' }}>sreethikaradhakrishnan03@gmail.com</a></li>
            <li><strong>LINKEDIN:</strong> <a href="https://linkedin.com/in/sreethika-r" target="_blank" rel="noreferrer" style={{ color: '#A62B12', textDecoration: 'none' }}>linkedin.com/in/sreethika-r</a></li>
            <li><strong>GITHUB:</strong> <a href="https://github.com/sreethika-radhakrishnan" target="_blank" rel="noreferrer" style={{ color: '#A62B12', textDecoration: 'none' }}>github.com/sreethika-radhakrishnan</a></li>
            <li><strong>LOCATION:</strong> Palakkad, Kerala, India <span style={{ display: 'block', fontSize: '0.85rem', color: '#666', fontStyle: 'italic', marginTop: '2px' }}>(Ready to relocate as job demands for the right opportunity)</span></li>
          </ul>
        </div>

        <div style={{ background: '#A62B12', color: '#F9F6F0', padding: '40px', borderRadius: '4px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '12px', opacity: '0.85' }}>THE BEST COLLABORATIONS</span>
          <h3 style={{ color: '#FFFFFF', fontSize: '1.5rem', marginBottom: '20px', fontFamily: 'Playfair Display, serif', lineHeight: '1.3' }}>Start with a conversation.</h3>
          <p style={{ color: '#F9F6F0', fontSize: '0.95rem', fontStyle: 'italic', lineHeight: '1.5' }}>
            &ldquo;I look forward to hearing from you.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact