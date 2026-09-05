import heroImg from '../assets/hero.jpeg'

function Hero() {
  return (
    <div className="cover-slide">
      <div className="cover-left">
        <span className="top-tag">PORTFOLIO 2026</span>
        <h1>Hello, I'm<br />Sreethika.</h1>
        <p className="subtitle">MCA Graduate &amp; Software Developer — Palakkad, Kerala</p>
        <p className="tagline">Curious about how code meets real-world utility. Building practical software and exploring AI systems without the buzzwords.</p>
      </div>
      
      <div className="cover-right-box" style={{ padding: '0', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#E2DCD2' }}>
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