import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useRef, ReactNode } from 'react'
import FinalCTA from '../components/FinalCTA'

// Interactive 3D Tilt Card Component
const TiltCard = ({ children, className = '' }: { children: ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 })
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    x.set(mouseX / rect.width - 0.5)
    y.set(mouseY / rect.height - 0.5)
  }
  const handleMouseLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative perspective-[1500px] ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default function CorporateTax() {
  const { scrollY } = useScroll()
  const yHeroBg = useTransform(scrollY, [0, 1000], [0, 200])

  return (
    <main className="bg-[#FCFBF8]">
      
      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">
        <motion.div 
          style={{ y: yHeroBg }}
          className="absolute top-[-10%] left-[-5%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-[#212e52]/5 to-[#C9951A]/5 rounded-full blur-3xl pointer-events-none"
        />
        <div className="container-site max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Content */}
            <div className="max-w-2xl relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#C9951A]/30 bg-[#C9951A]/5 mb-8"
              >
                <div className="w-2 h-2 rounded-full bg-[#C9951A] animate-pulse" />
                <span className="text-[#C9951A] text-xs font-semibold uppercase tracking-widest">Taxation Services</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="text-4xl md:text-5xl lg:text-[4rem] font-normal tracking-tight leading-[1.1] text-[#212e52] mb-6"
              >
                Stay Out of Trouble. Stay on Top of Tax.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg text-[#212e52]/60 mb-10 leading-relaxed font-light"
              >
                Your corporate tax position speaks volumes about your business. Let’s make sure it tells the right story, one of compliance, foresight, and growth.
              </motion.p>
              
              <motion.a 
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                href="/#contact"
                className="group relative inline-flex items-center justify-center bg-[#212e52] text-white px-8 py-3 text-sm rounded-full font-medium tracking-wide overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#212e52]/20"
              >
                <span className="relative z-10 transition-transform duration-500 group-hover:-translate-y-10">Schedule A Quick Call</span>
                <span className="absolute z-10 transition-transform duration-500 translate-y-10 group-hover:translate-y-0">Let's Talk →</span>
                <div className="absolute inset-0 bg-[#C9951A] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
              </motion.a>
            </div>

            {/* Right Image (3D Tilt) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative hidden lg:block w-full h-[600px]"
            >
              <TiltCard className="w-full h-full">
                <div className="absolute inset-0 bg-[#C9951A]/10 rounded-[3rem] transform translate-x-8 translate-y-8 blur-xl transition-transform duration-500" style={{ transform: "translateZ(-50px)" }} />
                
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Corporate Tax" 
                  className="absolute inset-0 z-10 rounded-[3rem] shadow-2xl w-full h-full object-cover"
                  style={{ transform: "translateZ(0px)" }}
                />
                
                <div 
                  className="absolute bottom-10 -left-10 z-20 bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white flex items-center gap-5"
                  style={{ transform: "translateZ(80px)" }}
                >
                  <div className="w-14 h-14 rounded-full bg-[#C9951A]/10 flex items-center justify-center text-[#C9951A]">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  </div>
                  <div>
                    <div className="text-3xl font-normal text-[#212e52] tracking-tight">FTA</div>
                    <div className="text-sm text-[#212e52]/50 font-medium tracking-widest uppercase mt-1">Fully Compliant</div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── STICKY SCROLL SECTION: Own Your Corporate Tax Story ─── */}
      <section className="bg-white py-32 relative border-t border-[#212e52]/5">
        <div className="container-site max-w-[1200px]">
          <div className="flex flex-col md:flex-row gap-20">
            
            {/* Sticky Left */}
            <div className="md:w-1/2 relative">
              <div className="sticky top-40 space-y-8">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#212e52] leading-[1.1]"
                >
                  Own Your Corporate <br/><span className="text-[#C9951A] italic">Tax Story.</span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-[#212e52]/60 text-base leading-relaxed max-w-md font-light"
                >
                  Rather than a legal requirement, tax is a chance for you to structure smarter, operate cleaner, and grow stronger. Fintrust break down complex laws into simple and actionable steps that protect your business.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-[#212e52]/60 text-base leading-relaxed max-w-md font-light"
                >
                  We ensure your decisions today are shaping a stronger financial tomorrow. With our expertise, compliance stops being a burden and becomes your competitive advantage.
                </motion.p>
                
                {/* 3D Decorative Element */}
                <motion.div 
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }}
                  className="w-full h-48 mt-8 rounded-3xl bg-[#212e52]/5 relative overflow-hidden flex items-center justify-center group"
                >
                  <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center grayscale mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
                  <div className="w-24 h-24 border border-[#C9951A]/30 rounded-full flex items-center justify-center relative z-10 backdrop-blur-md bg-white/10">
                    <div className="w-16 h-16 border border-[#212e52]/20 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                      <div className="w-2 h-2 bg-[#C9951A] rounded-full absolute top-0" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Scrollable Right - Services List */}
            <div className="md:w-1/2 space-y-10 pb-20">
              {[
                { title: 'Corporate Tax Registration', desc: 'We onboard you with the FTA registration, ensuring the registration without delays and errors.' },
                { title: 'Tax Impact Assessment', desc: 'Our experts evaluate how corporate tax applies to your business and prepare you for its financial implications.' },
                { title: 'Return Filing & Compliance', desc: 'When we handle your filings, accuracy is guaranteed, and penalties are out of the picture.' },
                { title: 'Documentation & Recordkeeping', desc: 'Compliance is easier with structured tax records, ready for any audit or official request.' },
                { title: 'Advisory for Free Zones', desc: 'We guide you through the rules, thresholds, and exemptions that apply to your business without risking compliance.' },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-[#FCFBF8] p-10 rounded-3xl border border-[#212e52]/5 hover:border-[#C9951A]/30 hover:shadow-xl hover:shadow-[#C9951A]/5 transition-all duration-500 group"
                >
                  <div className="text-[#C9951A] font-bold text-lg mb-3 opacity-50 group-hover:opacity-100 transition-opacity">0{i + 1}</div>
                  <h3 className="text-2xl font-normal tracking-tight text-[#212e52] mb-3">{item.title}</h3>
                  <p className="text-[#212e52]/60 text-sm md:text-base leading-relaxed font-light">{item.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  )
}
