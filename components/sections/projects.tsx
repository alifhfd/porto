import Image from 'next/image'
import { GlowCard } from '@/components/glow-card'

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

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Projects</p>
        <h2 className="mt-4 text-4xl font-black tracking-tight">Studi Kasus & Project</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Kumpulan project analisis data dan business intelligence yang pernah dikerjakan.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <GlowCard key={project.title} className="overflow-hidden">
              <div className="relative h-44 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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
          ))}
        </div>
      </div>
    </section>
  )
}
