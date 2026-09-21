import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const areas = [
  { number: '01', title: 'Operations', desc: 'Review of business processes, systems and operational risk factors.' },
  { number: '02', title: 'Accounts', desc: 'Detailed examination of financial statements, records and reporting accuracy.' },
  { number: '03', title: 'Commerce', desc: 'Assessment of commercial agreements, revenue quality and customer relationships.' },
  { number: '04', title: 'Tax', desc: 'UAE tax compliance review, liability identification and risk assessment.' },
]

export default function DueDiligence() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-padding bg-near-black dark-bg relative overflow-hidden" id="due-diligence">
      {/* Subtle animated line background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 600" fill="none" className="w-full h-full opacity-[0.04]" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 12 }, (_, i) => (
            <line
              key={i}
              x1={i * 130}
              y1="0"
              x2={i * 130 + 60}
              y2="600"
              stroke="#F7F6F2"
              strokeWidth="1"
            />
          ))}
          {Array.from({ length: 8 }, (_, i) => (
            <line
              key={`h${i}`}
              x1="0"
              y1={i * 90}
              x2="1440"
              y2={i * 90}
              stroke="#F7F6F2"
              strokeWidth="0.5"
            />
          ))}
        </svg>
      </div>

      <div className="container-site relative z-10">
        {/* Header */}
        <div className="mb-16 grid md:grid-cols-2 gap-8 items-end">
          <div>
            <motion.span
              className="text-label-tag text-accent tracking-[0.18em] block mb-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              DUE DILIGENCE
            </motion.span>
            <motion.h2
              className="text-section text-off-white"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            >
              Know what you're
              <br />
              <span className="text-off-white/30">really investing in.</span>
            </motion.h2>
          </div>
          <motion.div
            className="flex items-end"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-off-white/40 text-body-lg leading-relaxed">
              Before any acquisition, partnership or investment, Fintrust conducts comprehensive
              due diligence to surface financial, operational and commercial risks.
            </p>
          </motion.div>
        </div>

        {/* Areas grid */}
        <div className="grid md:grid-cols-4 gap-0 border-t border-border-dark">
          {areas.map((area, index) => (
            <motion.div
              key={area.number}
              className="py-10 pr-8 border-b md:border-b-0 md:border-r border-border-dark last:border-r-0 group"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 + index * 0.08 }}
            >
              <span className="text-label-tag text-accent block mb-6">{area.number}</span>
              <h3 className="font-semibold text-off-white text-xl mb-3 tracking-tight group-hover:text-accent transition-colors duration-200">
                {area.title}
              </h3>
              <p className="text-xs text-off-white/35 leading-relaxed">{area.desc}</p>

              {/* Subtle animated connector */}
              <div className="mt-8">
                <div
                  className="h-px bg-border-dark transition-all duration-500 group-hover:bg-accent"
                  style={{ width: index < areas.length - 1 ? '60%' : '0%' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="mailto:info@fintrustglobal.ae" className="btn-ghost text-off-white">
            Explore due diligence →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
