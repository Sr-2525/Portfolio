import { motion } from 'framer-motion'

const animations = {
  fadeSlide: {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.1, margin: '0px 0px -100px 0px' }
  },
  scaleFade: {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: false, amount: 0.1, margin: '0px 0px -100px 0px' }
  },
  slideLeft: {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: false, amount: 0.1, margin: '0px 0px -100px 0px' }
  },
  blurFade: {
    initial: { opacity: 0, filter: 'blur(8px)' },
    whileInView: { opacity: 1, filter: 'blur(0px)' },
    viewport: { once: false, amount: 0.1, margin: '0px 0px -100px 0px' }
  }
}

export default function AnimatedSlide({ children, variant = 'fadeSlide' }) {
  const selected = animations[variant] || animations.fadeSlide

  return (
    <motion.div
      initial={selected.initial}
      whileInView={selected.whileInView}
      viewport={selected.viewport}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{ width: '100%', willChange: 'opacity, transform, filter', transform: 'translateZ(0)' }}
    >
      {children}
    </motion.div>
  )
}