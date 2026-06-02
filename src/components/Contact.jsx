import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Briefcase, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react'

// ─── Social Icons ─────────────────────────────────────────────────────────────
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

const XIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

const LeetcodeIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
)

// ─── Data ─────────────────────────────────────────────────────────────────────
const SOCIALS = [
  { Icon: GithubIcon,    href: 'https://github.com/pratham7187',                          label: 'GitHub',    color: '#e2e8f0' },
  { Icon: LinkedinIcon,  href: 'https://www.linkedin.com/in/pratham-b-g-rai-19445b291/', label: 'LinkedIn',  color: '#0a66c2' },
  { Icon: InstagramIcon, href: 'https://www.instagram.com/pratham_bg_rai/',              label: 'Instagram', color: '#e1306c' },
  { Icon: XIcon,         href: 'https://x.com/romanprath18',                             label: 'X',         color: '#e2e8f0' },
  { Icon: LeetcodeIcon,  href: 'https://leetcode.com/u/prathambgrai/',                   label: 'LeetCode',  color: '#ffa116' },
]

const CONTACT_INFO = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'bgraipratham@gmail.com',
    color: '#00d4ff',
    href: 'mailto:bgraipratham@gmail.com',
  },
  {
    Icon: MapPin,
    label: 'Location',
    value: 'Karnataka, India',
    color: '#ec4899',
    href: null,
  },
  {
    Icon: Briefcase,
    label: 'Availability',
    value: 'Open to Internships, Freelance & Collaboration',
    color: '#10b981',
    href: null,
  },
]

// ─── Validation ───────────────────────────────────────────────────────────────
function validate(form) {
  const errors = {}

  if (!form.name.trim())
    errors.name = 'Name is required.'
  else if (form.name.trim().length < 2)
    errors.name = 'Name must be at least 2 characters.'

  if (!form.email.trim())
    errors.email = 'Email address is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
    errors.email = 'Please enter a valid email address.'

  if (!form.subject.trim())
    errors.subject = 'Subject is required.'
  else if (form.subject.trim().length < 3)
    errors.subject = 'Subject must be at least 3 characters.'

  if (!form.message.trim())
    errors.message = 'Message is required.'
  else if (form.message.trim().length < 10)
    errors.message = 'Message must be at least 10 characters.'

  return errors
}

// URL-encode form data for Netlify Forms fetch submission
function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

