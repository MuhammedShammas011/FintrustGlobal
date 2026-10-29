import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  const phoneNumber = '971506029161'
  const message = encodeURIComponent(
    'Hello Fintrust Global, I would like to inquire about your services.'
  )
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <aside
      aria-label="WhatsApp Contact"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex items-center gap-3 select-none"
    >
      {/* Tooltip / Label */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="hidden sm:flex items-center gap-2 bg-[#212e52] text-white px-3.5 py-2 rounded-full shadow-lg border border-white/10 pointer-events-none"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-xs font-medium tracking-tight whitespace-nowrap">
              Chat on WhatsApp
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="whatsapp-float-btn group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_-5px_rgba(37,211,102,0.5)] hover:shadow-[0_15px_30px_-5px_rgba(37,211,102,0.7)] transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Contact Fintrust Global on WhatsApp at +971 50 602 9161"
      >
        {/* Soft pulsing halo ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none opacity-75" />

        {/* WhatsApp Vector Icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 sm:w-7 sm:h-7 fill-white relative z-10 drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.676.15-.2.301-.776.978-.951 1.179-.175.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.783-1.675-2.084-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.676-1.63-.927-2.232-.244-.587-.492-.507-.676-.516l-.576-.01c-.2 0-.526.075-.802.376-.276.301-1.052 1.028-1.052 2.508 0 1.48 1.077 2.909 1.228 3.109.15.2 2.12 3.238 5.136 4.541.717.31 1.277.495 1.714.634.721.229 1.377.197 1.895.12.578-.087 1.78-.727 2.03-1.43.25-.702.25-1.304.175-1.43-.075-.126-.275-.201-.576-.351zM12.04 2C6.516 2 2.028 6.485 2.028 12.008c0 1.996.586 3.864 1.621 5.441L2 22l4.707-1.579c1.517.94 3.298 1.488 5.333 1.488 5.524 0 10.012-4.485 10.012-10.009C22.052 6.485 17.564 2 12.04 2zm0 18.283c-1.777 0-3.432-.533-4.821-1.452l-.346-.229-2.791.936.945-2.735-.229-.364c-1.037-1.454-1.627-3.21-1.627-5.131 0-4.57 3.717-8.287 8.288-8.287 4.57 0 8.287 3.717 8.287 8.287 0 4.57-3.717 8.285-8.288 8.285z" />
        </svg>
      </a>
    </aside>
  )
}
