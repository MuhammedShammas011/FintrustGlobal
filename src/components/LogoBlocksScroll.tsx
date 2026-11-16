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
    shortHeading: 'Compliance',
    tabLabel: 'Compliance',
    tag: 'Pillar 01 — Integrity',
    widthClass: 'w-[90vw] max-w-[370px] sm:w-[440px] md:w-[500px] lg:w-[480px] xl:w-[560px] 2xl:w-[600px]',
    paddingRightClass: 'pr-4 sm:pr-5 md:pr-6 lg:pr-8 xl:pr-10',
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
    tabLabel: 'Taxation',
    tag: 'Pillar 02 — Precision',
    widthClass: 'w-[74vw] max-w-[305px] sm:w-[360px] md:w-[400px] lg:w-[390px] xl:w-[455px] 2xl:w-[490px]',
    paddingRightClass: 'pr-3.5 sm:pr-4 md:pr-5 lg:pr-7 xl:pr-8',
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
    tabLabel: 'Strategy',
    tag: 'Pillar 03 — Vision',
    widthClass: 'w-[58vw] max-w-[240px] sm:w-[285px] md:w-[315px] lg:w-[305px] xl:w-[355px] 2xl:w-[385px]',
    paddingRightClass: 'pr-3 sm:pr-4 md:pr-4 lg:pr-6 xl:pr-7',
    leftPoints: [
      'Fractional CFO Leadership',
      'Pre-Acquisition Due Diligence',
    ],
    rightPoints: [
      'Cloud ERP Systems Architecture',
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
  // Defaults to 0 so the section is always visually rich and balanced
  const activeDisplayBlock = hovered !== null ? hovered : activeTab

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
    <div ref={containerRef} className="relative py-12 md:py-18 lg:py-24 bg-[#FCFBF8] dark:bg-[#0e1628] overflow-hidden transition-colors duration-300">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] items-center gap-8 lg:gap-10 xl:gap-16">

          {/* ── LEFT SIDE EXPLANATION POINTS (Desktop) ── */}
          <motion.div
            style={{ opacity: sideOpacity }}
            className="hidden lg:block w-full max-w-[340px] xl:max-w-[380px] justify-self-end min-h-[140px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDisplayBlock}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="space-y-5 text-left"
              >
                {/* Minimalist Micro-Kicker */}
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-[1.5px] bg-[#C9951A]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C9951A]">
                    {BLOCKS[activeDisplayBlock].tag}
                  </span>
                </div>

                {/* Minimalistic, bulky punchy points */}
                <div className="space-y-4 pt-1">
                  {BLOCKS[activeDisplayBlock].leftPoints.map((pt, i) => (
                    <div key={i} className="flex items-baseline gap-3 text-left">
                      <span className="text-xs font-mono font-semibold text-[#C9951A] tracking-wider shrink-0 select-none">
                        0{i + 1}
                      </span>
                      <span className="text-base sm:text-lg xl:text-[19px] font-medium text-[#212e52] dark:text-white tracking-tight leading-snug">
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* ── CENTER: THE THREE BLOCKS (LOGO) ── */}
          <motion.div
            style={{ x, opacity }}
            onMouseLeave={() => setHovered(null)}
            className="flex flex-col items-start justify-center gap-[3.5px] md:gap-[4px] xl:gap-[4.5px] shrink-0 translate-x-2 sm:translate-x-0"
          >
            {BLOCKS.map((block, index) => {
              const isBlockHovered = hovered === index
              const isBlockActive = hovered !== null ? isBlockHovered : (isMobile ? activeTab === index : false)
              const isBlockOtherActive = hovered !== null && !isBlockHovered

              // Enlarged, bolder height profile for active, inactive, and default idle states
              const heightClass = isBlockActive
                ? 'h-14 sm:h-16 md:h-24 lg:h-28 xl:h-[125px] 2xl:h-[135px]'
                : isBlockOtherActive
                  ? 'h-9 sm:h-10 md:h-12 lg:h-14 xl:h-[52px] 2xl:h-[58px]'
                  : 'h-11 sm:h-13 md:h-17 lg:h-20 xl:h-[78px] 2xl:h-[86px]'

              const opacityClass = isBlockOtherActive ? 'opacity-85' : 'opacity-100'

              return (
                <div
                  key={index}
                  className="w-full flex justify-start py-0.5 sm:py-0 cursor-pointer touch-manipulation"
                  onMouseEnter={() => {
                    setHovered(index)
                    setActiveTab(index)
                  }}
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

                    {/* Heading inside the block — CENTER ALIGNED, NO DOT, ALWAYS VISIBLE */}
                    <div
                      className={`relative z-10 h-full w-full flex items-center justify-center text-center px-4 sm:px-6 md:px-8 select-none overflow-hidden transition-all duration-300 ${
                        isBlockActive
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-85 translate-x-0 hover:opacity-100'
                      }`}
                    >
                      <span className="font-semibold tracking-wider uppercase whitespace-nowrap text-white dark:text-[#212e52] text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-[15px]">
                        <span className="hidden lg:inline">{block.heading}</span>
                        <span className="lg:hidden">{block.shortHeading}</span>
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
            className="hidden lg:block w-full max-w-[340px] xl:max-w-[380px] justify-self-start lg:translate-x-6 xl:translate-x-12 min-h-[140px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDisplayBlock}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="space-y-5 text-left"
              >
                {/* Minimalist Micro-Kicker */}
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-[1.5px] bg-[#212e52]/40 dark:bg-white/40" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#212e52]/70 dark:text-white/70">
                    Impact & Outcomes
                  </span>
                </div>

                {/* Minimalistic, bulky punchy points */}
                <div className="space-y-4 pt-1">
                  {BLOCKS[activeDisplayBlock].rightPoints.map((pt, i) => (
                    <div key={i} className="flex items-baseline gap-3 text-left">
                      <span className="text-xs font-mono font-semibold text-[#C9951A] tracking-wider shrink-0 select-none">
                        0{i + 1}
                      </span>
                      <span className="text-base sm:text-lg xl:text-[19px] font-medium text-[#212e52] dark:text-white tracking-tight leading-snug">
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* ── MOBILE / TABLET EXPLANATION POINTS (Below the blocks) ── */}
          <div className="lg:hidden w-full max-w-xl mx-auto mt-4 sm:mt-6 min-h-[140px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDisplayBlock}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="bg-white dark:bg-[#18233d] p-5 sm:p-6 rounded-2xl border border-[#212e52]/10 dark:border-white/10 shadow-sm"
              >
                {/* Interactive Pillar Selector Tabs on Mobile */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#212e52]/10 dark:border-white/10">
                  <div className="flex items-center gap-1.5">
                    {BLOCKS.map((b, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleBlockSelect(i)}
                        className={`px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase transition-all duration-200 ${
                          activeDisplayBlock === i
                            ? 'bg-[#212e52] text-white dark:bg-white dark:text-[#212e52] shadow-sm'
                            : 'bg-black/5 dark:bg-white/5 text-[#212e52]/60 dark:text-white/60 hover:text-[#212e52] dark:hover:text-white'
                        }`}
                      >
                        {b.tabLabel}
                      </button>
                    ))}
                  </div>
                  <span className="text-[10px] text-[#C9951A] font-semibold uppercase tracking-widest">
                    {BLOCKS[activeDisplayBlock].tag.includes('—')
                      ? BLOCKS[activeDisplayBlock].tag.split('—')[0].trim()
                      : BLOCKS[activeDisplayBlock].tag.split('·')[0].trim()}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Left Points */}
                  <div className="space-y-2.5 text-left">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="w-2 h-[1px] bg-[#C9951A]" />
                      <span className="text-[#C9951A] text-[10px] font-semibold uppercase tracking-wider block text-left">
                        {BLOCKS[activeDisplayBlock].tag}
                      </span>
                    </div>
                    {BLOCKS[activeDisplayBlock].leftPoints.map((pt, i) => (
                      <div key={i} className="flex items-baseline gap-2 text-left">
                        <span className="text-[10px] font-mono font-semibold text-[#C9951A] shrink-0">
                          0{i + 1}
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-[#212e52] dark:text-white tracking-tight leading-snug">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Right Points */}
                  <div className="space-y-2.5 text-left">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="w-2 h-[1px] bg-[#212e52]/40 dark:bg-white/40" />
                      <span className="text-[#212e52]/70 dark:text-white/70 text-[10px] font-semibold uppercase tracking-wider block text-left">
                        Impact & Outcomes
                      </span>
                    </div>
                    {BLOCKS[activeDisplayBlock].rightPoints.map((pt, i) => (
                      <div key={i} className="flex items-baseline gap-2 text-left">
                        <span className="text-[10px] font-mono font-semibold text-[#C9951A] shrink-0">
                          0{i + 1}
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-[#212e52] dark:text-white tracking-tight leading-snug">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  )
}
