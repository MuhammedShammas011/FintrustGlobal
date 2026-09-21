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

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-[#FCFBF8] py-12 md:py-20">

      {/* Lines are flush left to create a connected alignment, but maintain separate gaps */}

      <div className="flex flex-col w-full relative z-0">
        {/* Step 1 - Increased vertical thickness */}
        <motion.div
          style={{ width: w1 }}
          className="h-20 md:h-28 bg-[#151414] origin-left"
        ></motion.div>
        <div className="h-[0.2px]"></div> {/* Gap */}

        {/* Step 2 */}
        <motion.div
          style={{ width: w2 }}
          className="flex items-end origin-left"
        >
          <div className="w-full h-10 md:h-16 bg-[#151414]"></div>
          <div className="w-[50%] min-w-[100px] md:min-w-[200px] h-20 md:h-28 bg-[#151414] shrink-0"></div>
        </motion.div>
        <div className="h-[0.2px]"></div> {/* Gap */}

        {/* Step 3 */}
        <motion.div
          style={{ width: w3 }}
          className="flex items-end origin-left"
        >
          <div className="w-full h-10 md:h-16 bg-[#151414]"></div>
          <div className="w-[33%] min-w-[100px] md:min-w-[200px] h-20 md:h-28 bg-[#151414] shrink-0"></div>
        </motion.div>
        <div className="h-[0.2px]"></div> {/* Gap */}

        {/* Step 4 */}
        <motion.div
          style={{ width: w4 }}
          className="flex items-end origin-left"
        >
          <div className="w-full h-10 md:h-16 bg-[#151414]"></div>
          <div className="w-[25%] min-w-[100px] md:min-w-[200px] h-20 md:h-28 bg-[#151414] shrink-0"></div>
        </motion.div>
      </div>
    </div>
  )
}
