const EXPERIENCES = [
  {
    title:   'Weigher Product — Filling Ampoule & Vial',
    company: 'Darya Varia Laboratoria Tbk',
    period:  '2023 – 2025',
    type:    'Full-time',
    points: [
      'Mengelola data bahan baku melalui SAP ERP dan melakukan rekonsiliasi stok fisik harian untuk menjaga akurasi inventori.',
      'Memantau performa mesin dan proses produksi dengan pendekatan berbasis data untuk membantu mengurangi downtime.',
      'Mengontrol penggunaan material sesuai Bill of Materials dan standar CPOB agar waste produksi tetap terkendali.',
      'Berkolaborasi dengan QC untuk menjaga kepatuhan sterilitas area dan kelengkapan batch record.',
    ],
  },
]

const EDUCATION = [
  { school: 'Institut Teknologi & Bisnis Dewantara', degree: 'Sarjana Manajemen Bisnis',                   period: '2021 – 2025' },
  { school: 'SMK Bina Vokasi Nusantara',             degree: 'Mechanical Engineering — Lulusan Terbaik',  period: '2019 – 2021' },
]

export function Experience() {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4">Experience</p>
        <h2 className="text-4xl font-black tracking-tight text-foreground mb-12">Pengalaman Profesional</h2>

        <div className="space-y-4">
          {EXPERIENCES.map(exp => (
            <div key={exp.title} className="border border-border rounded p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                <div>
                  <h3 className="text-lg font-black text-foreground">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs border border-border rounded px-2 py-0.5 text-muted-foreground">{exp.type}</span>
                  <span className="text-sm font-bold text-primary">{exp.period}</span>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.points.map(pt => (
                  <li key={pt} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4">Education</p>
          <h2 className="text-4xl font-black tracking-tight text-foreground mb-8">Pendidikan</h2>
          <div className="space-y-3">
            {EDUCATION.map((ed, i) => (
              <div key={ed.school} className="border border-border rounded p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex items-start gap-4">
                  <span className="text-xl font-black text-primary/30 leading-none mt-0.5">{String(i+1).padStart(2,'0')}</span>
                  <div>
                    <h3 className="font-black text-foreground">{ed.school}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{ed.degree}</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-primary shrink-0">{ed.period}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
