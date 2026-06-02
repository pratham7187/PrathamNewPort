import { useEffect, useRef, useState } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef(null)
  const animFrameRef = useRef(null)
  const particlesRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMouseMove)

    // Create particles
    const PARTICLE_COUNT = 120
    const particles = []

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.1,
        color: Math.random() > 0.6
          ? `rgba(0, 212, 255, `
          : Math.random() > 0.5
          ? `rgba(124, 58, 237, `
          : `rgba(236, 72, 153, `,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulseOffset: Math.random() * Math.PI * 2,
      })
    }
    particlesRef.current = particles

    let tick = 0

    const draw = () => {
      tick++
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const mouse = mouseRef.current
      const pts = particlesRef.current

      for (let i = 0; i < pts.length; i++) {
        const p = pts[i]

        // Mouse repulsion
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 120) {
          const force = (120 - dist) / 120
          p.vx -= (dx / dist) * force * 0.08
          p.vy -= (dy / dist) * force * 0.08
        }

        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.99
        p.vy *= 0.99

        // Bounce
        if (p.x < 0) { p.x = 0; p.vx *= -1 }
        if (p.x > canvas.width) { p.x = canvas.width; p.vx *= -1 }
        if (p.y < 0) { p.y = 0; p.vy *= -1 }
        if (p.y > canvas.height) { p.y = canvas.height; p.vy *= -1 }

        const pulse = Math.sin(tick * p.pulseSpeed + p.pulseOffset) * 0.3 + 0.7
        const alpha = p.opacity * pulse

        // Draw connections
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j]
          const qx = p.x - q.x
          const qy = p.y - q.y
          const d = Math.sqrt(qx * qx + qy * qy)
          if (d < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.06 * (1 - d / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }

        // Draw particle
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2)
        gradient.addColorStop(0, `${p.color}${alpha})`)
        gradient.addColorStop(1, `${p.color}0)`)
        ctx.fillStyle = gradient
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2)
        ctx.fill()
      }

      animFrameRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
