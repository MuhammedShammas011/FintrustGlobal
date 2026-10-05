import footerLogo from '../assets/Vertical-Logo-Fintrust Global-03.png'

export default function Footer() {
  const navLinks = [
    {
      heading: 'Services',
      links: [
        { label: 'Accounting', href: '#services' },
        { label: 'Taxation', href: '#taxation' },
        { label: 'Business Consultation', href: '#services' },
        { label: 'Due Diligence', href: '#due-diligence' },
        { label: 'Management', href: '#services' },
        { label: 'ERP & Systems', href: '#solutions' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About', href: '#why-fintrust' },
        { label: 'Our Method', href: '#process' },
        { label: 'Insights', href: '#insights' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
      ],
    },
  ]

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-off-white pb-12 md:pb-16 pt-10 md:pt-16 border-t border-[#212e52]/10">
      {/* Main footer */}
      <div className="container-site pt-10 md:pt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-0 mb-4">
              <img src={footerLogo} alt="Fintrust Global Logo" className="h-10 md:h-12 w-auto object-contain -ml-4" />
              <span className="font-semibold tracking-tight text-[#212e52] text-base uppercase -ml-2">
                Fintrust Global
              </span>
            </div>
            <p className="text-xs text-muted leading-relaxed mb-6 max-w-[200px]">
              Compliance. Confidence. Clarity.<br />
              Financial advisory for UAE businesses.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted hover:text-near-black transition-colors duration-200 font-medium"
                aria-label="LinkedIn"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted hover:text-near-black transition-colors duration-200 font-medium"
                aria-label="Instagram"
              >
                Instagram ↗
              </a>
            </div>
          </div>

          {/* Navigation columns */}
          {navLinks.map((group) => (
            <div key={group.heading}>
              <div className="text-[10px] font-semibold text-muted/60 uppercase tracking-[0.12em] mb-5">
                {group.heading}
              </div>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href.startsWith('#') ? link.href : link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault()
                          scrollTo(link.href)
                        }
                      }}
                      className="text-xs text-near-black/60 hover:text-near-black transition-colors duration-200 font-medium"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="mt-10 md:mt-14 pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
          <div>
            <div className="text-[10px] font-semibold text-muted/60 uppercase tracking-[0.12em] mb-2">Address</div>
            <p className="text-xs text-muted leading-relaxed">
              206, Alphamed Building<br />
              Abu Hail, Dubai<br />
              United Arab Emirates
            </p>
          </div>
          <div>
            <div className="text-[10px] font-semibold text-muted/60 uppercase tracking-[0.12em] mb-2">Contact</div>
            <div className="space-y-1">
              <a href="tel:+971506029161" className="block text-xs text-muted hover:text-near-black transition-colors duration-200 font-medium">
                +971 50 602 9161
              </a>
              <a href="mailto:info@fintrustglobal.ae" className="block text-xs text-muted hover:text-near-black transition-colors duration-200 font-medium">
                info@fintrustglobal.ae
              </a>
            </div>
          </div>
          <div>
            <div className="text-[10px] font-semibold text-muted/60 uppercase tracking-[0.12em] mb-2">Hours</div>
            <p className="text-xs text-muted leading-relaxed">
              Sunday — Friday<br />
              09:00 — 17:00
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container-site py-5 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <p className="text-[10px] text-muted/60">
            © {new Date().getFullYear()} Fintrust Global. All rights reserved.
          </p>
          <p className="text-[10px] text-muted/40">
            Accounting · Taxation · Business Advisory · Dubai, UAE
          </p>
        </div>
      </div>
    </footer>
  )
}
