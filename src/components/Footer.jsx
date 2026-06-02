import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/5 py-8 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 text-sm text-white/30">
          <span>Crafted with</span>
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Heart size={13} className="text-pink-500 fill-pink-500" />
          </motion.span>
          <span>by</span>
          <span className="text-gradient-cyan font-medium font-space">Pratham</span>
          <span className="text-white/20">• 2025</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-white/20">React + Vite + Tailwind + Framer Motion</span>
          <motion.button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-9 h-9 glass rounded-xl flex items-center justify-center text-white/30 border border-white/8"
            whileHover={{ scale: 1.1, y: -2, color: '#00d4ff', borderColor: 'rgba(0,212,255,0.3)' }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
