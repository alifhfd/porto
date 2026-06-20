'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { GlowCard } from '@/components/glow-card'

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

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
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
  }, [displayed, isDeleting, titleIndex])

  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6 pt-24 pb-16">
      <div className="mx-auto max-w-6xl w-full grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
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
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Lihat Projects →
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
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

        {/* Right — foto profil */}
        <div className="flex justify-center lg:justify-end">
          <GlowCard borderRadius={999} animated className="p-1.5" >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden">
              <Image
                src="/images/profil.png"
                alt="Alief Hafid Sidiq"
                fill
                className="object-cover"
                priority
              />
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  )
}
