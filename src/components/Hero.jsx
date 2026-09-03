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
        {/* Drop your photo inside src/assets/ and import it, or use this clean styled container */}
        <div style={{ textAlign: 'center', color: '#666', padding: '20px' }}>
          <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Sreethika Radhakrishnan</p>
          <p style={{ fontSize: '0.75rem', marginTop: '5px', fontStyle: 'italic' }}>[ Insert Headshot Here ]</p>
        </div>
      </div>
    </div>
  )
}

export default Hero