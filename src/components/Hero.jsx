import { useEffect, useRef, useState } from 'react'

// Inline SVG brand icons
const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

const XIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const LeetcodeIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
)

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const TYPING_TEXTS = [
  'Aspiring Software Engineer',
]

function TypingText() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [speed, setSpeed] = useState(80)

  useEffect(() => {
    const target = TYPING_TEXTS[index]
    const handle = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(target.slice(0, displayed.length + 1))
        if (displayed.length + 1 === target.length) {
          // Only one item — just hold, never delete
          if (TYPING_TEXTS.length > 1) {
            setSpeed(2000)
            setIsDeleting(true)
          }
        } else {
          setSpeed(80)
        }
      } else {
        setDisplayed(target.slice(0, displayed.length - 1))
        setSpeed(40)
        if (displayed.length === 0) {
          setIsDeleting(false)
          setIndex((i) => (i + 1) % TYPING_TEXTS.length)
        }
      }
    }, speed)
    return () => clearTimeout(handle)
  }, [displayed, isDeleting, index, speed])

  return (
    <span className="text-gradient-cyan font-space">
      {displayed}
      <span className="inline-block w-0.5 h-8 bg-cyan-400 ml-1 animate-pulse" />
    </span>
  )
}

function FloatingBadge({ children, delay = 0 }) {
  return (
    <motion.div
      className="glass-strong rounded-xl px-4 py-2.5 text-xs font-mono text-white/70 border border-white/10"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {children}
    </motion.div>
  )
}

