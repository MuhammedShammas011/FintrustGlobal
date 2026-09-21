import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

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
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="bg-[#FCFBF8]" id="services">
      <div className="border-t border-border">
        <div className="grid md:grid-cols-12 min-h-screen">

          {/* Left: Sticky Header area */}
          <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-border p-6 md:p-8 lg:p-10 relative">
            <div className="md:sticky md:top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="mb-6">
                  <span className="text-[#8a8a8a] text-sm font-semibold uppercase tracking-wider">
                    OUR SERVICES
                  </span>
                </div>

                <h2 className="text-5xl md:text-6xl lg:text-[5rem] leading-[1.1] text-near-black font-normal tracking-tight flex flex-col gap-2 mb-8">
                  <span className="block">Everything your business needs</span>
                  <span className="text-[#212e52] drop-shadow-sm block">behind the numbers.</span>
                </h2>

                <p className="text-[#5a5a5a] text-lg leading-relaxed max-w-sm">
                  From bookkeeping to strategic advisory, Fintrust provides the full spectrum of financial services your business requires.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right: Scrollable Services List */}
          <div className="md:col-span-7 flex flex-col">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 + index * 0.1 }}
                className={`p-8 md:p-12 lg:p-20 flex flex-col sm:flex-row gap-6 md:gap-12 ${index !== services.length - 1 ? 'border-b border-border' : ''
                  }`}
              >
                {/* Number */}
                <div className="text-3xl md:text-4xl text-[#C0BEBC] font-light font-mono shrink-0">
                  {service.number}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#212e52] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#5a5a5a] text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Tagline & Items */}
                  <div className="text-sm font-medium text-[#212e52]/70 mb-3">
                    {service.tagline}
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {service.items.map(item => (
                      <li
                        key={item}
                        className="text-xs font-medium text-[#5a5a5a] border border-[#d8d7d5] px-3 py-1.5 rounded-full"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
