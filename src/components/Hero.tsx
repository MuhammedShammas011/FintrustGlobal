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

// Horizontal ruler tick marks
const TICKS = Array.from({ length: 21 }, (_, i) => i * 5) // 0, 5, 10, ... 100

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const textOpacity = useTransform(scrollYProgress, [0, 0.33, 0.5, 0.8], [0, 1, 1, 0])
  const textX = useTransform(scrollYProgress, [0, 0.33, 0.5, 1], [150, 0, 0, 150])

  const logoX = useTransform(scrollYProgress, [0, 0.33, 0.5, 1], ['25vw', '0vw', '0vw', '-20vw'])
  const logoOpacity = useTransform(scrollYProgress, [0, 0.33, 0.5, 0.8], [1, 1, 1, 0])

  const rulerPointerX = useTransform(scrollYProgress, [0, 0.5], ['0%', '100%'])
  const rulerReadout   = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  const vRulerPointerY = useTransform(scrollYProgress, [0, 0.5], ['100%', '0%'])
  const vReadout       = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  const rulerOpacity = useTransform(scrollYProgress, [0, 0.15, 0.55, 0.8], [0, 1, 1, 0])

  // Derived string transforms — must be top-level
  const hReadoutStr  = useTransform(rulerReadout, (v) => v.toFixed(1))
  const vReadoutStr  = useTransform(vReadout,     (v) => v.toFixed(1))
  const bracketStr   = useTransform(rulerReadout, (v) => `${(v * 1.7).toFixed(0)} px`)

  return (
    <>
      <div ref={containerRef} className="h-[150vh] w-full" id="hero" />

      <section className="fixed top-0 left-0 right-0 h-screen bg-[#F4F3EE] -z-10 overflow-hidden">

        {/* ─── Initial Shutter Reveal ─── */}
        <motion.div
          className="fixed inset-0 z-[100] bg-[#212e52]"
          initial={{ y: 0 }}
          animate={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
        />

        {/* ─── Background: dot grid ─── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(33,46,82,0.12) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* ─── Background: large gradient orb — gold, top-right ─── */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            width: '70vw', height: '70vw',
            top: '-20%', right: '-15%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,149,26,0.10) 0%, rgba(201,149,26,0.04) 40%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.06, 1], rotate: [0, 6, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* ─── Background: large gradient orb — navy, bottom-left ─── */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            width: '60vw', height: '60vw',
            bottom: '-20%', left: '-10%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(33,46,82,0.07) 0%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.04, 1], rotate: [0, -5, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />

        {/* ─── Background: diagonal accent lines ─── */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
          <defs>
            <pattern id="diag" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
              <line x1="0" y1="0" x2="0" y2="80" stroke="rgba(33,46,82,0.04)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diag)" />
        </svg>

        {/* ─── Background: floating geometric rings ─── */}
        <motion.div
          className="absolute pointer-events-none rounded-full border border-[#212e52]/[0.05]"
          style={{ width: '55vw', height: '55vw', top: '50%', left: '50%', x: '-50%', y: '-50%' }}
          animate={{ scale: [0.9, 1.05, 0.9], rotate: [0, 20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute pointer-events-none rounded-full border border-[#C9951A]/[0.07]"
          style={{ width: '35vw', height: '35vw', top: '50%', left: '50%', x: '-50%', y: '-50%' }}
          animate={{ scale: [1.05, 0.9, 1.05], rotate: [0, -15, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* ─── Background: large faint watermark ─── */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <span
            className="text-[22vw] font-bold tracking-tighter text-[#212e52] leading-none"
            style={{ opacity: 0.018, userSelect: 'none' }}
          >
            FG
          </span>
        </div>

        {/* ══════════════════════════════════════════
            HORIZONTAL RULER — bottom of screen (hidden on mobile)
        ══════════════════════════════════════════ */}
        <motion.div
          className="hidden sm:block absolute bottom-8 left-0 right-0 px-8 md:px-16 pointer-events-none"
          style={{ opacity: rulerOpacity }}
        >
          {/* Ruler bar */}
          <div className="relative w-full h-[1px] bg-[#212e52]/15">

            {/* Tick marks */}
            {TICKS.map((val) => (
              <div
                key={val}
                className="absolute top-0 flex flex-col items-center"
                style={{ left: `${val}%` }}
              >
                <div
                  className="bg-[#212e52]/25"
                  style={{
                    width: '1px',
                    height: val % 25 === 0 ? '10px' : val % 5 === 0 ? '6px' : '3px',
                    marginTop: '-50%'
                  }}
                />
                {val % 25 === 0 && (
                  <span
                    className="text-[8px] font-mono text-[#212e52]/30 absolute"
                    style={{ top: '10px' }}
                  >
                    {val}
                  </span>
                )}
              </div>
            ))}

            {/* Moving pointer on horizontal ruler */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
              style={{ left: rulerPointerX }}
            >
              {/* Readout bubble */}
              <div className="relative flex flex-col items-center" style={{ marginTop: '-40px' }}>
                <div className="bg-[#212e52] px-2 py-0.5 rounded text-[9px] font-mono text-white whitespace-nowrap">
                  <motion.span>{hReadoutStr}</motion.span>
                </div>
                <div className="w-px h-3 bg-[#212e52]/50" />
              </div>
              {/* Pointer diamond */}
              <div className="w-2 h-2 rounded-full bg-[#C9951A] shadow-md" style={{ marginTop: '2px' }} />
            </motion.div>
          </div>

          {/* Label */}
          <div className="flex justify-between mt-3">
            <span className="text-[8px] font-mono text-[#212e52]/20 uppercase tracking-widest">0</span>
            <span className="text-[8px] font-mono text-[#212e52]/20 uppercase tracking-widest">Position offset</span>
            <span className="text-[8px] font-mono text-[#212e52]/20 uppercase tracking-widest">100</span>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════
            VERTICAL RULER — left side (hidden on mobile)
        ══════════════════════════════════════════ */}
        <motion.div
          className="hidden sm:flex absolute top-0 bottom-0 left-4 md:left-8 flex-col justify-between py-8 pointer-events-none"
          style={{ opacity: rulerOpacity }}
        >
          {/* Ruler bar */}
          <div className="relative flex-1 w-[1px] bg-[#212e52]/15 mx-auto">

            {/* Tick marks along vertical ruler */}
            {Array.from({ length: 11 }, (_, i) => i * 10).map((val) => (
              <div
                key={val}
                className="absolute left-0 flex items-center"
                style={{ top: `${val}%` }}
              >
                <div
                  className="bg-[#212e52]/25"
                  style={{
                    height: '1px',
                    width: val % 50 === 0 ? '10px' : '6px',
                    marginLeft: '-50%'
                  }}
                />
                {val % 50 === 0 && (
                  <span
                    className="text-[8px] font-mono text-[#212e52]/30 absolute"
                    style={{ left: '12px' }}
                  >
                    {100 - val}
                  </span>
                )}
              </div>
            ))}

            {/* Moving pointer on vertical ruler */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1"
              style={{ top: vRulerPointerY }}
            >
              <div className="w-2 h-2 rounded-full bg-[#C9951A] shadow-md" />
              <div className="bg-[#212e52] px-2 py-0.5 rounded text-[9px] font-mono text-white whitespace-nowrap" style={{ marginLeft: '6px' }}>
                <motion.span>{vReadoutStr}</motion.span>
              </div>
            </motion.div>

          </div>

          {/* Bottom label */}
          <div className="mt-2 flex flex-col items-center">
            <span
              className="text-[8px] font-mono text-[#212e52]/20 uppercase tracking-widest"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              Depth
            </span>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════
            MAIN CONTENT
        ══════════════════════════════════════════ */}
        <div className="w-full h-screen flex flex-col justify-center overflow-hidden">
          <div className="w-full max-w-[1440px] mx-auto px-4 relative z-10 flex flex-row items-center justify-center gap-4 sm:gap-6 md:gap-16 lg:gap-24 h-full min-h-[80vh]">

            {/* Logo Blocks */}
            <motion.div
              className="flex flex-col items-start justify-center gap-[2px] md:gap-[3px] xl:gap-[4px] overflow-hidden shrink-0"
              style={{ x: logoX, opacity: logoOpacity }}
            >
              {/* Measurement bracket left of logo blocks */}
              <motion.div
                className="hidden sm:flex absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 flex-col items-center pointer-events-none h-[60%]"
                style={{ opacity: rulerOpacity }}
              >
                <div className="w-2 h-px bg-[#212e52]/30" />
                <div className="w-px flex-1 bg-[#212e52]/20 mx-auto" />
                <div className="w-2 h-px bg-[#212e52]/30" />
              </motion.div>

              <div className="w-full flex justify-start pointer-events-none">
                <LogoBlock className="w-20 sm:w-40 md:w-56 lg:w-72 xl:w-[350px] h-6 sm:h-10 md:h-16 lg:h-24 xl:h-[100px]" />
              </div>
              <div className="w-full flex justify-start pointer-events-none">
                <LogoBlock className="w-14 sm:w-32 md:w-44 lg:w-60 xl:w-[270px] h-6 sm:h-10 md:h-16 lg:h-24 xl:h-[100px]" />
              </div>
              <div className="w-full flex justify-start pointer-events-none">
                <LogoBlock className="w-10 sm:w-24 md:w-32 lg:w-48 xl:w-[190px] h-6 sm:h-10 md:h-16 lg:h-24 xl:h-[100px]" />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              className="flex flex-col items-start justify-center text-left relative"
              style={{ opacity: textOpacity, x: textX }}
            >
              {/* Measurement bracket above text */}
              <motion.div
                className="hidden sm:flex absolute -top-6 left-0 right-0 items-center pointer-events-none"
                style={{ opacity: rulerOpacity }}
              >
                <div className="h-2 w-px bg-[#212e52]/30" />
                <div className="h-px flex-1 bg-[#212e52]/15" />
                <div className="text-[8px] font-mono text-[#212e52]/30 px-2 whitespace-nowrap">
                  <motion.span>{bracketStr}</motion.span>
                </div>
                <div className="h-px flex-1 bg-[#212e52]/15" />
                <div className="h-2 w-px bg-[#212e52]/30" />
              </motion.div>

              <h1 className="text-[40px] sm:text-[66px] md:text-[105px] lg:text-[160px] xl:text-[170px] font-normal tracking-tight text-[#212e52] leading-[0.9]">
                Fintrust<br />Global
              </h1>
            </motion.div>

          </div>
        </div>

      </section>
    </>
  )
}
