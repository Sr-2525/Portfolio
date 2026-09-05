import { motion } from 'framer-motion'

export default function AnimatedCard({ children, delay = 0, style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2, margin: '0px 0px -50px 0px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ width: '100%', willChange: 'opacity, transform', transform: 'translateZ(0)', ...style }}
    >
      {children}
    </motion.div>
  )
}