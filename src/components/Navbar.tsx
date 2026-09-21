import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logoImg from '../assets/Horizontal-Logo- Fintrust Global-01.png'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'About', href: '#why-fintrust' },
  { label: 'Insights', href: '#insights' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
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

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'py-2 bg-off-white/95 backdrop-blur-md border-b border-border'
          : 'pt-2 pb-3 bg-transparent'
          }`}
      >
        <div className="container-site flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            <img src={logoImg} alt="Fintrust Global" className="h-16 md:h-20 w-auto object-contain" />
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-sm font-medium text-near-black/70 hover:text-near-black transition-colors duration-200 tracking-tight"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+971506029161"
              className="btn-ghost text-sm"
            >
              Let's Talk →
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
            <ul className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                >
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-off-white text-4xl font-semibold tracking-tight hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </button>
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
