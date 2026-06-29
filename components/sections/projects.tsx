'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { GlowCard } from '@/components/glow-card'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  {
    title: 'Power BI Performance Dashboard',
    description:
      'Dashboard interaktif untuk memantau KPI produksi, efisiensi mesin, dan tren downtime secara real-time. Menggabungkan data dari SAP ERP dan spreadsheet operasional.',
    tags: ['Power BI', 'DAX', 'Data Modeling'],
    image: '/images/project-sales.png',
  },
  {
    title: 'SAP ERP Inventory Monitoring',
    description:
      'Sistem pemantauan stok bahan baku berbasis SAP ERP dengan rekonsiliasi harian untuk menjaga akurasi inventori dan meminimalisir selisih stok fisik vs sistem.',
    tags: ['SAP ERP', 'Inventory', 'Reconciliation'],
    image: '/images/project-funnel.png',
  },
  {
    title: 'Customer Churn Analysis',
    description:
      'Analisis pola churn pelanggan menggunakan Python dan SQL untuk mengidentifikasi faktor risiko dan memberikan rekomendasi retensi berbasis data.',
    tags: ['Python', 'SQL', 'Analytics'],
    image: '/images/project-churn.png',
  },
  {
    title: 'Customer Segmentation',
    description:
      'Segmentasi pelanggan menggunakan metode clustering untuk membantu tim bisnis memahami profil pelanggan dan menyusun strategi yang lebih tepat sasaran.',
    tags: ['Python', 'Clustering', 'Power BI'],
    image: '/images/project-segment.png',
  },
]

// Card width = (max-w-5xl - 2 * padding - 2 * gap) / 3
// max-w-5xl = 64rem = 1024px, px-6 = 24px each side, gap-5 = 20px * 2 gaps
// (1024 - 48 - 40) / 3 ≈ 312px
const CARD_W = 'w-[300px] lg:w-[calc((64rem-3rem-2.5rem)/3)]'

export function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.querySelector('div')?.clientWidth ?? 300
    el.scrollBy({ left: dir === 'right' ? cardWidth + 20 : -(cardWidth + 20), behavior: 'smooth' })
  }

  return (
    <section id="projects" className="relative py-28">
      {/* Header — constrained */}
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Projects</p>
        <div className="mt-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl font-black tracking-tight">Studi Kasus & Project</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Kumpulan project analisis data dan business intelligence yang pernah dikerjakan.
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

      {/* Scroll track — starts flush with header left edge */}
      <div
        ref={scrollRef}
        className="mt-10 flex gap-5 overflow-x-auto scroll-smooth pb-4
          snap-x snap-mandatory
          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
          pl-6 lg:pl-[max(1.5rem,calc((100vw-64rem)/2+1.5rem))]
          pr-6"
      >
        {projects.map((project) => (
          <div key={project.title} className={`snap-start shrink-0 ${CARD_W} min-w-[260px]`}>
            <GlowCard className="h-full overflow-hidden flex flex-col">
              <div className="relative h-44 w-full shrink-0">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-lg leading-snug">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-background/60 px-3 py-0.5 text-xs font-semibold text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </GlowCard>
          </div>
        ))}
        {/* trailing space */}
        <div className="shrink-0 w-6" />
      </div>
    </section>
  )
}
