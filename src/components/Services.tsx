import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'Accounting',
    tagline: 'Clean books. Clear reporting. Better decisions.',
    items: ['Monthly Bookkeeping', 'Payroll Management', 'Financial Reporting', 'Accounting Support'],
    description:
      'Accurate, well-maintained financial records are the foundation of every sound business decision. Fintrust handles your accounting so you can focus on what you do best.',
  },
  {
    number: '02',
    title: 'Taxation',
    tagline: 'Stay compliant. Reduce risk. Plan ahead.',
    items: ['Corporate Tax', 'VAT Consultancy', 'VAT Administration Penalties', 'Tax Audit Services', 'Excise Tax'],
    description:
      'The UAE tax landscape continues to evolve. Fintrust helps you navigate Corporate Tax, VAT and audit requirements with confidence and precision.',
  },
  {
    number: '03',
    title: 'Business Consultation',
    tagline: 'Financial insight that supports better business decisions.',
    items: ['AML Compliance', 'Economic Substance Advisory', 'Budgeting & Forecasting', 'CFO Outsourcing', 'ERP / Accounting Software'],
    description:
      'Beyond the numbers — Fintrust provides strategic business consultation to help you plan, manage risk and grow with financial intelligence.',
  },
  {
    number: '04',
    title: 'Due Diligence',
    tagline: 'Know what you\'re investing in.',
    items: ['Operations Due Diligence', 'Accounts Due Diligence', 'Commerce Due Diligence', 'Tax Due Diligence'],
    description:
      'Before any acquisition, partnership or investment, Fintrust conducts thorough due diligence to surface financial, operational and commercial risks.',
  },
  {
    number: '05',
    title: 'Management',
    tagline: 'Turn financial information into business action.',
    items: ['360° Business Management', 'Finance', 'Operations', 'Strategy', 'Performance Tracking', 'Resource Optimization'],
    description:
      'Fintrust offers comprehensive management solutions — giving business owners the financial and operational oversight needed to scale with clarity.',
  },
]

export default function Services() {
  const ref = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section ref={ref} className="bg-[#FCFBF8]" id="services">

      {/* ── Header ─────────────────────────────────────────────────── */}
      <div className="border-b border-[#e0ddd8]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="text-[#C9951A] text-xs font-semibold uppercase tracking-[0.2em] mb-5 block">
              Our Services
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-[5rem] leading-[1.05] text-[#1a1a1a] font-normal tracking-tight max-w-2xl">
              Everything your business needs{' '}
              <span className="text-[#212e52]">behind the numbers.</span>
            </h2>
          </motion.div>

          <motion.p
            className="text-[#5a5a5a] text-base leading-relaxed max-w-xs md:text-right"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            From bookkeeping to strategic advisory — the full spectrum of financial services.
          </motion.p>
        </div>
      </div>

      {/* ── Services List ───────────────────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {services.map((service, index) => (
          <motion.div
            key={service.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className={`border-b border-[#e0ddd8] ${index === 0 ? 'border-t' : ''}`}
          >
            <div
              className={`-mx-4 px-4 md:-mx-8 md:px-8 rounded-2xl transition-colors duration-400 ${activeIndex === index ? 'bg-[#C9951A]/[0.08]' : 'hover:bg-[#C9951A]/[0.04]'}`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {/* Row — hoverable (and clickable for mobile) */}
              <button
                className="w-full text-left py-7 flex items-center gap-6 md:gap-12 group"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                {/* Number */}
                <span className="text-xs font-mono text-[#b0ada9] shrink-0 w-6">
                  {service.number}
                </span>

                {/* Title */}
                <span
                  className={`flex-1 text-2xl md:text-3xl font-normal tracking-tight transition-colors duration-300 ${
                    activeIndex === index ? 'text-[#212e52]' : 'text-[#1a1a1a] group-hover:text-[#212e52]'
                  }`}
                >
                  {service.title}
                </span>

                {/* Tagline — hidden on mobile, visible on md+ */}
                <span className="hidden md:block text-sm text-[#8a8a8a] max-w-[240px] text-right leading-snug">
                  {service.tagline}
                </span>

                {/* Arrow / indicator */}
                <motion.span
                  className="shrink-0 w-8 h-8 rounded-full border border-[#C9951A]/40 flex items-center justify-center text-[#C9951A]"
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </motion.span>
              </button>

              {/* Expandable Detail */}
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 pl-12 md:pl-[4.5rem] grid md:grid-cols-2 gap-8">
                      <p className="text-[#5a5a5a] text-base leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="flex flex-wrap gap-2 content-start">
                        {service.items.map(item => (
                          <li
                            key={item}
                            className="text-xs font-medium text-[#212e52] bg-[#212e52]/8 border border-[#212e52]/15 px-3 py-1.5 rounded-full"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}
