import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const posRef = useRef({ x: 0, y: 0 })
  const ringPosRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current

    const onMouseMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY }
    }

    const onMouseEnterLink = () => {
      ring.classList.add('hovering')
      dot.style.transform = 'translate(-50%, -50%) scale(2)'
    }

    const onMouseLeaveLink = () => {
      ring.classList.remove('hovering')
      dot.style.transform = 'translate(-50%, -50%) scale(1)'
    }

    const updateCursor = () => {
      const { x, y } = posRef.current
      dot.style.left = `${x}px`
      dot.style.top = `${y}px`

      // Smooth ring trailing
      ringPosRef.current.x += (x - ringPosRef.current.x) * 0.12
      ringPosRef.current.y += (y - ringPosRef.current.y) * 0.12
      ring.style.left = `${ringPosRef.current.x}px`
      ring.style.top = `${ringPosRef.current.y}px`

      rafRef.current = requestAnimationFrame(updateCursor)
    }

    window.addEventListener('mousemove', onMouseMove)

    const addHoverListeners = () => {
      const targets = document.querySelectorAll('a, button, [data-cursor-hover]')
      targets.forEach(el => {
        el.addEventListener('mouseenter', onMouseEnterLink)
        el.addEventListener('mouseleave', onMouseLeaveLink)
      })
    }

    addHoverListeners()
    const interval = setInterval(addHoverListeners, 2000)
    updateCursor()

    return () => {
      cancelAnimationFrame(rafRef.current)
      clearInterval(interval)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  )
}
