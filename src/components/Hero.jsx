import AnimatedCard from './AnimatedCard'
import heroImg from '../assets/hero.jpeg'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1
    }
  }
}

const wordVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
}

function Hero() {
  return (
    <div className="cover-slide">
      <AnimatedCard delay={0.1} style={{ height: '100%' }}>
        <div className="cover-left">
          <span className="top-tag">PORTFOLIO 2026</span>
          
          <motion.h1 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            style={{ color: '#4A2E18', textShadow: '0 2px 4px rgba(0,0,0,0.3)', fontSize: '3.8rem', lineHeight: '1.1', marginBottom: '20px' }}
          >
            <span style={{ display: 'block' }}>
              <motion.span variants={wordVariants} style={{ display: 'inline-block', marginRight: '0.3em' }}>Hello,</motion.span>
              <motion.span variants={wordVariants} style={{ display: 'inline-block' }}>I&apos;m</motion.span>
            </span>
            <span style={{ display: 'block' }}>
              <motion.span variants={wordVariants} style={{ display: 'inline-block' }}>Sreethika.</motion.span>
            </span>
          </motion.h1>

          <p className="subtitle">MCA Graduate &amp; Software Developer — Palakkad, Kerala</p>
          <p className="tagline" style={{ color: '#E8DCC4', fontStyle: 'italic' }}>
            Curious about how code meets real-world utility. Building practical software and exploring AI systems without the buzzwords.
          </p>
        </div>
      </AnimatedCard>
      
      <AnimatedCard delay={0.2} style={{ height: '100%' }}>
        <div className="cover-right-box" style={{ padding: '0', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img 
            src={heroImg} 
            alt="Sreethika Radhakrishnan" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
          />
        </div>
      </AnimatedCard>
    </div>
  )
}

export default Hero