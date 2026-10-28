import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollSteps() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll progress over this component
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "center center"]
  })

  // Animate the widths so they feel like they are lengthening and filling the right side
  // The first (top) line starts small, and the bottom line starts big.
  // The bottom line animates and reaches the right edge first, followed by the ones above it.
  const w1 = useTransform(scrollYProgress, [0.3, 1], ["5%", "25%"])
  const w2 = useTransform(scrollYProgress, [0.2, 0.8], ["15%", "50%"])
  const w3 = useTransform(scrollYProgress, [0.1, 0.7], ["25%", "75%"])
  const w4 = useTransform(scrollYProgress, [0, 0.6], ["35%", "100%"])

  const slopeOffset = "clamp(46px, 5.5vw, 65px)"
  const slopeClipPath = `polygon(0% 0%, 100% 0%, calc(100% - ${slopeOffset}) 100%, 0% 100%)`

  return (
    <div ref={containerRef} className="scroll-steps-container relative w-full overflow-hidden bg-white py-12 md:py-20">

      {/* Lines are flush left to create a connected alignment, but maintain separate gaps */}

      <div className="flex flex-col w-full relative z-0">
        {/* Step 1 - Plain top bar */}
        <motion.div
          style={{ width: w1 }}
          className="h-20 md:h-28 bg-[#212e52] dark:bg-white scroll-steps-bar origin-left"
        ></motion.div>
        <div className="h-[0.2px]"></div> {/* Gap */}

        {/* Step 2 — plain on left, sharp edge at top, slope down on right end */}
        <motion.div
          style={{ width: w2 }}
          className="flex items-end origin-left"
        >
          <div className="w-full h-10 md:h-16 bg-[#212e52] dark:bg-white scroll-steps-bar"></div>
          <div
            className="w-[50%] min-w-[100px] md:min-w-[200px] h-20 md:h-28 bg-[#212e52] dark:bg-white scroll-steps-bar shrink-0"
            style={{ clipPath: slopeClipPath }}
          ></div>
        </motion.div>
        <div className="h-[0.2px]"></div> {/* Gap */}

        {/* Step 3 — step-up aligns with Bar 2 bottom pin point */}
        <motion.div
          style={{ width: w3 }}
          className="flex items-end origin-left"
        >
          <div className="w-full h-10 md:h-16 bg-[#212e52] dark:bg-white scroll-steps-bar"></div>
          <div
            className="min-w-[100px] md:min-w-[200px] h-20 md:h-28 bg-[#212e52] dark:bg-white scroll-steps-bar shrink-0"
            style={{
              width: `calc(33.333% + ${slopeOffset})`,
              clipPath: slopeClipPath
            }}
          ></div>
        </motion.div>
        <div className="h-[0.2px]"></div> {/* Gap */}

        {/* Step 4 — step-up aligns with Bar 3 bottom pin point */}
        <motion.div
          style={{ width: w4 }}
          className="flex items-end origin-left"
        >
          <div className="w-full h-10 md:h-16 bg-[#212e52] dark:bg-white scroll-steps-bar"></div>
          <div
            className="min-w-[100px] md:min-w-[200px] h-20 md:h-28 bg-[#212e52] dark:bg-white scroll-steps-bar shrink-0"
            style={{
              width: `calc(25% + ${slopeOffset})`,
              clipPath: slopeClipPath
            }}
          ></div>
        </motion.div>
      </div>
    </div>
  )
}
