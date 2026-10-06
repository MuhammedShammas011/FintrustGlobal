import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import FinalCTA from '../components/FinalCTA'

interface Post {
  id: number
  tag: string
  category: string
  date: string
  readTime: string
  title: string
  excerpt: string
  image: string
  href: string
  featured?: boolean
}

const posts: Post[] = [
  {
    id: 1,
    tag: 'Tax Update',
    category: 'Tax & VAT',
    date: 'Aug 2026',
    readTime: '5 min read',
    title: 'UAE Small Business Relief Extended Until 2029: AED 3 Million Revenue Threshold Explained',
    excerpt:
      'The UAE Ministry of Finance has confirmed the extension of Small Business Relief under Corporate Tax regulations, allowing qualifying businesses with revenue below AED 3 million to elect for relief status.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1200',
    href: 'https://fintrustglobal.ae/blog/',
    featured: true,
  },
  {
    id: 2,
    tag: 'Corporate Tax',
    category: 'Tax & VAT',
    date: 'Jul 2026',
    readTime: '7 min read',
    title: 'Corporate Tax in UAE Explained for Businesses (2026 Guide)',
    excerpt:
      'The United Arab Emirates introduced Corporate Tax in UAE (CT) to align with global tax standards. A comprehensive guide to registration, rates, and compliance.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
    href: 'https://fintrustglobal.ae/blog/',
  },
  {
    id: 3,
    tag: 'Advisory',
    category: 'Advisory',
    date: 'Jun 2026',
    readTime: '4 min read',
    title: 'How CFO Services in Dubai Help Businesses Scale Faster',
    excerpt:
      'Dubai is one of the fastest-growing business hubs in the world. However, rapid growth brings financial challenges. Outsourced CFO services give growing businesses the edge.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
    href: 'https://fintrustglobal.ae/blog/',
  },
  {
    id: 4,
    tag: 'Accounting',
    category: 'Accounting',
    date: 'May 2026',
    readTime: '6 min read',
    title: 'Best Accounting Services in Dubai – Fintrust Global UAE',
    excerpt:
      'Dubai is one of the world\'s fastest-growing business hubs, and maintaining accurate financial records is now essential for every business operating in the UAE.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    href: 'https://fintrustglobal.ae/blog/',
  },
  {
    id: 5,
    tag: 'VAT',
    category: 'Tax & VAT',
    date: 'Apr 2026',
    readTime: '5 min read',
    title: 'Understanding VAT in the UAE: Key Insights and Rates',
    excerpt:
      'Understanding VAT in the UAE: Key Insights and Rates. The United Arab Emirates has undergone a significant transformation with the introduction of Value Added Tax.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
    href: 'https://fintrustglobal.ae/blog/',
  },
  {
    id: 6,
    tag: 'Bookkeeping',
    category: 'Accounting',
    date: 'Mar 2026',
    readTime: '5 min read',
    title: 'Professional Bookkeeping and Outsourced Accounting Services in the UAE',
    excerpt:
      'Managing business finances with precision is essential for building a stable and successful company in today\'s competitive UAE market environment.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    href: 'https://fintrustglobal.ae/blog/',
  },
  {
    id: 7,
    tag: 'Compliance',
    category: 'Compliance',
    date: 'Feb 2026',
    readTime: '6 min read',
    title: 'Importance of Financial Audits for Business Transparency in the UAE',
    excerpt:
      'In the UAE\'s highly regulated and rapidly evolving business environment, financial transparency is not optional — it\'s a legal and strategic necessity for all businesses.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    href: 'https://fintrustglobal.ae/blog/',
  },
  {
    id: 8,
    tag: 'Strategy',
    category: 'Advisory',
    date: 'Jan 2026',
    readTime: '7 min read',
    title: 'Effective Budgeting Strategies to Grow Your Business in 2026',
    excerpt:
      'Master budgeting essentials, optimize spending, and find growth opportunities with tailored strategies for businesses across the UAE in the new financial year.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
    href: 'https://fintrustglobal.ae/blog/',
  },
  {
    id: 9,
    tag: 'Advisory',
    category: 'Advisory',
    date: 'Dec 2025',
    readTime: '5 min read',
    title: 'Choosing the Right Accounting Partner in Dubai: What Businesses Must Know',
    excerpt:
      'Find reliable accounting partners in Dubai, compare expertise, and ensure your business gets trusted financial management from a team that understands UAE regulations.',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800',
    href: 'https://fintrustglobal.ae/blog/',
  },
  {
    id: 10,
    tag: 'Tax',
    category: 'Tax & VAT',
    date: 'Nov 2025',
    readTime: '4 min read',
    title: 'Understanding Tax Deductions for Small Businesses in UAE',
    excerpt:
      'Learn how small businesses can maximize savings by identifying eligible tax deductions for small businesses and reducing their overall tax burden in compliance with UAE law.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800',
    href: 'https://fintrustglobal.ae/blog/',
  },
]

