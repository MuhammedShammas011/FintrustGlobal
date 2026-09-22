import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const LogoBlock = ({ className }: { className: string }) => (
  <div className={`relative overflow-hidden ${className}`}>
    <div 
      className="absolute top-0 bottom-0 bg-[#1A1A1A] w-[200%]"
      style={{ 
        transform: 'skewX(45deg)', 
        transformOrigin: 'top left',
        left: '0' 
      }}
    />
  </div>
)

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // ── Heading transitions ──────────────────────────────
  // H1 fades out: 0.20 → 0.30
  const opacity1 = useTransform(scrollYProgress, [0, 0.20, 0.30], [1, 1, 0])
  const y1 = useTransform(scrollYProgress, [0, 0.20, 0.30], [0, 0, -30])

  // H2 fades in: 0.35 → 0.45  |  fades out: 0.55 → 0.65
  const opacity2 = useTransform(scrollYProgress, [0, 0.35, 0.45, 0.55, 0.65], [0, 0, 1, 1, 0])
  const y2 = useTransform(scrollYProgress, [0, 0.35, 0.45, 0.55, 0.65], [30, 30, 0, 0, -30])

  // H3 fades in: 0.65 → 0.75
  const opacity3 = useTransform(scrollYProgress, [0, 0.65, 0.75, 1], [0, 0, 1, 1])
  const y3 = useTransform(scrollYProgress, [0, 0.65, 0.75, 1], [30, 30, 0, 0])

  // ── Block slide-up animations ──────────────────────────────
  // Each block slides UP from 180px below its natural position to 0, then stays
  const middleBlockY = useTransform(scrollYProgress, [0, 0.35, 0.50, 1], ['180px', '180px', '0px', '0px'])
  const middleBlockOpacity = useTransform(scrollYProgress, [0, 0.35, 0.50, 1], [0, 0, 1, 1])

  const bottomBlockY = useTransform(scrollYProgress, [0, 0.65, 0.80, 1], ['180px', '180px', '0px', '0px'])
  const bottomBlockOpacity = useTransform(scrollYProgress, [0, 0.65, 0.80, 1], [0, 0, 1, 1])

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#FCFBF8]" id="hero">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between pt-16 h-full min-h-[80vh]">

          {/* Left Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left mb-12 md:mb-0 pr-4">

            {/* Overlapping Headings Container */}
            <div className="grid w-full mb-8">
              {/* Heading 1 */}
              <motion.div style={{ opacity: opacity1, y: y1, gridArea: '1/1' }}>
                <motion.h1
                  className="text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] leading-[1.1] text-near-black font-normal tracking-tight flex flex-col gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
                >
                  <span className="block">Financial clarity.</span>
                  <span className="block text-[#212e52]">Business confidence.</span>
                </motion.h1>
              </motion.div>

              {/* Heading 2 */}
              <motion.div style={{ opacity: opacity2, y: y2, gridArea: '1/1' }} className="pointer-events-none">
                <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] leading-[1.1] text-near-black font-normal tracking-tight flex flex-col gap-2">
                  <span className="block">Strategic insight.</span>
                  <span className="block text-[#212e52]">Unwavering<br />trust.</span>
                </h1>
              </motion.div>

              {/* Heading 3 */}
              <motion.div style={{ opacity: opacity3, y: y3, gridArea: '1/1' }} className="pointer-events-none">
                <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] leading-[1.1] text-near-black font-normal tracking-tight flex flex-col gap-2">
                  <span className="block">Global standards.</span>
                  <span className="block text-[#212e52]">Local<br />expertise.</span>
                </h1>
              </motion.div>
            </div>

            <motion.p
              className="text-muted text-lg md:text-xl max-w-[500px] mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
            >
              Accounting, taxation and business advisory for businesses building their future in the UAE.
            </motion.p>
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-medium hover:bg-[#333333] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
            >
              Talk to Fintrust
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
          </div>

          {/* ─── Stacked Graphic Container ───────────────────────────────
              Uses a normal flex-col flow — NO absolute positioning.
              Each block slides up from 180px below its natural slot to y:0,
              then holds. This guarantees they stack cleanly with a gap-2 gutter
              and never overlap each other.
          ──────────────────────────────────────────────────────────── */}
          <div className="w-full md:w-1/2 flex flex-col items-end justify-center gap-[2px] md:gap-[3px] xl:gap-[4px] overflow-hidden">

            {/* Top Block */}
            <motion.div
              className="w-full flex justify-end pointer-events-none"
              initial={{ opacity: 0, clipPath: 'inset(100% 0% 0% 0%)' }}
              animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
              transition={{ duration: 1.4, ease: [0.77, 0, 0.175, 1], delay: 0.6 }}
            >
              <LogoBlock className="w-48 md:w-72 lg:w-96 xl:w-[450px] h-10 md:h-16 lg:h-24 xl:h-[100px]" />
            </motion.div>

            {/* Middle Block */}
            <motion.div
              className="w-full flex justify-end pointer-events-none"
              style={{ y: middleBlockY, opacity: middleBlockOpacity }}
            >
              <LogoBlock className="w-40 md:w-60 lg:w-80 xl:w-[370px] h-10 md:h-16 lg:h-24 xl:h-[100px] mr-8 md:mr-12 lg:mr-16 xl:mr-[80px]" />
            </motion.div>

            {/* Bottom Block */}
            <motion.div
              className="w-full flex justify-end pointer-events-none"
              style={{ y: bottomBlockY, opacity: bottomBlockOpacity }}
            >
              <LogoBlock className="w-32 md:w-48 lg:w-64 xl:w-[290px] h-10 md:h-16 lg:h-24 xl:h-[100px] mr-16 md:mr-24 lg:mr-32 xl:mr-[160px]" />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
