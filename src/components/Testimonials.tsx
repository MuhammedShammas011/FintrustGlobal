import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote: 'Fintrust brought real order to our finances. As a CEO managing growth, having a team that understands the numbers and communicates them clearly has been invaluable.',
    name: 'Irfan',
    role: 'CEO, Startup',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
    metricTitle: '20%',
    metricSubtitle: 'Increase in operational efficiency',
  },
  {
    quote: 'From an investor perspective, financial clarity is everything. Fintrust provides the kind of structured, accurate reporting that makes decision-making straightforward.',
    name: 'Caif',
    role: 'Investor, VC',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    metricTitle: '100%',
    metricSubtitle: 'Accuracy in financial reporting',
  },
  {
    quote: 'Running a café means you\'re always juggling operations and finances. Fintrust handles the accounting side seamlessly — I can focus on my customers.',
    name: 'Sara M.',
    role: 'Café Owner, Local Co.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    metricTitle: '15h',
    metricSubtitle: 'Saved every week on admin tasks',
  },
  {
    quote: 'As operations manager, I need financial data I can trust. Fintrust delivers accurate, timely reports that help us make better operational decisions.',
    name: 'Omar H.',
    role: 'Operations Manager, Enterprise',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    metricTitle: '3x',
    metricSubtitle: 'Faster financial close cycles',
  },
  {
    quote: 'Fintrust understands what entrepreneurs need — practical financial guidance, not just compliance. They feel like a genuine partner in the business.',
    name: 'Habeeb',
    role: 'Entrepreneur, Tech Startup',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    metricTitle: '24/7',
    metricSubtitle: 'Peace of mind with compliance',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const handlePrev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  const handleNext = () => setActive((prev) => (prev + 1) % testimonials.length)

  const current = testimonials[active]

  return (
    <section className="bg-white py-20 md:py-32" id="testimonials">
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-16 lg:px-24 xl:px-32">
        
        {/* Header */}
        <div className="mb-12">
          <p className="text-[#212e52]/40 text-xs font-semibold uppercase tracking-widest mb-4">
            GOOD PEOPLE. HONEST WORDS.
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#212e52] font-normal tracking-tight leading-[1.1]">
            The work speaks.<br/>So do the people.
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12 min-h-[450px]">
          
          {/* Left Column: Image Card */}
          <div className="relative rounded-3xl overflow-hidden aspect-square lg:aspect-auto lg:h-full bg-gray-100">
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={current.image}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
                alt={current.name}
              />
            </AnimatePresence>
            
            <div className="absolute top-6 left-6 z-10">
              <span className="px-4 py-1.5 border border-white/30 rounded-full text-white text-xs font-mono bg-black/20 backdrop-blur-md">
                Customer story
              </span>
            </div>
            
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="bg-[#D8E698] p-6 md:p-8 rounded-2xl"
                >
                  <div className="text-4xl md:text-5xl font-normal text-[#212e52] mb-1">{current.metricTitle}</div>
                  <div className="text-xs md:text-sm text-[#212e52]/70 font-mono tracking-tight">{current.metricSubtitle}</div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Quote Card */}
          <div className="bg-[#F6F5EF] rounded-3xl p-8 md:p-10 lg:p-12 flex flex-col justify-between h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col flex-grow"
              >
                <div className="flex justify-between items-center mb-8 md:mb-12">
                  <div className="flex gap-1 text-[#212e52]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <div className="text-xs font-mono text-[#212e52]/40">
                    {String(active + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-[2.1rem] leading-[1.4] font-normal text-[#212e52] mb-6 md:mb-8 flex-grow">
                  “{current.quote}”
                </h3>
                
                <div>
                  <div className="font-bold text-[#212e52] text-sm">{current.name}</div>
                  <div className="text-xs text-[#212e52]/50 font-mono mt-1">{current.role}</div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="pt-6 mt-8 border-t border-[#212e52]/10 flex justify-between items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-xs text-[#212e52]/50 font-mono"
                >
                  {current.role.split(',')[1]?.trim() || current.role}
                </motion.div>
              </AnimatePresence>

              <div className="flex gap-2">
                <button onClick={handlePrev} className="w-10 h-10 rounded-full border border-[#212e52]/10 flex items-center justify-center text-[#212e52] hover:bg-[#212e52]/5 transition-colors focus:outline-none">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </button>
                <button onClick={handleNext} className="w-10 h-10 rounded-full border border-[#212e52]/10 flex items-center justify-center text-[#212e52] hover:bg-[#212e52]/5 transition-colors focus:outline-none">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Tabs Row */}
        <div className="flex overflow-x-auto hide-scrollbar gap-8 lg:gap-12 pb-4">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 group text-left relative pb-4 transition-opacity duration-300 ${active === i ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  className={`w-10 h-10 rounded-full object-cover transition-all duration-300 ${active === i ? 'grayscale-0' : 'grayscale'}`}
                  alt={t.name}
                />
                <div>
                  <div className="text-sm font-bold text-[#212e52]">{t.name}</div>
                  <div className="text-[10px] text-[#212e52]/60 font-mono mt-0.5">{t.role.split(',')[0]}</div>
                </div>
              </div>
              {/* Active Line Indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-[#212e52]/10 overflow-hidden">
                {active === i && (
                  <motion.div
                    layoutId="testimonial-tab-indicator"
                    className="absolute inset-0 bg-[#212e52]"
                    transition={{ type: 'spring', stiffness: 400, damping: 40 }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}
