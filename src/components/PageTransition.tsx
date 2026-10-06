import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  // key is passed by the parent (App.tsx) to trigger re-animation on route change
  [key: string]: unknown
}

export default function PageTransition({ children }: Props) {
  return (
    <AnimatePresence mode="wait">
      <motion.div>
        {/* Dark navy curtain — scales down (origin bottom) to reveal the page */}
        <motion.div
          className="fixed inset-0 z-[9999] pointer-events-none origin-bottom"
          style={{ backgroundColor: '#212e52' }}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
        />

        {/* Gold progress bar that sweeps left-to-right then fades */}
        <motion.div
          className="fixed top-0 left-0 h-[3px] z-[10000] pointer-events-none origin-left"
          style={{ right: 0, backgroundColor: '#C9951A' }}
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: [0, 1, 1], opacity: [1, 1, 0] }}
          transition={{ duration: 0.85, ease: 'easeInOut', times: [0, 0.5, 1] }}
        />

        {/* Page content — fades & slides up after curtain lifts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
