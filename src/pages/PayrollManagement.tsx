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

export default function PayrollManagement() {
  const { scrollY } = useScroll()
  const yHeroBg = useTransform(scrollY, [0, 1000], [0, 200])

  return (
    <main className="bg-[#FCFBF8]">
      
      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated Abstract Background Elements */}
        <motion.div 
          style={{ y: yHeroBg }}
          className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-[#212e52]/5 to-[#C9951A]/5 rounded-full blur-3xl pointer-events-none"
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
                <span className="text-[#C9951A] text-xs font-semibold uppercase tracking-widest">Accounting Services</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="text-4xl md:text-5xl lg:text-[4rem] font-normal tracking-tight leading-[1.1] text-[#212e52] mb-6"
              >
                Paying Your Team Shouldn’t Be a Source of Stress.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg text-[#212e52]/60 mb-10 leading-relaxed font-light"
              >
                One wrong number. One missed deadline. That’s all it takes to trigger penalties, delay salaries, or lose team trust. In payroll, there’s no scope for “almost right.”
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
                {/* Back shadow element for depth */}
                <div className="absolute inset-0 bg-[#C9951A]/10 rounded-[3rem] transform translate-x-8 translate-y-8 blur-xl transition-transform duration-500" style={{ transform: "translateZ(-50px)" }} />
                
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200" 
                  alt="Team Trust and Payroll" 
                  className="absolute inset-0 z-10 rounded-[3rem] shadow-2xl w-full h-full object-cover"
                  style={{ transform: "translateZ(0px)" }}
                />
                
                {/* Floating 3D Badge */}
                <div 
                  className="absolute bottom-10 -left-10 z-20 bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white flex items-center gap-5"
                  style={{ transform: "translateZ(80px)" }}
                >
                  <div className="w-14 h-14 rounded-full bg-[#C9951A]/10 flex items-center justify-center text-[#C9951A]">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  </div>
                  <div>
                    <div className="text-3xl font-normal text-[#212e52] tracking-tight">100%</div>
                    <div className="text-sm text-[#212e52]/50 font-medium tracking-widest uppercase mt-1">WPS Compliant</div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── INTRO STATEMENT ─── */}
      <section className="bg-white py-24 border-y border-[#212e52]/5">
        <div className="container-site max-w-[900px] text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#212e52] mb-8 leading-[1.1]"
          >
            Everything Runs Smoothly <br/><span className="italic text-[#C9951A]">When Payroll Does.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#212e52]/60 text-lg leading-relaxed font-light"
          >
            Every calculation, every report, and every payout reflects reliability. That reliability keeps your team motivated, your business compliant, and your growth unhindered. Fintrust brings structure, precision, and peace of mind to your payroll process. We handle it all from monthly salary calculations to WPS filings, so you never have to worry about late payments, reporting issues, or compliance gaps.
          </motion.p>
        </div>
      </section>

      {/* ─── PAYROLL SERVICES GRID ─── */}
      <section className="bg-[#FCFBF8] py-32">
        <div className="container-site max-w-[1200px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-[#212e52]">Payroll Services</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                title: 'Salary Calculation & Disbursement', 
                desc: 'We handle precise monthly salary calculations, including deductions, overtime, and allowances to ensure every employee is paid correctly and on time.',
                icon: <rect x="2" y="4" width="20" height="16" rx="2" /> 
              },
              { 
                title: 'Leave & Attendance Tracking', 
                desc: 'We know managing time off shouldn’t slow you down. Our system tracks every leave type, so your payroll is always right and your records stay clean.',
                icon: <circle cx="12" cy="12" r="10" /> 
              },
              { 
                title: 'WPS Compliance & Reporting', 
                desc: 'We prepare and process everything through the UAE’s Wages Protection System, keeping you fully compliant with labour regulations.',
                icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /> 
              },
              { 
                title: 'End of Service & Gratuity', 
                desc: 'We calculate end-of-service benefits and gratuity accurately, ensuring everything is processed according to UAE regulations.',
                icon: <line x1="12" y1="1" x2="12" y2="23" /> 
              },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl border border-[#212e52]/5 hover:border-[#C9951A]/30 hover:shadow-xl hover:shadow-[#C9951A]/5 transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-[#212e52]/5 rounded-xl flex items-center justify-center text-[#212e52] mb-6 group-hover:scale-110 group-hover:bg-[#C9951A]/10 group-hover:text-[#C9951A] transition-all duration-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{item.icon}</svg>
                </div>
                <h3 className="text-2xl font-normal tracking-tight text-[#212e52] mb-3">{item.title}</h3>
                <p className="text-[#212e52]/60 text-sm md:text-base leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STICKY SCROLL SECTION: Why Fintrust? ─── */}
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
                  Why <span className="text-[#C9951A] italic">Fintrust?</span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-[#212e52]/60 text-base leading-relaxed max-w-md font-light"
                >
                  Rather than an administrative task, payroll becomes a foundation of employee trust. No more salary-day stress. No more last-minute corrections. Just accurate, timely payroll your team can count on, and your business can grow with.
                </motion.p>
                
                {/* 3D Decorative Element */}
                <motion.div 
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }}
                  className="w-full h-64 mt-12 rounded-3xl bg-[#212e52]/5 relative overflow-hidden flex items-center justify-center group"
                >
                  <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center grayscale mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
                  <div className="w-24 h-24 border border-[#C9951A]/30 rounded-full flex items-center justify-center relative z-10 backdrop-blur-md bg-white/10">
                    <div className="w-16 h-16 border border-[#212e52]/20 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                      <div className="w-2 h-2 bg-[#C9951A] rounded-full absolute top-0" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Scrollable Right */}
            <div className="md:w-1/2 space-y-10 pb-20">
              {[
                { title: 'Accuracy That Builds Trust', desc: 'Payroll is more than numbers. It’s trust, compliance, and consistency. We handle the details, so your team stays confident and your business compliant.' },
                { title: 'On Time. On Point.', desc: 'Deadlines and labour laws don’t wait. We handle WPS, leave tracking, and final payouts with precision, so you are free from penalties, disputes, and stress.' },
                { title: 'Straightforward Communication', desc: 'We keep payroll simple with straightforward reports, honest pricing, and regular updates to keep you informed and in control.' },
                { title: 'Tailored for Your Team', desc: 'Our payroll system is built to scale, tailored to your workforce, policy requirements, and future plans without disrupting operations.' },
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

      {/* ─── DARK BENEFITS BENTO BOX ─── */}
      <section className="bg-[#212e52] py-32 text-white relative overflow-hidden rounded-[3rem] mx-4 md:mx-10 mb-32">
        {/* Glow Effects */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#C9951A] rounded-full blur-[250px] opacity-[0.08] pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-white rounded-full blur-[200px] opacity-[0.05] pointer-events-none" />
        
        <div className="container-site max-w-[1200px] relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight mb-6 leading-[1.1]">
              Three Key <span className="italic text-white/50">Benefits</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <circle cx="12" cy="12" r="10" />, title: 'Precision', text: 'Every figure double-checked, so your team is always paid right.' },
              { icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />, title: 'Legal Confidence', text: 'Payroll always aligned with UAE regulations.' },
              { icon: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />, title: 'Trust', text: 'Payroll done right, so employees stay confident in you.' }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative bg-white/[0.03] border border-white/5 rounded-3xl p-10 backdrop-blur-sm overflow-hidden text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-14 h-14 bg-[#C9951A]/20 rounded-2xl flex items-center justify-center text-[#C9951A] mb-8 group-hover:scale-110 transition-transform duration-500">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {feature.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-normal mb-3 tracking-wide">{feature.title}</h3>
                  <p className="text-white/50 leading-relaxed font-light text-sm">{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  )
}
