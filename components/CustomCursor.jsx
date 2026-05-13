'use client'

import { useEffect } from 'react'

// Renders the two cursor elements and wires up the mouse tracking.
// Mounted once in the root layout via page.jsx.
export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const ring = document.getElementById('cursor-ring')
    let mx = 0, my = 0, rx = 0, ry = 0

    const handleMouseMove = (e) => {
      mx = e.clientX
      my = e.clientY
      cursor.style.transform = `translate(${mx - 7}px, ${my - 7}px)`
    }

    const animateRing = () => {
      rx += (mx - rx - 20) * 0.12
      ry += (my - ry - 20) * 0.12
      ring.style.transform = `translate(${rx}px, ${ry}px)`
      requestAnimationFrame(animateRing)
    }

    document.addEventListener('mousemove', handleMouseMove)
    animateRing()

    // Grow cursor when hovering interactive elements
    const interactiveSelectors = 'a, button, .service-card, .portfolio-item'
    const grow = () => {
      cursor.style.width = '24px'
      cursor.style.height = '24px'
    }
    const shrink = () => {
      cursor.style.width = '14px'
      cursor.style.height = '14px'
    }

    document.querySelectorAll(interactiveSelectors).forEach((el) => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <div id="cursor" />
      <div id="cursor-ring" />
    </>
  )
}
