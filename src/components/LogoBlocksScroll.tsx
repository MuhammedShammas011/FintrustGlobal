import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const BLOCKS = [
  { widthClass: 'w-44 sm:w-60 md:w-72 lg:w-[380px] xl:w-[440px]' }, // Top (Widest)
  { widthClass: 'w-32 sm:w-44 md:w-54 lg:w-[290px] xl:w-[335px]' }, // Middle (Medium)
  { widthClass: 'w-22 sm:w-30 md:w-38 lg:w-[200px] xl:w-[235px]' }, // Bottom (Shortest)
]

export default function LogoBlocksScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState<number | null>(null)

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
      <div className="w-full flex items-center justify-center">
        <motion.div
          style={{ x, opacity }}
          onMouseLeave={() => setHovered(null)}
          className="flex flex-col items-start justify-center gap-[2px] md:gap-[2.5px] shrink-0"
        >
          {BLOCKS.map((block, index) => {
            const isHovered = hovered === index
            const isOtherHovered = hovered !== null && !isHovered

            // When hovered: increase vertical height. When another is hovered: shrink. Otherwise: default.
            const heightClass = isHovered
              ? 'h-12 sm:h-16 md:h-22 lg:h-28 xl:h-[130px]'
              : isOtherHovered
              ? 'h-4 sm:h-6 md:h-9 lg:h-11 xl:h-[55px]'
              : 'h-7 sm:h-10 md:h-14 lg:h-18 xl:h-[85px]'

            const opacityClass = isOtherHovered ? 'opacity-70' : 'opacity-100'

            return (
              <div
                key={index}
                className="w-full flex justify-start"
                onMouseEnter={() => setHovered(index)}
              >
                <div
                  className={`relative overflow-hidden cursor-pointer transition-all duration-300 ease-out ${block.widthClass} ${heightClass} ${opacityClass}`}
                >
                  <div
                    className="scroll-steps-bar absolute top-0 bottom-0 w-[200%] bg-[#212e52] dark:bg-white transition-colors duration-300"
                    style={{
                      transform: 'skewX(45deg)',
                      transformOrigin: 'top left',
                      left: '0'
                    }}
                  />
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
