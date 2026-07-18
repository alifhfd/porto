const FOCUS = [
  'Data Analysis & Business Intelligence',
  'SAP ERP Inventory Control',
  'Quality Management ISO 9001',
  'Production Efficiency & Material Management',
]

export function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4">About</p>

        <div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:items-start">
          <div>
            <h2 className="text-4xl font-black tracking-tight text-foreground mb-6">
              Tentang Alief Hafid Sidiq
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground max-w-2xl">
              Lulusan Manajemen Bisnis dengan ketertarikan kuat pada analisis data, visualisasi,
              business intelligence, dan optimasi proses bisnis. Terbiasa bekerja dengan data
              operasional, SAP ERP, rekonsiliasi inventori, serta standar mutu produksi, dengan
              komitmen untuk terus mengembangkan kemampuan analisis agar menghasilkan insight
              yang bernilai bagi perusahaan.
            </p>

            {/* Focus areas */}
            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              {FOCUS.map(f => (
                <div key={f} className="border border-border rounded p-4">
                  <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-1">Fokus</p>
                  <p className="text-sm font-bold text-foreground">{f}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Profile card */}
          <div className="border border-border rounded p-6">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-5">Profil Singkat</p>
            <dl className="space-y-4 text-sm">
              {[
                { label: 'Lokasi',    value: 'Citeureup, Kab. Bogor' },
                { label: 'Email',     value: 'haalief15@gmail.com'   },
                { label: 'WhatsApp',  value: '+62 857-1652-3634'     },
                { label: 'Handle',    value: '@alifhfd / Haali'      },
              ].map(item => (
                <div key={item.label}>
                  <dt className="font-bold text-foreground">{item.label}</dt>
                  <dd className="text-muted-foreground mt-0.5">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
