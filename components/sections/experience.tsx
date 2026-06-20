import { GlowCard } from '@/components/glow-card'

const experiences = [
  {
    title: 'Weigher Product — Filling Ampoule & Vial',
    company: 'Darya Varia Laboratoria Tbk',
    period: '2023 – 2025',
    type: 'Full-time',
    points: [
      'Mengelola data bahan baku melalui SAP ERP dan melakukan rekonsiliasi stok fisik harian untuk menjaga akurasi inventori.',
      'Memantau performa mesin dan proses produksi dengan pendekatan berbasis data untuk membantu mengurangi downtime.',
      'Mengontrol penggunaan material sesuai Bill of Materials dan standar CPOB agar waste produksi tetap terkendali.',
      'Berkolaborasi dengan QC untuk menjaga kepatuhan sterilitas area dan kelengkapan batch record.',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Experience</p>
        <h2 className="mt-4 text-4xl font-black tracking-tight">Pengalaman Profesional</h2>

        <div className="mt-10 space-y-6">
          {experiences.map((exp) => (
            <GlowCard key={exp.title} className="p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-muted-foreground">{exp.company}</p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1">
                  <span className="text-sm font-semibold text-primary">{exp.period}</span>
                  <span className="text-xs rounded-full border border-border px-2 py-0.5 text-muted-foreground">{exp.type}</span>
                </div>
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {exp.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}
