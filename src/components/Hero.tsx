import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const LogoBlock = ({ className }: { className: string }) => (
  <div className={`relative overflow-hidden ${className}`}>
    <div
      className="absolute top-0 bottom-0 bg-[#212e52] w-[200%]"
      style={{
        transform: 'skewX(45deg)',
        transformOrigin: 'top left',
        left: '0'
      }}
    />
  </div>
)

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // The section is 150vh, so the first 50vh of scrolling keeps it sticky.
  // 0 to 0.33: Initial reveal, text and logo join in the center.
  // 0.33 to 0.5: Hold together as the next section begins to slide up.
  // 0.5 to 1.0: Next section covers the screen; logo moves left, text moves right, and both fade out.
  
  const textOpacity = useTransform(scrollYProgress, [0, 0.33, 0.5, 0.8], [0, 1, 1, 0])
  const textX = useTransform(scrollYProgress, [0, 0.33, 0.5, 1], [150, 0, 0, 150])

  const logoX = useTransform(scrollYProgress, [0, 0.33, 0.5, 1], ['25vw', '0vw', '0vw', '-20vw'])
  const logoOpacity = useTransform(scrollYProgress, [0, 0.33, 0.5, 0.8], [1, 1, 1, 0])

  return (
    <>
      {/* Spacer creates 150vh of scrollable space before the next section appears */}
      <div ref={containerRef} className="h-[150vh] w-full" id="hero" />

      {/* Fixed visual hero stays in background so next section slides OVER it */}
      <section className="fixed top-0 left-0 right-0 h-screen bg-[#FCFBF8] -z-10 overflow-hidden">
      
      {/* ─── Initial Shutter Reveal ─── */}
      <motion.div 
        className="fixed inset-0 z-[100] bg-[#212e52]"
        initial={{ y: 0 }}
        animate={{ y: '-100%' }}
        transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
      />

      <div className="w-full h-screen flex flex-col justify-center overflow-hidden">


        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24 pt-16 h-full min-h-[80vh]">

          {/* ─── Stacked Graphic Container ───────────────────────────────
              Uses a normal flex-col flow — NO absolute positioning.
              This guarantees they stack cleanly with a tight gutter
              and never overlap each other.
          ──────────────────────────────────────────────────────────── */}
          <motion.div 
            className="flex flex-col items-start justify-center gap-[2px] md:gap-[3px] xl:gap-[4px] overflow-hidden shrink-0"
            style={{ x: logoX, opacity: logoOpacity }}
          >

            {/* Top Block */}
            <div className="w-full flex justify-start pointer-events-none">
              <LogoBlock className="w-40 md:w-56 lg:w-72 xl:w-[350px] h-10 md:h-16 lg:h-24 xl:h-[100px]" />
            </div>

            {/* Middle Block */}
            <div className="w-full flex justify-start pointer-events-none">
              <LogoBlock className="w-32 md:w-44 lg:w-60 xl:w-[270px] h-10 md:h-16 lg:h-24 xl:h-[100px]" />
            </div>

            {/* Bottom Block */}
            <div className="w-full flex justify-start pointer-events-none">
              <LogoBlock className="w-24 md:w-32 lg:w-48 xl:w-[190px] h-10 md:h-16 lg:h-24 xl:h-[100px]" />
            </div>

          </motion.div>

          {/* Text Container */}
          <motion.div 
            className="flex flex-col items-start justify-center text-left"
            style={{ opacity: textOpacity, x: textX }}
          >
            <h1 className="text-[66px] md:text-[105px] lg:text-[160px] xl:text-[170px] font-normal tracking-tight text-[#212e52] leading-[0.9]">
              Fintrust<br />Global
            </h1>
          </motion.div>

        </div>
      </div>
      </section>
    </>
  )
}
