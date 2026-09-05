import TopHeader from './TopHeader'
import contactImg from '../assets/contact.jpeg'

function Contact() {
  return (
    <section className="slide-section">
      <TopHeader />
      <div className="section-tracker">GET IN TOUCH</div>
      <h2 className="main-heading">Let's connect.</h2>

      <p style={{ fontSize: '1.05rem', color: '#E8DFEC', marginBottom: '30px', lineHeight: '1.6' }}>
        I'm always happy to talk about work, ideas, or possibilities.
      </p>

      <div className="grid-2" style={{ alignItems: 'center' }}>
        <div>
          <ul className="square-list" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
            <li><strong style={{ color: '#D96B27' }}>NAME:</strong> Sreethika R</li>
            <li><strong style={{ color: '#D96B27' }}>EMAIL:</strong> <a href="mailto:sreethikaradhakrishnan03@gmail.com" style={{ color: '#D96B27', textDecoration: 'none' }}>sreethikaradhakrishnan03@gmail.com</a></li>
            <li><strong style={{ color: '#D96B27' }}>LINKEDIN:</strong> <a href="https://linkedin.com/in/sreethika-r" target="_blank" rel="noreferrer" style={{ color: '#D96B27', textDecoration: 'none' }}>linkedin.com/in/sreethika-r</a></li>
            <li><strong style={{ color: '#D96B27' }}>GITHUB:</strong> <a href="https://github.com/sreethika-radhakrishnan" target="_blank" rel="noreferrer" style={{ color: '#D96B27', textDecoration: 'none' }}>github.com/sreethika-radhakrishnan</a></li>
            <li><strong style={{ color: '#D96B27' }}>LOCATION:</strong> Palakkad, Kerala, India <span style={{ display: 'block', fontSize: '0.85rem', color: '#D96B27', fontStyle: 'italic', marginTop: '2px', textShadow: 'none' }}>(Ready to relocate as job demands for the right opportunity)</span></li>
          </ul>
        </div>

        <div className="cover-right-box" style={{ padding: '0', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '320px' }}>
          <img 
            src={contactImg} 
            alt="Contact Visual" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
          />
        </div>
      </div>
    </section>
  )
}

export default Contact