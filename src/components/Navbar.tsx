import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logoImg from '../assets/Horizontal-Logo- Fintrust Global-04.png'

const navLinks = [
  { label: 'Home', href: '#' },
  { 
    label: 'Services', 
    href: '#services',
    dropdown: [
      { 
        label: 'Accounting', 
        href: '#accounting',
        subDropdown: [
          { label: 'Monthly bookkeeping', href: '#monthly-bookkeeping' },
          { label: 'Payroll Management', href: '#payroll-management' }
        ]
      },
      { 
        label: 'Taxation', 
        href: '#taxation',
        subDropdown: [
          { label: 'Corporate tax', href: '#corporate-tax' },
          { label: 'Vat consultancy', href: '#vat-consultancy' },
          { label: 'Excise Tax Service', href: '#excise-tax' },
          { label: 'Tax Audit service', href: '#tax-audit' },
          { label: 'VAT Administration penalties', href: '#vat-penalties' }
        ]
      },
      { 
        label: 'Business Consultation', 
        href: '#business-consultation',
        subDropdown: [
          { label: 'AML Compliance', href: '#aml-compliance' },
          { label: 'Economic Substance Advisory', href: '#esa' },
          { label: 'Budgeting & Forecasting', href: '#budgeting' },
          { label: 'CFO Outsourcing', href: '#cfo' },
          { label: 'ERP / Accounting software', href: '#erp' }
        ]
      },
      { 
        label: 'Due Diligence', 
        href: '#due-diligence',
        subDropdown: [
          { label: 'Operations due diligence', href: '#operations-dd' },
          { label: 'Accounts due diligence', href: '#accounts-dd' },
          { label: 'Commerce due diligence', href: '#commerce-dd' },
          { label: 'Tax Due Diligence', href: '#tax-dd' }
        ]
      },
      { 
        label: 'Management', 
        href: '#management',
        subDropdown: [
          { label: '360 Business management', href: '#360-management' }
        ]
      },
    ]
  },
  { label: 'Blog', href: '#insights' },
  { label: 'Contact-Us', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [onProcessSection, setOnProcessSection] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Hide navbar when the #process section is visible
  useEffect(() => {
    const processEl = document.getElementById('process')
    if (!processEl) return
    const observer = new IntersectionObserver(
      ([entry]) => setOnProcessSection(entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(processEl)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const navVisible = scrolled && !onProcessSection

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navVisible
          ? 'translate-y-0 opacity-100 py-1 bg-off-white/95 backdrop-blur-md border-b border-border'
          : '-translate-y-full opacity-0 pointer-events-none'
          }`}
      >
        <div className="container-site flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            <img src={logoImg} alt="Fintrust Global" className="h-16 md:h-20 w-auto object-contain scale-[1.15] md:scale-[1.3] origin-left" />
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label} className="relative group">
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-sm font-medium text-near-black/70 hover:text-near-black transition-colors duration-200 tracking-tight flex items-center gap-1 py-4"
                >
                  {link.label}
                  {link.dropdown && (
                    <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                
                {link.dropdown && (
                  <div className="absolute top-[80%] left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 w-64 bg-white border border-border shadow-lg rounded-xl py-2">
                    {link.dropdown.map((subItem) => (
                      <div key={subItem.label} className="relative group/sub">
                        <button
                          onClick={() => scrollTo(subItem.href)}
                          className="w-full text-left px-4 py-2.5 text-sm text-near-black/70 hover:text-[#C9951A] hover:bg-off-white transition-colors flex items-center justify-between"
                        >
                          {subItem.label}
                          {subItem.subDropdown && (
                            <svg className="w-3 h-3 -rotate-90 text-near-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          )}
                        </button>
                        
                        {subItem.subDropdown && (
                          <div className="absolute top-0 left-[100%] opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 -translate-x-2 group-hover/sub:translate-x-0 w-64 bg-white border border-border shadow-lg rounded-xl py-2 overflow-hidden">
                            {subItem.subDropdown.map((nestedItem) => (
                              <button
                                key={nestedItem.label}
                                onClick={() => scrollTo(nestedItem.href)}
                                className="block w-full text-left px-4 py-2.5 text-sm text-near-black/70 hover:text-[#C9951A] hover:bg-off-white transition-colors"
                              >
                                {nestedItem.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="text-sm font-medium bg-[#212e52] text-white hover:bg-[#1a2542] px-5 py-2.5 rounded-full transition-colors duration-200 tracking-tight shadow-sm"
            >
              Book now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-6 bg-near-black transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[0.4rem]' : ''}`}
            />
            <span
              className={`block h-px w-4 bg-near-black transition-all duration-300 ${mobileOpen ? 'opacity-0 w-6' : ''}`}
            />
            <span
              className={`block h-px w-6 bg-near-black transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[0.4rem]' : ''}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-nav-overlay"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ul className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                  className="flex flex-col gap-3"
                >
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-off-white text-4xl font-semibold tracking-tight hover:text-accent transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                  {link.dropdown && (
                    <div className="flex flex-col gap-5 pl-4 border-l border-off-white/20 mt-2">
                      {link.dropdown.map((subItem) => (
                        <div key={subItem.label} className="flex flex-col gap-2">
                          <button
                            onClick={() => scrollTo(subItem.href)}
                            className="text-off-white/80 text-xl font-medium tracking-tight hover:text-accent transition-colors duration-200 text-left"
                          >
                            {subItem.label}
                          </button>
                          {subItem.subDropdown && (
                            <div className="flex flex-col gap-2 pl-4 border-l border-off-white/10 mt-1">
                              {subItem.subDropdown.map((nestedItem) => (
                                <button
                                  key={nestedItem.label}
                                  onClick={() => scrollTo(nestedItem.href)}
                                  className="text-off-white/50 text-base font-normal tracking-tight hover:text-accent transition-colors duration-200 text-left"
                                >
                                  {nestedItem.label}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="mt-16 flex flex-col gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <a
                href="tel:+971506029161"
                className="text-off-white/50 text-sm font-medium tracking-tight"
              >
                +971 50 602 9161
              </a>
              <a
                href="mailto:info@fintrustglobal.ae"
                className="text-off-white/50 text-sm font-medium tracking-tight"
              >
                info@fintrustglobal.ae
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
