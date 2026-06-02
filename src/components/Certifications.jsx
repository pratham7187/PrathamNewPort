import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, Star } from 'lucide-react'

// ─── Real Certificate Data ────────────────────────────────────────────────────
const CERTIFICATES = [
  {
    id: 'abacus',
    title: 'Abacus & Brain Gym — All 9 Levels',
    issuer: 'Generation Next (National Level)',
    issuerEmoji: 'ABS',
    date: '2015',
    file: '/certs/Abacus.pdf',
    description:
      'Completed all 9 Levels of Abacus & Brain Gym training. Graduated under Generation Next National Level Competition. Developed strong mental arithmetic, concentration, and analytical abilities.',
    tags: ['Mental Arithmetic', 'Brain Training', 'National Level'],
    color: '#fbbf24',
    isSpecial: true,
  },
  {
    id: 'nexathon',
    title: 'Nexathon Hackathon',
    issuer: 'Nexathon',
    issuerEmoji: 'HCK',
    date: '2024',
    file: '/certs/Nexathon-Certificate.pdf',
    description:
      'Participated in the Nexathon hackathon. Showcased problem-solving and rapid development skills under time pressure.',
    tags: ['Hackathon', 'Problem Solving', 'Teamwork'],
    color: '#00d4ff',
    isSpecial: false,
  },
  {
    id: 'codemanthan',
    title: 'Code Manthan',
    issuer: 'Code Manthan',
    issuerEmoji: 'COD',
    date: '2024',
    file: '/certs/CodeManthan.pdf',
    description:
      'Competitive coding event testing algorithmic thinking and problem-solving under constraints.',
    tags: ['Competitive Coding', 'Algorithms', 'DSA'],
    color: '#7c3aed',
    isSpecial: false,
  },
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    issuer: 'Online Certification',
    issuerEmoji: 'DSA',
    date: '2024',
    file: '/certs/Data Structures and Algorithms.pdf',
    description:
      'Certified in DSA — arrays, linked lists, trees, graphs, sorting, searching, and dynamic programming.',
    tags: ['DSA', 'Algorithms', 'C++', 'Python'],
    color: '#10b981',
    isSpecial: false,
  },
  {
    id: 'database',
    title: 'Database & SQL',
    issuer: 'Online Certification',
    issuerEmoji: 'SQL',
    date: '2024',
    file: '/certs/Database and SQ.pdf',
    description:
      'Certified in Database concepts and SQL — relational databases, normalization, queries, joins, indexing, and MongoDB.',
    tags: ['SQL', 'MongoDB', 'MySQL', 'Database Design'],
    color: '#ec4899',
    isSpecial: false,
  },
  {
    id: 'internship',
    title: 'Internship Completion Certificate',
    issuer: 'Organization',
    issuerEmoji: 'ORG',
    date: '2024',
    file: '/certs/Internship Completion Certificate_1706525528308.pdf',
    description:
      'Successfully completed an internship program. Gained hands-on experience in real-world software development.',
    tags: ['Internship', 'Professional', 'Full Stack'],
    color: '#f97316',
    isSpecial: false,
  },
  {
    id: 'codesphere',
    title: 'CodeSphere — 24-Hour Global Codeathon',
    issuer: 'CodeSphere',
    issuerEmoji: 'GLB',
    date: '2024',
    file: '/certs/Pratham B G Rai_CodeSphere_ A 24-Hour Global Level Codeathon.pdf',
    description:
      'Competed in CodeSphere — a 24-hour Global Level Codeathon solving complex algorithmic challenges worldwide.',
    tags: ['Global Competition', '24-Hour', 'Competitive Coding'],
    color: '#a78bfa',
    isSpecial: false,
  },
]

const STATS = [
  { label: 'Certificates', value: `${CERTIFICATES.length}` },
  { label: 'Competitions', value: '3+' },
  { label: 'Abacus Levels', value: '9/9' },
  { label: 'LeetCode Solved', value: '100+' },
]

