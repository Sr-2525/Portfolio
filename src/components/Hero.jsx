import heroImg from '../assets/hero.jpeg'

function Hero() {
  return (
    <div className="cover-slide">
      <div className="cover-left">
        <span className="top-tag">PORTFOLIO 2026</span>
        <h1 style={{ color: '#4A2E18', textShadow: '0 2px 4px rgba(0,0,0,0.3)', fontSize: '3.8rem', lineHeight: '1.1', marginBottom: '20px' }}>
          Hello, I'm<br />Sreethika.
        </h1>
        <p className="subtitle">MCA Graduate &amp; Software Developer — Palakkad, Kerala</p>
        <p className="tagline" style={{ color: '#E8DCC4', fontStyle: 'italic' }}>
          Curious about how code meets real-world utility. Building practical software and exploring AI systems without the buzzwords.
        </p>
      </div>
      
      <div className="cover-right-box" style={{ padding: '0', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img 
          src={heroImg} 
          alt="Sreethika Radhakrishnan" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
        />
      </div>
    </div>
  )
}

export default Hero