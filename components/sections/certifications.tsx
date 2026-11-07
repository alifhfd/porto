'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const CERTS = [
  { name: 'Quality Management', issuer: 'BSI International', year: '2024', desc: 'Sistem manajemen mutu untuk memastikan konsistensi kualitas produk dan proses.' },
  { name: 'Data Analytics Foundations', issuer: 'Coursera : Deeplearning.ai', year: '2024', desc: 'Dasar-dasar analisis data, statistik deskriptif, dan visualisasi data.' },
  { name: 'Accelerate Job with AI', issuer: 'Coursera : Google', year: '2024', desc: 'Penerapan AI tools untuk meningkatkan produktivitas dan kualitas kerja.' },
  { name: 'Supply Chain Management & Analytics', issuer: 'Coursera : Unilever', year: '2025', desc: 'Dasar-dasar untuk manajemen rantai pasok dan menganalisis datanya.' },
]

export function Certifications() {
  const ref = useRef<HTMLDivElement>(null)
  const scroll = (dir: 'left' | 'right') => {
    ref.current?.scrollBy({ left: dir === 'right' ? 300 : -300, behavior: 'smooth' })
  }

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4">Certifications</p>
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-4xl font-black tracking-tight text-foreground">Sertifikasi</h2>
          <div className="hidden sm:flex gap-2">
            <button onClick={() => scroll('left')}  className="p-2 border border-border rounded hover:border-foreground transition-colors"><ChevronLeft  size={16} /></button>
            <button onClick={() => scroll('right')} className="p-2 border border-border rounded hover:border-foreground transition-colors"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>

      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ paddingLeft: 'max(1.5rem, calc((100vw - 72rem) / 2 + 1.5rem))', paddingRight: '1.5rem' }}
      >
            {CERTS.map(c => (
      <div key={c.name} className="shrink-0 w-[280px] border border-border rounded p-6 flex flex-col">
        <span className="text-xs font-semibold px-3 py-1 border border-border rounded text-muted-foreground">
          {c.year}
        </span>
        <h3 className="mt-4 font-black text-foreground leading-snug">{c.name}</h3>
        <p className="mt-1 text-sm font-semibold text-primary">{c.issuer}</p>
        <p className="mt-3 text-sm text-muted-foreground flex-1">{c.desc}</p>
      </div>
    ))}
        <div className="shrink-0 w-6" />
      </div>
    </section>
  )
}
