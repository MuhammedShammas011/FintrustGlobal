import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const taxServices = [
  { title: 'Corporate Tax', desc: '9% CT regime — registration, filing and advisory.' },
  { title: 'VAT', desc: 'Consultancy, administration, returns and refunds.' },
  { title: 'Tax Audit', desc: 'Preparation, representation and resolution.' },
  { title: 'Excise Tax', desc: 'Compliance for excisable goods in the UAE.' },
  { title: 'Penalty Resolution', desc: 'VAT administration penalties — addressed and resolved.' },
]

export default function TaxSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-padding bg-off-white" id="taxation">
      <div className="container-site">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            >
              <div className="mb-6">
                <span className="text-[#C9951A] text-sm font-semibold uppercase tracking-wider">
                  UAE TAXATION
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] leading-[1.1] text-near-black font-normal tracking-tight flex flex-col gap-2 mb-8">
                <span className="block whitespace-nowrap">Tax shouldn't</span>
                <span className="block whitespace-nowrap">
                  be <span className="text-[#212e52]/40">complicated.</span>
                </span>
              </h2>
            </motion.div>

            <motion.p
              className="text-muted text-body-lg leading-relaxed mb-12 max-w-md"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              From registration and filing to advisory and audit support, Fintrust helps
              businesses navigate UAE tax requirements with clarity.
            </motion.p>

            {/* Service list */}
            <div className="space-y-0">
              {taxServices.map((svc, i) => (
                <motion.div
                  key={svc.title}
                  className="flex gap-4 py-4 border-t border-border group"
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 + i * 0.06 }}
                >
                  <span className="text-label-tag text-accent mt-0.5 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <div className="font-semibold text-near-black text-sm mb-0.5 group-hover:text-accent transition-colors duration-200">
                      {svc.title}
                    </div>
                    <div className="text-xs text-muted leading-relaxed">{svc.desc}</div>
                  </div>
                </motion.div>
              ))}
              <div className="border-t border-border" />
            </div>

            <motion.a
              href="mailto:info@fintrustglobal.ae"
              className="btn-ghost mt-10 inline-flex"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Explore taxation →
            </motion.a>
          </div>

          {/* Right — abstract tax visualization */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          >
            <motion.div 
              className="aspect-square max-w-sm mx-auto relative"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <svg
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                aria-hidden="true"
              >
                {/* Outer frame */}
                <rect x="20" y="20" width="360" height="360" stroke="#E5E4E0" strokeWidth="1" />

                {/* Tax slabs visualization */}
                {[
                  { y: 280, h: 80, label: 'Exempt', val: '0%', color: '#E5E4E0' },
                  { y: 180, h: 90, label: 'Standard VAT', val: '5%', color: '#C8D8C0' },
                  { y: 80, h: 90, label: 'Corporate Tax', val: '9%', color: '#2A5C45' },
                ].map(({ y, h, label, val, color }, i) => (
                  <g key={label}>
                    {/* Background fill growing */}
                    <motion.rect 
                      x="60" y={y} height={h - 8} fill={color} opacity="0.15" 
                      initial={{ width: 0 }}
                      animate={inView ? { width: 180 } : {}}
                      transition={{ duration: 1, delay: 0.4 + i * 0.2, ease: [0.25, 1, 0.5, 1] }}
                    />
                    {/* Left border bar fading in */}
                    <motion.rect 
                      x="60" y={y} width="3" height={h - 8} fill={color} opacity="0.6" 
                      initial={{ scaleY: 0, originY: 1 }}
                      animate={inView ? { scaleY: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + i * 0.2 }}
                    />
                    
                    {/* Text fading in slightly delayed */}
                    <motion.text 
                      x="72" y={y + 20} fill="#111111" fontSize="11" fontFamily="Inter" fontWeight="600" opacity="0.7"
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.7 + i * 0.2 }}
                    >
                      {label}
                    </motion.text>
                    <motion.text 
                      x="72" y={y + 36} fill={color === '#2A5C45' ? '#2A5C45' : '#6B6B6B'} fontSize="18" fontFamily="Inter" fontWeight="700" opacity="0.9"
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + i * 0.2 }}
                    >
                      {val}
                    </motion.text>
                  </g>
                ))}

                {/* Right panel: UAE outline simplified */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <text x="280" y="180" fill="#111111" fontSize="9" fontFamily="Inter" opacity="0.2" textAnchor="middle">UAE</text>
                  <text x="280" y="200" fill="#111111" fontSize="8" fontFamily="Inter" opacity="0.15" textAnchor="middle">FEDERAL DECREE</text>
                  <text x="280" y="215" fill="#2A5C45" fontSize="8" fontFamily="Inter" opacity="0.35" textAnchor="middle">No. 47 of 2022</text>

                  {/* Decorative grid */}
                  {[100, 150, 200, 250, 300].map((y, index) => (
                    <motion.line 
                      key={y} x1="260" y1={y} x2="360" y2={y} stroke="#E5E4E0" strokeWidth="0.5" 
                      initial={{ pathLength: 0 }}
                      animate={inView ? { pathLength: 1 } : {}}
                      transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                    />
                  ))}

                  {/* Corner detail */}
                  <motion.rect 
                    x="340" y="20" width="20" height="20" fill="#2A5C45" opacity="0.15" 
                    initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} transition={{ delay: 1.5 }}
                  />
                  <motion.rect 
                    x="340" y="20" width="20" height="20" stroke="#2A5C45" strokeWidth="0.5" fill="none" 
                    initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}} transition={{ delay: 1.6, duration: 1 }}
                  />
                </motion.g>
              </svg>

              {/* Floating label */}
              <motion.div 
                className="absolute top-4 right-4 border border-border bg-white px-3 py-2 text-xs font-semibold text-near-black/60"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.5, type: 'spring' }}
              >
                FTA Compliant
              </motion.div>
              <motion.div 
                className="absolute bottom-4 left-4 border border-accent/20 bg-accent/5 px-3 py-2 text-xs font-semibold text-accent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.6, type: 'spring' }}
              >
                FINTRUST MANAGED →
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
