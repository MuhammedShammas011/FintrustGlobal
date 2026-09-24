import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Understand',
    body: 'Understand your business, financial position and objectives. Every engagement begins with listening.',
    accent: 'Diagnostic',
  },
  {
    number: '02',
    title: 'Organise',
    body: 'Structure your accounting and financial information. Clean data is the foundation of clear decisions.',
    accent: 'Structure',
  },
  {
    number: '03',
    title: 'Protect',
    body: 'Handle compliance, taxation and financial risks. Stay fully aligned with UAE regulations.',
    accent: 'Compliance',
  },
  {
    number: '04',
    title: 'Advise',
    body: 'Turn financial information into actionable business insight. Strategy backed by numbers.',
    accent: 'Strategy',
  },
  {
    number: '05',
    title: 'Grow',
    body: 'Give business owners the clarity to focus on growth. Financial confidence unlocks potential.',
    accent: 'Growth',
  },
]

export default function ProcessSteps() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeStep, setActiveStep] = useState(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = stepRefs.current.indexOf(entry.target as HTMLDivElement)
            if (idx !== -1) setActiveStep(idx)
          }
        })
      },
      { threshold: 0.6, rootMargin: '-20% 0px -20% 0px' }
    )

    stepRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="section-padding bg-[#FCFBF8] border-t-[4px] border-black" id="process">
      <div className="container-site">
        {/* Header */}
        <div className="mb-20 md:mb-24 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6">
              <span className="text-[#8a8a8a] text-sm font-semibold uppercase tracking-wider">
                THE FINTRUST METHOD
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-[5rem] leading-[1.1] text-near-black font-normal tracking-tight flex flex-col gap-2 mb-8">
              <span className="block">From financial complexity</span>
              <span className="text-[#212e52]/40 block">to business clarity.</span>
            </h2>
          </motion.div>
          <motion.div
            className="flex items-end"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-[#5a5a5a] text-body-lg leading-relaxed max-w-sm">
              A structured, five-phase approach that takes businesses from financial uncertainty to operational clarity.
            </p>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="flex gap-12 md:gap-20">
          {/* Progress indicator (desktop) */}
          <div className="hidden md:flex flex-col items-center gap-0 w-8 flex-shrink-0 pt-2">
            {steps.map((_, i) => (
              <div key={i} className="flex flex-col items-center flex-1">
                <div
                  className="w-2 h-2 rounded-full transition-all duration-500 flex-shrink-0"
                  style={{
                    background: i <= activeStep ? '#2A5C45' : '#E5E5E5',
                    transform: i === activeStep ? 'scale(1.4)' : 'scale(1)',
                  }}
                />
                {i < steps.length - 1 && (
                  <div
                    className="w-px flex-1 mt-1 mb-1 min-h-[60px] transition-all duration-700"
                    style={{ background: i < activeStep ? '#2A5C45' : '#E5E5E5' }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step content */}
          <div className="flex flex-col gap-0 flex-1">
            {steps.map((step, index) => {
              const isActive = index === activeStep
              const isPast = index < activeStep
              return (
                <div
                  key={step.number}
                  ref={(el) => { stepRefs.current[index] = el }}
                  className="py-8 border-t border-border-dark"
                  style={{ opacity: isPast ? 0.3 : 1, transition: 'opacity 0.5s ease' }}
                >
                  <div className="flex items-start gap-6 md:gap-10">
                    <span
                      className="text-label-tag mt-1 flex-shrink-0 transition-colors duration-300"
                      style={{ color: isActive ? '#2A5C45' : '#C0BEBC' }}
                    >
                      {step.number}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <h3
                          className="text-large transition-colors duration-300"
                          style={{ color: isActive ? '#212e52' : '#C0BEBC' }}
                        >
                          {step.title}
                        </h3>
                        {isActive && (
                          <motion.span
                            className="text-[10px] font-semibold text-accent uppercase tracking-wider border border-accent/30 px-2 py-0.5 rounded-sm"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            {step.accent}
                          </motion.span>
                        )}
                      </div>
                      <p
                        className="text-sm leading-relaxed max-w-lg transition-colors duration-300"
                        style={{ color: isActive ? '#5a5a5a' : '#C0BEBC' }}
                      >
                        {step.body}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
