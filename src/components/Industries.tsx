import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const industries = [
  {
    label: 'Startups',
    number: '01',
    description: 'Building your financial foundation from day one — accounting, compliance and structure for early-stage businesses.',
  },
  {
    label: 'SMEs',
    number: '02',
    description: 'Scaling businesses need financial clarity. Fintrust helps SMEs manage complexity and make informed growth decisions.',
  },
  {
    label: 'Corporates',
    number: '03',
    description: 'Enterprise-level accounting, tax strategy and due diligence for established businesses operating in the UAE.',
  },
  {
    label: 'Freelancers',
    number: '04',
    description: 'Sole practitioners and independent consultants deserve the same financial clarity as any growing business.',
  },
  {
    label: 'Expatriates',
    number: '05',
    description: 'Navigating UAE financial requirements as an expatriate — Fintrust provides clarity, structure and ongoing support.',
  },
]

export default function Industries() {
  const [active, setActive] = useState(0)

  const handlePrev = () => setActive(i => (i - 1 + industries.length) % industries.length)
  const handleNext = () => setActive(i => (i + 1) % industries.length)

  const current = industries[active]

  return (
    <section className="bg-white" id="industries">
      <div className="container-site py-20 md:py-28">

        {/* Top row: label + heading + description */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16">
          <div>
            <div className="mb-6">
              <span className="text-[#C9951A] text-sm font-semibold uppercase tracking-wider">
                WHO WE SERVE
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.0] text-[#212e52]">
              <span className="block">Built for businesses</span>
              <span className="block text-[#212e52]/30">at every stage.</span>
            </h2>
          </div>
          <p className="text-[#212e52]/50 text-sm md:text-base leading-relaxed max-w-xs md:text-right md:mt-6">
            From day-one startups to established corporates — Fintrust is built to serve every kind of business in the UAE.
          </p>
        </div>

        {/* Tabs row */}
        <div className="grid grid-cols-5 gap-0 mb-8">
          {industries.map((ind, i) => (
            <button
              key={ind.label}
              onClick={() => setActive(i)}
              className="text-left pr-4 pb-3 group focus:outline-none"
            >
              <span className={`block text-[10px] font-mono mb-1 transition-colors duration-300 ${active === i ? 'text-[#212e52]/60' : 'text-[#212e52]/25'}`}>
                {ind.number}
              </span>
              <span className={`block text-xs md:text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ${active === i ? 'text-[#212e52]' : 'text-[#212e52]/30 group-hover:text-[#212e52]/60'}`}>
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
        <div className="relative min-h-[240px] md:min-h-[280px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="items-start"
            >
              <div className="pt-8">
                <p className="text-[#212e52]/35 text-xs uppercase tracking-widest font-semibold mb-4">
                  CLIENT TYPE
                </p>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-[#212e52] mb-6">
                  {current.label}
                </h3>
                <p className="text-[#212e52]/50 text-base md:text-lg leading-relaxed max-w-md">
                  {current.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom: PREV / NEXT */}
        <div className="flex items-center gap-8 mt-12 border-t border-[#212e52]/10 pt-8">
          <button
            onClick={handlePrev}
            className="flex items-center gap-2 text-[#212e52]/40 hover:text-[#212e52] transition-colors duration-200 text-sm font-semibold uppercase tracking-wider group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Prev
          </button>
          <button
            onClick={handleNext}
            className="flex items-center gap-2 text-[#212e52]/40 hover:text-[#212e52] transition-colors duration-200 text-sm font-semibold uppercase tracking-wider group"
          >
            Next
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  )
}
