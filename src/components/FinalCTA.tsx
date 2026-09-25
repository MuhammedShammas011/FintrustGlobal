import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="relative min-h-[80vh] flex items-center bg-off-white overflow-hidden"
      id="contact"
    >


      <div className="container-site relative z-10 py-24">
        {/* Label */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#C9951A] text-sm font-semibold uppercase tracking-wider">
            GET STARTED
          </span>
        </motion.div>

        {/* Large headline */}
        <motion.h2
          className="text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] leading-[1.1] text-near-black font-normal tracking-tight flex flex-col gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
        >
          <span className="block">Your business is moving forward.</span>
          <span className="block text-[#212e52]">Make sure your finances are too.</span>
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          className="text-muted text-body-lg max-w-lg leading-relaxed mb-14"
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
            className="btn-ghost text-near-black border-near-black hover:bg-near-black hover:text-white text-sm transition-colors duration-300"
          >
            Explore services
          </button>
        </motion.div>

        {/* Contact strip */}
        <motion.div
          className="mt-20 pt-10 border-t border-border grid sm:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-muted mb-2">Phone</div>
            <a href="tel:+971506029161" className="text-near-black text-sm font-medium hover:text-accent transition-colors duration-200">
              +971 50 602 9161
            </a>
          </div>
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-muted mb-2">Email</div>
            <a href="mailto:info@fintrustglobal.ae" className="text-near-black text-sm font-medium hover:text-accent transition-colors duration-200">
              info@fintrustglobal.ae
            </a>
          </div>
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-muted mb-2">Address</div>
            <p className="text-near-black text-sm leading-relaxed">
              206, Alphamed Building<br />
              Abu Hail, Dubai, UAE
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
