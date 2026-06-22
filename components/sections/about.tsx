import { GlowCard } from '@/components/glow-card'

const focusAreas = [
  'Data Analysis & Business Intelligence',
  'SAP ERP Inventory Control',
  'Quality Management ISO 9001',
  'Production Efficiency & Material Management',
]

export function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">About</p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <div>
            <h2 className="text-4xl font-black tracking-tight">Tentang Saya</h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              saya adalah Lulusan Baru dari Studi Manajemen Bisnis dengan ketertarikan kuat pada analisis data dan visualisasi,
              manajemen bisnis, dan supply chain management. Terbiasa bekerja dengan tim, dan melakukan improvisasi atau 
              evaluasi kerja sesuai dengan observasi lingkungan kerja, teknis operasional produksi, meenggunakan SAP ERP sebagai aggregator,
              rekonsiliasi inventori, berkomitmen untuk terus mengembangkan kemampuan analisis agar menghasilkan insight
              yang bernilai bagi perusahaan.
            </p>
          </div>

          <GlowCard className="p-6">
            <h3 className="text-lg font-bold">Profil Singkat</h3>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-foreground">Lokasi</dt>
                <dd className="mt-1 text-muted-foreground">Citeureup, Kabupaten Bogor</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Email</dt>
                <dd className="mt-1 text-muted-foreground">haalief15@gmail.com</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">WhatsApp</dt>
                <dd className="mt-1 text-muted-foreground">+62 857-1652-3634</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Username</dt>
                <dd className="mt-1 text-muted-foreground">alifhfd_</dd>
              </div>
            </dl>
          </GlowCard>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {focusAreas.map((area) => (
            <GlowCard key={area} className="min-h-[100px] justify-center p-5">
              <p className="text-sm font-semibold text-muted-foreground">Fokus</p>
              <h3 className="mt-2 text-lg font-bold">{area}</h3>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}
