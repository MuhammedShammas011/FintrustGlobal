import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const articles = [
  {
    featured: true,
    tag: 'Tax Update',
    date: 'Aug 2026',
    title: 'UAE Small Business Relief Extended Until 2029: AED 3 Million Revenue Threshold Explained',
    excerpt:
      'The UAE Ministry of Finance has confirmed the extension of Small Business Relief under Corporate Tax regulations, allowing qualifying businesses with revenue below AED 3 million to elect for relief status.',
    readTime: '5 min read',
    href: 'https://fintrustglobal.ae/blog/',
  },
  {
    featured: false,
    tag: 'Corporate Tax',
    date: 'Jul 2026',
    title: 'Corporate Tax in UAE Explained for Businesses',
    excerpt: 'A comprehensive guide to the UAE Corporate Tax regime — who it applies to, registration requirements, and how to stay compliant.',
    readTime: '7 min read',
    href: 'https://fintrustglobal.ae/blog/',
  },
  {
    featured: false,
    tag: 'Advisory',
    date: 'Jun 2026',
    title: 'How CFO Services in Dubai Help Businesses Scale Faster',
    excerpt: 'Outsourced CFO services give growing businesses the financial leadership they need without the full-time overhead.',
    readTime: '4 min read',
    href: 'https://fintrustglobal.ae/blog/',
  },
  {
    featured: false,
    tag: 'Accounting',
    date: 'May 2026',
    title: 'Best Accounting Services in Dubai',
    excerpt: "What to look for when choosing an accounting partner for your UAE business — qualifications, service scope and red flags to avoid.",
    readTime: '6 min read',
    href: 'https://fintrustglobal.ae/blog/',
  },
]

export default function Insights() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const featured = articles[0]
  const secondary = articles.slice(1)

  return (
    <section ref={ref} className="section-padding bg-off-white" id="insights">
      <div className="container-site">
        {/* Header */}
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            >
              <div className="mb-6">
                <span className="text-[#C9951A] text-sm font-semibold uppercase tracking-wider">
                  INSIGHTS
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] leading-[1.1] text-near-black font-normal tracking-tight flex flex-col gap-2">
                <span className="block">Ideas for businesses</span>
                <span className="block text-[#212e52]">that want to move forward.</span>
              </h2>
            </motion.div>
          </div>
          <motion.a
            href="https://fintrustglobal.ae/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            View all insights →
          </motion.a>
        </div>

        {/* Editorial grid */}
        <div className="grid md:grid-cols-3 gap-0">
          {/* Featured large article */}
          <motion.a
            href={featured.href}
            target="_blank"
            rel="noopener noreferrer"
            className="insight-card md:col-span-2 md:pr-12 group"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-semibold text-accent uppercase tracking-wider border border-accent/25 px-2 py-0.5 rounded-sm">
                {featured.tag}
              </span>
              <span className="text-xs text-muted">{featured.date}</span>
            </div>
            <h3 className="font-semibold text-near-black text-large mb-4 tracking-tight leading-snug group-hover:text-near-black/60 transition-colors duration-200">
              {featured.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-6 max-w-lg">{featured.excerpt}</p>
            <div className="flex items-center gap-2 text-xs text-muted">
              <span>{featured.readTime}</span>
              <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
            </div>
          </motion.a>

          {/* Secondary articles */}
          <div className="flex flex-col md:pl-12 md:border-l border-border gap-0">
            {secondary.map((article, index) => (
              <motion.a
                key={article.title}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="insight-card group"
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 + index * 0.08 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[9px] font-semibold text-muted uppercase tracking-wider">
                    {article.tag}
                  </span>
                  <span className="text-[9px] text-muted/60">{article.date}</span>
                </div>
                <h4 className="font-semibold text-near-black text-sm mb-2 leading-snug tracking-tight group-hover:text-near-black/60 transition-colors duration-200">
                  {article.title}
                </h4>
                <div className="text-xs text-muted/60">{article.readTime}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
