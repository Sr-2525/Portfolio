import { motion } from 'framer-motion'

// Distinct, professional animation variants for different pages
const animations = {
  fadeSlide: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  scaleFade: {
    initial: { opacity: 0, scale: 0.97 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.03 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  },
  slideLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 },
    transition: { duration: 0.5, ease: 'easeInOut' }
  },
  blurFade: {
    initial: { opacity: 0, filter: 'blur(8px)' },
    animate: { opacity: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, filter: 'blur(8px)' },
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

export default function AnimatedSlide({ children, variant = 'fadeSlide' }) {
  const selectedAnimation = animations[variant] || animations.fadeSlide

  return (
    <motion.div
      initial={selectedAnimation.initial}
      animate={selectedAnimation.animate}
      exit={selectedAnimation.exit}
      transition={selectedAnimation.transition}
      style={{ width: '100%', height: '100%' }}
    >
      {children}
    </motion.div>
  )
}