// ─── Floating Input ───────────────────────────────────────────────────────────
function FloatingInput({ id, label, type = 'text', isTextarea = false, value, onChange, onBlur, error }) {
  const [focused, setFocused] = useState(false)
  const hasValue = value.length > 0

  const borderColor = error
    ? 'rgba(248,113,113,0.6)'
    : focused
    ? 'rgba(0, 212, 255, 0.5)'
    : 'rgba(255,255,255,0.08)'

  const boxShadow = error
    ? '0 0 16px rgba(248,113,113,0.12)'
    : focused
    ? '0 0 20px rgba(0, 212, 255, 0.1), inset 0 0 20px rgba(0,212,255,0.03)'
    : 'none'

  const labelColor = error ? '#f87171' : focused ? '#00d4ff' : 'rgba(255,255,255,0.4)'

  const sharedStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${borderColor}`,
    boxShadow,
    transition: 'border-color 0.2s, box-shadow 0.2s',
  }

  return (
    <div className="relative">
      <motion.label
        htmlFor={id}
        className="absolute left-4 pointer-events-none font-medium transition-all duration-200"
        animate={{
          top: focused || hasValue ? '8px' : '50%',
          y: focused || hasValue ? 0 : isTextarea ? '-80%' : '-50%',
          fontSize: focused || hasValue ? '10px' : '14px',
          color: labelColor,
        }}
      >
        {label}
      </motion.label>

      {isTextarea ? (
        <textarea
          id={id}
          name={id.replace('contact-', '')}
          rows={5}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={(e) => { setFocused(false); onBlur && onBlur(e) }}
          className="w-full pt-7 pb-3 px-4 bg-transparent text-white text-sm resize-none outline-none rounded-2xl"
          style={sharedStyle}
        />
      ) : (
        <input
          id={id}
          name={id.replace('contact-', '')}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={(e) => { setFocused(false); onBlur && onBlur(e) }}
          className="w-full pt-7 pb-3 px-4 bg-transparent text-white text-sm outline-none rounded-2xl"
          style={sharedStyle}
        />
      )}

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="mt-1.5 text-xs text-red-400 flex items-center gap-1 pl-1"
          >
            <AlertCircle size={10} />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function Contact() {
  const titleRef = useRef(null)
  const isInView = useInView(titleRef, { once: true, margin: '-100px' })

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    // Clear error for field once user starts correcting it
    if (touched[field]) {
      const next = { ...form, [field]: e.target.value }
      const nextErrors = validate(next)
      setErrors((prev) => ({ ...prev, [field]: nextErrors[field] }))
    }
  }

  const handleBlur = (field) => () => {
    setTouched((t) => ({ ...t, [field]: true }))
    const fieldErrors = validate(form)
    setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Mark all as touched and run full validation
    setTouched({ name: true, email: true, subject: true, message: true })
    const fieldErrors = validate(form)
    setErrors(fieldErrors)

    if (Object.keys(fieldErrors).length > 0) return

    setStatus('loading')

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          'bot-field': '',
          ...form,
        }),
      })

      // Netlify Forms returns a 200 or 302 redirect — both mean success
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTouched({})
      setErrors({})
      setTimeout(() => setStatus('idle'), 6000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 6000)
    }
  }

  return (
    <section id="contact" className="relative py-32 px-6 pb-20" style={{ zIndex: 1 }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(124, 58, 237, 0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono tracking-widest uppercase text-white/30 mb-4"
          >
            Let's Connect
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-space font-bold text-5xl md:text-6xl text-white mb-4"
          >
            Get In{' '}
            <span className="text-gradient-cyan">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/40 text-base max-w-xl mx-auto leading-relaxed"
          >
            Whether you have an internship opportunity, a project idea, or just want to connect
            with a fellow developer — I'm always open to a good conversation. Let's build something together.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* Left Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Contact info cards */}
            {CONTACT_INFO.map(({ Icon, label, value, color, href }, i) => {
              const Wrapper = href ? 'a' : 'div'
              const wrapperProps = href
                ? { href, target: '_blank', rel: 'noopener noreferrer' }
                : {}

              return (
                <motion.div
                  key={label}
                  className="glass-strong rounded-2xl p-5 border border-white/8 flex items-center gap-4 group"
                  whileHover={{ borderColor: `${color}40`, x: 4 }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${color}15`,
                      border: `1px solid ${color}30`,
                      boxShadow: `0 0 15px ${color}20`,
                    }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <Wrapper {...wrapperProps} className="flex-1 min-w-0">
                    <p className="text-xs text-white/30 mb-0.5">{label}</p>
                    <p
                      className="text-sm text-white/70 font-medium leading-snug"
                      style={href ? { color, textDecoration: 'none' } : {}}
                    >
                      {value}
                    </p>
                  </Wrapper>
                </motion.div>
              )
            })}

            {/* Social links */}
            <motion.div
              className="glass-strong rounded-2xl p-6 border border-white/8 mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="text-xs font-mono text-white/30 mb-4 tracking-widest uppercase">Find me on</p>
              <div className="flex gap-3">
                {SOCIALS.map(({ Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 glass rounded-xl flex items-center justify-center text-white/40 border border-white/8"
                    whileHover={{ scale: 1.1, color, borderColor: `${color}60` }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              name="contact"
              onSubmit={handleSubmit}
              className="glass-strong rounded-3xl p-8 border border-white/8"
              noValidate
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              {/* Netlify required hidden fields */}
              <input type="hidden" name="form-name" value="contact" />

              {/* Honeypot — keeps bots out, must stay hidden */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <label>
                  Don't fill this out if you're human:
                  <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <FloatingInput
                  id="contact-name"
                  label="Your Name"
                  value={form.name}
                  onChange={handleChange('name')}
                  error={touched.name ? errors.name : undefined}
                  onBlur={handleBlur('name')}
                />
                <FloatingInput
                  id="contact-email"
                  label="Email Address"
                  type="email"
                  value={form.email}
                  onChange={handleChange('email')}
                  error={touched.email ? errors.email : undefined}
                  onBlur={handleBlur('email')}
                />
              </div>

              <div className="mb-4">
                <FloatingInput
                  id="contact-subject"
                  label="Subject"
                  value={form.subject}
                  onChange={handleChange('subject')}
                  error={touched.subject ? errors.subject : undefined}
                  onBlur={handleBlur('subject')}
                />
              </div>

              <div className="mb-6">
                <FloatingInput
                  id="contact-message"
                  label="Your Message"
                  isTextarea
                  value={form.message}
                  onChange={handleChange('message')}
                  error={touched.message ? errors.message : undefined}
                  onBlur={handleBlur('message')}
                />
              </div>

              {/* Success / Error banners */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.3 }}
                    className="mb-5 flex items-start gap-3 rounded-2xl px-5 py-4 text-sm"
                    style={{
                      background: 'rgba(16,185,129,0.1)',
                      border: '1px solid rgba(16,185,129,0.3)',
                      color: '#6ee7b7',
                    }}
                  >
                    <CheckCircle size={18} className="flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="block mb-0.5">Message sent successfully.</strong>
                      Thanks for reaching out — I'll get back to you as soon as I can.
                    </span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.3 }}
                    className="mb-5 flex items-start gap-3 rounded-2xl px-5 py-4 text-sm"
                    style={{
                      background: 'rgba(239,68,68,0.1)',
                      border: '1px solid rgba(239,68,68,0.3)',
                      color: '#fca5a5',
                    }}
                  >
                    <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="block mb-0.5">Something went wrong.</strong>
                      Failed to send your message. Please try again or reach out directly via email.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit button */}
              <motion.button
                type="submit"
                id="contact-submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full py-4 rounded-2xl font-semibold text-sm text-white flex items-center justify-center gap-2 relative overflow-hidden"
                style={{
                  background:
                    status === 'success'
                      ? 'linear-gradient(135deg, #10b981, #059669)'
                      : status === 'error'
                      ? 'linear-gradient(135deg, #ef4444, #b91c1c)'
                      : 'linear-gradient(135deg, #00d4ff, #7c3aed)',
                  opacity: status === 'loading' ? 0.8 : 1,
                  cursor: status === 'loading' || status === 'success' ? 'not-allowed' : 'pointer',
                }}
                whileHover={status === 'idle' ? { scale: 1.02, boxShadow: '0 0 40px rgba(0, 212, 255, 0.4)' } : {}}
                whileTap={status === 'idle' ? { scale: 0.98 } : {}}
              >
                {status === 'idle' && (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
                {status === 'loading' && (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      <Loader size={16} />
                    </motion.div>
                    Sending...
                  </>
                )}
                {status === 'success' && (
                  <>
                    <CheckCircle size={16} />
                    Message Sent
                  </>
                )}
                {status === 'error' && (
                  <>
                    <AlertCircle size={16} />
                    Failed — Try Again
                  </>
                )}
              </motion.button>

              <p className="text-center text-xs text-white/20 font-mono mt-4">
                Powered by Netlify Forms — no backend required.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
