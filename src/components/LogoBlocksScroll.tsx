import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

interface BlockItem {
  heading: string
  shortHeading: string
  tag: string
  widthClass: string
  paddingRightClass: string
  leftPoints: string[]
  rightPoints: string[]
}

const BLOCKS: BlockItem[] = [
  {
    heading: 'Accounting & Compliance',
    shortHeading: 'Compliance',
    tag: 'Pillar 01 · Integrity',
    widthClass: 'w-36 sm:w-52 md:w-68 lg:w-[360px] xl:w-[420px]',
    paddingRightClass: 'pr-3 sm:pr-4 md:pr-5 lg:pr-6 xl:pr-7',
    leftPoints: [
      'UAE FTA & Regulatory Alignment',
      'End-to-End Bookkeeping & Payroll',
    ],
    rightPoints: [
      'Audit-Ready IFRS Reporting',
      'Continuous Cash Flow Clarity',
    ],
  },
  {
    heading: 'Taxation & Advisory',
    shortHeading: 'Taxation',
    tag: 'Pillar 02 · Precision',
    widthClass: 'w-26 sm:w-40 md:w-52 lg:w-[280px] xl:w-[320px]',
    paddingRightClass: 'pr-2 sm:pr-2.5 md:pr-3 lg:pr-3.5 xl:pr-4',
    leftPoints: [
      'Corporate Tax (9%) Optimization',
      'Proactive VAT Reviews & Filing',
    ],
    rightPoints: [
      'Direct FTA Audit Representation',
      'Cross-Border Entity Structuring',
    ],
  },
  {
    heading: 'Strategy',
    shortHeading: 'Strategy',
    tag: 'Pillar 03 · Vision',
    widthClass: 'w-18 sm:w-28 md:w-38 lg:w-[200px] xl:w-[230px]',
    paddingRightClass: 'pr-4 sm:pr-6 md:pr-8 lg:pr-11 xl:pr-14',
    leftPoints: [
      'Fractional CFO Leadership',
      'Pre-Acquisition Due Diligence',
    ],
    rightPoints: [
      'Cloud ERP & Systems Architecture',
      'Forward Scenario Forecasting',
    ],
  },
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
    ['-75vw', '-35vw', '-6vw', '0vw']
  )

  const opacity = useTransform(scrollYProgress, [0, 0.25], [0.3, 1])
  const sideOpacity = useTransform(scrollYProgress, [0.6, 1], [0, 1])

  return (
    <div ref={containerRef} className="relative py-8 md:py-14 bg-[#FCFBF8] overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] items-center gap-8 lg:gap-8 xl:gap-14">

          {/* ── LEFT SIDE EXPLANATION POINTS (Desktop) ── */}
          <motion.div
            style={{ opacity: sideOpacity }}
            className="hidden lg:block w-full max-w-[320px] xl:max-w-[360px] justify-self-end min-h-[130px]"
          >
            <AnimatePresence mode="wait">
              {hovered !== null && (
                <motion.div
                  key={hovered}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="space-y-4 text-left"
                >
                  <div className="flex justify-start">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9951A]/30 bg-[#C9951A]/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9951A] animate-pulse" />
                      <span className="text-[#C9951A] text-[10px] font-semibold uppercase tracking-widest">
                        {BLOCKS[hovered].tag}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-1">
                    {BLOCKS[hovered].leftPoints.map((pt, i) => (
                      <div key={i} className="flex items-start gap-3 text-left">
                        <span className="text-[#C9951A] text-sm mt-0.5 leading-none font-bold">▪</span>
                        <span className="text-xs sm:text-sm lg:text-[15px] font-semibold text-[#212e52] dark:text-white tracking-tight leading-snug">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ── CENTER: THE THREE BLOCKS ── */}
          <motion.div
            style={{ x, opacity }}
            onMouseLeave={() => setHovered(null)}
            className="flex flex-col items-start justify-center gap-[2px] md:gap-[2.5px] shrink-0"
          >
            {BLOCKS.map((block, index) => {
              const isHovered = hovered === index
              const isOtherHovered = hovered !== null && !isHovered

              // When hovered: expand. When other is hovered (small blocks): shrink to sleek profile. Otherwise: default.
              const heightClass = isHovered
                ? 'h-10 sm:h-14 md:h-20 lg:h-26 xl:h-[115px]'
                : isOtherHovered
                  ? 'h-2 sm:h-3.5 md:h-5 lg:h-6 xl:h-[30px]'
                  : 'h-6 sm:h-9 md:h-12 lg:h-16 xl:h-[72px]'

              const opacityClass = isOtherHovered ? 'opacity-70' : 'opacity-100'

              return (
                <div
                  key={index}
                  className="w-full flex justify-start"
                  onMouseEnter={() => setHovered(index)}
                  onClick={() => setHovered(index)}
                >
                  <div
                    className={`relative overflow-hidden cursor-pointer transition-all duration-300 ease-out ${block.widthClass} ${heightClass} ${opacityClass}`}
                  >
                    {/* The 45-degree skewed navy/white block */}
                    <div
                      className="scroll-steps-bar absolute top-0 bottom-0 w-[200%] bg-[#212e52] dark:bg-white transition-colors duration-300"
                      style={{
                        transform: 'skewX(45deg)',
                        transformOrigin: 'top left',
                        left: '0',
                      }}
                    />

                    {/* Heading inside the block — RIGHT ALIGNED, ONLY shown on hover */}
                    <div
                      className={`relative z-10 h-full w-full flex items-center justify-end ${block.paddingRightClass} select-none transition-all duration-300 ${isHovered
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-2 pointer-events-none'
                        }`}
                    >
                      <div className="flex items-center gap-2 sm:gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9951A] scale-125 shrink-0" />
                        <span className="font-semibold tracking-tight uppercase whitespace-nowrap text-white dark:text-[#212e52] text-[10px] sm:text-xs md:text-sm lg:text-base">
                          <span className="hidden sm:inline">{block.heading}</span>
                          <span className="sm:hidden">{block.shortHeading}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </motion.div>

          {/* ── RIGHT SIDE EXPLANATION POINTS (Desktop) ── */}
          <motion.div
            style={{ opacity: sideOpacity }}
            className="hidden lg:block w-full max-w-[320px] xl:max-w-[360px] justify-self-start lg:translate-x-8 xl:translate-x-14 min-h-[130px]"
          >
            <AnimatePresence mode="wait">
              {hovered !== null && (
                <motion.div
                  key={hovered}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="space-y-4 text-left"
                >
                  <div className="flex justify-start">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#212e52]/10 dark:border-white/10 bg-[#212e52]/5 dark:bg-white/5">
                      <span className="text-[#212e52]/70 dark:text-white/70 text-[10px] font-semibold uppercase tracking-widest">
                        Impact & Outcomes
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-1">
                    {BLOCKS[hovered].rightPoints.map((pt, i) => (
                      <div key={i} className="flex items-start gap-3 text-left">
                        <span className="text-[#C9951A] text-sm mt-0.5 leading-none font-bold">▪</span>
                        <span className="text-xs sm:text-sm lg:text-[15px] font-semibold text-[#212e52] dark:text-white tracking-tight leading-snug">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ── MOBILE / TABLET EXPLANATION POINTS (Below the blocks) ── */}
          <div className="lg:hidden w-full max-w-xl mx-auto mt-2 min-h-[100px]">
            <AnimatePresence mode="wait">
              {hovered !== null && (
                <motion.div
                  key={hovered}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/70 dark:bg-white/5 p-4 rounded-2xl border border-[#212e52]/10 dark:border-white/10"
                >
                  {/* Left Points */}
                  <div className="space-y-2.5 text-left">
                    <span className="text-[#C9951A] text-[10px] font-semibold uppercase tracking-wider block text-left">
                      {BLOCKS[hovered].tag}
                    </span>
                    {BLOCKS[hovered].leftPoints.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-left">
                        <span className="text-[#C9951A] text-xs mt-0.5 leading-none font-bold">▪</span>
                        <span className="text-xs sm:text-sm font-semibold text-[#212e52] dark:text-white tracking-tight">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Right Points */}
                  <div className="space-y-2.5 text-left">
                    <span className="text-[#212e52]/70 dark:text-white/70 text-[10px] font-semibold uppercase tracking-wider block text-left">
                      Impact & Outcomes
                    </span>
                    {BLOCKS[hovered].rightPoints.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-left">
                        <span className="text-[#C9951A] text-xs mt-0.5 leading-none font-bold">▪</span>
                        <span className="text-xs sm:text-sm font-semibold text-[#212e52] dark:text-white tracking-tight">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  )
}
