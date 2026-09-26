import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section
      ref={ref}
      className="relative py-40 md:py-56 bg-[#F7F6F2] flex items-center justify-center text-center overflow-hidden"
      id="contact"
    >
      <div className="w-full max-w-[1920px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-5xl mx-auto flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-6xl lg:text-[5.5rem] font-normal tracking-tighter text-[#212e52] mb-16 leading-[1.05]">
            <span className="block">''Your business is moving forward.</span>
            <span className="block text-[#212e52]/30 mt-2">Make sure your finances are too.''</span>
          </h2>

          <a
            href="mailto:info@fintrustglobal.ae"
            className="group flex items-center gap-4 text-[#212e52] text-lg md:text-2xl font-medium tracking-tight relative pb-2 pr-4"
          >
            <span>Talk to an advisor</span>
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>

            {/* Animated underline */}
            <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#212e52]/20" />
            <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#212e52] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
