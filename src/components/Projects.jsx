import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion'
import { ExternalLink, ArrowRight, ShoppingCart, ChefHat, Eye, GitFork } from 'lucide-react'

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

const PROJECTS = [
  {
    id: 'clickkart',
    title: 'ClickKart',
    subtitle: 'Full Stack E-Commerce Platform',
    icon: 'CK',
    status: 'Completed',
    statusColor: '#10b981',
    description: 'Complete e-commerce web app with product browsing, user authentication, cart, wishlist, and order management — fully integrated frontend and backend.',
    highlights: [
      'Men\'s, Women\'s & Kids product sections',
      'Login / Signup authentication',
      'Cart, wishlist & order placement',
      'Dynamic product loading from MongoDB',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'MongoDB'],
    color: '#00d4ff',
    colorSecondary: '#0891b2',
    gradient: 'linear-gradient(135deg, rgba(0,212,255,0.12), rgba(8,145,178,0.04))',
    borderColor: 'rgba(0, 212, 255, 0.22)',
    glowColor: 'rgba(0, 212, 255, 0.28)',
    github: 'https://github.com/pratham7187/clickart',
    live: null,
  },
  {
    id: 'cookmate',
    title: 'CookMate',
    subtitle: 'AI Voice-Based Cooking Assistant',
    icon: 'CM',
    status: 'Completed',
    statusColor: '#10b981',
    description: 'AI-powered cooking assistant with voice interaction, ingredient-based recipe suggestions, and step-by-step cooking guidance designed for real-time kitchen use.',
    highlights: [
      'Voice-based interaction & guidance',
      'AI recipe recommendations',
      'Ingredient-aware suggestions',
      'Cooking-focused — not a generic chatbot',
    ],
    tech: ['Python', 'AI APIs', 'Speech Recognition', 'Voice Processing'],
    color: '#ec4899',
    colorSecondary: '#be185d',
    gradient: 'linear-gradient(135deg, rgba(236,72,153,0.12), rgba(190,24,93,0.04))',
    borderColor: 'rgba(236, 72, 153, 0.22)',
    glowColor: 'rgba(236, 72, 153, 0.28)',
    github: 'https://github.com/pratham7187/cookmate-ai',
    live: null,
  },
  {
    id: 'vitadetect',
    title: 'VitaDetect',
    subtitle: 'AI Vitamin Deficiency Detection',
    icon: 'VD',
    status: 'In Development',
    statusColor: '#fbbf24',
    description: 'Final-year project using Computer Vision and Deep Learning to detect possible vitamin deficiencies from facial and body-image symptoms with nutritional recommendations.',
    highlights: [
      'Image-based deficiency detection',
      'Deep Learning & Computer Vision',
      'Early health screening support',
      'Nutritional recommendation system',
    ],
    tech: ['Python', 'Machine Learning', 'Deep Learning', 'OpenCV'],
    color: '#a78bfa',
    colorSecondary: '#7c3aed',
    gradient: 'linear-gradient(135deg, rgba(167,139,250,0.12), rgba(124,58,237,0.04))',
    borderColor: 'rgba(167, 139, 250, 0.22)',
    glowColor: 'rgba(167, 139, 250, 0.28)',
    github: 'https://github.com/anchithnx/vitadetect',
    live: null,
  },
  {
    id: 'digitaltwin',
    title: 'Digital Twin Supply Chain',
    subtitle: 'Supply Chain Simulation Platform',
    icon: 'DT',
    status: 'In Development',
    statusColor: '#fbbf24',
    description: 'Collaborative project exploring Digital Twin technology for supply chain monitoring, simulation, and optimization — creating virtual representations of real-world logistics.',
    highlights: [
      'Supply chain workflow modeling',
      'Digital twin simulation concepts',
      'Data visualization & tracking',
      'Collaborative team project',
    ],
    tech: ['Python', 'Data Visualization', 'Simulation', 'Web Technologies'],
    color: '#f97316',
    colorSecondary: '#ea580c',
    gradient: 'linear-gradient(135deg, rgba(249,115,22,0.12), rgba(234,88,12,0.04))',
    borderColor: 'rgba(249, 115, 22, 0.22)',
    glowColor: 'rgba(249, 115, 22, 0.28)',
    github: 'https://github.com/Athmi-S-Rai/Digital-Twin-supply-chain-system',
    live: null,
  },
]

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: '-60px' })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 25 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 25 })
  const glowX = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%'])
  const glowY = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%'])
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    mouseX.set(0); mouseY.set(0); setHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX, rotateY,
          transformStyle: 'preserve-3d',
          background: project.gradient,
          border: `1px solid ${project.borderColor}`,
          boxShadow: hovered
            ? `0 30px 80px ${project.glowColor}, inset 0 0 60px ${project.glowColor.replace('0.28', '0.04')}`
            : 'none',
        }}
        className="relative rounded-3xl p-7 overflow-hidden cursor-default transition-shadow duration-500 h-full flex flex-col"
        data-cursor-hover
      >
        {/* Mouse-tracking glow */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glowX} ${glowY}, ${project.glowColor.replace('0.28', '0.12')}, transparent 65%)`,
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.3s',
          }}
        />
        <div className="absolute inset-0 backdrop-blur-sm rounded-3xl" />

        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-3">
              <motion.div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-xs font-mono font-bold flex-shrink-0"
                style={{
                  background: `${project.color}18`,
                  border: `1px solid ${project.color}35`,
                  boxShadow: hovered ? `0 0 24px ${project.color}30` : 'none',
                }}
                animate={hovered ? { scale: 1.08, rotate: 5 } : { scale: 1, rotate: 0 }}
                transition={{ duration: 0.25 }}
              >
                {project.icon}
              </motion.div>
              <div>
                <h3 className="font-space font-bold text-xl text-white leading-tight">{project.title}</h3>
                <p className="text-xs font-mono mt-0.5" style={{ color: project.color }}>{project.subtitle}</p>
              </div>
            </div>

            {/* Status badge */}
            <span
              className="flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold"
              style={{
                background: `${project.statusColor}18`,
                color: project.statusColor,
                border: `1px solid ${project.statusColor}35`,
              }}
            >
              {project.status}
            </span>
          </div>

          {/* Description */}
          <p className="text-white/55 text-sm leading-relaxed mb-5">{project.description}</p>

          {/* Key highlights */}
          <ul className="space-y-2 mb-5 flex-1">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-xs text-white/60">
                <span className="mt-0.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: project.color }} />
                {h}
              </li>
            ))}
          </ul>

          {/* Tech chips */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-lg text-xs font-mono glass border border-white/8 text-white/50"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Footer actions */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/6">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub`}
              className="flex items-center gap-1.5 text-xs font-medium text-white/40 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GithubIcon size={14} /> Code
            </motion.a>

            <motion.div
              className="flex items-center gap-1 ml-auto text-xs font-semibold"
              style={{ color: project.color }}
              animate={{ x: hovered ? 4 : 0 }}
              transition={{ duration: 0.2 }}
            >
              Explore <ArrowRight size={12} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const titleRef = useRef(null)
  const isInView = useInView(titleRef, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="relative py-32 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono tracking-widest uppercase text-white/30 mb-4"
          >
            Featured Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-space font-bold text-5xl md:text-6xl text-white mb-4"
          >
            Selected{' '}
            <span className="text-gradient-cyan">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/40 text-base max-w-md mx-auto"
          >
            Real-world projects built from scratch — full-stack, AI-powered, and research-grade.
          </motion.p>
        </div>

        {/* 2×2 Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center text-xs text-white/20 font-mono mt-10"
        >
          More projects on{' '}
          <a
            href="https://github.com/pratham7187"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400/60 hover:text-cyan-400 transition-colors"
          >
            github.com/pratham7187
          </a>
        </motion.p>
      </div>
    </section>
  )
}
