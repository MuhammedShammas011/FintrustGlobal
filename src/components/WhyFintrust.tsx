import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const principles = [
  {
    id: 1,
    title: 'Accuracy',
    desc: 'Every number matters. Fintrust maintains meticulous financial records so your decisions are built on reliable data.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></svg>
    ),
    dark: true,
  },
  {
    id: 2,
    title: 'Compliance',
    desc: 'Full alignment with UAE tax, regulatory and reporting requirements — proactively managed, never reactive.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
    ),
    dark: false,
  },
  {
    id: 3,
    title: 'Clarity',
    desc: 'Financial information translated into language your business can use. No jargon, no complexity.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
    ),
    dark: false,
  },
  {
    id: 4,
    title: 'Strategic Insight',
    desc: 'Beyond reporting — Fintrust turns financial data into business intelligence that informs growth decisions.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
    ),
    dark: false,
  },
]

export default function WhyFintrust() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
  }

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white" id="why-fintrust">
      <div className="container-site">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 xl:gap-24">
          
          {/* Left Column (Content) */}
          <motion.div 
            className="lg:w-[40%] flex flex-col items-start lg:pt-6"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="mb-6">
              <span className="text-[#C9951A] text-sm font-semibold uppercase tracking-wider">
                OUR PRINCIPLES
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.0] text-[#212e52] mb-6">
              <span className="block">More than</span>
              <span className="block text-[#212e52]">accounting.</span>
            </h2>
            
            <p className="text-[#212e52]/50 text-base leading-relaxed mb-10 max-w-md">
              Fintrust works as an extension of your business — helping you understand your numbers, stay compliant and make informed decisions that support long-term growth.
            </p>
            
            <a 
              href="mailto:info@fintrustglobal.ae" 
              className="bg-[#212e52] text-white px-7 py-3.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#212e52]/90 transition-colors shadow-lg shadow-[#212e52]/10"
            >
              Start the conversation
              <span className="text-lg leading-none font-light ml-1">›</span>
            </a>
          </motion.div>

          {/* Right Column (Cards Grid) */}
          <motion.div 
            className="lg:w-[60%] grid sm:grid-cols-2 gap-4 md:gap-5"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {principles.map((principle) => (
              <motion.div
                key={principle.id}
                variants={itemVariants}
                className="p-8 md:p-10 rounded-[1.5rem] flex flex-col justify-start min-h-[280px] group bg-white border border-[#212e52]/10 transition-all duration-300 shadow-sm hover:shadow-xl hover:bg-[#212e52]"
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-10 bg-[#212e52] text-white transition-colors duration-300 group-hover:bg-white/10 group-hover:border group-hover:border-white/10"
                >
                  {principle.icon}
                </div>
                <h3 className="text-xl font-normal tracking-tight mb-3 text-[#212e52] transition-colors duration-300 group-hover:text-white">
                  {principle.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#212e52]/60 transition-colors duration-300 group-hover:text-white/70">
                  {principle.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
