import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Code2, Award, Briefcase, BookOpen } from 'lucide-react'

const TIMELINE_EVENTS = [
  {
    id: 1,
    Icon: GraduationCap,
    year: '2011 – 2021',
    title: '1st – 10th Standard',
    org: 'Vivekananda English Medium School',
    location: 'Thenkila',
    description:
      'Completed my entire schooling here — a decade of foundational learning. Built a strong base in mathematics, science, and English. Also completed all 9 levels of Abacus & Brain Gym training during this period, developing exceptional mental arithmetic, concentration, memory, and analytical abilities.',
    tags: ['Mathematics', 'Science', 'Abacus', 'Brain Gym', 'Foundation'],
    color: '#10b981',
    isCurrent: false,
    isSpecial: true,
  },
  {
    id: 2,
    Icon: BookOpen,
    year: '2021 – 2023',
    title: 'Pre-University Education',
    org: 'Vivekananda Pre-University College',
    location: 'Nehru Nagar, Puttur',
    description:
      'Completed Pre-University education at Vivekananda PUC. Strengthened my science and mathematics foundation and developed a growing interest in Computer Science, logic, and problem solving.',
    tags: ['Science', 'Mathematics', 'Computer Science', 'Pre-University'],
    color: '#7c3aed',
    isCurrent: false,
  },
  {
    id: 3,
    Icon: GraduationCap,
    year: '2023 – Present',
    title: 'B.Tech — Computer Science & Engineering',
    org: 'Vivekananda College of Engineering & Technology (VCET)',
    location: 'Nehru Nagar, Puttur',
    description:
      'Pursuing B.Tech in Computer Science & Engineering. Exploring software development, AI, networking and cloud computing. Actively building technical projects, participating in hackathons, and solving 100+ problems on LeetCode.',
    tags: ['B.Tech', 'CS Engineering', 'VCET', 'AI', 'Cloud', 'Networking'],
    color: '#00d4ff',
    isCurrent: true,
  },
]

function TimelineEvent({ event, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const isRight = index % 2 === 0

  return (
    <div ref={ref} className="relative flex items-center" style={{ minHeight: '160px' }}>
      {/* Center dot */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${event.color}30, ${event.color}10)`,
              border: `2px solid ${event.color}60`,
              boxShadow: `0 0 20px ${event.color}40`,
            }}
          >
            <event.Icon size={18} style={{ color: event.color }} />
          </div>
          {event.isCurrent && (
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ border: `2px solid ${event.color}` }}
              animate={{ scale: [1, 1.9], opacity: [0.7, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
            />
          )}
          {event.isSpecial && (
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ border: `2px solid #fbbf24` }}
              animate={{ scale: [1, 1.7], opacity: [0.5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
            />
          )}
        </motion.div>
      </div>

      {/* Year label */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-7 whitespace-nowrap">
        <span className="font-mono text-xs text-white/30">{event.year}</span>
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isRight ? 60 : -60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        className={`w-5/12 ${isRight ? 'ml-auto pl-8' : 'mr-auto pr-8'}`}
      >
        <motion.div
          className="relative glass-strong rounded-2xl p-6 border border-white/8"
          style={{ background: `linear-gradient(135deg, ${event.color}08, transparent)` }}
          whileHover={{
            borderColor: `${event.color}40`,
            boxShadow: `0 10px 40px ${event.color}18`,
          }}
        >
          {/* Special badge */}
          {event.isSpecial && (
            <span
              className="absolute -top-3 left-4 px-2.5 py-0.5 rounded-full text-xs font-bold"
              style={{ background: 'rgba(251,191,36,0.2)', color: '#fbbf24', border: '1px solid rgba(251,191,36,0.4)' }}
            >
              ⭐ Special
            </span>
          )}

          {/* Arrow connector */}
          <div
            className={`absolute top-6 ${isRight ? 'right-full' : 'left-full'} w-8 h-px opacity-25`}
            style={{ background: event.color }}
          />

          <h3 className="font-space font-bold text-white text-base mb-1">{event.title}</h3>
          <p className="text-xs font-mono mb-0.5" style={{ color: event.color }}>@ {event.org}</p>
          <p className="text-xs text-white/25 mb-3 font-mono">{event.location}</p>
          <p className="text-xs text-white/50 leading-relaxed mb-4">{event.description}</p>

          <div className="flex flex-wrap gap-1.5">
            {event.tags.map(tag => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md text-xs font-mono"
                style={{ background: `${event.color}10`, border: `1px solid ${event.color}25`, color: `${event.color}cc` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function Timeline() {
  const titleRef = useRef(null)
  const isInView = useInView(titleRef, { once: true, margin: '-100px' })
  const lineRef = useRef(null)
  const lineInView = useInView(lineRef, { once: true })

  return (
    <section id="timeline" className="relative py-32 px-6" style={{ zIndex: 1 }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0, 212, 255, 0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono tracking-widest uppercase text-white/30 mb-4"
          >
            My Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-space font-bold text-5xl md:text-6xl text-white mb-4"
          >
            Education &{' '}
            <span className="text-gradient-cyan">Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/40 text-base max-w-lg mx-auto"
          >
            From Vivekananda School in Thenkila to building full-stack products — every step of the journey.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated center line */}
          <div
            ref={lineRef}
            className="absolute left-1/2 -translate-x-1/2 w-px"
            style={{ top: 0, height: '100%' }}
          >
            <motion.div
              className="w-full timeline-line"
              initial={{ scaleY: 0, originY: 0 }}
              animate={lineInView ? { scaleY: 1 } : {}}
              transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ height: '100%' }}
            />
          </div>

          {/* Events */}
          <div className="flex flex-col gap-14 py-8">
            {TIMELINE_EVENTS.map((event, i) => (
              <TimelineEvent key={event.id} event={event} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
