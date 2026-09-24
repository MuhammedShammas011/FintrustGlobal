import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ProcessSteps() {
  const containerRef = useRef<HTMLElement>(null)
  
  // Track scroll progress within the 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Tilt: starts at 8deg, straightens to 0deg in the first 20% of scroll
  const rotate = useTransform(scrollYProgress, [0, 0.2], [8, 0])

  // The first 20% of scroll is holding. Then we split.
  // We'll animate from 0.2 to 1.0.
  const scale2 = useTransform(scrollYProgress, [0.2, 1], [1, 0.92])
  const scale3 = useTransform(scrollYProgress, [0.2, 1], [1, 0.84])
  const scale4 = useTransform(scrollYProgress, [0.2, 1], [1, 0.76])

  // Center text fades out and shrinks as we scroll deep
  const textOpacity = useTransform(scrollYProgress, [0.2, 1], [1, 0.15])
  const textScale = useTransform(scrollYProgress, [0.2, 1], [1, 0.65])

  // Opacities for the receding rectangles to simulate depth
  const opacity2 = useTransform(scrollYProgress, [0.2, 1], [1, 0.8])
  const opacity3 = useTransform(scrollYProgress, [0.2, 1], [1, 0.6])
  const opacity4 = useTransform(scrollYProgress, [0.2, 1], [1, 0.4])

  return (
    <section ref={containerRef} className="bg-[#0f0f0f] relative h-[500vh]" id="process">
      
      {/* Sticky container holds the viewport-sized visual */}
      <div className="sticky top-0 w-full h-screen flex items-center justify-center px-24 md:px-40 overflow-hidden">
        
        {/* Container for the wireframe boxes to keep them absolute relative to this center area */}
        <div className="relative w-full max-w-[1000px] h-[500px] md:h-[700px]">

          {/* Rectangle 4 (Innermost) - Bottom Left */}
          <motion.div 
            className="absolute inset-y-16 inset-x-12 md:inset-20 border border-white/10"
            style={{ scale: scale4, opacity: opacity4, rotate }}
          >
            <div className="absolute -bottom-[6px] -left-[6px] flex items-center justify-end pr-5 md:pr-6 w-0">
              <span className="text-[#a0a0a0] text-xs md:text-sm whitespace-nowrap">Strategy</span>
              <div className="w-3 h-3 bg-[#fca5a5] absolute right-0 top-1/2 -translate-y-1/2" />
            </div>
          </motion.div>

          {/* Rectangle 3 - Bottom Right */}
          <motion.div 
            className="absolute inset-y-16 inset-x-12 md:inset-20 border border-white/10"
            style={{ scale: scale3, opacity: opacity3, rotate }}
          >
            <div className="absolute -bottom-[6px] -right-[6px] flex items-center pl-5 md:pl-6 w-0">
              <div className="w-3 h-3 bg-[#fde047] absolute left-0 top-1/2 -translate-y-1/2" />
              <span className="text-[#a0a0a0] text-xs md:text-sm whitespace-nowrap">Growth</span>
            </div>
          </motion.div>

          {/* Rectangle 2 - Top Left */}
          <motion.div 
            className="absolute inset-y-16 inset-x-12 md:inset-20 border border-white/10"
            style={{ scale: scale2, opacity: opacity2, rotate }}
          >
            <div className="absolute -top-[6px] -left-[6px] flex items-center justify-end pr-5 md:pr-6 w-0">
              <span className="text-[#a0a0a0] text-xs md:text-sm whitespace-nowrap">Diagnostic</span>
              <div className="w-3 h-3 bg-[#9b9ef5] absolute right-0 top-1/2 -translate-y-1/2" />
            </div>
          </motion.div>

          {/* Rectangle 1 (Outermost) - Top Right */}
          <motion.div 
            className="absolute inset-y-16 inset-x-12 md:inset-20 border border-white/10"
            style={{ rotate }}
          >
            <div className="absolute -top-[6px] -right-[6px] flex items-center pl-5 md:pl-6 w-0">
              <div className="w-3 h-3 bg-[#6ee7b7] absolute left-0 top-1/2 -translate-y-1/2" />
              <span className="text-[#a0a0a0] text-xs md:text-sm whitespace-nowrap">Structure</span>
            </div>
          </motion.div>

          {/* Center Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.h2 
              className="text-4xl md:text-6xl lg:text-7xl font-serif text-white tracking-tight"
              style={{ opacity: textOpacity, rotate, scale: textScale }}
            >
              The Fintrust Method
            </motion.h2>
          </div>

        </div>
      </div>
    </section>
  )
}
