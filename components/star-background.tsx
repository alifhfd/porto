"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

const STARS_COUNT = 350

type Star = {
  x: number
  y: number
  size: number
  speedY: number
  opacity: number
  opacityDir: number
  opacitySpeed: number
}

export const StarBackground = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const starsRef = useRef<Star[]>([])
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    let animFrameId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    starsRef.current = Array.from({ length: STARS_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() < 0.8 ? Math.random() * 0.8 + 0.1 : Math.random() * 1.5 + 0.8,
      speedY: Math.random() * 0.15 + 0.05,
      opacity: Math.random() * 0.5 + 0.1,
      opacityDir: Math.random() > 0.5 ? 1 : -1,
      opacitySpeed: Math.random() * 0.008 + 0.002,
    }))

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", onMouseMove)

    const draw = () => {
      const { width, height } = canvas
      const mouse = mouseRef.current
      const isDark = resolvedTheme === "dark"

      const gradient = ctx.createRadialGradient(width / 2, height, 0, width / 2, height, height)
      gradient.addColorStop(0, isDark ? "#262626" : "#d4d4d4")
      gradient.addColorStop(1, isDark ? "#000000" : "#ffffff")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      starsRef.current.forEach((star) => {
        star.y -= star.speedY
        if (star.y < 0) {
          star.y = height
          star.x = Math.random() * width
        }

        star.opacity += star.opacityDir * star.opacitySpeed
        if (star.opacity >= 1) {
          star.opacity = 1
          star.opacityDir = -1
        }
        if (star.opacity <= 0.1) {
          star.opacity = 0.1
          star.opacityDir = 1
        }

        const dx = star.x - mouse.x
        const dy = star.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const repelRadius = 80
        if (dist < repelRadius) {
          const force = (repelRadius - dist) / repelRadius
          star.x += (dx / dist) * force * 2
          star.y += (dy / dist) * force * 2
        }

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = isDark ? `rgba(255, 255, 255, ${star.opacity})` : `rgba(0, 0, 0, ${star.opacity})`
        ctx.shadowBlur = star.size * 3
        ctx.shadowColor = isDark ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.4)"
        ctx.fill()
      })

      animFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animFrameId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [resolvedTheme])

  return <canvas ref={canvasRef} className={`fixed inset-0 ${className}`} style={{ zIndex: 0 }} />
}
