import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const LogoBlock = ({ className }: { className: string }) => (
  <div className={`relative overflow-hidden ${className}`}>
    <div
      className="scroll-steps-bar absolute top-0 bottom-0 w-[200%] bg-[#212e52] dark:bg-white"
      style={{
        transform: 'skewX(45deg)',
        transformOrigin: 'top left',
        left: '0'
      }}
    />
  </div>
)

export default function LogoBlocksScroll() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.95', 'center 0.5'],
  })

  // In the time of scrolling, come from left side and stick in the center
  const x = useTransform(
    scrollYProgress,
    [0, 0.4, 0.75, 1],
    ['-85vw', '-40vw', '-8vw', '0vw']
  )

  const opacity = useTransform(scrollYProgress, [0, 0.25], [0.3, 1])

  return (
    <div ref={containerRef} className="relative py-4 md:py-8 bg-[#FCFBF8] overflow-hidden">
      <div className="w-full flex items-center justify-center pointer-events-none">
        <motion.div
          style={{ x, opacity }}
          className="flex flex-col items-start justify-center gap-[2px] md:gap-[2.5px] shrink-0"
        >
          {/* Top Block (Widest) */}
          <div className="w-full flex justify-start">
            <LogoBlock className="w-44 sm:w-60 md:w-72 lg:w-[380px] xl:w-[440px] h-7 sm:h-10 md:h-14 lg:h-18 xl:h-[85px]" />
          </div>

          {/* Middle Block (Medium) */}
          <div className="w-full flex justify-start">
            <LogoBlock className="w-32 sm:w-44 md:w-54 lg:w-[290px] xl:w-[335px] h-7 sm:h-10 md:h-14 lg:h-18 xl:h-[85px]" />
          </div>

          {/* Bottom Block (Shortest) */}
          <div className="w-full flex justify-start">
            <LogoBlock className="w-22 sm:w-30 md:w-38 lg:w-[200px] xl:w-[235px] h-7 sm:h-10 md:h-14 lg:h-18 xl:h-[85px]" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
