import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const features = [
  { 
    title: 'Compliance', 
    desc: 'Full UAE regulatory alignment and proactive tax management.',
    color: 'bg-[#BCE8D5]',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 12L11 15L16 9" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    title: 'Confidence', 
    desc: 'Clarity in every financial decision you make for your business.',
    color: 'bg-[#F9EBA6]',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2V22" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    title: 'Clarity', 
    desc: 'Numbers that make sense, translated into business language.',
    color: 'bg-[#B5C4F5]',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    title: 'Continuity', 
    desc: 'A long-term partnership that scales as your business grows.',
    color: 'bg-[#F2A9A9]',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
]

// Custom component for the pixelated/brick background animation
function PixelatedIcon({ color, icon, baseDelay = 0 }: { color: string, icon: React.ReactNode, baseDelay?: number }) {
  const pixels = Array.from({ length: 16 })
  
  return (
    <div className="w-16 h-16 relative flex items-center justify-center mb-6">
      {/* Background Grid - 4x4 matrix */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
        {pixels.map((_, i) => {
          const row = Math.floor(i / 4)
          const col = i % 4
          // Stagger effect from top-left to bottom-right with a bit of randomness
          const delay = baseDelay + 0.2 + (row * 0.04) + (col * 0.04) + (Math.random() * 0.05)

          return (
            <motion.div
              key={i}
              className={`w-full h-full ${color}`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay, duration: 0.3, ease: "backOut" }}
            />
          )
        })}
      </div>
      
      {/* The actual SVG icon */}
      <motion.div 
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: baseDelay + 0.5, duration: 0.5, ease: "backOut" }}
      >
        {icon}
      </motion.div>
    </div>
  )
}

export default function TrustStatement() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  // Scroll animations for parallax effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Slower movement for headline (moves down slightly as user scrolls down)
  const yHeadline = useTransform(scrollYProgress, [0, 1], [0, 80])

  // Unique staggered 3D fold-out animation for the heading lines
  const line1Opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const line1Y = useTransform(scrollYProgress, [0, 0.3], [40, 0])
  const line1Rotate = useTransform(scrollYProgress, [0, 0.3], [20, 0])

  const line2Opacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1])
  const line2Y = useTransform(scrollYProgress, [0.1, 0.4], [40, 0])
  const line2Rotate = useTransform(scrollYProgress, [0.1, 0.4], [20, 0])
  
  // Different speeds for the feature cards to float up
  const yFeature1 = useTransform(scrollYProgress, [0, 1], [50, -20])
  const yFeature2 = useTransform(scrollYProgress, [0, 1], [80, -50])
  const yFeature3 = useTransform(scrollYProgress, [0, 1], [110, -80])
  const yFeature4 = useTransform(scrollYProgress, [0, 1], [140, -110])
  const featureParallax = [yFeature1, yFeature2, yFeature3, yFeature4]

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[#FCFBF8]" id="why-fintrust-statement">
      <div className="container-site max-w-[1200px]">
        
        <motion.div style={{ y: yHeadline }}>
          {/* Label */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#C9951A] text-sm font-semibold">
              WHY FINTRUST
            </span>
          </motion.div>

          {/* Large statement with unique scrubbed 3D fold-out */}
          <div className="mb-8" style={{ perspective: 1000 }}>
            <h2 className="text-5xl md:text-6xl lg:text-[5rem] leading-[1.1] text-near-black font-normal tracking-tight flex flex-col gap-2">
              <motion.span 
                className="block origin-bottom" 
                style={{ opacity: line1Opacity, y: line1Y, rotateX: line1Rotate }}
              >
                Numbers tell you where you are.
              </motion.span>
              <motion.span 
                className="text-[#212e52] drop-shadow-sm block origin-bottom"
                style={{ opacity: line2Opacity, y: line2Y, rotateX: line2Rotate }}
              >
                We help you understand where you're going.
              </motion.span>
            </h2>
          </div>

          {/* Supporting paragraph */}
          <motion.p
            className="text-[#5a5a5a] text-lg md:text-xl font-medium max-w-2xl leading-relaxed mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Fintrust Global combines accounting, taxation, advisory and business insight
            to help businesses operate with greater clarity and confidence.
          </motion.p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div key={feature.title} style={{ y: featureParallax[index] }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 + index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                
                {/* Replaced solid background with the new PixelatedIcon */}
                <PixelatedIcon 
                  color={feature.color} 
                  icon={feature.icon} 
                  baseDelay={0.4 + index * 0.1} 
                />
                
                <h3 className="font-semibold text-near-black text-lg mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-[#5a5a5a] text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
