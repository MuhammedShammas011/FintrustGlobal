import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import FinalCTA from '../components/FinalCTA'

const posts = [
  {
    tag: 'Tax Update',
    date: 'Aug 2026',
    readTime: '5 min read',
    title: 'UAE Small Business Relief Extended Until 2029: AED 3 Million Revenue Threshold Explained',
    excerpt: 'The UAE Ministry of Finance has confirmed the extension of Small Business Relief under Corporate Tax regulations, allowing qualifying businesses with revenue below AED 3 million to elect for relief status.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800',
    href: 'https://fintrustglobal.ae/blog/',
  },
  {
    tag: 'Corporate Tax',
    date: 'Jul 2026',
    readTime: '7 min read',
    title: 'Corporate Tax in UAE Explained for Businesses (2026 Guide)',
    excerpt: 'The United Arab Emirates introduced Corporate Tax in UAE (CT) to align with global tax standards. A comprehensive guide to registration, rates, and compliance.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
    href: 'https://fintrustglobal.ae/blog/',
  },
  {
    tag: 'Advisory',
    date: 'Jun 2026',
    readTime: '4 min read',
    title: 'How CFO Services in Dubai Help Businesses Scale Faster',
    excerpt: 'Dubai is one of the fastest-growing business hubs in the world. However, rapid growth brings financial challenges. Outsourced CFO services give growing businesses the edge.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
    href: 'https://fintrustglobal.ae/blog/',
  },
  {
    tag: 'Accounting',
    date: 'May 2026',
    readTime: '6 min read',
    title: 'Best Accounting Services in Dubai – Fintrust Global UAE',
    excerpt: 'Dubai is one of the world\'s fastest-growing business hubs, and maintaining accurate financial records is now essential for every business operating in the UAE.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    href: 'https://fintrustglobal.ae/blog/',
  },
  {
    tag: 'VAT',
    date: 'Apr 2026',
    readTime: '5 min read',
    title: 'Understanding VAT in the UAE',
    excerpt: 'Understanding VAT in the UAE: Key Insights and Rates. The United Arab Emirates (UAE) has undergone a significant transformation with the introduction of Value Added Tax.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
    href: 'https://fintrustglobal.ae/blog/',
  },
  {
    tag: 'Bookkeeping',
    date: 'Mar 2026',
    readTime: '5 min read',
    title: 'Professional Bookkeeping and Outsourced Accounting Services in the UAE',
    excerpt: 'Managing business finances with precision is essential for building a stable and successful company in today\'s competitive UAE market environment.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    href: 'https://fintrustglobal.ae/blog/',
  },
  {
    tag: 'Compliance',
    date: 'Feb 2026',
    readTime: '6 min read',
    title: 'Importance of Financial Audits for Business Transparency in the UAE',
    excerpt: 'In the UAE\'s highly regulated and rapidly evolving business environment, financial transparency is not optional — it\'s a legal and strategic necessity for all businesses.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    href: 'https://fintrustglobal.ae/blog/',
  },
  {
    tag: 'Strategy',
    date: 'Jan 2026',
    readTime: '7 min read',
    title: 'Effective Budgeting Strategies to Grow Your Business in 2026',
    excerpt: 'Master budgeting essentials, optimize spending, and find growth opportunities with tailored strategies for businesses across the UAE in the new financial year.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
    href: 'https://fintrustglobal.ae/blog/',
  },
  {
    tag: 'Advisory',
    date: 'Dec 2025',
    readTime: '5 min read',
    title: 'Choosing the Right Accounting Partner in Dubai: What Businesses Must Know',
    excerpt: 'Find reliable accounting partners in Dubai, compare expertise, and ensure your business gets trusted financial management from a team that understands UAE regulations.',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800',
    href: 'https://fintrustglobal.ae/blog/',
  },
  {
    tag: 'Tax',
    date: 'Nov 2025',
    readTime: '4 min read',
    title: 'Understanding Tax Deductions for Small Businesses',
    excerpt: 'Learn how small businesses can maximize savings by identifying eligible tax deductions for small businesses and reducing their overall tax burden in compliance with UAE law.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800',
    href: 'https://fintrustglobal.ae/blog/',
  },
]

