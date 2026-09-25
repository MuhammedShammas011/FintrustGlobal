import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const principles = [
  {
    number: '01',
    title: 'Accuracy',
    desc: 'Every number matters. Fintrust maintains meticulous financial records so your decisions are built on reliable data.',
  },
  {
    number: '02',
    title: 'Compliance',
    desc: 'Full alignment with UAE tax, regulatory and reporting requirements — proactively managed, never reactive.',
  },
  {
    number: '03',
    title: 'Clarity',
    desc: 'Financial information translated into language your business can use. No jargon, no complexity.',
  },
  {
    number: '04',
    title: 'Strategic Insight',
    desc: 'Beyond reporting — Fintrust turns financial data into business intelligence that informs growth decisions.',
  },
]

function AnimatedNumber({ target }: { target: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState('00')

  useEffect(() => {
    if (!inView) return
    const num = parseInt(target)
    const duration = 1200
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * num)
      setDisplay(String(current).padStart(2, '0'))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, target])

  return <span ref={ref}>{display}</span>
}

export default function WhyFintrust() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-padding bg-off-white" id="why-fintrust">
      <div className="container-site">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            >
              <div className="mb-6">
                <span className="text-[#C9951A] text-sm font-semibold uppercase tracking-wider">
                  OUR PRINCIPLES
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] leading-[1.1] text-near-black font-normal tracking-tight flex flex-col gap-2">
                <span className="block">More than</span>
                <span className="block text-[#212e52]">accounting.</span>
              </h2>
            </motion.div>
          </div>

          <motion.div
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-muted text-body-lg leading-relaxed max-w-md">
              Fintrust works as an extension of your business — helping you understand
              your numbers, stay compliant and make informed decisions that support
              long-term growth.
            </p>
          </motion.div>
        </div>

        {/* Principles grid */}
        <div className="grid md:grid-cols-4 gap-0 border-t border-border">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.number}
              className="py-10 pr-8 border-b md:border-b-0 md:border-r border-border last:border-r-0 group"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 + index * 0.08 }}
            >
              {/* Large animated number */}
              <div
                className="font-semibold text-[3.5rem] leading-none tracking-tight mb-6 transition-colors duration-300"
                style={{ color: '#E5E4E0' }}
              >
                <AnimatedNumber target={String(index + 1)} />
              </div>

              <h3 className="font-semibold text-near-black text-lg mb-3 tracking-tight group-hover:text-accent transition-colors duration-200">
                {principle.title}
              </h3>
              <p className="text-xs text-muted leading-relaxed">{principle.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          className="mt-20 pt-10 border-t border-border flex flex-col sm:flex-row gap-6 sm:items-center justify-between"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-muted text-sm max-w-md leading-relaxed">
            Compliance. Confidence. Clarity. — The three pillars that define every engagement with Fintrust Global.
          </p>
          <a href="mailto:info@fintrustglobal.ae" className="btn-ghost flex-shrink-0">
            Start the conversation →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