// ─── Certificate Card — clicks open PDF in new tab ────────────────────────────
function CertCard({ cert, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <motion.a
        href={cert.file}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${cert.title} PDF`}
        className={`relative rounded-2xl p-6 overflow-hidden h-full flex flex-col block ${
          cert.isSpecial ? 'ring-2 ring-yellow-400/40' : ''
        }`}
        style={{
          background: `linear-gradient(135deg, ${cert.color}12, ${cert.color}05)`,
          border: `1px solid ${cert.color}35`,
          textDecoration: 'none',
          display: 'flex',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{
          scale: 1.03,
          boxShadow: `0 20px 60px ${cert.color}30, 0 0 0 1px ${cert.color}50`,
        }}
        whileTap={{ scale: 0.98 }}
        data-cursor-hover
      >
        {/* Special badge */}
        {cert.isSpecial && (
          <motion.div
            className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold z-10"
            style={{ background: 'rgba(251,191,36,0.15)', border: '1px solid rgba(251,191,36,0.4)', color: '#fbbf24' }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Star size={10} fill="currentColor" /> Special
          </motion.div>
        )}

        {/* Mouse glow */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${cert.color}12, transparent 70%)`,
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.3s',
          }}
        />

        {/* Icon + header */}
        <div className="flex items-start gap-3 mb-4 relative z-10">
          <motion.div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold font-mono flex-shrink-0"
            style={{
              background: `${cert.color}18`,
              border: `1px solid ${cert.color}35`,
              boxShadow: hovered ? `0 0 20px ${cert.color}30` : 'none',
            }}
            animate={hovered ? { scale: 1.08, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.2 }}
          >
            {cert.issuerEmoji}
          </motion.div>
          <div className="flex-1 min-w-0">
            <h3 className="font-space font-bold text-white text-sm leading-snug mb-1">{cert.title}</h3>
            <p className="text-xs font-mono truncate" style={{ color: cert.color }}>
              {cert.issuer} · {cert.date}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/50 text-xs leading-relaxed mb-4 line-clamp-3 relative z-10 flex-1">
          {cert.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4 relative z-10">
          {cert.tags.slice(0, 3).map(t => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-md text-xs font-mono"
              style={{ background: `${cert.color}15`, color: `${cert.color}cc`, border: `1px solid ${cert.color}25` }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="flex items-center gap-1.5 text-xs font-semibold relative z-10"
          style={{ color: cert.color }}
          animate={{ x: hovered ? 4 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ExternalLink size={11} /> Click to open PDF ↗
        </motion.div>
      </motion.a>
    </motion.div>
  )
}

// ─── Abacus Special Banner — also opens PDF ───────────────────────────────────
function AbacusBanner({ isInView }) {
  return (
    <motion.a
      href="/certs/Abacus.pdf"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative overflow-hidden rounded-3xl p-7 mb-14 block"
      style={{
        background: 'linear-gradient(135deg, rgba(251,191,36,0.12), rgba(245,158,11,0.05), rgba(252,211,77,0.08))',
        border: '1px solid rgba(251,191,36,0.35)',
        boxShadow: '0 0 60px rgba(251,191,36,0.08)',
        textDecoration: 'none',
        cursor: 'pointer',
      }}
      whileHover={{ boxShadow: '0 0 80px rgba(251,191,36,0.18)', scale: 1.005 }}
      whileTap={{ scale: 0.99 }}
      data-cursor-hover
    >
      {/* Animated glow orbs */}
      <motion.div
        className="absolute -right-12 -top-12 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: '#fbbf24' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: '#f59e0b' }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
        <motion.div
          className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold font-mono"
          style={{ background: 'rgba(251,191,36,0.15)', border: '1px solid rgba(251,191,36,0.4)' }}
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          ABS
        </motion.div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span
              className="px-3 py-1 rounded-full text-xs font-bold"
              style={{ background: 'rgba(251,191,36,0.2)', color: '#fbbf24', border: '1px solid rgba(251,191,36,0.4)' }}
            >
              Special Achievement
            </span>
            <span className="text-xs font-mono text-white/30">National Level · Generation Next</span>
            <span
              className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ml-auto"
              style={{ background: 'rgba(251,191,36,0.12)', color: '#fbbf24', border: '1px solid rgba(251,191,36,0.3)' }}
            >
              <ExternalLink size={10} /> View Certificate ↗
            </span>
          </div>
          <h3 className="font-space font-bold text-2xl md:text-3xl text-white mb-2">
            Abacus &amp; Brain Gym —{' '}
            <span style={{ color: '#fbbf24' }}>All 9 Levels Completed</span>
          </h3>
          <p className="text-white/55 text-sm leading-relaxed max-w-2xl">
            Completed all <strong className="text-white/80">Nine Steps</strong> of Abacus &amp; Brain Gym training and
            graduated under the <strong className="text-white/80">Generation Next National Level Competition</strong>.
            Developed exceptional mental arithmetic, rapid calculation, heightened concentration, and sharp analytical abilities.
          </p>
        </div>

        <div className="flex md:flex-col gap-3 flex-shrink-0">
          {[{ label: 'Levels', value: '9 / 9' }, { label: 'Standard', value: 'National' }].map(({ label, value }) => (
            <div
              key={label}
              className="px-4 py-2.5 rounded-xl text-center"
              style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.25)' }}
            >
              <div className="font-space font-bold text-lg" style={{ color: '#fbbf24' }}>{value}</div>
              <div className="text-xs text-white/40">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.a>
  )
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function Certifications() {
  const titleRef = useRef(null)
  const isInView = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section id="certifications" className="relative py-28 px-6" style={{ zIndex: 1 }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(251,191,36,0.03) 0%, rgba(124,58,237,0.04) 50%, transparent 80%)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono tracking-widest uppercase text-white/30 mb-4"
          >
            Achievements & Recognition
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-space font-bold text-5xl md:text-6xl text-white mb-4"
          >
            Certs &{' '}
            <span className="text-gradient-cyan">Achievements</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/40 text-base max-w-lg mx-auto"
          >
            Every certification earned, every competition entered, every skill sharpened.
            <span className="text-cyan-400/70"> Click any card to open the certificate PDF.</span>
          </motion.p>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          {STATS.map(({ emoji, value, label }, i) => (
            <motion.div
              key={label}
              className="glass-strong rounded-2xl p-5 text-center border border-white/8"
              whileHover={{ scale: 1.04, borderColor: 'rgba(0,212,255,0.3)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
            >
              <div className="font-space font-bold text-2xl text-gradient-cyan">{value}</div>
              <div className="text-xs text-white/40 mt-1">{label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* ⭐ Abacus Special Banner */}
        <AbacusBanner isInView={isInView} />

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="h-px flex-1 bg-white/8" />
          <span className="text-xs font-mono text-white/30 tracking-widest uppercase px-3">
            All Certificates — Click to Open PDF ↗
          </span>
          <div className="h-px flex-1 bg-white/8" />
        </motion.div>

        {/* Certificate Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {CERTIFICATES.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