const tagColors: Record<string, string> = {
  'Tax Update': '#C9951A',
  'Corporate Tax': '#212e52',
  'Advisory': '#C9951A',
  'Accounting': '#212e52',
  'VAT': '#C9951A',
  'Bookkeeping': '#212e52',
  'Compliance': '#C9951A',
  'Strategy': '#212e52',
  'Tax': '#C9951A',
}

export default function Blog() {
  return (
    <main className="bg-[#FCFBF8]">

      {/* ─── HERO ─── */}
      <section className="relative pt-36 pb-20 md:pt-52 md:pb-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-gradient-to-bl from-[#C9951A]/8 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="container-site max-w-[1300px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#C9951A]/30 bg-[#C9951A]/5 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-[#C9951A] animate-pulse" />
            <span className="text-[#C9951A] text-xs font-semibold uppercase tracking-widest">Insights & Ideas</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[4.5rem] font-normal tracking-tight leading-[1.1] text-[#212e52] mb-6 max-w-3xl"
          >
            Ideas for businesses<br />
            <span className="text-[#C9951A] italic">that want to move forward.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#212e52]/55 text-lg font-light leading-relaxed max-w-xl"
          >
            Expert perspectives on UAE tax, accounting, compliance, and financial strategy — written for business owners who want clarity.
          </motion.p>
        </div>
      </section>

      {/* ─── ARTICLES GRID ─── */}
      <section className="pb-32">
        <div className="container-site max-w-[1300px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {posts.map((post, i) => (
              <motion.a
                key={i}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
                className="group flex flex-col"
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[16/10] bg-[#212e52]/5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Tag badge overlaid on image */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full text-white"
                      style={{ backgroundColor: tagColors[post.tag] ?? '#212e52' }}
                    >
                      {post.tag}
                    </span>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#212e52]/40 text-xs font-medium tracking-wide">{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#212e52]/20" />
                  <span className="text-[#212e52]/40 text-xs font-medium tracking-wide">{post.readTime}</span>
                </div>

                {/* Title */}
                <h2 className="text-[#212e52] text-lg font-normal tracking-tight leading-snug mb-3 group-hover:text-[#C9951A] transition-colors duration-300">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-[#212e52]/55 text-sm leading-relaxed font-light line-clamp-3 flex-1 mb-5">
                  {post.excerpt}
                </p>

                {/* Read More CTA */}
                <div className="inline-flex items-center gap-2 mt-auto">
                  <span
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-5 py-2.5 rounded-full border transition-all duration-300 group-hover:bg-[#C9951A] group-hover:border-[#C9951A] group-hover:text-white"
                    style={{ color: '#C9951A', borderColor: '#C9951A40' }}
                  >
                    Read More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DARK CTA BANNER ─── */}
      <section className="bg-[#212e52] py-24 text-white relative overflow-hidden rounded-[3rem] mx-4 md:mx-10 mb-32">
        <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-[#C9951A] rounded-full blur-[220px] opacity-[0.07] pointer-events-none" />
        <div className="container-site max-w-[800px] relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight mb-6 leading-[1.1]">
              Ready to put these insights<br />
              <span className="italic text-[#C9951A]">into action?</span>
            </h2>
            <p className="text-white/55 text-lg font-light leading-relaxed mb-10">
              Our team is here to help you navigate UAE tax laws, compliance, and financial strategy — without the jargon.
            </p>
            <Link
              to="/#contact"
              className="group relative inline-flex items-center justify-center bg-[#C9951A] text-white px-10 py-4 rounded-full font-medium tracking-wide overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#C9951A]/40"
            >
              <span className="relative z-10 transition-transform duration-500 group-hover:-translate-y-10">Talk to an Expert</span>
              <span className="absolute z-10 transition-transform duration-500 translate-y-10 group-hover:translate-y-0">Get Started →</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
            </Link>
          </motion.div>
        </div>
      </section>

      <FinalCTA />
    </main>
  )
}