export default function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { stiffness: 60, damping: 20 }
  const x1 = useSpring(useTransform(mouseX, [-1, 1], [-30, 30]), springConfig)
  const y1 = useSpring(useTransform(mouseY, [-1, 1], [-20, 20]), springConfig)
  const x2 = useSpring(useTransform(mouseX, [-1, 1], [20, -20]), springConfig)
  const y2 = useSpring(useTransform(mouseY, [-1, 1], [15, -15]), springConfig)
  const x3 = useSpring(useTransform(mouseX, [-1, 1], [-15, 15]), springConfig)
  const y3 = useSpring(useTransform(mouseY, [-1, 1], [-25, 25]), springConfig)

  useEffect(() => {
    const handleMouse = (e) => {
      mouseX.set((e.clientX / window.innerWidth) * 2 - 1)
      mouseY.set((e.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [mouseX, mouseY])

  const scrollToProjects = () =>
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })

  const SOCIALS = [
    { Icon: GithubIcon, href: 'https://github.com/pratham7187', label: 'GitHub' },
    { Icon: LinkedinIcon, href: 'https://www.linkedin.com/in/pratham-b-g-rai-19445b291/', label: 'LinkedIn' },
    { Icon: InstagramIcon, href: 'https://www.instagram.com/pratham_bg_rai/', label: 'Instagram' },
    { Icon: XIcon, href: 'https://x.com/romanprath18', label: 'X / Twitter' },
    { Icon: LeetcodeIcon, href: 'https://leetcode.com/u/prathambgrai/', label: 'LeetCode' },
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* Background glow orbs */}
      <motion.div className="absolute pointer-events-none" style={{ x: x1, y: y1, left: '10%', top: '15%' }}>
        <div className="w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #00d4ff, transparent)' }} />
      </motion.div>
      <motion.div className="absolute pointer-events-none" style={{ x: x2, y: y2, right: '10%', top: '25%' }}>
        <div className="w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />
      </motion.div>
      <motion.div className="absolute pointer-events-none" style={{ x: x3, y: y3, left: '40%', bottom: '15%' }}>
        <div className="w-64 h-64 rounded-full opacity-15 blur-3xl" style={{ background: 'radial-gradient(circle, #ec4899, transparent)' }} />
      </motion.div>

      {/* Floating badges */}
      <motion.div style={{ x: x1, y: y1 }} className="absolute left-8 top-1/4 hidden xl:block">
        <FloatingBadge delay={0}>React 18</FloatingBadge>
      </motion.div>
      <motion.div style={{ x: x2, y: y2 }} className="absolute right-8 top-1/3 hidden xl:block">
        <FloatingBadge delay={1.5}>Node.js</FloatingBadge>
      </motion.div>
      <motion.div style={{ x: x3, y: y3 }} className="absolute right-12 bottom-1/3 hidden xl:block">
        <FloatingBadge delay={0.8}>Tailwind</FloatingBadge>
      </motion.div>
      <motion.div style={{ x: x1, y: y2 }} className="absolute left-12 bottom-1/3 hidden xl:block">
        <FloatingBadge delay={2}>TypeScript</FloatingBadge>
      </motion.div>

      {/* Main content — two column on large screens */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 pt-24">

        {/* LEFT: Text */}
        <div className="flex-1 text-center lg:text-left">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 mb-8 border border-white/10"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-mono text-white/60">Available for hire</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm font-mono text-white/40 mb-3 tracking-widest uppercase"
          >
            Hello, World! I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-space font-bold text-6xl md:text-7xl lg:text-8xl text-white mb-4 leading-none tracking-tight"
          >
            Pratham
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl font-light mb-6 h-10 flex items-center lg:justify-start justify-center"
          >
            <TypingText />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/50 text-base max-w-lg mb-10 leading-relaxed mx-auto lg:mx-0"
          >
            Computer Science student with a strong interest in Software Engineering, Artificial Intelligence,
            Cloud Computing, and Full-Stack Development. Passionate about problem solving, continuous learning,
            and building technology-driven solutions that create real-world impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 mb-10 justify-center lg:justify-start"
          >
            <motion.button
              onClick={scrollToProjects}
              className="px-7 py-3.5 rounded-2xl font-semibold text-sm text-white"
              style={{ background: 'linear-gradient(135deg, #00d4ff, #7c3aed)' }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 212, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="px-7 py-3.5 rounded-2xl font-semibold text-sm text-white/80 glass border border-white/10"
              whileHover={{ scale: 1.05, borderColor: 'rgba(0, 212, 255, 0.4)', color: '#fff' }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-3 justify-center lg:justify-start flex-wrap"
          >
            {SOCIALS.map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white/40 hover:text-white border border-white/8 hover:border-cyan-400/40 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                title={label}
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: Photo */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex-shrink-0"
          style={{ x: x2, y: y1 }}
        >
          {/* Glow ring behind photo */}
          <div
            className="absolute inset-0 rounded-3xl blur-2xl opacity-40 scale-105"
            style={{ background: 'linear-gradient(135deg, #00d4ff, #7c3aed, #ec4899)' }}
          />

          {/* Rotating border ring */}
          <motion.div
            className="absolute -inset-1 rounded-3xl opacity-60"
            style={{
              background: 'conic-gradient(from 0deg, #00d4ff, #7c3aed, #ec4899, #00d4ff)',
              borderRadius: '1.5rem',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />

          {/* Photo container */}
          <div
            className="relative w-64 h-80 md:w-72 md:h-96 rounded-3xl overflow-hidden border-2 border-white/10"
            style={{ background: '#0a0f1e' }}
          >
            <img
              src="/pratham.png"
              alt="Pratham — Full Stack Developer"
              className="w-full h-full object-cover object-top"
            />
            {/* Subtle gradient overlay at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1/3"
              style={{ background: 'linear-gradient(transparent, rgba(2,4,9,0.6))' }}
            />
          </div>

          {/* Floating stat cards on photo */}
          <motion.div
            className="absolute -bottom-4 -left-6 glass-strong rounded-xl px-4 py-2.5 border border-white/10"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="text-xs text-white/40 font-mono">LeetCode</div>
            <div className="font-space font-bold text-cyan-400 text-sm">100+ Solved</div>
          </motion.div>

          <motion.div
            className="absolute -top-4 -right-6 glass-strong rounded-xl px-4 py-2.5 border border-white/10"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <div className="text-xs text-white/40 font-mono">Projects</div>
            <div className="font-space font-bold text-purple-400 text-sm">2+ Shipped</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        onClick={scrollToProjects}
      >
        <span className="text-xs text-white/30 font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} className="text-white/30" />
      </motion.div>

      {/* Grid lines decoration */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
    </section>
  )
}
