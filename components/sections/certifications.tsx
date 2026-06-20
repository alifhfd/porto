import { GlowCard } from '@/components/glow-card'

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

export function Certifications() {
  return (
    <section id="certifications" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Certifications & Education</p>
        <h2 className="mt-4 text-4xl font-black tracking-tight">Sertifikasi & Pendidikan</h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <GlowCard key={cert.name} className="p-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold leading-snug">{cert.name}</h3>
                <span className="shrink-0 text-xs font-semibold text-primary">{cert.year}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground font-semibold">{cert.issuer}</p>
              <p className="mt-2 text-sm text-muted-foreground">{cert.desc}</p>
            </GlowCard>
          ))}
        </div>

        <div className="mt-10">
          <GlowCard className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-5">Education</p>
            <div className="space-y-5">
              {education.map((item) => (
                <div key={item.school} className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-bold">{item.school}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.degree}</p>
                  </div>
                  <span className="text-sm font-semibold text-primary shrink-0">{item.period}</span>
                </div>
              ))}
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  )
}
