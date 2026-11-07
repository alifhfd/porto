'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const PROJECTS = [
    {
    slug:     'fmcg-sales-analysis',
    title:    'FMCG Daily Sales Analysis',
    subtitle: 'Mengidentifikasi faktor utama yang mendorong penjualan harian FMCG',
    tags:     ['Python', 'Pandas', 'Seaborn'],
    image:    '/images/projects/fmcg/cover.png',
  },
]

function ProjectCard({
  project,
  isHovered,
  onHover,
  onLeave,
}: {
  project: typeof PROJECTS[0]
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="relative shrink-0 overflow-hidden rounded cursor-pointer block"
      style={{
        width: isHovered ? 400 : 280,
        height: 420,
        transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1)',
        flexShrink: 0,
      }}
    >
      {/* Cover image */}
      <div
        className="absolute inset-0"
        style={{
          transform: isHovered ? 'scale(1.06)' : 'scale(1)',
          transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 280px, 400px"
        />
      </div>

      {/* Dark overlay always */}
      <div
        className="absolute inset-0"
        style={{
          background: isHovered
            ? 'linear-gradient(to top, rgba(17,22,59,1) 0%, rgba(17,22,59,0.5) 50%, rgba(17,22,59,0.15) 100%)'
            : 'linear-gradient(to top, rgba(17,22,59,0.85) 0%, rgba(17,22,59,0.3) 60%, rgba(17,22,59,0.1) 100%)',
          opacity: 0.55,
          transition: 'background 0.4s ease',
        }}
      />

      {/* Left shadow — fade ke gelap dari kiri */}
      <div
        className="absolute inset-y-0 left-0 w-16 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, #ffffff, transparent)',
          opacity: isHovered ? 0 : 0.35,
          transition: 'opacity 0.4s ease',
        }}
      />

      {/* Right shadow — fade ke gelap ke kanan */}
      <div
        className="absolute inset-y-0 right-0 w-16 pointer-events-none"
        style={{
          background: 'linear-gradient(to left, #ffffff, transparent)',
          opacity: isHovered ? 0 : 0.35,
          transition: 'opacity 0.4s ease',
        }}
      />

      {/* Card number */}
      <div className="absolute top-5 right-5 font-mono text-xs text-white/25 tracking-widest">
        {String(PROJECTS.indexOf(project) + 1).padStart(2, '0')}
      </div>

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-primary"
        style={{
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Tech tags — muncul saat hover */}
      <div
        className="absolute top-5 left-5 flex flex-wrap gap-1.5"
        style={{
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translateY(0)' : 'translateY(-6px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
        }}
      >
        {project.tags.map(t => (
          <span
            key={t}
            className="text-xs px-2 py-0.5 rounded font-medium"
            style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', color: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.15)' }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        {/* Label */}
        <p
          className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-2"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(6px)',
            transition: 'opacity 0.25s ease, transform 0.25s ease',
          }}
        >
          Case Study
        </p>

        {/* Title — selalu terlihat */}
        <h3 className="font-black text-white leading-snug" style={{ fontSize: isHovered ? 20 : 17, transition: 'font-size 0.3s ease', textShadow: '0 2px 10px rgba(17,22,59,0.85)' }}>
          {project.title}
        </h3>

        {/* Subtitle */}
        <p
          className="mt-2 text-sm text-white/90 leading-relaxed line-clamp-2"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.3s ease 0.05s, transform 0.3s ease 0.05s',
          }}
        >
          {project.subtitle}
        </p>

        {/* CTA */}
        <div
          className="mt-4"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.3s ease 0.08s, transform 0.3s ease 0.08s',
          }}
        >
          <span className="inline-flex items-center gap-2 text-sm font-bold text-white border border-white/20 rounded px-4 py-2" style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}>
            View Case Study
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M1.5 6.5h10M7 2l4.5 4.5L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}

export function Projects() {
  const ref     = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState<string | null>(null)

  const scroll = (dir: 'left' | 'right') => {
    ref.current?.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' })
  }

  return (
    <section id="projects" className="py-20">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4">Projects</p>
        <div className="flex items-end justify-between">
          <h2 className="text-4xl font-black tracking-tight text-foreground">Studi Kasus & Project</h2>
          <div className="hidden sm:flex gap-2">
            <button onClick={() => scroll('left')}  className="p-2 border border-border rounded hover:border-foreground transition-colors text-foreground"><ChevronLeft  size={16} /></button>
            <button onClick={() => scroll('right')} className="p-2 border border-border rounded hover:border-foreground transition-colors text-foreground"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>

      {/* Cards track */}
      <div
        ref={ref}
        className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ paddingLeft: 'max(1.5rem, calc((100vw - 72rem) / 2 + 1.5rem))', paddingRight: '1.5rem' }}
      >
        {PROJECTS.map(p => (
          <ProjectCard
            key={p.slug}
            project={p}
            isHovered={hovered === p.slug}
            onHover={() => setHovered(p.slug)}
            onLeave={() => setHovered(null)}
          />
        ))}
        <div className="shrink-0 w-6" />
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-6">
        {PROJECTS.map(p => (
          <div
            key={p.slug}
            className="rounded-full transition-all duration-300"
            style={{
              width:      hovered === p.slug ? 20 : 4,
              height:     4,
              background: hovered === p.slug ? 'var(--primary)' : 'var(--border)',
            }}
          />
        ))}
      </div>
    </section>
  )
}
