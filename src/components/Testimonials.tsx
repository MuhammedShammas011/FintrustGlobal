import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote:
      'Fintrust brought real order to our finances. As a CEO managing growth, having a team that understands the numbers and communicates them clearly has been invaluable.',
    name: 'Irfan',
    role: 'CEO',
    initial: 'I',
  },
  {
    quote:
      'From an investor perspective, financial clarity is everything. Fintrust provides the kind of structured, accurate reporting that makes decision-making straightforward.',
    name: 'Caif',
    role: 'Investor',
    initial: 'C',
  },
  {
    quote:
      'Running a café means you\'re always juggling operations and finances. Fintrust handles the accounting side seamlessly — I can focus on my customers.',
    name: 'Sara M.',
    role: 'Café Owner',
    initial: 'S',
  },
  {
    quote:
      'As operations manager, I need financial data I can trust. Fintrust delivers accurate, timely reports that help us make better operational decisions.',
    name: 'Omar H.',
    role: 'Operations Manager',
    initial: 'O',
  },
  {
    quote:
      'Fintrust understands what entrepreneurs need — practical financial guidance, not just compliance. They feel like a genuine partner in the business.',
    name: 'Habeeb',
    role: 'Entrepreneur',
    initial: 'H',
  },
]

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)

  const navigate = (dir: 1 | -1) => {
    setDirection(dir)
    setActive((prev) => (prev + dir + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="section-padding bg-[#F0EFE9]" id="testimonials">
      <div className="container-site">
        {/* Header */}
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            >
              <div className="mb-6">
                <span className="text-[#C9951A] text-sm font-semibold uppercase tracking-wider">
                  CLIENT PERSPECTIVES
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] leading-[1.1] text-near-black font-normal tracking-tight flex flex-col gap-2">
                <span className="block">Trusted by people</span>
                <span className="block text-[#212e52]">building businesses.</span>
              </h2>
            </motion.div>
          </div>

          {/* Navigation arrows */}
          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              onClick={() => navigate(-1)}
              className="w-12 h-12 border border-border flex items-center justify-center hover:border-near-black transition-colors duration-200 text-near-black"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              onClick={() => navigate(1)}
              className="w-12 h-12 border border-border flex items-center justify-center hover:border-near-black transition-colors duration-200 text-near-black"
              aria-label="Next testimonial"
            >
              →
            </button>
          </motion.div>
        </div>

        {/* Testimonial display */}
        <div className="relative min-h-[280px] overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-0"
            >
              {/* Opening quote mark */}
              <div className="text-[5rem] leading-none font-light text-near-black/10 mb-2 -mt-4">
                "
              </div>

              <blockquote className="testimonial-quote mb-10 max-w-3xl">
                {testimonials[active].quote}
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-near-black flex items-center justify-center flex-shrink-0">
                  <span className="text-off-white text-sm font-semibold">
                    {testimonials[active].initial}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-near-black text-sm">{testimonials[active].name}</div>
                  <div className="text-xs text-muted">{testimonials[active].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex gap-2 items-center">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > active ? 1 : -1); setActive(i) }}
              className="transition-all duration-300"
              aria-label={`Testimonial ${i + 1}`}
            >
              <div
                className="h-px transition-all duration-300"
                style={{
                  width: i === active ? '32px' : '16px',
                  background: i === active ? '#2A5C45' : '#C0BEBC',
                }}
              />
            </button>
          ))}
          <span className="ml-4 text-xs text-muted">
            {String(active + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  )
}
