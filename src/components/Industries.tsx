import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'

const industries = [
  {
    label: 'Startups',
    number: '01',
    description: 'Building your financial foundation from day one — accounting, compliance and structure for early-stage businesses.',
    icon: (
      <svg className="w-full h-full text-[#212e52]/15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 3.82-13 1.5 1.5 0 0 1 2.18 2.18A22 22 0 0 1 12 15z" />
        <path d="m15 12 3 3" />
        <path d="M10 17l4 4" />
        <path d="M14 19l-4-4" />
      </svg>
    ),
  },
  {
    label: 'SMEs',
    number: '02',
    description: 'Scaling businesses need financial clarity. Fintrust helps SMEs manage complexity and make informed growth decisions.',
    icon: (
      <svg className="w-full h-full text-[#212e52]/15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    label: 'Corporates',
    number: '03',
    description: 'Enterprise-level accounting, tax strategy and due diligence for established businesses operating in the UAE.',
    icon: (
      <svg className="w-full h-full text-[#212e52]/15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" /><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" /><path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" /><path d="M9 7h6" /><path d="M9 11h6" />
      </svg>
    ),
  },
  {
    label: 'Freelancers',
    number: '04',
    description: 'Sole practitioners and independent consultants deserve the same financial clarity as any growing business.',
    icon: (
      <svg className="w-full h-full text-[#212e52]/15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
      </svg>
    ),
  },
  {
    label: 'Expatriates',
    number: '05',
    description: 'Navigating UAE financial requirements as an expatriate — Fintrust provides clarity, structure and ongoing support.',
    icon: (
      <svg className="w-full h-full text-[#212e52]/15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
]

export default function Industries() {
  const containerRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // There are 5 states. We want them to change evenly across the scroll space.
    // 0.0 -> 0, 0.99 -> 4
    const index = Math.min(4, Math.floor(latest * 5))
    if (index !== active) {
      setActive(index)
    }
  })

  const scrollToTab = (index: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const containerTop = rect.top + window.scrollY
    const scrollSpace = rect.height - window.innerHeight

    // We want to scroll to the middle of the 'segment' for that index
    // Segment size is 1/5. Middle of segment is (index + 0.5) / 5
    const targetProgress = (index + 0.5) / 5
    const targetScroll = containerTop + (targetProgress * scrollSpace)

    window.scrollTo({ top: targetScroll, behavior: 'smooth' })
  }

  const handlePrev = () => {
    if (active > 0) scrollToTab(active - 1)
  }

  const handleNext = () => {
    if (active < 4) scrollToTab(active + 1)
  }

  const current = industries[active]

  return (
    <section ref={containerRef} className="bg-white h-[400vh] relative" id="industries">
      {/* Sticky wrapper that takes exactly one viewport height and stays centered */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-16 lg:px-24 xl:px-32 relative">

          {/* Top row: label + heading + description */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
            <div>
              <div className="mb-4">
                <span className="text-[#C9951A] text-sm font-semibold uppercase tracking-wider">
                  WHO WE SERVE
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.0] text-[#212e52]">
                <span className="block">Built for businesses</span>
                <span className="block text-[#212e52]/30">at every stage.</span>
              </h2>
            </div>
            <p className="text-[#212e52]/50 text-base md:text-lg leading-relaxed max-w-lg md:text-right md:mt-6">
              From day-one startups to established corporates — Fintrust is built to serve every kind of business in the UAE.
            </p>
          </div>

          {/* Tabs row */}
          <div className="grid grid-cols-5 gap-0 mb-4 md:mb-6">
            {industries.map((ind, i) => (
              <button
                key={ind.label}
                onClick={() => scrollToTab(i)}
                className="text-left pr-2 md:pr-4 pb-3 group focus:outline-none"
              >
                <span className={`block text-[10px] font-mono mb-1 transition-colors duration-300 ${active === i ? 'text-[#212e52]/60' : 'text-[#212e52]/25'}`}>
                  {ind.number}
                </span>
                <span className={`block text-[10px] md:text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${active === i ? 'text-[#212e52]' : 'text-[#212e52]/30 group-hover:text-[#212e52]/60'}`}>
                  {ind.label}
                </span>
                {/* Active indicator bar */}
                <div className="mt-3 h-px w-full relative overflow-hidden bg-[#212e52]/10">
                  {active === i && (
                    <motion.div
                      layoutId="tab-indicator"
                      className="absolute inset-0 bg-[#212e52]"
                      transition={{ type: 'spring', stiffness: 400, damping: 40 }}
                    />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="relative min-h-[200px] md:min-h-[240px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-full md:w-1/2 h-full z-10 relative"
              >
                <div className="pt-6 md:pt-0">
                  <p className="text-[#212e52]/35 text-xs uppercase tracking-widest font-semibold mb-4">
                    CLIENT TYPE
                  </p>
                  <h3 className="text-4xl md:text-5xl lg:text-7xl font-normal tracking-tight text-[#212e52] mb-4 md:mb-6">
                    {current.label}
                  </h3>
                  <p className="text-[#212e52]/50 text-base md:text-lg leading-relaxed max-w-xl">
                    {current.description}
                  </p>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Large SVG Icon - Absolutely Positioned to avoid stretching vertical height */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[150px] h-[150px] lg:w-[220px] lg:h-[220px] xl:w-[280px] xl:h-[280px] pointer-events-none z-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="w-full h-full"
                >
                  {current.icon}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom: PREV / NEXT */}
          <div className="flex items-center justify-between mt-6 md:mt-8 border-t border-[#212e52]/10 pt-4 md:pt-6 z-10 relative">
            <div className="flex gap-8">
              <button
                onClick={handlePrev}
                disabled={active === 0}
                className={`flex items-center gap-2 text-sm font-semibold uppercase tracking-wider group transition-colors duration-200 ${active === 0 ? 'text-[#212e52]/20 cursor-not-allowed' : 'text-[#212e52]/40 hover:text-[#212e52]'
                  }`}
              >
                <svg className={`w-4 h-4 transition-transform duration-200 ${active !== 0 && 'group-hover:-translate-x-1'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Prev
              </button>
              <button
                onClick={handleNext}
                disabled={active === industries.length - 1}
                className={`flex items-center gap-2 text-sm font-semibold uppercase tracking-wider group transition-colors duration-200 ${active === industries.length - 1 ? 'text-[#212e52]/20 cursor-not-allowed' : 'text-[#212e52]/40 hover:text-[#212e52]'
                  }`}
              >
                Next
                <svg className={`w-4 h-4 transition-transform duration-200 ${active !== industries.length - 1 && 'group-hover:translate-x-1'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="hidden md:flex items-center gap-3 text-[#212e52]/30 text-xs font-semibold uppercase tracking-widest">
              <span>Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                ↓
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
