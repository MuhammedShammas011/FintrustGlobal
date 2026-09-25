import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

// ── Animated border lines — draw-in and retract via scaleX/Y ──────────────
function BorderLines({ progress }: { progress: MotionValue<number> }) {
  return (
    <>
      <motion.div className="absolute top-0 left-0 h-[1px] w-full bg-white/10 origin-left"    style={{ scaleX: progress }} />
      <motion.div className="absolute top-0 right-0 w-[1px] h-full bg-white/10 origin-top"    style={{ scaleY: progress }} />
      <motion.div className="absolute bottom-0 right-0 h-[1px] w-full bg-white/10 origin-right" style={{ scaleX: progress }} />
      <motion.div className="absolute bottom-0 left-0 w-[1px] h-full bg-white/10 origin-bottom" style={{ scaleY: progress }} />
    </>
  )
}


// ── Feature card: Main card + 2 small floating cards ──
function FeatureCard({
  progress, inStart, inEnd, outStart, outEnd,
  dot, label, number, description, bullets, baseScale = 1
}: {
  progress: MotionValue<number>
  inStart: number; inEnd: number; outStart: number; outEnd: number
  dot: string; label: string; number: string; description: string; bullets: string[]
  baseScale?: number
}) {
  const opacity = useTransform(progress, [inStart, inEnd, outStart, outEnd], [0, 1, 1, 0])
  
  // Start at the baseScale (to fit the rectangle) and shrink further while scrolling
  const scale = useTransform(progress, [inStart, outEnd], [baseScale, baseScale * 0.85])

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ opacity, scale }}
    >
      <div className="w-full max-w-4xl px-8 md:px-12 relative z-50 flex flex-col items-center">
        <div className="flex items-center gap-4 mb-6 md:mb-10">
          <div className="w-4 h-4 md:w-5 md:h-5 rounded-sm flex-shrink-0" style={{ backgroundColor: dot }} />
          <span className="text-white text-4xl md:text-6xl font-normal tracking-tight">
            {label}
          </span>
          <span className="text-white/20 text-2xl md:text-3xl font-mono ml-4">
            {number}
          </span>
        </div>
        <p className="text-white/60 text-lg md:text-2xl leading-relaxed mb-10 md:mb-12 text-center max-w-3xl">
          {description}
        </p>
        <ul className="list-none p-0 m-0 flex flex-col gap-4 md:gap-5 w-full max-w-xl">
          {bullets.map(b => (
            <li key={b} className="flex items-center gap-4 text-white/50 text-base md:text-xl">
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: dot }} />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

// ── Feature data ────────────────────────────────────────────────────────────
const features = [
  {
    dot: '#6ee7b7', label: 'Structure', number: '01',
    description: 'We begin by establishing a solid financial foundation — clear records, compliant books, and the right framework for your business.',
    bullets: ['Chart of accounts setup', 'Bookkeeping hygiene', 'Compliance baseline'],
    smallBox1: { title: 'Compliance Base', pill: 'Framework initiated' },
    smallBox2: { title: 'Ledger Audit', pill: 'Books reviewed' }
  },
  {
    dot: '#9b9ef5', label: 'Diagnostic', number: '02',
    description: 'A thorough review of your financial health — uncovering risks, inefficiencies, and hidden opportunities before they compound.',
    bullets: ['Financial health audit', 'Risk identification', 'Gap analysis'],
    smallBox1: { title: 'Risk Analysis', pill: 'Gap detected' },
    smallBox2: { title: 'Health Audit', pill: 'Scan complete' }
  },
  {
    dot: '#fde047', label: 'Growth', number: '03',
    description: 'With a clean base and clear picture, we deploy strategies that drive sustainable growth — tax-efficient, capital-smart, operationally lean.',
    bullets: ['Tax optimisation', 'Cash flow planning', 'ERP & software advisory'],
    smallBox1: { title: 'Tax Optimisation', pill: 'Strategy deployed' },
    smallBox2: { title: 'Cash Flow', pill: 'Metrics updated' }
  },
  {
    dot: '#fca5a5', label: 'Strategy', number: '04',
    description: 'Long-term financial intelligence — budgets, forecasts, and CFO-level insight that keeps you ahead of every curve.',
    bullets: ['Budgeting & forecasting', 'CFO outsourcing', 'Performance tracking'],
    smallBox1: { title: 'Budget Forecast', pill: 'Model generated' },
    smallBox2: { title: 'CFO Insights', pill: 'Report ready' }
  },
]

// Card timing: [inStart, inEnd, outStart, outEnd]
const cardPhases: [number, number, number, number][] = [
  [0.35, 0.43, 0.50, 0.58],
  [0.58, 0.65, 0.67, 0.73],
  [0.73, 0.79, 0.81, 0.86],
  [0.86, 0.93, 0.96, 1.00],
]

// ── Main component ───────────────────────────────────────────────────────────
export default function ProcessSteps() {
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Phase 1 (0–0.2): tilt straightens
  const rotate = useTransform(scrollYProgress, [0, 0.2], [8, 0])

  // Per-rectangle line progress: draws in at 0→0.2, then retracts when its card appears
  // Rect 1 = outermost = Structure; Rect 4 = innermost = Strategy
  const lp1 = useTransform(scrollYProgress, [0, 0.2, 0.37, 0.50], [0, 1, 1, 0])
  const lp2 = useTransform(scrollYProgress, [0, 0.2, 0.59, 0.69], [0, 1, 1, 0])
  const lp3 = useTransform(scrollYProgress, [0, 0.2, 0.74, 0.83], [0, 1, 1, 0])
  const lp4 = useTransform(scrollYProgress, [0, 0.2, 0.87, 0.96], [0, 1, 1, 0])

  // Per-rectangle opacity — fades out after lines retract
  const ro1 = useTransform(scrollYProgress, [0.47, 0.53], [1, 0])
  const ro2 = useTransform(scrollYProgress, [0.66, 0.72], [1, 0])
  const ro3 = useTransform(scrollYProgress, [0.80, 0.85], [1, 0])
  const ro4 = useTransform(scrollYProgress, [0.93, 0.98], [1, 0])

  // Subtle recession scale for inner rects
  const scale2 = useTransform(scrollYProgress, [0.2, 0.7], [1, 0.93])
  const scale3 = useTransform(scrollYProgress, [0.2, 0.7], [1, 0.86])
  const scale4 = useTransform(scrollYProgress, [0.2, 0.7], [1, 0.79])

  // Title: fades out in phase 2 (0.2–0.35)
  const titleOpacity = useTransform(scrollYProgress, [0.2, 0.35], [1, 0])
  const titleScale   = useTransform(scrollYProgress, [0.2, 0.35], [1, 0.8])

  return (
    <section ref={containerRef} className="bg-[#212e52] relative h-[700vh]" id="process">
      <div className="sticky top-0 w-full h-screen flex items-center justify-center px-24 md:px-40 overflow-hidden">
        <div className="relative w-full max-w-[1000px] h-[500px] md:h-[700px]">

          {/* ── Rect 4 – innermost / Strategy ── */}
          <motion.div className="absolute inset-y-16 inset-x-12 md:inset-20"
            style={{ scale: scale4, opacity: ro4, rotate }}>
            <BorderLines progress={lp4} />
            <div className="absolute -bottom-[6px] -left-[6px] flex items-center justify-end pr-5 md:pr-6 w-0">
              <span className="text-[#a0a0a0] text-xs md:text-sm whitespace-nowrap">Strategy</span>
              <div className="w-3 h-3 bg-[#fca5a5] absolute right-0 top-1/2 -translate-y-1/2" />
            </div>
          </motion.div>

          {/* ── Rect 3 / Growth ── */}
          <motion.div className="absolute inset-y-16 inset-x-12 md:inset-20"
            style={{ scale: scale3, opacity: ro3, rotate }}>
            <BorderLines progress={lp3} />
            <div className="absolute -bottom-[6px] -right-[6px] flex items-center pl-5 md:pl-6 w-0">
              <div className="w-3 h-3 bg-[#fde047] absolute left-0 top-1/2 -translate-y-1/2" />
              <span className="text-[#a0a0a0] text-xs md:text-sm whitespace-nowrap">Growth</span>
            </div>
          </motion.div>

          {/* ── Rect 2 / Diagnostic ── */}
          <motion.div className="absolute inset-y-16 inset-x-12 md:inset-20"
            style={{ scale: scale2, opacity: ro2, rotate }}>
            <BorderLines progress={lp2} />
            <div className="absolute -top-[6px] -left-[6px] flex items-center justify-end pr-5 md:pr-6 w-0">
              <span className="text-[#a0a0a0] text-xs md:text-sm whitespace-nowrap">Diagnostic</span>
              <div className="w-3 h-3 bg-[#9b9ef5] absolute right-0 top-1/2 -translate-y-1/2" />
            </div>
          </motion.div>

          {/* ── Rect 1 – outermost / Structure ── */}
          <motion.div className="absolute inset-y-16 inset-x-12 md:inset-20"
            style={{ opacity: ro1, rotate }}>
            <BorderLines progress={lp1} />
            <div className="absolute -top-[6px] -right-[6px] flex items-center pl-5 md:pl-6 w-0">
              <div className="w-3 h-3 bg-[#6ee7b7] absolute left-0 top-1/2 -translate-y-1/2" />
              <span className="text-[#a0a0a0] text-xs md:text-sm whitespace-nowrap">Structure</span>
            </div>
          </motion.div>

          {/* ── Title ── */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ opacity: titleOpacity, scale: titleScale }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight text-center">
              The Fintrust Method
            </h2>
          </motion.div>

          {/* ── Feature cards — one at a time ── */}
          {features.map((f, i) => {
            const baseScales = [1.0, 0.93, 0.86, 0.79]
            return (
              <FeatureCard
                key={f.label}
                progress={scrollYProgress}
                inStart={cardPhases[i][0]}
                inEnd={cardPhases[i][1]}
                outStart={cardPhases[i][2]}
                outEnd={cardPhases[i][3]}
                dot={f.dot}
                label={f.label}
                number={f.number}
                description={f.description}
                bullets={f.bullets}
                baseScale={baseScales[i]}
              />
            )
          })}

        </div>
      </div>
    </section>
  )
}


