import { motion } from 'framer-motion'
import topBlock from '../assets/TopBlock.png'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-[#FCFBF8] flex flex-col justify-center overflow-hidden" id="hero">
      {/* Main content */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between pt-16 h-full min-h-[80vh]">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left mb-12 md:mb-0 pr-4">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] leading-[1.1] text-near-black font-normal tracking-tight flex flex-col gap-2 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          >
            <span className="block">Financial clarity.</span>
            <span className="block text-[#212e52]">Business confidence.</span>
          </motion.h1>
          <motion.p 
            className="text-muted text-lg md:text-xl max-w-[500px] mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
          >
            Accounting, taxation and business advisory for businesses building their future in the UAE.
          </motion.p>
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-medium hover:bg-[#333333] transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
          >
            Talk to Fintrust 
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        </div>

        {/* Stacked Graphic Container */}
        <div className="relative w-full md:w-1/2 flex flex-col justify-center items-end gap-1">
          
          {/* Top Block */}
          <div className="w-full flex justify-end z-10 pointer-events-none">
            <img
              src={topBlock}
              alt="Top Block"
              className="w-48 md:w-72 lg:w-96 xl:w-[450px] h-auto object-contain mix-blend-multiply"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
