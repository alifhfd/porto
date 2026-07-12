'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import Image from 'next/image'
import { IntroAnimation } from '@/components/intro-animation'

const TITLES = [
  'Data Analyst',
  'Business Intelligence',
  'SAP ERP Specialist',
  'Process Optimizer',
]

const stats = [
  { value: '2+', label: 'Tahun Pengalaman' },
  { value: '4+', label: 'Sertifikasi' },
  { value: '3+', label: 'Project Selesai' },
]

const tools = ['Power BI', 'SQL', 'Python', 'SAP ERP', 'Excel', 'ISO 9001']

const toolIcons = [
  { label: 'Power BI', short: 'PB' },
  { label: 'SQL',      short: 'SQ' },
  { label: 'Python',   short: 'Py' },
  { label: 'SAP ERP',  short: 'SAP' },
]

// ─── Interactive Profile Photo ────────────────────────────────────────────────
function ProfilePhoto() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [parallax, setParallax] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const rafRef = useRef<number | null>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      setTilt({ x: dy * 14, y: -dx * 14 })
      setParallax({ x: dx * 10, y: dy * 10 })
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHovered(false)
    setTilt({ x: 0, y: 0 })
    setParallax({ x: 0, y: 0 })
  }, [])

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative flex justify-center items-center"
      style={{ perspective: '800px' }}
    >
      {/* Outer glow */}
      <div
        className="absolute rounded-full"
        style={{
          inset: '-12px',
          background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
          opacity: hovered ? 0.35 : 0.12,
          filter: 'blur(20px)',
          transform: `translate(${parallax.x * 0.5}px, ${parallax.y * 0.5}px)`,
          transition: hovered ? 'opacity 0.3s ease' : 'opacity 0.6s ease, transform 0.6s ease',
        }}
      />

      {/* 3D tilt card */}
      <div
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: hovered ? 'transform 0.1s ease-out' : 'transform 0.6s ease',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Photo — slim portrait */}
        <div
          className="relative overflow-hidden rounded-2xl"
          style={{
            width: '230px',
            height: '340px',
            boxShadow: hovered
              ? '0 0 0 2px var(--primary), 0 24px 60px rgba(0,0,0,0.5), 0 0 40px color-mix(in oklch, var(--primary) 40%, transparent)'
              : '0 0 0 1px oklch(1 0 0 / 10%), 0 12px 40px rgba(0,0,0,0.3)',
            transition: 'box-shadow 0.4s ease',
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              transform: hovered
                ? `scale(1.08) translate(${parallax.x * 0.4}px, ${parallax.y * 0.4}px)`
                : 'scale(1) translate(0px, 0px)',
              transition: hovered ? 'transform 0.15s ease-out' : 'transform 0.6s ease',
            }}
          >
            <Image
              src="/images/profil.png"
              alt="Alief Hafid Sidiq"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Shine */}
          <div
            className="absolute inset-0 pointer-events-none rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)',
              opacity: hovered ? 1 : 0,
              transition: 'opacity 0.4s ease',
            }}
          />

          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)' }}
          />

          {/* Name badge */}
          <div
            className="absolute bottom-3 left-3 right-3 pointer-events-none"
            style={{
              transform: `translateZ(20px) translate(${parallax.x * 0.2}px, ${parallax.y * 0.2}px)`,
              transition: hovered ? 'transform 0.15s ease-out' : 'transform 0.6s ease',
            }}
          >
            <div className="backdrop-blur-md bg-black/40 border border-white/10 rounded-lg px-3 py-2">
              <p className="text-white font-bold text-xs leading-none">Alief Hafid Sidiq</p>
              <p className="text-primary text-[10px] mt-1 font-semibold">Open to Work ✦</p>
            </div>
          </div>
        </div>

        {/* Floating tool badges */}
        <div
          className="flex items-center justify-center gap-2 mt-4"
          style={{
            transform: `translateZ(30px) translate(${parallax.x * 0.3}px, ${parallax.y * 0.15}px)`,
            transition: hovered ? 'transform 0.15s ease-out' : 'transform 0.6s ease',
          }}
        >
          {toolIcons.map((tool, i) => (
            <div
              key={tool.label}
              title={tool.label}
              className="flex items-center justify-center rounded-full backdrop-blur-md border shadow-lg"
              style={{
                width: '34px',
                height: '34px',
                background: 'color-mix(in oklch, var(--card) 85%, transparent)',
                borderColor: 'var(--border)',
                animation: `floatBadge 3s ease-in-out ${i * 0.2}s infinite`,
              }}
            >
              <span className="text-[11px] font-bold text-primary">{tool.short}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative dots */}
      <div
        className="absolute -top-4 -right-4 w-3 h-3 rounded-full bg-primary/60"
        style={{
          transform: `translate(${parallax.x * -0.8}px, ${parallax.y * -0.8}px)`,
          transition: hovered ? 'transform 0.15s ease-out' : 'transform 0.6s ease',
        }}
      />
      <div
        className="absolute -bottom-3 -left-5 w-2 h-2 rounded-full bg-primary/40"
        style={{
          transform: `translate(${parallax.x * -0.6}px, ${parallax.y * -0.6}px)`,
          transition: hovered ? 'transform 0.15s ease-out' : 'transform 0.6s ease',
        }}
      />

      <style>{`
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export function HeroClient() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [showIntro, setShowIntro] = useState(false)
  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    // Cek apakah intro sudah pernah ditampilkan di session ini
    const alreadySeen = sessionStorage.getItem('intro_seen')
    if (alreadySeen) {
      // Langsung tampilkan hero tanpa intro
      setShowIntro(false)
      setHeroVisible(true)
    } else {
      setShowIntro(true)
    }
  }, [])

  const handleIntroDone = useCallback(() => {
    // Tandai bahwa intro sudah ditampilkan di session ini
    sessionStorage.setItem('intro_seen', '1')
    setShowIntro(false)
    setTimeout(() => setHeroVisible(true), 80)
  }, [])

  // Typewriter
  useEffect(() => {
    if (!heroVisible) return
    const current = TITLES[titleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45)
    } else {
      setIsDeleting(false)
      setTitleIndex((i) => (i + 1) % TITLES.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, titleIndex, heroVisible])

  return (
    <>
      {showIntro && <IntroAnimation onDone={handleIntroDone} />}

      <section
        id="hero"
        className="relative min-h-screen flex items-center px-6 pt-24 pb-16"
        style={{
          transition: 'opacity 700ms ease, transform 700ms cubic-bezier(0.16,1,0.3,1)',
          opacity: heroVisible ? 1 : 0,
          transform: heroVisible ? 'translateY(0)' : 'translateY(16px)',
        }}
      >
        <div className="mx-auto max-w-6xl w-full grid gap-16 lg:grid-cols-[1fr_auto] lg:items-center">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              👋 Halo, saya
            </p>
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-foreground leading-tight">
              Alief Hafid
              <br />
              <span className="text-primary">Sidiq</span>
            </h1>
            <div className="mt-4 h-10 flex items-center">
              <span className="text-2xl font-bold text-muted-foreground">
                {displayed}
                <span className="animate-pulse text-primary">|</span>
              </span>
            </div>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Lulusan Manajemen Bisnis dengan ketertarikan kuat pada analisis data,
              visualisasi, dan optimasi proses bisnis. Terbiasa dengan SAP ERP,
              rekonsiliasi inventori, dan standar mutu produksi.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-border bg-background/60 backdrop-blur px-3 py-1 text-xs font-semibold text-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Lihat Projects →
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex rounded-xl border border-border bg-background/60 backdrop-blur px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-accent"
              >
                Hubungi Saya
              </a>
            </div>

            <div className="mt-12 flex gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-black text-primary">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Interactive Photo */}
          <div className="flex justify-center lg:justify-end">
            <ProfilePhoto />
          </div>
        </div>
      </section>
    </>
  )
}