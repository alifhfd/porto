'use client'

import { useRef } from 'react'
import { GlowCard } from '@/components/glow-card'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const certifications = [
  {
    name: 'ISO 9001:2015 Quality Management',
    issuer: 'BSI / Internal Training',
    year: '2024',
    desc: 'Sistem manajemen mutu untuk memastikan konsistensi kualitas produk dan proses.',
  },
  {
    name: 'Data Analytics Foundations',
    issuer: 'Online Platform',
    year: '2024',
    desc: 'Dasar-dasar analisis data, statistik deskriptif, dan visualisasi data.',
  },
  {
    name: 'Accelerate Job with AI',
    issuer: 'Online Platform',
    year: '2024',
    desc: 'Penerapan AI tools untuk meningkatkan produktivitas dan kualitas kerja.',
  },
  {
    name: 'Siswa Magang Terbaik',
    issuer: 'SMK Bina Vokasi Nusantara',
    year: '2021',
    desc: 'Penghargaan sebagai siswa magang terbaik di bidang Mechanical Engineering.',
  },
]

const CARD_W = 'w-[300px] lg:w-[calc((64rem-3rem-2.5rem)/3)]'

export function Certifications() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.querySelector('div')?.clientWidth ?? 300
    el.scrollBy({ left: dir === 'right' ? cardWidth + 20 : -(cardWidth + 20), behavior: 'smooth' })
  }

  return (
    <section id="certifications" className="relative py-28">
      {/* Header — constrained */}
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Certifications</p>
        <div className="mt-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl font-black tracking-tight">Sertifikasi</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Sertifikasi dan penghargaan yang mendukung kompetensi analitik dan operasional.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 shrink-0 pb-1">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full border border-border bg-background/80 hover:bg-accent transition-colors"
              aria-label="Scroll kiri"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full border border-border bg-background/80 hover:bg-accent transition-colors"
              aria-label="Scroll kanan"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll track */}
      <div
        ref={scrollRef}
        className="mt-10 flex gap-5 overflow-x-auto scroll-smooth pb-4
          snap-x snap-mandatory
          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
          pl-6 lg:pl-[max(1.5rem,calc((100vw-64rem)/2+1.5rem))]
          pr-6"
      >
        {certifications.map((cert) => (
          <div key={cert.name} className={`snap-start shrink-0 ${CARD_W} min-w-[260px]`}>
            <GlowCard className="h-full p-6 flex flex-col">
              <span className="text-4xl font-black text-primary/20 leading-none">{cert.year}</span>
              <h3 className="mt-4 font-bold text-lg leading-snug">{cert.name}</h3>
              <p className="mt-1 text-xs font-semibold text-primary">{cert.issuer}</p>
              <p className="mt-3 text-sm text-muted-foreground flex-1">{cert.desc}</p>
            </GlowCard>
          </div>
        ))}
        <div className="shrink-0 w-6" />
      </div>
    </section>
  )
}
