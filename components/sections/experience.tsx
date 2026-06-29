import { GlowCard } from '@/components/glow-card'

const experiences = [
  {
    title: 'Weigher Product — Filling Ampoule & Vial',
    company: 'Darya Varia Laboratoria Tbk',
    period: '2023 – 2025',
    type: 'Outsourching Contract',
    points: [
      'Mengelola data bahan baku melalui SAP ERP dan melakukan rekonsiliasi stok fisik harian untuk menjaga akurasi inventori.',
      'Memantau performa mesin dan proses produksi dengan pendekatan berbasis data untuk membantu mengurangi downtime.',
      'Mengontrol penggunaan material sesuai Bill of Materials dan standar CPOB agar waste produksi tetap terkendali.',
      'Berkolaborasi dengan QC untuk menjaga kepatuhan sterilitas area dan kelengkapan batch record.',
    ],
  },
]

const education = [
  {
    school: 'Institut Teknologi & Bisnis Dewantara',
    degree: 'Sarjana Manajemen Bisnis',
    period: '2021 – 2025',
  },
  {
    school: 'SMK Bina Vokasi Nusantara',
    degree: 'Mechanical Engineering — Lulusan Terbaik',
    period: '2019 – 2021',
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

        {/* Education — dipindah dari Certifications */}
        <div className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Education</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight">Pendidikan</h2>
          <div className="mt-8 space-y-4">
            {education.map((item, i) => (
              <GlowCard key={item.school} className="p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-4 items-start">
                    <span className="text-2xl font-black text-primary/30 leading-none mt-1">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-bold text-lg">{item.school}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.degree}</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-primary shrink-0">{item.period}</span>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
