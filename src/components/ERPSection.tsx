import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const platforms = ['Tally', 'Zoho Books', 'QuickBooks', 'Odoo', 'Custom ERP']

export default function ERPSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-padding bg-[#F0EFE9]" id="solutions">
      <div className="container-site">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            >
              <div className="mb-6">
                <span className="text-[#C9951A] text-sm font-semibold uppercase tracking-wider">
                  ERP & ACCOUNTING SYSTEMS
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] leading-[1.1] text-near-black font-normal tracking-tight flex flex-col gap-2 mb-8">
                <span className="block">Your financial systems</span>
                <span className="block">
                  should work <span className="text-[#212e52]">as hard as you do.</span>
                </span>
              </h2>
            </motion.div>

            <motion.p
              className="text-muted text-body-lg leading-relaxed mb-12 max-w-md"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              Fintrust helps businesses implement and manage accounting and ERP systems
              that improve visibility, automation and control — freeing you to focus
              on running your business.
            </motion.p>

            {/* Platform grid */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {platforms.map((platform, i) => (
                <motion.div
                  key={platform}
                  className="erp-platform"
                  initial={{ opacity: 0, y: 8 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.45 + i * 0.06, duration: 0.5 }}
                >
                  {platform}
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              className="text-xs text-muted mt-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Implementation, training, ongoing support and custom integrations available.
            </motion.p>
          </div>

          {/* Right — abstract data flow visualization */}
          <motion.div
            className="relative pt-8 md:pt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <svg
                viewBox="0 0 440 480"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-sm mx-auto"
                aria-hidden="true"
              >
                {/* Central dashboard */}
                <rect x="140" y="180" width="160" height="110" rx="2" fill="#111111" />
                <rect x="148" y="190" width="144" height="8" rx="1" fill="#2A5C45" opacity="0.5" />
                <rect x="148" y="206" width="80" height="4" rx="1" fill="#F7F6F2" opacity="0.15" />
                <rect x="148" y="215" width="100" height="4" rx="1" fill="#F7F6F2" opacity="0.1" />
                <rect x="148" y="224" width="60" height="4" rx="1" fill="#F7F6F2" opacity="0.1" />
                {/* Mini chart in dashboard */}
                <path d="M148,270 L168,258 L188,263 L208,248 L228,240 L248,245 L268,235 L288,228" stroke="#2A5C45" strokeWidth="1.5" fill="none" opacity="0.8" />
                
                <motion.text 
                  x="220" y="196" fill="#F7F6F2" fontSize="6" fontFamily="Inter" fontWeight="600" textAnchor="middle"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  FINANCIAL DASHBOARD
                </motion.text>

                {/* Source nodes */}
                {/* Tally */}
                <rect x="20" y="60" width="90" height="50" rx="2" fill="white" stroke="#E5E4E0" strokeWidth="1" />
                <text x="65" y="82" fill="#111111" fontSize="9" fontFamily="Inter" fontWeight="600" textAnchor="middle">Tally</text>
                <text x="65" y="96" fill="#6B6B6B" fontSize="7" fontFamily="Inter" textAnchor="middle">Accounting</text>

                {/* Zoho */}
                <rect x="20" y="200" width="90" height="50" rx="2" fill="white" stroke="#E5E4E0" strokeWidth="1" />
                <text x="65" y="222" fill="#111111" fontSize="9" fontFamily="Inter" fontWeight="600" textAnchor="middle">Zoho Books</text>
                <text x="65" y="236" fill="#6B6B6B" fontSize="7" fontFamily="Inter" textAnchor="middle">Cloud ERP</text>

                {/* QuickBooks */}
                <rect x="20" y="340" width="90" height="50" rx="2" fill="white" stroke="#E5E4E0" strokeWidth="1" />
                <text x="65" y="362" fill="#111111" fontSize="9" fontFamily="Inter" fontWeight="600" textAnchor="middle">QuickBooks</text>
                <text x="65" y="376" fill="#6B6B6B" fontSize="7" fontFamily="Inter" textAnchor="middle">Finance</text>

                {/* Odoo */}
                <rect x="330" y="60" width="90" height="50" rx="2" fill="white" stroke="#E5E4E0" strokeWidth="1" />
                <text x="375" y="82" fill="#111111" fontSize="9" fontFamily="Inter" fontWeight="600" textAnchor="middle">Odoo</text>
                <text x="375" y="96" fill="#6B6B6B" fontSize="7" fontFamily="Inter" textAnchor="middle">Business Suite</text>

                {/* Custom ERP */}
                <rect x="330" y="340" width="90" height="50" rx="2" fill="white" stroke="#E5E4E0" strokeWidth="1" />
                <text x="375" y="362" fill="#111111" fontSize="9" fontFamily="Inter" fontWeight="600" textAnchor="middle">Custom ERP</text>
                <text x="375" y="376" fill="#6B6B6B" fontSize="7" fontFamily="Inter" textAnchor="middle">Integrated</text>

                {/* Connector lines — animated */}
                <path
                  d="M110,85 C120,85 130,200 140,220"
                  stroke="#2A5C45"
                  strokeWidth="0.8"
                  strokeDasharray="4 3"
                  opacity="0.4"
                />
                <path
                  d="M110,225 L140,230"
                  stroke="#2A5C45"
                  strokeWidth="0.8"
                  strokeDasharray="4 3"
                  opacity="0.4"
                />
                <path
                  d="M110,365 C120,365 130,270 140,260"
                  stroke="#2A5C45"
                  strokeWidth="0.8"
                  strokeDasharray="4 3"
                  opacity="0.4"
                />
                <path
                  d="M300,220 C310,220 320,85 330,85"
                  stroke="#2A5C45"
                  strokeWidth="0.8"
                  strokeDasharray="4 3"
                  opacity="0.4"
                />
                <path
                  d="M300,260 C310,260 320,365 330,365"
                  stroke="#2A5C45"
                  strokeWidth="0.8"
                  strokeDasharray="4 3"
                  opacity="0.4"
                />

                {/* Data flow dots */}
                <motion.circle cx="125" cy="153" r="3" fill="#2A5C45" animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ repeat: Infinity, duration: 2, delay: 0 }} />
                <motion.circle cx="317" cy="153" r="3" fill="#2A5C45" animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} />
                <motion.circle cx="220" cy="175" r="4" fill="#2A5C45" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 2, delay: 1 }} />

                <motion.text 
                  x="220" y="320" fill="#2A5C45" fontSize="8" fontFamily="Inter" fontWeight="600" textAnchor="middle"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  Managed by FINTRUST
                </motion.text>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
