import { motion } from 'framer-motion'
import logoOutline from '../assets/Vertical-Logo-Outline.png'

// Removed pills background to keep the design ultra-clean

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] bg-[#FCFBF8] flex flex-col justify-center overflow-hidden"
      id="hero"
    >

      {/* Background is clean */}

      {/* Main content */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between pt-16">

        {/* Left: Text Content (Removed per user request) */}
        <div className="flex flex-col items-start text-left max-w-2xl relative z-10">
        </div>

        {/* Logo Outline */}
        <div className="flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center z-0 opacity-20 pointer-events-none">
          <div className="relative">
            {/* Top Block */}
            <motion.img
              src={logoOutline}
              alt=""
              className="h-[1200px] lg:h-[1500px] xl:h-[1800px] w-auto object-contain pointer-events-none origin-center absolute inset-0 m-auto"
              style={{ clipPath: 'inset(25.2% 0% 58.5% 0%)', filter: 'brightness(0)' }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: -1000 }}
              transition={{ duration: 1, delay: 0.4, type: 'spring', bounce: 0.2 }}
            />

            {/* Middle Block */}
            <motion.img
              src={logoOutline}
              alt=""
              className="h-[1200px] lg:h-[1500px] xl:h-[1800px] w-auto object-contain pointer-events-none origin-center absolute inset-0 m-auto"
              style={{ clipPath: 'inset(41.9% 0% 41.9% 0%)', filter: 'brightness(0)' }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6, type: 'spring', bounce: 0.2 }}
            />

            {/* Bottom Block */}
            <motion.img
              src={logoOutline}
              alt=""
              className="h-[1200px] lg:h-[1500px] xl:h-[1800px] w-auto object-contain pointer-events-none origin-center absolute inset-0 m-auto"
              style={{ clipPath: 'inset(58.5% 0% 25.3% 0%)', filter: 'brightness(0)' }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8, type: 'spring', bounce: 0.2 }}
            />

            {/* Placeholder */}
            <img
              src={logoOutline}
              alt="Logo"
              className="h-[1200px] lg:h-[1500px] xl:h-[1800px] w-auto object-contain pointer-events-none opacity-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
