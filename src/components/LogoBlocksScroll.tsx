import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

interface BlockItem {
  heading: string
  shortHeading: string
  tabLabel: string
  tag: string
  widthClass: string
  paddingRightClass: string
  leftPoints: string[]
  rightPoints: string[]
}

const BLOCKS: BlockItem[] = [
  {
    heading: 'Accounting & Compliance',
    shortHeading: 'Accounting & Compliance',
    tabLabel: 'Compliance',
    tag: 'Pillar 01 · Integrity',
    widthClass: 'w-[88vw] max-w-[340px] sm:w-[380px] md:w-[410px] lg:w-[380px] xl:w-[440px]',
    paddingRightClass: 'pr-4 sm:pr-5 md:pr-6 lg:pr-7 xl:pr-8',
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
    shortHeading: 'Taxation & Advisory',
    tabLabel: 'Taxation',
    tag: 'Pillar 02 · Precision',
    widthClass: 'w-[70vw] max-w-[270px] sm:w-[300px] md:w-[325px] lg:w-[290px] xl:w-[335px]',
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
    heading: 'strategy',
    shortHeading: 'Strategy',
    tabLabel: 'Strategy',
    tag: 'Pillar 03 · Vision',
    widthClass: 'w-[52vw] max-w-[200px] sm:w-[220px] md:w-[240px] lg:w-[200px] xl:w-[235px]',
    paddingRightClass: 'pr-3.5 sm:pr-5 md:pr-7 lg:pr-9 xl:pr-11',
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
  const [activeTab, setActiveTab] = useState<number>(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Active block index:
  // On desktop (lg+), hover controls active state (null when mouse leaves)
  // On mobile (<lg), activeTab (default 0) ensures mobile users always have a clear active pillar & details
  const activeBlock = isMobile
    ? (hovered !== null ? hovered : activeTab)
    : hovered

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.95', 'center 0.5'],
  })

  // In the time of scrolling, come from left side and stick in the center
  const x = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    ['-70vw', '-25vw', '0vw', '0vw']
  )

  const opacity = useTransform(scrollYProgress, [0, 0.25], [0.3, 1])
  const sideOpacity = useTransform(scrollYProgress, [0.6, 1], [0, 1])

  const handleBlockSelect = (index: number) => {
    setHovered(index)
    setActiveTab(index)
  }

  return (
    <div ref={containerRef} className="relative py-8 md:py-14 bg-[#FCFBF8] overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] items-center gap-6 lg:gap-8 xl:gap-14">

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
            className="flex flex-col items-start justify-center gap-[3px] md:gap-[3.5px] shrink-0 translate-x-2 sm:translate-x-0"
          >
            {BLOCKS.map((block, index) => {
              const isBlockActive = activeBlock === index
              const isBlockOtherActive = activeBlock !== null && !isBlockActive

              // When active: expand. When other is active: sleek but visible profile. Otherwise: default.
              const heightClass = isBlockActive
                ? 'h-12 sm:h-14 md:h-20 lg:h-24 xl:h-[110px]'
                : isBlockOtherActive
                  ? 'h-8 sm:h-9 md:h-11 lg:h-12 xl:h-[45px]'
                  : 'h-10 sm:h-12 md:h-14 lg:h-16 xl:h-[68px]'

              const opacityClass = isBlockOtherActive ? 'opacity-85' : 'opacity-100'

              return (
                <div
                  key={index}
                  className="w-full flex justify-start py-0.5 sm:py-0 cursor-pointer touch-manipulation"
                  onMouseEnter={() => setHovered(index)}
                  onClick={() => handleBlockSelect(index)}
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

                    {/* Heading inside the block — RIGHT ALIGNED, NO DOT */}
                    <div
                      className={`relative z-10 h-full w-full flex items-center justify-end ${block.paddingRightClass} select-none transition-all duration-300 ${isBlockActive
                          ? 'opacity-100 translate-x-0'
                          : isMobile
                            ? 'opacity-75 translate-x-0'
                            : 'opacity-0 translate-x-2 pointer-events-none'
                        }`}
                    >
                      <span className="font-semibold tracking-tight uppercase whitespace-nowrap text-white dark:text-[#212e52] text-[10px] sm:text-xs md:text-sm lg:text-base">
                        <span className="hidden sm:inline">{block.heading}</span>
                        <span className="sm:hidden">{block.shortHeading}</span>
                      </span>
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
          <div className="lg:hidden w-full max-w-xl mx-auto mt-2 sm:mt-4 min-h-[140px]">
            <AnimatePresence mode="wait">
              {activeBlock !== null && (
                <motion.div
                  key={activeBlock}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="bg-white dark:bg-[#18233d] p-4 sm:p-5 rounded-2xl border border-[#212e52]/10 dark:border-white/10 shadow-sm"
                >
                  {/* Interactive Pillar Selector Tabs on Mobile */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#212e52]/10 dark:border-white/10">
                    <div className="flex items-center gap-1.5">
                      {BLOCKS.map((b, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => handleBlockSelect(i)}
                          className={`px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase transition-all duration-200 ${activeBlock === i
                              ? 'bg-[#212e52] text-white dark:bg-white dark:text-[#212e52] shadow-sm'
                              : 'bg-black/5 dark:bg-white/5 text-[#212e52]/60 dark:text-white/60 hover:text-[#212e52] dark:hover:text-white'
                            }`}
                        >
                          {b.tabLabel}
                        </button>
                      ))}
                    </div>
                    <span className="text-[10px] text-[#C9951A] font-semibold uppercase tracking-widest">
                      {BLOCKS[activeBlock].tag.split('·')[0].trim()}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    {/* Left Points */}
                    <div className="space-y-2 text-left">
                      <span className="text-[#C9951A] text-[10px] font-semibold uppercase tracking-wider block text-left">
                        {BLOCKS[activeBlock].tag}
                      </span>
                      {BLOCKS[activeBlock].leftPoints.map((pt, i) => (
                        <div key={i} className="flex items-start gap-2 text-left">
                          <span className="text-[#C9951A] text-xs mt-0.5 leading-none font-bold">▪</span>
                          <span className="text-xs sm:text-sm font-semibold text-[#212e52] dark:text-white tracking-tight leading-snug">
                            {pt}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Right Points */}
                    <div className="space-y-2 text-left">
                      <span className="text-[#212e52]/70 dark:text-white/70 text-[10px] font-semibold uppercase tracking-wider block text-left">
                        Impact & Outcomes
                      </span>
                      {BLOCKS[activeBlock].rightPoints.map((pt, i) => (
                        <div key={i} className="flex items-start gap-2 text-left">
                          <span className="text-[#C9951A] text-xs mt-0.5 leading-none font-bold">▪</span>
                          <span className="text-xs sm:text-sm font-semibold text-[#212e52] dark:text-white tracking-tight leading-snug">
                            {pt}
                          </span>
                        </div>
                      ))}
                    </div>
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
