import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const industries = [
  {
    label: 'Startups',
    description: 'Building your financial foundation from day one — accounting, compliance and structure for early-stage businesses.',
  },
  {
    label: 'SMEs',
    description: 'Scaling businesses need financial clarity. Fintrust helps SMEs manage complexity and make informed growth decisions.',
  },
  {
    label: 'Corporates',
    description: 'Enterprise-level accounting, tax strategy and due diligence for established businesses operating in the UAE.',
  },
  {
    label: 'Freelancers',
    description: 'Sole practitioners and independent consultants deserve the same financial clarity as any growing business.',
  },
  {
    label: 'Expatriates',
    description: 'Navigating UAE financial requirements as an expatriate — Fintrust provides clarity, structure and ongoing support.',
  },
]

export default function Industries() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-padding bg-off-white" id="industries">
      <div className="container-site">
        {/* Massive Header */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          >
            <div className="mb-6">
              <span className="text-[#C9951A] text-sm font-semibold uppercase tracking-wider">
                WHO WE SERVE
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] leading-[1.1] text-near-black font-normal tracking-tight flex flex-col gap-2">
              <span className="block">Built for businesses</span>
              <span className="block">
                at <span className="text-[#212e52]/40">every stage.</span>
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Premium Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-6">
          {industries.map((industry, index) => {
            // Row 1: Startups (col-span-4), SMEs (col-span-2)
            // Row 2: Corporates, Freelancers, Expatriates (col-span-2 each)
            const colSpanClass = index === 0 ? "md:col-span-4" : "md:col-span-2";
            
            return (
              <motion.div
                key={industry.label}
                className={`relative overflow-hidden border border-border bg-white p-8 lg:p-10 group hover:border-[#2A5C45]/30 hover:shadow-xl transition-all duration-500 ease-out flex flex-col justify-between cursor-pointer min-h-[300px] ${colSpanClass}`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Giant Background Number */}
                <div className="absolute -right-4 -bottom-6 text-[140px] font-bold text-near-black opacity-[0.02] pointer-events-none group-hover:scale-110 group-hover:-translate-x-4 transition-transform duration-700 ease-out">
                  0{index + 1}
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-normal text-near-black mb-4 group-hover:text-[#2A5C45] transition-colors duration-300">
                    {industry.label}
                  </h3>
                  <p className="text-muted leading-relaxed text-sm md:text-base max-w-sm">
                    {industry.description}
                  </p>
                </div>
                
                {/* Interactive Arrow Indicator */}
                <div className="mt-12 relative z-10 w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-[#2A5C45] group-hover:border-[#2A5C45] transition-all duration-300 group-hover:shadow-md">
                  <svg className="w-4 h-4 text-near-black group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
