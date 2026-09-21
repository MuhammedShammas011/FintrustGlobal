import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="relative min-h-[80vh] flex items-center bg-near-black dark-bg overflow-hidden"
      id="contact"
    >
      {/* Animated line background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 800"
          fill="none"
          className="w-full h-full opacity-[0.06]"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Diagonal lines */}
          {Array.from({ length: 20 }, (_, i) => (
            <line
              key={`d${i}`}
              x1={i * 80 - 200}
              y1="0"
              x2={i * 80 + 200}
              y2="800"
              stroke="#F7F6F2"
              strokeWidth="0.5"
            />
          ))}
          {/* Horizontal lines */}
          {Array.from({ length: 10 }, (_, i) => (
            <line
              key={`h${i}`}
              x1="0"
              y1={i * 90}
              x2="1440"
              y2={i * 90}
              stroke="#F7F6F2"
              strokeWidth="0.3"
            />
          ))}
          {/* Accent line — trend */}
          <path
            d="M0,700 C300,650 600,400 800,300 C1000,200 1200,150 1440,100"
            stroke="#2A5C45"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      <div className="container-site relative z-10 py-24">
        {/* Label */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-label-tag text-accent tracking-[0.18em]">
            GET STARTED
          </span>
        </motion.div>

        {/* Large headline */}
        <motion.h2
          className="text-section text-off-white max-w-3xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
        >
          Your business is moving forward.
          <br />
          <span className="text-off-white/35">Make sure your finances are too.</span>
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          className="text-off-white/45 text-body-lg max-w-lg leading-relaxed mb-14"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Accounting, taxation and business advisory for businesses in the UAE.
          Speak with a Fintrust advisor today.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap gap-4 items-center"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <a
            href="mailto:info@fintrustglobal.ae"
            className="btn-primary text-sm"
          >
            Talk to Fintrust →
          </a>
          <button
            onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-ghost text-off-white/60 hover:text-off-white text-sm"
          >
            Explore services
          </button>
        </motion.div>

        {/* Contact strip */}
        <motion.div
          className="mt-20 pt-10 border-t border-white/10 grid sm:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div>
            <div className="text-label-tag text-off-white/25 mb-2">Phone</div>
            <a href="tel:+971506029161" className="text-off-white/60 text-sm font-medium hover:text-off-white transition-colors duration-200">
              +971 50 602 9161
            </a>
          </div>
          <div>
            <div className="text-label-tag text-off-white/25 mb-2">Email</div>
            <a href="mailto:info@fintrustglobal.ae" className="text-off-white/60 text-sm font-medium hover:text-off-white transition-colors duration-200">
              info@fintrustglobal.ae
            </a>
          </div>
          <div>
            <div className="text-label-tag text-off-white/25 mb-2">Address</div>
            <p className="text-off-white/60 text-sm leading-relaxed">
              206, Alphamed Building<br />
              Abu Hail, Dubai, UAE
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
