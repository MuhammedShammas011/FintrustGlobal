import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const [formOpen, setFormOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })

  // Open the form automatically if user navigates to #contact
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#contact') {
        setFormOpen(true)
      }
    }
    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || 'Not specified',
      company: formData.company || 'Not specified',
      service: formData.service || 'General Consultation',
      message: formData.message || 'No additional note provided',
      _subject: `New Consultation Request: ${formData.name}${formData.company ? ` (${formData.company})` : ''}`,
      _replyto: formData.email,
      _template: 'table',
      _captcha: 'false',
    }

    try {
      // Dispatch simultaneously to FormSubmit (direct to info@fintrustglobal.ae) and Formspree (xwllnadp)
      const results = await Promise.allSettled([
        fetch('https://formsubmit.co/ajax/info@fintrustglobal.ae', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(payload),
        }),
        fetch('https://formspree.io/f/xwllnadp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(payload),
        }),
      ])

      const anySuccess = results.some(
        res => res.status === 'fulfilled' && res.value.ok
      )

      if (anySuccess) {
        setSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
        })
      } else {
        setErrorMessage(
          'Could not complete automated delivery. Please email info@fintrustglobal.ae or contact us via WhatsApp.'
        )
      }
    } catch {
      setErrorMessage(
        'Network error. Please check your connection or email info@fintrustglobal.ae directly.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-40 lg:py-56 bg-[#F7F6F2] flex items-center justify-center overflow-hidden"
      id="contact"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9951A]/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-24">

          {/* ── LEFT: Headline + CTA button ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className={`flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-700 ${
              formOpen ? 'lg:w-1/2' : 'w-full max-w-5xl mx-auto'
            }`}
          >
            <h2
              className={`font-normal tracking-tighter text-[#212e52] mb-10 md:mb-16 leading-[1.05] transition-all duration-700 ${
                formOpen
                  ? 'text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem]'
                  : 'text-3xl sm:text-4xl md:text-6xl lg:text-[5.5rem]'
              }`}
            >
              <span className="block">''Your business is moving forward.</span>
              <span className="block text-[#212e52]/30 mt-2">Make sure your finances are too.''</span>
            </h2>

            <button
              onClick={() => { setFormOpen(true); setSubmitted(false) }}
              className="group flex items-center gap-4 text-[#212e52] text-lg md:text-2xl font-medium tracking-tight relative pb-2 pr-4 bg-transparent border-none cursor-pointer"
            >
              <span>Talk to an advisor</span>
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>

              {/* Animated underline */}
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#212e52]/20" />
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#212e52] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </button>
          </motion.div>

          {/* ── RIGHT: Contact Form ── */}
          <AnimatePresence>
            {formOpen && (
              <motion.div
                key="advisor-form"
                initial={{ opacity: 0, x: 60, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 60, scale: 0.96 }}
                transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-full lg:w-1/2 bg-white rounded-[2rem] shadow-[0_30px_80px_-20px_rgba(33,46,82,0.12)] border border-[#212e52]/5 p-8 md:p-10 relative"
              >
                {/* Close button */}
                <button
                  onClick={() => setFormOpen(false)}
                  className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#212e52]/5 hover:bg-[#212e52]/10 flex items-center justify-center transition-colors text-[#212e52]/50 hover:text-[#212e52]"
                  aria-label="Close form"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </button>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex flex-col items-center justify-center py-16 text-center gap-6"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#C9951A]/10 flex items-center justify-center text-[#C9951A]">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-normal text-[#212e52] tracking-tight">Message Received!</h3>
                      <p className="text-[#212e52]/50 text-sm leading-relaxed max-w-xs">
                        One of our advisors will reach out to you within 1 business day.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false)
                          setErrorMessage(null)
                          setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' })
                        }}
                        className="text-sm text-[#C9951A] underline underline-offset-4 hover:opacity-80 transition-opacity"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      {/* Header */}
                      <div className="mb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9951A]/30 bg-[#C9951A]/5 mb-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#C9951A] animate-pulse" />
                          <span className="text-[#C9951A] text-xs font-semibold uppercase tracking-widest">Free Consultation</span>
                        </div>
                        <h3 className="text-2xl font-normal text-[#212e52] tracking-tight leading-snug">
                          Let's talk about <br />
                          <span className="text-[#C9951A] italic">your business.</span>
                        </h3>
                      </div>

                      {/* Name + Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-medium text-[#212e52]/50 uppercase tracking-widest">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Smith"
                            className="w-full px-4 py-3 rounded-xl border border-[#212e52]/10 bg-[#FCFBF8] text-[#212e52] text-sm placeholder:text-[#212e52]/25 focus:outline-none focus:border-[#C9951A]/50 focus:ring-2 focus:ring-[#C9951A]/10 transition-all"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-medium text-[#212e52]/50 uppercase tracking-widest">Email *</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            className="w-full px-4 py-3 rounded-xl border border-[#212e52]/10 bg-[#FCFBF8] text-[#212e52] text-sm placeholder:text-[#212e52]/25 focus:outline-none focus:border-[#C9951A]/50 focus:ring-2 focus:ring-[#C9951A]/10 transition-all"
                          />
                        </div>
                      </div>

                      {/* Phone + Company */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-medium text-[#212e52]/50 uppercase tracking-widest">Phone</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+971 50 000 0000"
                            className="w-full px-4 py-3 rounded-xl border border-[#212e52]/10 bg-[#FCFBF8] text-[#212e52] text-sm placeholder:text-[#212e52]/25 focus:outline-none focus:border-[#C9951A]/50 focus:ring-2 focus:ring-[#C9951A]/10 transition-all"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-medium text-[#212e52]/50 uppercase tracking-widest">Company</label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your Company LLC"
                            className="w-full px-4 py-3 rounded-xl border border-[#212e52]/10 bg-[#FCFBF8] text-[#212e52] text-sm placeholder:text-[#212e52]/25 focus:outline-none focus:border-[#C9951A]/50 focus:ring-2 focus:ring-[#C9951A]/10 transition-all"
                          />
                        </div>
                      </div>

                      {/* Service */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-[#212e52]/50 uppercase tracking-widest">Service Interested In</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-[#212e52]/10 bg-[#FCFBF8] text-[#212e52] text-sm focus:outline-none focus:border-[#C9951A]/50 focus:ring-2 focus:ring-[#C9951A]/10 transition-all appearance-none cursor-pointer"
                        >
                          <option value="" disabled>Select a service...</option>
                          <option value="monthly-bookkeeping">Monthly Bookkeeping</option>
                          <option value="budgeting-forecasting">Budgeting & Forecasting</option>
                          <option value="corporate-tax">Corporate Tax</option>
                          <option value="vat">VAT Services</option>
                          <option value="payroll">Payroll Management</option>
                          <option value="erp">ERP & Accounting Software</option>
                          <option value="aml">AML Compliance</option>
                          <option value="due-diligence">Due Diligence</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-[#212e52]/50 uppercase tracking-widest">Message</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={3}
                          placeholder="Tell us about your business needs..."
                          className="w-full px-4 py-3 rounded-xl border border-[#212e52]/10 bg-[#FCFBF8] text-[#212e52] text-sm placeholder:text-[#212e52]/25 focus:outline-none focus:border-[#C9951A]/50 focus:ring-2 focus:ring-[#C9951A]/10 transition-all resize-none"
                        />
                      </div>

                      {/* Honeypot field for bot spam prevention */}
                      <input
                        type="text"
                        name="_honey"
                        tabIndex={-1}
                        autoComplete="off"
                        className="hidden"
                        style={{ display: 'none' }}
                      />

                      {/* Error Alert with direct email link fallback */}
                      {errorMessage && (
                        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex flex-col gap-2">
                          <div className="flex items-start gap-2">
                            <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="leading-relaxed">{errorMessage}</span>
                          </div>
                          <a
                            href={`mailto:info@fintrustglobal.ae?subject=${encodeURIComponent(
                              `Consultation Request: ${formData.name || 'Website Inquiry'}`
                            )}&body=${encodeURIComponent(
                              `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
                            )}`}
                            className="inline-flex items-center gap-1.5 text-[#212e52] font-semibold underline underline-offset-2 hover:text-[#C9951A] transition-colors pl-6"
                          >
                            <span>Send directly via your email app →</span>
                          </a>
                        </div>
                      )}

                      {/* Submit */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={!isSubmitting ? { scale: 1.01 } : {}}
                        whileTap={!isSubmitting ? { scale: 0.99 } : {}}
                        className={`group relative w-full inline-flex items-center justify-center bg-[#212e52] text-white px-8 py-3.5 text-sm rounded-full font-medium tracking-wide overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#212e52]/20 mt-1 ${
                          isSubmitting ? 'opacity-85 cursor-wait' : 'cursor-pointer'
                        }`}
                      >
                        {isSubmitting ? (
                          <span className="relative z-10 flex items-center justify-center gap-2 py-0.5">
                            <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                            </svg>
                            <span>Sending request...</span>
                          </span>
                        ) : (
                          <>
                            <span className="relative z-10 transition-transform duration-500 group-hover:-translate-y-10">Schedule My Free Consultation</span>
                            <span className="absolute z-10 transition-transform duration-500 translate-y-10 group-hover:translate-y-0">Let's Talk →</span>
                            <div className="absolute inset-0 bg-[#C9951A] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
                          </>
                        )}
                      </motion.button>

                      <p className="text-center text-[#212e52]/30 text-xs">
                        No commitment. We'll reach out within 1 business day.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  )
}
