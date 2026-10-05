import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'

const industries = [
  {
    label: 'Startups',
    number: '01',
    description: 'Building your financial foundation from day one — accounting, compliance and structure for early-stage businesses.',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round">
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
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round">
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
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" /><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" /><path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" /><path d="M9 7h6" /><path d="M9 11h6" />
      </svg>
    ),
  },
  {
    label: 'Freelancers',
    number: '04',
    description: 'Sole practitioners and independent consultants deserve the same financial clarity as any growing business.',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
      </svg>
    ),
  },
  {
    label: 'Expatriates',
    number: '05',
    description: 'Navigating UAE financial requirements as an expatriate — Fintrust provides clarity, structure and ongoing support.',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round">
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
    const targetProgress = (index + 0.5) / 5
    const targetScroll = containerTop + (targetProgress * scrollSpace)
    window.scrollTo({ top: targetScroll, behavior: 'smooth' })
  }

  const current = industries[active]

  return (
    <section ref={containerRef} className="bg-[#FCFBF8] h-[400vh] relative" id="industries">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden py-12 md:py-0">
        <div className="container-site max-w-[1200px] w-full">
        
        {/* Top row: label + heading + description */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-20">
          <div>
            <div className="mb-4">
              <span className="text-[#C9951A] text-sm font-semibold uppercase tracking-wider">
                WHO WE SERVE
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-[1.1] text-[#212e52]">
              <span className="block">Built for businesses</span>
              <span className="block text-[#212e52]/40">at every stage.</span>
            </h2>
          </div>
          <p className="text-[#212e52]/60 text-base md:text-lg leading-relaxed max-w-sm md:text-right md:pb-2">
            From day-one startups to established corporates — Fintrust is built to serve every kind of business in the UAE.
          </p>
        </div>

        {/* Minimal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-16">
          
          {/* Left Column: List of Tabs */}
          <div 
            className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible gap-2 pb-4 md:pb-0 [&::-webkit-scrollbar]:hidden" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {industries.map((ind, i) => (
              <button
                key={ind.label}
                onClick={() => scrollToTab(i)}
                className={`shrink-0 text-left py-4 px-5 md:px-6 rounded-2xl transition-all duration-300 border ${active === i ? 'bg-[#212e52] border-[#212e52]/10 shadow-sm' : 'bg-transparent border-transparent hover:bg-white/50'}`}
              >
                <div className="flex items-center gap-4">
                  <span className={`text-xs font-mono transition-colors ${active === i ? 'text-[#C9951A]' : 'text-[#212e52]/30'}`}>
                    {ind.number}
                  </span>
                  <span className={`text-sm md:text-base font-semibold uppercase tracking-wider transition-colors ${active === i ? 'text-white' : 'text-[#212e52]/50'}`}>
                    {ind.label}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Active Content */}
          <div className="relative min-h-[280px] flex items-center bg-[#212e52] border border-[#212e52]/5 rounded-3xl p-8 md:p-16 overflow-hidden shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative z-10 max-w-xl"
              >
                <h3 className="text-3xl md:text-5xl font-normal tracking-tight text-white mb-4 md:mb-6">
                  {current.label}
                </h3>
                <p className="text-white/70 text-lg md:text-xl leading-relaxed">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Background SVG Icon */}
            <div className="absolute right-[-10%] bottom-[-15%] md:right-[-5%] md:top-1/2 md:-translate-y-1/2 md:bottom-auto w-[200px] h-[200px] md:w-[350px] md:h-[350px] pointer-events-none opacity-10 md:opacity-[0.15] text-white mix-blend-normal z-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  {current.icon}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          </div>
        </div>
      </div>
    </section>
  )
}
