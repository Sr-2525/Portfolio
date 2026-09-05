import TopHeader from './TopHeader'
import contactImg from '../assets/contact.jpeg'

function Contact() {
  return (
    <section className="slide-section">
      <TopHeader />
      <div className="section-tracker">GET IN TOUCH</div>
      <h2 className="main-heading">Let's connect.</h2>

      <div className="grid-2" style={{ alignItems: 'center', marginTop: '15px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={{ fontSize: '1.05rem', color: '#E8DFEC', marginBottom: '14px', lineHeight: '1.6' }}>
            I'm always happy to talk about work, ideas, or possibilities.
          </p>
          <ul className="square-list" style={{ fontSize: '1rem', lineHeight: '1.8', margin: '0' }}>
            <li><strong style={{ color: '#D96B27' }}>NAME:</strong> Sreethika R</li>
            <li><strong style={{ color: '#D96B27' }}>EMAIL:</strong> <a href="mailto:sreethikaradhakrishnan03@gmail.com" style={{ color: '#D96B27', textDecoration: 'none' }}>sreethikaradhakrishnan03@gmail.com</a></li>
            <li><strong style={{ color: '#D96B27' }}>LINKEDIN:</strong> <a href="https://linkedin.com/in/sreethika-r" target="_blank" rel="noreferrer" style={{ color: '#D96B27', textDecoration: 'none' }}>linkedin.com/in/sreethika-r</a></li>
            <li><strong style={{ color: '#D96B27' }}>GITHUB:</strong> <a href="https://github.com/sreethika-radhakrishnan" target="_blank" rel="noreferrer" style={{ color: '#D96B27', textDecoration: 'none' }}>github.com/sreethika-radhakrishnan</a></li>
            <li><strong style={{ color: '#D96B27' }}>LOCATION:</strong> Palakkad, Kerala, India <span style={{ display: 'block', fontSize: '0.85rem', color: '#D96B27', fontStyle: 'italic', marginTop: '2px', textShadow: 'none' }}>(Ready to relocate as job demands for the right opportunity)</span></li>
          </ul>
        </div>

        {/* Right Column: Image Container */}
        <div className="cover-right-box" style={{ padding: '0', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '280px', position: 'relative' }}>
          <img 
            src={contactImg} 
            alt="" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', display: 'block' }} 
          />
          {/* Text Overlay with pure white text */}
          <div style={{ position: 'absolute', inset: '0', background: 'rgba(0, 0, 0, 0.4)', padding: '25px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'center', paddingTop: '35px' }}>
            <span style={{ color: '#FFFFFF', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '8px', opacity: '0.9', fontWeight: '500' }}>
              THE BEST COLLABORATIONS
            </span>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '10px', fontFamily: "'Playfair Display', serif", lineHeight: '1.3', fontWeight: '600' }}>
              Start with a conversation.
            </h3>
            <p style={{ color: '#FFFFFF', fontSize: '0.85rem', fontStyle: 'italic', lineHeight: '1.4', fontWeight: '400' }}>
              &ldquo;I look forward to hearing from you.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact