import { motion } from 'framer-motion'

interface WordBlockRevealProps {
  text: string
  className?: string
  wordClassName?: string
  blockClassName?: string
  delayOffset?: number
  stagger?: number
  once?: boolean
}

export default function WordBlockReveal({
  text,
  className = '',
  wordClassName = '',
  blockClassName = '',
  delayOffset = 0,
  stagger = 0.045,
  once = false,
}: WordBlockRevealProps) {
  const words = text.trim().split(/\s+/)

  return (
    <span className={`inline ${className}`}>
      {words.map((word, i) => (
        <span
          key={i}
          className="relative inline-block overflow-hidden align-baseline mr-[0.26em] last:mr-0"
        >
          {/* Word content */}
          <span className={`inline-block relative z-0 py-[1px] px-[2px] -my-[1px] -mx-[2px] ${wordClassName}`}>
            {word}
          </span>

          {/* Black rectangle shape covering the word until scrolled into view */}
          <motion.span
            className={`absolute inset-0 bg-[#0a0a0a] dark:bg-black dark:border dark:border-white/15 z-10 pointer-events-none rounded-[1px] ${blockClassName}`}
            style={{ transformOrigin: 'right center' }}
            initial={{ scaleX: 1 }}
            whileInView={{ scaleX: 0 }}
            viewport={{ once, amount: 0.2 }}
            transition={{
              duration: 0.42,
              delay: delayOffset + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </span>
      ))}
    </span>
  )
}