const categories = ['All', 'Tax & VAT', 'Accounting', 'Advisory', 'Compliance']

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  // Filter posts based on category and search query
  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tag.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // The primary lead story when viewing "All" with no search
  const showFeatured = selectedCategory === 'All' && searchQuery.trim() === ''
  const featuredPost = showFeatured ? posts[0] : null
  const gridPosts = showFeatured ? filteredPosts.slice(1) : filteredPosts

  return (
    <main className="bg-[#FCFBF8] min-h-screen text-[#212e52] selection:bg-[#C9951A] selection:text-white">

      {/* ─── EDITORIAL HEADER / HERO ─── */}
      <section className="pt-36 pb-16 md:pt-48 md:pb-20 border-b border-[#212e52]/10">
        <div className="container-site max-w-[1360px]">
          <div className="max-w-4xl">
            {/* Minimal Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9951A]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C9951A]">
                Fintrust Journal · UAE Financial Intelligence
              </span>
            </motion.div>

            {/* Confident Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-normal tracking-tight leading-[1.08] mb-6 text-[#212e52]"
            >
              Perspectives on finance,{' '}
              <span className="italic font-serif text-[#C9951A]">growth & compliance.</span>
            </motion.h1>

            {/* Editorial Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-[#212e52]/60 font-light leading-relaxed max-w-2xl"
            >
              Authoritative insights, regulatory breakdowns, and strategic analysis curated for founders, CFOs, and business leaders in the UAE.
            </motion.p>
          </div>

          {/* Minimal Controls Bar: Categories & Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-14 pt-8 border-t border-[#212e52]/10 flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            {/* Category Filter Pills */}
            <div className="flex items-center flex-wrap gap-2 sm:gap-3">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-xs uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-300 font-medium ${
                      isActive
                        ? 'bg-[#212e52] text-white shadow-sm'
                        : 'text-[#212e52]/60 hover:text-[#212e52] hover:bg-[#212e52]/5'
                    }`}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>

            {/* Inline Minimal Search */}
            <div className="relative w-full md:w-72">
              <svg
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#212e52]/40"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs bg-white/70 border border-[#212e52]/15 rounded-full text-[#212e52] placeholder-[#212e52]/40 focus:outline-none focus:border-[#C9951A] focus:bg-white transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#212e52]/40 hover:text-[#212e52]"
                >
                  ✕
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── MAIN CONTENT AREA ─── */}
      <section className="py-20 md:py-24">
        <div className="container-site max-w-[1360px]">

          {/* ─── FEATURED ARTICLE (EDITORIAL HERO SPLIT) ─── */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-24 pb-20 border-b border-[#212e52]/10"
            >
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9951A] mb-8 flex items-center gap-2">
                <span className="w-6 h-px bg-[#C9951A]" />
                Featured Perspective
              </div>

              <a
                href={featuredPost.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Image (7 cols on lg) */}
                <div className="lg:col-span-7 overflow-hidden rounded-2xl border border-[#212e52]/10 bg-[#212e52]/5 aspect-[16/10] relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                {/* Editorial Content (5 cols on lg) */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-xs text-[#212e52]/50 mb-4 tracking-wide">
                    <span className="text-[#C9951A] font-medium uppercase tracking-wider text-[11px]">
                      {featuredPost.tag}
                    </span>
                    <span>·</span>
                    <span>{featuredPost.date}</span>
                    <span>·</span>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-[#212e52] leading-tight mb-5 group-hover:text-[#C9951A] transition-colors duration-300">
                    {featuredPost.title}
                  </h2>

                  <p className="text-[#212e52]/65 text-base font-light leading-relaxed mb-8">
                    {featuredPost.excerpt}
                  </p>

                  <div className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#212e52] group-hover:text-[#C9951A] transition-colors duration-200">
                    <span>Read full perspective</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </div>
                </div>
              </a>
            </motion.div>
          )}

          {/* ─── ARTICLES GRID ─── */}
          {gridPosts.length > 0 ? (
            <div>
              {/* Section Header */}
              <div className="flex items-center justify-between mb-12">
                <h3 className="text-sm uppercase tracking-[0.18em] font-medium text-[#212e52]/50">
                  {selectedCategory === 'All' ? 'All Articles' : selectedCategory} ({gridPosts.length})
                </h3>
              </div>

              {/* Minimal 3-Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
                <AnimatePresence mode="popLayout">
                  {gridPosts.map((post, i) => (
                    <motion.a
                      key={post.id}
                      layout
                      href={post.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
                      className="group flex flex-col"
                    >
                      {/* Image Container with Crisp Border */}
                      <div className="relative overflow-hidden rounded-xl border border-[#212e52]/10 bg-[#212e52]/5 aspect-[16/10] mb-6">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-[1.04]"
                        />
                      </div>

                      {/* Metadata */}
                      <div className="flex items-center gap-2.5 text-xs text-[#212e52]/45 mb-3 tracking-wide">
                        <span className="text-[#C9951A] font-semibold uppercase tracking-wider text-[10px]">
                          {post.tag}
                        </span>
                        <span>·</span>
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>

                      {/* Title */}
                      <h4 className="text-lg md:text-xl font-normal tracking-tight text-[#212e52] leading-snug mb-3 group-hover:text-[#C9951A] transition-colors duration-200">
                        {post.title}
                      </h4>

                      {/* Excerpt */}
                      <p className="text-[#212e52]/60 text-sm font-light leading-relaxed line-clamp-3 mb-6 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Sleek Minimal CTA */}
                      <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#212e52]/80 group-hover:text-[#C9951A] transition-colors duration-200 pt-4 border-t border-[#212e52]/8">
                        <span>Read article</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </div>
                    </motion.a>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          ) : (
            /* Empty State */
            <div className="py-24 text-center max-w-md mx-auto">
              <p className="text-xl font-light text-[#212e52] mb-3">No articles found</p>
              <p className="text-sm text-[#212e52]/60 mb-6">
                We couldn’t find any perspectives matching &ldquo;{searchQuery}&rdquo;. Try another term or reset your filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All')
                  setSearchQuery('')
                }}
                className="text-xs uppercase tracking-widest font-semibold text-[#C9951A] underline underline-offset-4"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* ─── MINIMAL NEWSLETTER / EDITORIAL CALLOUT ─── */}
          <div className="mt-32 pt-16 border-t border-[#212e52]/10">
            <div className="rounded-2xl border border-[#212e52]/10 bg-white/60 p-8 sm:p-12 md:p-16 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9951A]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9951A]">
                    Fintrust Briefing
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-[#212e52] mb-3">
                  Stay ahead of UAE financial regulations.
                </h3>
                <p className="text-[#212e52]/60 text-sm font-light leading-relaxed">
                  Join hundreds of UAE founders, CFOs, and executives who receive our concise, monthly briefings on tax law, audit readiness, and advisory insights.
                </p>
              </div>

              <div className="w-full lg:w-auto">
                {subscribed ? (
                  <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-[#212e52]/5 text-[#212e52] border border-[#212e52]/10 text-sm font-medium">
                    <span className="text-[#C9951A]">✓</span>
                    <span>Thank you for subscribing. We&apos;ll be in touch.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md">
                    <input
                      type="email"
                      required
                      placeholder="Enter your corporate email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="px-5 py-3.5 text-xs bg-white border border-[#212e52]/15 rounded-full text-[#212e52] placeholder-[#212e52]/40 focus:outline-none focus:border-[#C9951A] min-w-[260px]"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3.5 bg-[#212e52] hover:bg-[#C9951A] text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-colors duration-300 flex-shrink-0"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
                <p className="text-[11px] text-[#212e52]/40 mt-3 font-light">
                  Strictly business. No spam. Unsubscribe at any time. Or{' '}
                  <Link to="/#contact" className="underline hover:text-[#C9951A]">
                    contact our advisory team
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── FINAL CTA SECTION ─── */}
      <FinalCTA />
    </main>
  )
}
