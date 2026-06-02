import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SKILL_CATEGORIES = [
  {
    label: 'Languages',
    icon: 'LANG',
    color: '#00d4ff',
    skills: [
      { name: 'C++', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'JavaScript', level: 82 },
      { name: 'C', level: 78 },
    ],
  },
  {
    label: 'Frontend',
    icon: 'FE',
    color: '#7c3aed',
    skills: [
      { name: 'HTML', level: 92 },
      { name: 'CSS', level: 88 },
      { name: 'React', level: 80 },
    ],
  },
  {
    label: 'Backend & DB',
    icon: 'BE',
    color: '#ec4899',
    skills: [
      { name: 'Flask', level: 75 },
      { name: 'MongoDB', level: 80 },
      { name: 'MySQL', level: 78 },
    ],
  },
  {
    label: 'Tools',
    icon: 'OPS',
    color: '#10b981',
    skills: [
      { name: 'Git', level: 88 },
      { name: 'GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 80 },
    ],
  },
]

const INTERESTS = [
  { label: 'Networking', icon: 'NET', color: '#00d4ff' },
  { label: 'Cloud Computing', icon: 'CLD', color: '#7c3aed' },
  { label: 'Artificial Intelligence', icon: 'AI', color: '#ec4899' },
  { label: 'DSA', icon: 'DSA', color: '#10b981' },
  { label: 'OOP', icon: 'OOP', color: '#f97316' },
  { label: 'Mental Arithmetic', icon: 'ABS', color: '#fbbf24' },
]

const TECH_ORBS = [
  { name: 'C++', color: '#00599c', x: '5%', y: '20%' },
  { name: 'Python', color: '#ffd342', x: '88%', y: '10%' },
  { name: 'Java', color: '#f89820', x: '10%', y: '72%' },
  { name: 'React', color: '#61dafb', x: '82%', y: '65%' },
  { name: 'Flask', color: '#fff', x: '50%', y: '3%' },
  { name: 'MongoDB', color: '#47a248', x: '3%', y: '47%' },
  { name: 'VS Code', color: '#007acc', x: '90%', y: '38%' },
  { name: 'Postman', color: '#ff6c37', x: '70%', y: '85%' },
]

function SkillBar({ name, level, color, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-white/70 font-medium">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}70)` }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: 0.15 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  )
}

function CategoryCard({ cat, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="glass-strong rounded-3xl p-6 border border-white/8 hover:border-white/15 transition-colors duration-300"
      style={{ background: `linear-gradient(135deg, ${cat.color}08, transparent)` }}
      whileHover={{ boxShadow: `0 20px 60px ${cat.color}15` }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          className="w-11 h-11 rounded-xl flex items-center justify-center text-xs font-mono font-bold"
          style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}30` }}
          whileHover={{ scale: 1.1, rotate: 6 }}
        >
          {cat.icon}
        </motion.div>
        <div>
          <h3 className="font-space font-semibold text-white">{cat.label}</h3>
          <p className="text-xs text-white/30">{cat.skills.length} skills</p>
        </div>
        <div
          className="ml-auto w-2 h-2 rounded-full"
          style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}` }}
        />
      </div>

      {/* Bars */}
      {cat.skills.map((skill, i) => (
        <SkillBar key={skill.name} {...skill} color={cat.color} index={i} />
      ))}
    </motion.div>
  )
}

export default function Skills() {
  const titleRef = useRef(null)
  const isInView = useInView(titleRef, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative py-32 px-6" style={{ zIndex: 1 }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(124, 58, 237, 0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono tracking-widest uppercase text-white/30 mb-4"
          >
            What I Know
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-space font-bold text-5xl md:text-6xl text-white mb-4"
          >
            Technical{' '}
            <span className="text-gradient-pink">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/40 text-base max-w-md mx-auto"
          >
            My real tech stack — languages, frameworks, databases, and tools I use to build things.
          </motion.p>
        </div>

        {/* Floating tech orbs */}
        <div className="relative h-36 mb-14 hidden lg:block">
          {TECH_ORBS.map(({ name, color, x, y }, i) => (
            <motion.div
              key={name}
              className="absolute"
              style={{ left: x, top: y }}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <motion.div
                className="glass rounded-xl px-4 py-2 text-xs font-mono font-bold border"
                style={{ color, borderColor: `${color}40`, boxShadow: `0 0 20px ${color}20` }}
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                whileHover={{ scale: 1.1 }}
              >
                {name}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Skill Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {SKILL_CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.label} cat={cat} index={i} />
          ))}
        </div>

        {/* Areas of Interest */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="glass rounded-3xl p-7 border border-white/8"
        >
          <p className="text-xs font-mono text-white/30 mb-5 tracking-widest uppercase">Areas of Interest</p>
          <div className="flex flex-wrap gap-3">
            {INTERESTS.map(({ label, icon, color }) => (
              <motion.div
                key={label}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass border border-white/8"
                whileHover={{
                  scale: 1.05,
                  borderColor: `${color}50`,
                  boxShadow: `0 0 20px ${color}20`,
                }}
              >
                <span className="text-xs font-mono font-bold" style={{ color }}>{icon}</span>
                <span className="text-sm text-white/60 font-medium">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
